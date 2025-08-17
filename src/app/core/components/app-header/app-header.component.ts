import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { Menu } from 'primeng/menu'
import { ThemeMode } from '@core/models'
import { MenuItem } from 'primeng/api'
import { Button } from 'primeng/button'

@Component({
  selector: 'dnd-app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Menu, Button],
})
export class AppHeaderComponent {
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
}
