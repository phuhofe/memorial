import { Component, OnInit } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {setTheme} from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private readonly keycloak: KeycloakService) {}

  async ngOnInit(): Promise<any> {
    return this.isLoggedIn = await this.keycloak.isLoggedIn();
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
