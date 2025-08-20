import { FormControl } from '@angular/forms'
import { CharacterClass } from '@core/models'
import { Spell } from './spell'
import { DndListSort } from '../../shared/models'

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
export type SpellListSearchParams = Partial<{
  filters: Partial<SpellListFiltersModelDto>,
  sort: DndListSort<keyof Spell>,
}>;

export interface SpellListAdditionalFiltersForm {
  level: FormControl<number | null>
  class: FormControl<CharacterClass | null>
}

export interface SpellListAdditionalFiltersFormValue {
  level: number | null
  class: CharacterClass | null
}
