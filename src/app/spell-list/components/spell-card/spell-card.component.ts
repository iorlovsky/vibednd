import { ChangeDetectionStrategy, Component, computed, input, Signal } from '@angular/core'
import { DndLocales } from '@core/models'
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
  readonly language = input.required<DndLocales>()

  readonly hasLevel: Signal<boolean> = computed(() => {
    return !!this.spell().level && this.spell().level !== '0'
  })
}
