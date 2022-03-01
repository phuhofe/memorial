import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-standard-view',
  templateUrl: './standard-view.component.html',
  styleUrls: ['./standard-view.component.scss']
})
export class StandardViewComponent implements OnInit, OnChanges {

  @Input() users: Array<User>;
  @Input() userId: string;
  @Input() user1MainColor: string;
  @Input() user2MainColor: string;
  @Input() displayNumberListView: number;

  displayNumber = 7;

  deathNoticeIcon = 'https://minnessidor.fonus.se/assets/common/img/death_notice_icon.svg';
  candleFilterIcon = 'https://minnessidor.fonus.se/assets/common/img/candel_filter_icon.svg';
  donationFilterIcon = 'https://minnessidor.fonus.se/assets/common/img/donation_filter_icon.svg';
  flowerFilterIcon = 'https://minnessidor.fonus.se/assets/common/img/flower_filter_icon.svg';

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.displayNumberListView) {
      this.loadMore();
    }
  }

  loadMore(): number {
    return this.displayNumber = this.displayNumber + 2;
  }

}
