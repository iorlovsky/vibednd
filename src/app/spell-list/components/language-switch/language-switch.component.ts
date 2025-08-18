import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { DndLocales } from '@core/models'
import { Menu } from 'primeng/menu'
import { Button } from 'primeng/button'
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'dnd-language-switch',
  template: `
    <div class="language-switch">
      <p-button
        [label]="currentLanguage() === DndLocales.EN ? 'EN' : 'RU'"
        icon="pi pi-globe"
        [text]="true"
        severity="secondary"
        (click)="menu.toggle($event)"
        class="language-switch__trigger"
      />
      <p-menu
        #menu
        [model]="menuItems"
        [popup]="true"
      />
    </div>
  `,
  styleUrl: './language-switch.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Menu, Button],
})
export class LanguageSwitchComponent {
  readonly currentLanguage = input.required<DndLocales>()
  readonly languageChange = output<DndLocales>()

  protected readonly DndLocales = DndLocales

  protected readonly menuItems: MenuItem[] = [
    {
      label: 'English',
      icon: 'pi pi-flag',
      command: () => this.languageChange.emit(DndLocales.EN),
    },
    {
      label: 'Русский',
      icon: 'pi pi-flag',
      command: () => this.languageChange.emit(DndLocales.RU),
    },
  ]
}
