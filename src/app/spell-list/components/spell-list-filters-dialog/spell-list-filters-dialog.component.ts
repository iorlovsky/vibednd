import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { SelectButton } from 'primeng/selectbutton'
import { FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Button } from 'primeng/button'
import { CharacterClass } from '@core/models'
import * as _ from 'lodash-es'
import { DndOption } from '../../../shared/models'
import { SpellListAdditionalFiltersForm } from '../../models'

@Component({
  selector: 'dnd-spell-list-filters-dialog',
  imports: [
    SelectButton,
    ReactiveFormsModule,
    Button,
  ],
  templateUrl: './spell-list-filters-dialog.component.html',
  styleUrl: './spell-list-filters-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpellListFiltersDialogComponent {
  readonly form = input.required<FormGroup<SpellListAdditionalFiltersForm>>()

  readonly clearFilters = output()

  readonly classOptions: DndOption<CharacterClass>[] = this.getClassOptions()
  readonly levelOptions: DndOption<number>[] = this.getLevelOptions()

  private getLevelOptions(): DndOption<number>[] {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => {
      const label = level === 0 ? 'Cantrip' : `Level ${level}`
      return {
        label,
        value: level,
      }
    })
  }

  private getClassOptions(): DndOption<CharacterClass>[] {
    return [
      CharacterClass.DRUID,
      CharacterClass.RANGER,
      CharacterClass.CLERIC,
      CharacterClass.PALADIN,
      CharacterClass.SORCERER,
      CharacterClass.WARLOCK,
      CharacterClass.WIZARD,
      CharacterClass.ARTIFICER,
      CharacterClass.BARD,
    ].map((characterClass) => {
      return {
        label: _.capitalize(characterClass),
        value: characterClass,
      }
    })
  }

}
