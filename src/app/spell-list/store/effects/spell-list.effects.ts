import { inject, Injectable } from '@angular/core'
import { Actions, createEffect, EffectNotification, ofType } from '@ngrx/effects'
import { select, Store } from '@ngrx/store'
import {
  catchError,
  distinctUntilChanged,
  exhaustMap,
  map,
  Observable,
  of,
  skip,
  switchMap,
  take,
  takeUntil,
} from 'rxjs'
import * as _ from 'lodash-es'
import { MessageService } from 'primeng/api'
import { SpellListActions } from '../actions'
import { SpellListSelectors } from '../selectors'
import { debounceMap } from '../../../shared/utils'
import { SpellService } from '../../services'

@Injectable()
export class SpellListEffects {
  private actions$ = inject(Actions)
  private store$ = inject(Store)
  private spellService = inject(SpellService)
  private toastService = inject(MessageService)

  fetchSpellListOnFilterValuesChange$ = createEffect(() => this.actions$.pipe(
    ofType(
      SpellListActions.updateFilterValues,
      SpellListActions.resetFilters,
    ),
    switchMap(() => this.store$.select(SpellListSelectors.selectFilterValuesDto)
      .pipe(take(1)),
    ),
    distinctUntilChanged(_.isEqual),
    skip(1),
    map(() => SpellListActions.fetchSpellList({ useCache: true })),
  ))

  fetchSpellListOnLocaleChange$ = createEffect(() => this.actions$.pipe(
    ofType(SpellListActions.setLocale),
    switchMap(() => this.store$.select(SpellListSelectors.selectLocale)
      .pipe(take(1)),
    ),
    distinctUntilChanged(),
    map(() => SpellListActions.fetchSpellList({ useCache: true })),
  ))

  fetchSpellList$ = createEffect(() => this.actions$.pipe(
    ofType(SpellListActions.fetchSpellList),
    debounceMap((_, __, buffer) => this.store$.pipe(
      select(SpellListSelectors.selectSearchParams),
      take(1),
      switchMap(searchParams => this.spellService.search(
        searchParams,
        buffer.every(action => action.useCache),
      )),
      map(data => SpellListActions.fetchSpellListSuccess({ data })),
      catchError(() => {
        this.toastService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to fetch spells',
        })
        return of(SpellListActions.fetchSpellListFail())
      }),
    ), 0),
  ))

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return this.actions$.pipe(
      ofType(SpellListActions.spellListInit),
      exhaustMap(() => resolvedEffects$.pipe(
        takeUntil(this.actions$.pipe(
          ofType(SpellListActions.spellListReset),
        )),
      )),
    )
  }
}
