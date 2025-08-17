import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { StateFeatures } from '@core/models'
import { SpellsFeatureState } from '../reducers'
import { SpellListState } from '../state'
import { Spell } from '../../models'

export namespace SpellListSelectors {
  type Fn<T> = MemoizedSelector<any, T>

  export const selectSpellsFeature = createFeatureSelector<SpellsFeatureState>(
    StateFeatures.SPELLS,
  )

  export const selectSpellListState: Fn<SpellListState> = createSelector(
    selectSpellsFeature,
    state => state.spellList,
  )

  export const selectSelectedSpells: Fn<Spell[]> = createSelector(
    selectSpellListState,
    state => state.selectedSpells,
  )
}
