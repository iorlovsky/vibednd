import { inject, Injectable } from '@angular/core'
import { Actions } from '@ngrx/effects'
import { Store } from '@ngrx/store'

@Injectable()
export class CoreUiEffects {
  private actions$: Actions = inject(Actions)
  private store$: Store = inject(Store)

  // onNotificationMessage$ = createEffect(() => this.actions$.pipe(
  //   ofType(CoreUiActions.notificationMessage),
  //   tap((config) => {
  //     this.toastService.open(config)
  //   }),
  // ), { dispatch: false })

  constructor(
  ) {
  }
}
