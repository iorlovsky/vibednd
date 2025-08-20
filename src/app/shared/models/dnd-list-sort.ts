import { DndLocales } from '@core/models'

export enum DndSortDirections {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface DndListSort<T = string> {
  field: T,
  dir: DndSortDirections,
  locale?: DndLocales,
}
