import { Injectable } from '@angular/core'
import { catchError, map, Observable, of, shareReplay, throwError } from 'rxjs'
import { CharacterClass, DndLocales } from '@core/models'
import { Spell, SpellListFilters, SpellListFiltersModel, SpellListSearchParams } from '../models'
import SPELL_COLLECTION_JSON from '../constants/spell-collection.json'
import { DndListSort, PartialRecord } from '../../shared/models'

@Injectable()
export class SpellService {

  private spellListCache: Observable<Spell[]> | null = null

  private readonly filterMap: {
    [K in SpellListFilters]: (spell: Spell, param: SpellListFiltersModel[K]) => boolean
  } = {
    [SpellListFilters.SEARCH]: (spell: Spell, searchModel: string) => {
      return [
        spell.name.en,
        spell.name.ru,
      ].some(source => source?.toLowerCase().includes(searchModel.toLowerCase()))
    },
    [SpellListFilters.CLASS]: (spell: Spell, searchModel: CharacterClass | null) => {
      if (searchModel === null) {
        return true
      }
      return !!spell.class.find(spellClass => spellClass.toLowerCase() === searchModel.toLowerCase())
    },
    [SpellListFilters.LEVEL]: (spell: Spell, searchModel: number | null) => {
      if (searchModel === null) {
        return true
      }

      const spellLevel = spell.level ?? 0
      return parseInt(spellLevel as string, 10) === searchModel
    },
  }

  private readonly sortMap: PartialRecord<keyof Spell, (a: Spell, b: Spell, sort: DndListSort<keyof Spell>) => number>
    = {
    name: (a, b, sort) => {
      const locale = sort.locale ?? DndLocales.EN
      return a.name[locale].localeCompare(b.name[locale], locale, { sensitivity: 'base' })
    },
  }

  search(params: SpellListSearchParams, useCache = false): Observable<Spell[]> {
    this.spellListCache = useCache && this.spellListCache
      ? this.spellListCache
      : of(SPELL_COLLECTION_JSON as Spell[]).pipe(
        catchError((error) => {
          this.spellListCache = null
          return throwError(() => error)
        }),
        shareReplay({ refCount: true }),
      )

    const filters = params.filters ?? {}
    const sort = params.sort

    const filterFn = Object.keys(filters).some(key => this.filterMap[key as SpellListFilters])
      ? (item: Spell): boolean => Object.entries(filters)
        .filter(([key]) => !!this.filterMap[key as SpellListFilters])
        .every(([key, searchModel]) => (this.filterMap[key as SpellListFilters] as any)(item, searchModel))
      : null

    const sortFn = sort ? this.sortMap[sort.field] : null

    return this.spellListCache.pipe(
      map((res) => {
        if (!filterFn) {
          return res
        }
        return res.filter(filterFn)
      }),
      map((res) => {
        if (!sortFn) {
          return res
        }
        return res.toSorted((a, b) => sortFn(a, b, sort!))
      }),
    )
  }
}
