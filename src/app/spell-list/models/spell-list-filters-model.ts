import { FormControl } from '@angular/forms'
import { CharacterClass } from '@core/models'

export enum SpellListFilters {
  SEARCH = 'search',
  CLASS = 'class',
  LEVEL = 'level',
}

export interface SpellListFiltersModel {
  [SpellListFilters.SEARCH]: string;
  [SpellListFilters.LEVEL]: number | null;
  [SpellListFilters.CLASS]: CharacterClass | null;
}

export type SpellListFiltersModelDto = SpellListFiltersModel
export type SpellListSearchParams = Partial<SpellListFiltersModelDto>;

export interface SpellListAdditionalFiltersForm {
  level: FormControl<number | null>
  class: FormControl<CharacterClass | null>
}

export interface SpellListAdditionalFiltersFormValue {
  level: number | null
  class: CharacterClass | null
}
