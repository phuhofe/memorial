import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';

import {User} from '../../models/user.model';

@Component({
  selector: 'app-umbra-dumbra-view',
  templateUrl: './umbra-dumbra-view.component.html',
  styleUrls: ['./umbra-dumbra-view.component.scss']
})
export class UmbraDumbraViewComponent implements OnInit, OnChanges {

  @Input() users: Array<User>;
  @Input() displayNumberShadowView: number;

  displayNumber = 4;

  url = 'https://image.freepik.com/free-vector/lion-cool-retro-eyeglasses_68946-257.jpg';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.displayNumberShadowView) {
      this.loadMore();
    }
  }

  loadMore(): number {
    return this.displayNumber = this.displayNumber + 2;
  }

}
