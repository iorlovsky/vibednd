import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideState, provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { StateFeatures } from '@core/models'
import { coreFeatureReducers } from '@core/store/reducers'
import { provideEffects } from '@ngrx/effects'
import { CoreUiEffects } from '@core/store/effects'
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { providePrimeNG } from 'primeng/config'
import { MessageService } from 'primeng/api'
import { DialogService } from 'primeng/dynamicdialog'
import { dndPrimeNgTheme } from './primeng-theme'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(),
    provideEffects([
      CoreUiEffects,
    ]),
    provideState(StateFeatures.CORE, coreFeatureReducers),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(
      withInterceptors([]),
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: dndPrimeNgTheme,
        options: {
          darkModeSelector: '[color-scheme="dark"]',
        },
      },
    }),
    MessageService,
    DialogService,
  ],
}
