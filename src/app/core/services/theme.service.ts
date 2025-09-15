import { DOCUMENT, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core'
import { ThemeMode } from '@core/models'

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT)

  readonly theme: Signal<ThemeMode>
  private readonly _theme: WritableSignal<ThemeMode> = signal('system')

  constructor() {
    this.theme = this._theme.asReadonly()
  }

  setTheme(theme: ThemeMode): void {
    this._theme.set(theme)

    if (theme === 'system') {
      this.document.documentElement.setAttribute('color-scheme', this.getSystemThemeMode())
    } else {
      this.document.documentElement.setAttribute('color-scheme', theme)
    }
  }

  setThemeFromSystem(): void {
    this.document.documentElement.setAttribute('color-scheme', this.getSystemThemeMode())
  }

  getSystemThemeMode(): ThemeMode {
    return window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light'
  }
}
