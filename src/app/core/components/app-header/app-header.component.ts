import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core'
import { Menu } from 'primeng/menu'
import { ThemeMode } from '@core/models'
import { MenuItem } from 'primeng/api'
import { Button } from 'primeng/button'
import { NgOptimizedImage } from '@angular/common'
import { ThemeService } from '@core/services'

@Component({
  selector: 'dnd-app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Menu, Button, NgOptimizedImage],
})
export class AppHeaderComponent {
  private readonly themeService = inject(ThemeService)

  readonly themeMode = input.required<ThemeMode>()
  readonly themeChange = output<ThemeMode>()

  readonly themeMenuItems: MenuItem[] = [
    {
      label: 'Light',
      icon: 'pi pi-sun',
      command: () => this.themeChange.emit('light'),
    },
    {
      label: 'Dark',
      icon: 'pi pi-moon',
      command: () => this.themeChange.emit('dark'),
    },
    {
      label: 'System',
      icon: 'pi pi-desktop',
      command: () => this.themeChange.emit('system'),
    },
  ]

  readonly isDarkTheme = this.themeService.isDark
}
