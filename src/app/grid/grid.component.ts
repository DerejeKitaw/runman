import {Component, Input, ChangeDetectionStrategy} from '@angular/core';
import {GameState} from "../store/game.state";
import {GridService} from "../services/grid.service";

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent {
 @Input() height: number;
 @Input() width: number;
 @Input() state: GameState;

 constructor(private grid: GridService){

 }
}
