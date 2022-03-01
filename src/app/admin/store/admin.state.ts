import {Injectable} from '@angular/core';
import {Action, State, StateContext, Store} from '@ngxs/store';
import {HttpClient} from '@angular/common/http';
import {Subscription, timer} from 'rxjs';

export class SaveConfig {
  static readonly type = '[Settings] Save Config';

  constructor(public config: {
    mainColor: string;
    themeId: number;
    bannerURL: string;
  }) {
  }
}

export class GetConfig {
  static readonly type = '[Settings] Get Config';
}

@State({
  name: 'admin',
  defaults: {
    config: {
      themeId: 0,
      mainColor: '#17313B',
      bannerURL: 'https://davekochphoto.com/wp-content/uploads/2018/05/8103540-Edit.jpg'
    }
  }
})
@Injectable()
export class AdminState {

  subscription = new Subscription();

  constructor(private http: HttpClient, private store: Store) {
  }

  refreshSubscription(): void {
    const timerSubscription = timer(5000);

    if (this.refreshSubscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = timerSubscription.subscribe(() => {
      this.store.dispatch(new GetConfig());
    });
  }

  @Action(SaveConfig)
  saveConfig(ctx: StateContext<any>, action: SaveConfig): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      ...action
    });

    this.http.post('http://localhost:3000/settings', {
      ...action
    }).subscribe(res => console.log('res', res));
  }

  @Action(GetConfig)
  getConfig(ctx: StateContext<any>): void {
    this.http.get('http://localhost:3000/settings')
      .subscribe(res => {
        console.log('res', res);

        const state = ctx.getState();

        ctx.setState({
          ...state,
          ...res
        });

        this.refreshSubscription();
      });
  }

}
