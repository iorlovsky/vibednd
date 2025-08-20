import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { DndLocales } from '@core/models'
import { Spell, SpellListFiltersModel } from '../../models'
import { LanguageSwitchComponent, SpellListComponent, SpellListControlsComponent } from '../../components'
import { SpellListActions, SpellListSelectors } from '../../store'

@Component({
  selector: 'dnd-spell-list-page',
  imports: [
    SpellListComponent,
    LanguageSwitchComponent,
    SpellListControlsComponent,
  ],
  templateUrl: './spell-list-page.component.html',
  styleUrl: './spell-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellListPageComponent implements OnInit, OnDestroy {
  private readonly store$ = inject(Store)

  readonly spellList = this.store$.selectSignal(SpellListSelectors.selectSpellList)
  readonly selectedSpells = this.store$.selectSignal(SpellListSelectors.selectSelectedSpells)
  readonly filterValues = this.store$.selectSignal(SpellListSelectors.selectFilterValues)

  readonly locale = this.store$.selectSignal(SpellListSelectors.selectLocale)

  ngOnInit(): void {
    this.store$.dispatch(SpellListActions.spellListInit())
    this.store$.dispatch(SpellListActions.fetchSpellList({ useCache: false }))
  }

  ngOnDestroy(): void {
    this.store$.dispatch(SpellListActions.spellListReset())
  }

  onAddSpell(spell: Spell): void {
    this.store$.dispatch(SpellListActions.addSelectedSpell({ spell }))
  }

  onRemoveSpell(spell: Spell): void {
    this.store$.dispatch(SpellListActions.removeSelectedSpell({ spell }))
  }

  onLanguageChange(locale: DndLocales): void {
    this.store$.dispatch(SpellListActions.setLocale({ locale: locale }))
  }

  updateFilterValues(filterValues: Partial<SpellListFiltersModel>): void {
    this.store$.dispatch(SpellListActions.updateFilterValues({ filterValues }))
  }

  resetFilters(): void {
    this.store$.dispatch(SpellListActions.resetFilters())
  }
}
