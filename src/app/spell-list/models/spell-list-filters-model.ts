export enum SpellListFilters {
  SEARCH = 'search',
}

export interface SpellListFiltersModel {
  [SpellListFilters.SEARCH]: string;
}

export type SpellListFiltersModelDto = SpellListFiltersModel
export type SpellListSearchParams = Partial<SpellListFiltersModelDto>;
