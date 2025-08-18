import { ChangeDetectionStrategy, Component, DOCUMENT, inject, signal } from '@angular/core'
import { AppHeaderComponent } from '@core/components'
import { RouterOutlet } from '@angular/router'
import { ThemeMode } from '@core/models'
import { Toast } from 'primeng/toast'

@Component({
  selector: 'dnd-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppHeaderComponent, RouterOutlet, Toast],
})
export class AppComponent {
  readonly document = inject(DOCUMENT)

  readonly themeMode = signal<ThemeMode>('system')

  constructor() {
    this.document.documentElement.setAttribute('color-scheme', this.getSystemThemeMode())
  }

  onThemeChange(mode: ThemeMode) {
    this.themeMode.set(mode)

    if (mode === 'system') {
      this.document.documentElement.setAttribute('color-scheme', this.getSystemThemeMode())
    } else {
      this.document.documentElement.setAttribute('color-scheme', mode)
    }
  }

  private getSystemThemeMode(): ThemeMode {
    return window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ? 'dark' : 'light'
  }
}
