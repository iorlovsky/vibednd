import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  output,
  TemplateRef,
  viewChild,
} from '@angular/core'
import { FloatLabel } from 'primeng/floatlabel'
import { InputText } from 'primeng/inputtext'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { debounceTime, distinctUntilChanged, share, switchMap, takeUntil } from 'rxjs'
import { outputToObservable, takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Button } from 'primeng/button'
import { DialogService } from 'primeng/dynamicdialog'
import * as _ from 'lodash-es'
import { CharacterClass } from '@core/models'
import { InputGroup } from 'primeng/inputgroup'
import { InputGroupAddon } from 'primeng/inputgroupaddon'
import { ButtonDesignTokens } from '@primeng/themes/aura/button'
import { SpellListAdditionalFiltersFormValue, SpellListFilters, SpellListFiltersModel } from '../../models'
import { SpellListFiltersDialogComponent } from '../spell-list-filters-dialog/spell-list-filters-dialog.component'

@Component({
  selector: 'dnd-spell-list-controls',
  imports: [
    FloatLabel,
    InputText,
    ReactiveFormsModule,
    Button,
    InputGroup,
    InputGroupAddon,
  ],
  templateUrl: './spell-list-controls.component.html',
  styleUrl: './spell-list-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellListControlsComponent {
  private readonly fb = inject(FormBuilder)
  private readonly dialogService = inject(DialogService)
  private readonly destroyRef = inject(DestroyRef)

  readonly filtersDialogFooter = viewChild<TemplateRef<unknown>>('filtersDialogFooter')

  readonly filterValues = input.required<Partial<SpellListFiltersModel>>()

  readonly updateFilterValues = output<Partial<SpellListFiltersModel>>()
  readonly resetFilters = output()

  readonly filtersForm = this.fb.nonNullable.group({
    search: this.fb.nonNullable.control(''),
    additionalFilters: this.fb.nonNullable.group({
      level: this.fb.control<number | null>(null),
      class: this.fb.control<CharacterClass | null>(null),
    }),
  })

  readonly clearSearchBtnTheme: ButtonDesignTokens = {
    root: {
      focusRing: {
        offset: '-2px',
      },
    },
  }

  constructor() {
    effect(() => {
      this.filtersForm.setValue({
        search: this.filterValues()[SpellListFilters.SEARCH] ?? '',
        additionalFilters: {
          level: this.filterValues()[SpellListFilters.LEVEL] ?? null,
          class: this.filterValues()[SpellListFilters.CLASS] ?? null,
        },
      })
    })

    this.listenToSearchControl()
    this.listenToAdditionalFiltersForm()
  }

  clearSearch(): void {
    this.filtersForm.controls.search.reset()
  }

  openFiltersDialog(): void {
    const dialogRef = this.dialogService.open(SpellListFiltersDialogComponent, {
      header: 'Filters',
      modal: true,
      closable: true,
      dismissableMask: true,
      style: { maxWidth: '90%' },
      inputValues: {
        form: this.filtersForm.controls.additionalFilters,
      },
      templates: {
        footer: this.filtersDialogFooter()?.elementRef as any,
      },
    })

    const dialogComponentInstance = dialogRef.onChildComponentLoaded.pipe(
      takeUntil(dialogRef.onClose),
      takeUntilDestroyed(this.destroyRef),
      share(),
    )

    dialogComponentInstance.pipe(
      switchMap(instance => outputToObservable(instance.clearFilters)),
    ).subscribe(() => this.resetFilters.emit())
  }

  private listenToSearchControl(): void {
    this.filtersForm.controls.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed(),
    ).subscribe(v => this.updateFilterValues.emit({
      ...this.filterValues(),
      [SpellListFilters.SEARCH]: v,
    }))
  }

  private listenToAdditionalFiltersForm(): void {
    this.filtersForm.controls.additionalFilters.valueChanges.pipe(
      distinctUntilChanged(_.isEqual),
      takeUntilDestroyed(),
    ).subscribe((v: SpellListAdditionalFiltersFormValue) => this.updateFilterValues.emit({
      ...this.filterValues(),
      [SpellListFilters.LEVEL]: v.level,
      [SpellListFilters.CLASS]: v.class,
    }))
  }
}
