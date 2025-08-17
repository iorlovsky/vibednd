import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
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
  readonly language = input.required<'en' | 'ru'>()

  readonly spellClick = output<Spell>()
}

