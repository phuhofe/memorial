import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {from, Observable, of} from 'rxjs';
import {log} from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  user: any;

  constructor(private readonly keycloak: KeycloakService) {
    this.getUser().subscribe(value => {
      this.user = value;
    });
  }

  ngOnInit(): void {
    this.isLoggedIn$ = from(this.keycloak.isLoggedIn());
  }

  getUser(): Observable<any> {

    return from(this.keycloak.loadUserProfile());
    //
    // return new Observable((observer) => {
    //   const userProfile = await this.keycloak.loadUserProfile();
    //   const token = await this.keycloak.getToken();
    //
    //   console.log(token);
    //
    //   observer.next({
    //     userProfile,
    //     token
    //   });
    // });

  }

  login(): void {
    this.keycloak.login();
  }

  logout(): void {
    this.keycloak.logout();
  }


}
