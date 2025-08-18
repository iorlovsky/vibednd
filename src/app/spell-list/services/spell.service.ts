import { Injectable } from '@angular/core'
import { catchError, map, Observable, of, shareReplay, throwError } from 'rxjs'
import { Spell, SpellListFilters, SpellListFiltersModel, SpellListSearchParams } from '../models'
import SPELL_COLLECTION_JSON from '../constants/spell-collection.json'

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

    const filterFn = Object.keys(params).some(key => this.filterMap[key as SpellListFilters])
      ? (item: Spell): boolean => Object.entries(params)
        .filter(([key]) => !!this.filterMap[key as SpellListFilters])
        .every(([key, params]) => this.filterMap[key as SpellListFilters](item, params as any))
      : null

    return this.spellListCache.pipe(
      map((res) => {
        if (!filterFn) {
          return res
        }
        return res.filter(filterFn)
      }),
    )
  }
}
