import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';


import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,

  ],
})
export class AuthModule {
}
