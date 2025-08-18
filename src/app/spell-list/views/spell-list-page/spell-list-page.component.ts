import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { Store } from '@ngrx/store'
import { DndLocales } from '@core/models'
import SPELL_COLLECTION_JSON from '../../constants/spell-collection.json'
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
export class SpellListPageComponent {
  private readonly store$ = inject(Store)

  readonly selectedSpells = this.store$.selectSignal(SpellListSelectors.selectSelectedSpells)
  readonly allSpells: Spell[] = this.getAllSpells()
  readonly currentLanguage = signal<DndLocales>(DndLocales.EN)

  onAddSpell(spell: Spell): void {
    this.store$.dispatch(SpellListActions.addSelectedSpell({ spell }))
  }

  onRemoveSpell(spell: Spell): void {
    this.store$.dispatch(SpellListActions.removeSelectedSpell({ spell }))
  }

  onLanguageChange(language: DndLocales): void {
    this.currentLanguage.set(language)
  }

  private getAllSpells(): Spell[] {
    return SPELL_COLLECTION_JSON as Spell[]
  }
}
