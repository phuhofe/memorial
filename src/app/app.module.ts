import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ApplicationRef, Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {createCustomElement} from '@angular/elements';
import {Router} from '@angular/router';

import {CoreModule} from './core/core.module';

import {UserListComponent} from './memorial/containers/user-list/user-list.component';
import {environment} from '@app/env';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {LayoutModule} from './layout/layout.module';

function initializeKeycloak(keycloak: KeycloakService): any {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'demo',
        clientId: 'my-app',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    LayoutModule,
    KeycloakAngularModule
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService],
    // },
  ],
  entryComponents: [UserListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector, private router: Router) {

    const pricing = createCustomElement(UserListComponent, {injector: this.injector});
    customElements.define('adstate-user-list', pricing);

    if (environment.production) {
      this.router.navigateByUrl('', {skipLocationChange: true});
    }
  }

  ngDoBootstrap(_appRef: ApplicationRef): void { }
}
