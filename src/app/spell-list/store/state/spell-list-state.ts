import { Spell, SpellListFiltersModel } from '../../models'
import { LoadingStatus } from '../../../shared/models'

export interface SpellListState {
  list: Spell[],
  listLoadingStatus: LoadingStatus,
  selectedSpells: Spell[],
  filterValues: Partial<SpellListFiltersModel>,
}

export const spellListInitialState: SpellListState = {
  list: [],
  listLoadingStatus: LoadingStatus.NONE,
  selectedSpells: [],
  filterValues: {},
}
