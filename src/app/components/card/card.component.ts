import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from '../../core/models/classes/User.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input()data:User=new User()
  constructor() { }

  ngOnInit() {
  }

}
