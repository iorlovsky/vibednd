import { Routes } from '@angular/router'
import { provideState } from '@ngrx/store'
import { StateFeatures } from '@core/models'
import { provideEffects } from '@ngrx/effects'
import { spellsFeatureReducers } from './store/reducers'
import { SpellsPageComponent } from './views/spells-page/spells-page.component'
import { SpellListEffects } from './store/effects'
import { SpellService } from './services'

export const routes: Routes = [
  {
    path: '',
    providers: [
      SpellService,
      provideState(StateFeatures.SPELLS, spellsFeatureReducers),
      provideEffects([
        SpellListEffects,
      ]),
    ],
    component: SpellsPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        // eslint-disable-next-line max-len
        loadComponent: () => import('./views/spell-list-page/spell-list-page.component').then(c => c.SpellListPageComponent),
      },
    ],
  },
]
