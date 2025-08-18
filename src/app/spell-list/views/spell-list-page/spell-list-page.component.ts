import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Store } from '@ngrx/store'
import SPELL_COLLECTION_JSON from '../../constants/spell-collection.json'
import { Spell } from '../../models'
import { SpellListComponent } from '../../components'
import { SpellListActions, SpellListSelectors } from '../../store'

@Component({
  selector: 'dnd-spell-list-page',
  imports: [
    SpellListComponent,
  ],
  templateUrl: './spell-list-page.component.html',
  styleUrl: './spell-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellListPageComponent {
  private readonly store$ = inject(Store)

  readonly selectedSpells = this.store$.selectSignal(SpellListSelectors.selectSelectedSpells)
  readonly allSpells: Spell[] = this.getAllSpells()

  onAddSpell(spell: Spell): void {
    this.store$.dispatch(SpellListActions.addSelectedSpell({ spell }))
  }

  onRemoveSpell(spell: Spell): void {
    this.store$.dispatch(SpellListActions.removeSelectedSpell({ spell }))
  }

  private getAllSpells(): Spell[] {
    return SPELL_COLLECTION_JSON as Spell[]
  }
}
