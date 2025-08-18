import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Spell, SpellListSearchParams } from '../models'
import SPELL_COLLECTION_JSON from '../constants/spell-collection.json'

@Injectable()
export class SpellService {

  search(params: SpellListSearchParams): Observable<Spell[]> {
    return of(SPELL_COLLECTION_JSON)
  }
}
