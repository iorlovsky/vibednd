import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core'
import { DndLocales } from '@core/models'
import { AccordionModule } from 'primeng/accordion'
import { Spell } from '../../models'
import { SpellCardComponent } from '../spell-card/spell-card.component'

interface SpellsByLevel {
  level: string
  spells: Spell[]
}

@Component({
  selector: 'dnd-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrl: './spell-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AccordionModule,
    SpellCardComponent,
  ],
})
export class SpellListComponent {
  readonly spells = input<Spell[]>()
  readonly language = input.required<DndLocales>()

  readonly spellClick = output<Spell>()

  readonly spellsByLevel = computed<SpellsByLevel[]>(() => {
    const spells = this.spells() || []
    const grouped = new Map<string, Spell[]>()

    // Group spells by level
    for (const spell of spells) {
      let levelKey: string

      if (!spell.level || spell.level === 0 || spell.level === '0') {
        levelKey = 'Ritual'
      } else {
        levelKey = `Level ${spell.level}`
      }

      if (!grouped.has(levelKey)) {
        grouped.set(levelKey, [])
      }
      grouped.get(levelKey)!.push(spell)
    }

    // Convert to array and sort by level
    const result: SpellsByLevel[] = Array.from(grouped.entries()).map(([level, spells]) => ({
      level,
      spells,
    }))

    // Sort levels: Ritual first, then Level 1-9
    result.sort((a, b) => {
      if (a.level === 'Ritual') return -1
      if (b.level === 'Ritual') return 1

      const aNum = parseInt(a.level.replace('Level ', ''))
      const bNum = parseInt(b.level.replace('Level ', ''))
      return aNum - bNum
    })

    return result
  })
}
