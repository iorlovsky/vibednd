import { createActionGroup, props } from '@ngrx/store'
import { Spell } from '../../models'

export const SpellListActions = createActionGroup({
  source: 'Spell list',
  events: {
    addSelectedSpell: props<{ spell: Spell }>(),
    removeSelectedSpell: props<{ spell: Spell }>(),
  },
})
