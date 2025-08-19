import { FormControl } from '@angular/forms'

export enum SpellListFilters {
  SEARCH = 'search',
  LEVEL = 'level',
}

export interface SpellListFiltersModel {
  [SpellListFilters.SEARCH]: string;
  [SpellListFilters.LEVEL]: number | null;
}

export type SpellListFiltersModelDto = SpellListFiltersModel
export type SpellListSearchParams = Partial<SpellListFiltersModelDto>;

export interface SpellListAdditionalFiltersForm {
  level: FormControl<number | null>
}

export interface SpellListAdditionalFiltersFormValue {
  level: number | null
}
