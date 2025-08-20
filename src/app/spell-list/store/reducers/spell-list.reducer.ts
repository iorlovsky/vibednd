import { createReducer, on } from '@ngrx/store'
import * as _ from 'lodash-es'
import { SpellListActions } from '../actions'
import { spellListInitialState, SpellListState } from '../state'
import { LoadingStatus } from '../../../shared/models'

export const spellListReducer = createReducer(
  spellListInitialState,
  on(
    SpellListActions.setLocale,
    (state, { locale }): SpellListState => ({
      ...state,
      locale,
    }),
  ),
  on(
    SpellListActions.fetchSpellList,
    (state): SpellListState => ({
      ...state,
      listLoadingStatus: LoadingStatus.LOADING,
    }),
  ),
  on(
    SpellListActions.fetchSpellListSuccess,
    (state, { data }): SpellListState => ({
      ...state,
      list: data,
      listLoadingStatus: LoadingStatus.DONE,
    }),
  ),
  on(
    SpellListActions.fetchSpellListFail,
    (state): SpellListState => ({
      ...state,
      listLoadingStatus: LoadingStatus.ERROR,
    }),
  ),
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
  on(
    SpellListActions.updateFilterValues,
    (state, { filterValues }): SpellListState => ({
      ...state,
      filterValues: { ...state.filterValues, ...filterValues },
    }),
  ),
  on(
    SpellListActions.resetFilters,
    (state): SpellListState => ({
      ...state,
      filterValues: spellListInitialState.filterValues,
    }),
  ),
)
