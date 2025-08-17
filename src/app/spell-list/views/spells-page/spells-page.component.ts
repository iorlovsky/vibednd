import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'dnd-spells-page',
  templateUrl: './spells-page.component.html',
  styleUrl: './spells-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
  ],
})
export class SpellsPageComponent {
}
