import { ChangeDetectionStrategy, Component, computed, input, Signal } from '@angular/core'
import { Spell } from '../../models'

@Component({
  selector: 'dnd-spell-card',
  imports: [],
  templateUrl: './spell-card.component.html',
  styleUrl: './spell-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellCardComponent {
  readonly spell = input.required<Spell>()

  readonly hasLevel: Signal<boolean> = computed(() => {
    return !!this.spell().level && this.spell().level !== '0'
  })
}
