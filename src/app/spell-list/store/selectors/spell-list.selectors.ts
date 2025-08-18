import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store'
import { StateFeatures } from '@core/models'
import { SpellsFeatureState } from '../reducers'
import { SpellListState } from '../state'
import { Spell, SpellListFiltersModel, SpellListFiltersModelDto, SpellListSearchParams } from '../../models'
import { ListFiltersUtils } from '../../../shared/utils'
import { LoadingStatus } from '../../../shared/models'

export namespace SpellListSelectors {
  type Fn<T> = MemoizedSelector<any, T>

  export const selectSpellsFeature = createFeatureSelector<SpellsFeatureState>(
    StateFeatures.SPELLS,
  )

  export const selectSpellListState: Fn<SpellListState> = createSelector(
    selectSpellsFeature,
    state => state.spellList,
  )

  export const selectSpellList: Fn<Spell[]> = createSelector(
    selectSpellListState,
    state => state.list,
  )

  export const selectIsSpellListLoading: Fn<boolean> = createSelector(
    selectSpellListState,
    state => state.listLoadingStatus === LoadingStatus.LOADING,
  )

  export const selectSelectedSpells: Fn<Spell[]> = createSelector(
    selectSpellListState,
    state => state.selectedSpells,
  )

  export const selectFilterValues: Fn<Partial<SpellListFiltersModel>> = createSelector(
    selectSpellListState,
    state => state.filterValues,
  )

  export const selectFilterValuesDto: Fn<Partial<SpellListFiltersModelDto>> = createSelector(
    selectFilterValues,
    filterValues => ListFiltersUtils.pickPopulatedFilters(filterValues),
  )

  // Leaving space for pagination, sort and so on.
  export const selectSearchParams: Fn<SpellListSearchParams> = createSelector(
    selectFilterValuesDto,
    filterValuesDto => filterValuesDto,
  )
}
