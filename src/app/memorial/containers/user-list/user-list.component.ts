import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {users} from '../../models/mock-users';
import {Observable} from 'rxjs';
import {Store} from '@ngxs/store';
import {AdminState, GetConfig} from '../../../admin/store/admin.state';

@Component({
  selector: 'app-dead-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges {

  gridViewText = 'grid';
  listViewText = 'list';
  users = users;
  userTestId = '1';
  displayNumberListView = 7;
  displayNumberShadowView = 4;

  user1MainColor: string;
  user2MainColor: string;
  currentView = this.listViewText;
  bannerURL: string;

  @Input()
  get userId() {
    return this._userId;
  }

  set userId(id: string) {
    this.userTestId = id;
  }

  private _userId: string;

  config$: Observable<{
    config: {
      mainColor: string,
      themeId: number,
      bannerURL: string
    }
  }>;

  constructor(private store: Store) {
    console.log('go here');
    this.store.dispatch(new GetConfig());
  }

  ngOnInit(): void {
    this.config$ = this.store.select(AdminState);
    this.config$.subscribe((data) => {
      if (data) {
        this.user1MainColor = data.config.mainColor;
        this.bannerURL = data.config.bannerURL;

        if (data.config.themeId === 0) {
          this.currentView = this.listViewText;
        }

        if (data.config.themeId === 1) {
          this.currentView = this.gridViewText;
        }

      }
    });
  }

  changeView(viewType: string): void {
    this.currentView = viewType;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.userId) {
      console.log('this.userId', this.userId);
    }
  }

  loadMore(): void {

    console.log('currentView', this.currentView);

    if (this.currentView === this.listViewText) {
      this.displayNumberListView = this.displayNumberListView + 7;
    }

    if (this.currentView === this.gridViewText) {
      this.displayNumberShadowView = this.displayNumberShadowView + 4;
    }

  }

}
