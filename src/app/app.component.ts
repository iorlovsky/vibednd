import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { AppHeaderComponent } from '@core/components'
import { RouterOutlet } from '@angular/router'
import { ThemeMode } from '@core/models'
import { Toast } from 'primeng/toast'
import { ThemeService } from '@core/services'

@Component({
  selector: 'dnd-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AppHeaderComponent, RouterOutlet, Toast],
})
export class AppComponent {
  private readonly themeService = inject(ThemeService)

  readonly theme = this.themeService.theme

  constructor() {
    this.themeService.setThemeFromSystem()
  }

  onThemeChange(mode: ThemeMode): void {
    this.themeService.setTheme(mode)
  }
}
