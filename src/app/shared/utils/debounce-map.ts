import {
  BehaviorSubject,
  debounce,
  filter,
  finalize,
  forkJoin,
  from,
  mergeMap,
  Observable,
  ObservableInput,
  OperatorFunction,
  take,
  tap,
  timer,
} from 'rxjs'

export function debounceMap<T, R>(
  project: (value: T, index: number, buffer: T[]) => ObservableInput<R>,
  timeout = 100,
): OperatorFunction<T, R> {
  return (source): Observable<R> => {
    const available$ = new BehaviorSubject(true)
    let bufferData: T[] = []
    let hasInQueue = false

    return source.pipe(
      tap((data) => {
        bufferData.push(data)
        hasInQueue = true
      }),
      debounce(() => forkJoin([
        timer(timeout),
        available$.pipe(filter(Boolean), take(1)),
      ])),
      tap(() => {
        available$.next(false)
        hasInQueue = false
      }),
      mergeMap((value, index) => from(project(value, index, bufferData)).pipe(
        filter(() => !hasInQueue),
        tap(() => {
          bufferData = []
        }),
        finalize(() => available$.next(true)),
      )),
    )
  }
}
