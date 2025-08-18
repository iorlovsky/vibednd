import { ChangeDetectionStrategy, Component, effect, inject, input, output } from '@angular/core'
import { FloatLabel } from 'primeng/floatlabel'
import { InputText } from 'primeng/inputtext'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { debounceTime, distinctUntilChanged } from 'rxjs'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { Button } from 'primeng/button'
import { SpellListFilters, SpellListFiltersModel } from '../../models'

@Component({
  selector: 'dnd-spell-list-controls',
  imports: [
    FloatLabel,
    InputText,
    ReactiveFormsModule,
    Button,
  ],
  templateUrl: './spell-list-controls.component.html',
  styleUrl: './spell-list-controls.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellListControlsComponent {
  private readonly fb = inject(FormBuilder)

  readonly filterValues = input.required<Partial<SpellListFiltersModel>>()

  readonly updateFilterValues = output<Partial<SpellListFiltersModel>>()

  readonly searchForm = this.fb.nonNullable.group({
    search: this.fb.nonNullable.control(''),
  })

  constructor() {
    effect(() => this.searchForm.controls.search.setValue(this.filterValues()[SpellListFilters.SEARCH] ?? ''))

    this.searchForm.controls.search.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntilDestroyed(),
    ).subscribe(v => this.updateFilterValues.emit({
      ...this.filterValues(),
      [SpellListFilters.SEARCH]: v,
    }))
  }

  clearSearch(): void {
    this.searchForm.reset()
  }
}
