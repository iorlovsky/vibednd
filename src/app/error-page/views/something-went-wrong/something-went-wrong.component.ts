import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'dnd-something-went-wrong',
  templateUrl: './something-went-wrong.component.html',
  styleUrl: './something-went-wrong.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SomethingWentWrongComponent {

}
