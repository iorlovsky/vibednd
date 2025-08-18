import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { Spell, SpellListFilters, SpellListFiltersModel } from '../../models'

export const SpellListActions = createActionGroup({
  source: 'Spells/Spell list',
  events: {
    spellListInit: emptyProps(),
    spellListReset: emptyProps(),

    fetchSpellList: emptyProps(),
    fetchSpellListSuccess: props<{ data: Spell[] }>(),
    fetchSpellListFail: emptyProps(),

    addSelectedSpell: props<{ spell: Spell }>(),
    removeSelectedSpell: props<{ spell: Spell }>(),

    updateFilterValues: props<{ filterValues: Partial<SpellListFiltersModel> }>(),
    clearFilter: props<{ filterId: SpellListFilters }>(),
    resetFilters: emptyProps(),
  },
})
