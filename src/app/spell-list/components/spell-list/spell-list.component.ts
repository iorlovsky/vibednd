import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { DndLocales } from '@core/models'
import { Spell } from '../../models'
import { SpellCardComponent } from '../spell-card/spell-card.component'

@Component({
  selector: 'dnd-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrl: './spell-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SpellCardComponent,
  ],
})
export class SpellListComponent {
  readonly spells = input<Spell[]>()
  readonly language = input.required<DndLocales>()

  readonly spellClick = output<Spell>()
}
