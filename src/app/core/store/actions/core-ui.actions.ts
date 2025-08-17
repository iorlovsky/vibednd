import { createActionGroup, props } from '@ngrx/store'

export const CoreUiActions = createActionGroup({
  source: 'Core/UI',
  events: {
    notificationMessage: props<{ placeholder: unknown }>(),
  },
})
