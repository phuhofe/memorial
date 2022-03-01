import {Component, OnInit} from '@angular/core';
import {setTheme} from 'ngx-bootstrap/utils';
import {KeycloakService} from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-our-memorial-page';
  isLoggedIn = false;

  constructor(private readonly keycloak: KeycloakService) {
    setTheme('bs4');
  }

  async ngOnInit(): Promise<any> {
    return this.isLoggedIn = await this.keycloak.isLoggedIn();

    // this.getUser():
  }

  async getUser(): Promise<any> {
    if (this.isLoggedIn) {
      const userProfile = await this.keycloak.loadUserProfile();
      const token = await this.keycloak.getToken();

      return {
        userProfile,
        token
      };
    }
  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }
}
