import { createFeatureSelector, MemoizedSelector } from '@ngrx/store'
import { CoreFeatureState } from '../reducers'

export namespace CoreSelectors {
  type Fn<T> = MemoizedSelector<any, T>

  const selectCoreFeature = createFeatureSelector<CoreFeatureState>('core')

}
