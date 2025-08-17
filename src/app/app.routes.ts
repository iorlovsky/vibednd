import { Routes } from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'spells',
  },
  {
    path: 'spells',
    loadChildren: () => import('./spell-list/spell-list.routes').then(m => m.routes),
  },
  {
    path: 'error',
    loadChildren: () => import('./error-page/error-page.routes').then(m => m.routes),
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.routes').then(m => m.routes),
  },
]
