import { createReducer, on } from '@ngrx/store'
import * as _ from 'lodash-es'
import { SpellListActions } from '../actions'
import { spellListInitialState, SpellListState } from '../state'

export const spellListReducer = createReducer(
  spellListInitialState,
  on(
    SpellListActions.addSelectedSpell,
    (state, { spell }): SpellListState => ({
      ...state,
      selectedSpells: _.uniqBy([
        ...state.selectedSpells,
        spell,
      ], 'name'),
    }),
  ),
  on(
    SpellListActions.removeSelectedSpell,
    (state, { spell }): SpellListState => ({
      ...state,
      selectedSpells: state.selectedSpells.filter(s => s.name !== spell.name),
    }),
  ),
)
