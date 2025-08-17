import { Routes } from '@angular/router'
import { provideState } from '@ngrx/store'
import { StateFeatures } from '@core/models'
import { spellsFeatureReducers } from './store/reducers'
import { SpellsPageComponent } from './views/spells-page/spells-page.component'

export const routes: Routes = [
  {
    path: '',
    providers: [
      provideState(StateFeatures.SPELLS, spellsFeatureReducers),
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
