import { ActionReducerMap } from '@ngrx/store'
import { spellListReducer } from './spell-list.reducer'
import { SpellListState } from '../state'

export interface SpellsFeatureState {
  spellList: SpellListState
}

export const spellsFeatureReducers: ActionReducerMap<SpellsFeatureState> = {
  spellList: spellListReducer,
}
