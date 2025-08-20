import { createActionGroup, emptyProps, props } from '@ngrx/store'
import { DndLocales } from '@core/models'
import { Spell, SpellListFiltersModel } from '../../models'

export const SpellListActions = createActionGroup({
  source: 'Spells/Spell list',
  events: {
    spellListInit: emptyProps(),
    spellListReset: emptyProps(),

    setLocale: props<{ locale: DndLocales }>(),

    fetchSpellList: props<{ useCache: boolean }>(),
    fetchSpellListSuccess: props<{ data: Spell[] }>(),
    fetchSpellListFail: emptyProps(),

    addSelectedSpell: props<{ spell: Spell }>(),
    removeSelectedSpell: props<{ spell: Spell }>(),

    updateFilterValues: props<{ filterValues: Partial<SpellListFiltersModel> }>(),
    resetFilters: emptyProps(),
  },
})
