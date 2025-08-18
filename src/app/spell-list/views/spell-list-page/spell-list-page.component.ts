import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core'
import { Store } from '@ngrx/store'
import { DndLocales } from '@core/models'
import { Spell } from '../../models'
import { LanguageSwitchComponent, SpellListComponent } from '../../components'
import { SpellListActions, SpellListSelectors } from '../../store'

@Component({
  selector: 'dnd-spell-list-page',
  imports: [
    SpellListComponent,
    LanguageSwitchComponent,
  ],
  templateUrl: './spell-list-page.component.html',
  styleUrl: './spell-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellListPageComponent implements OnInit, OnDestroy {
  private readonly store$ = inject(Store)

  readonly spellList = this.store$.selectSignal(SpellListSelectors.selectSpellList)
  readonly selectedSpells = this.store$.selectSignal(SpellListSelectors.selectSelectedSpells)
  readonly currentLanguage = signal<DndLocales>(DndLocales.EN)

  ngOnInit(): void {
    this.store$.dispatch(SpellListActions.spellListInit())
    this.store$.dispatch(SpellListActions.fetchSpellList())
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

  onLanguageChange(language: DndLocales): void {
    this.currentLanguage.set(language)
  }
}
