import { Spell } from '../../models'

export interface SpellListState {
  selectedSpells: Spell[]
}

export const spellListInitialState: SpellListState = {
  selectedSpells: [],
}
