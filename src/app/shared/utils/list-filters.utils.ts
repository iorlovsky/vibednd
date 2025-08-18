import * as _ from 'lodash-es'

export namespace ListFiltersUtils {

  export function pickPopulatedFilters<T extends Record<string, any>>(filtersDto: T): Partial<T> {
    return _.pickBy(
      filtersDto,
      value => _.isNumber(value) || _.isBoolean(value) || !_.isEmpty(value),
    ) as Partial<T>
  }
}
