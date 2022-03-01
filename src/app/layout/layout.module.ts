import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {HeaderComponent} from './header/header.component';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';


@NgModule({
  declarations: [
    HeaderComponent,
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    BsDropdownModule.forRoot()
  ]
})
export class LayoutModule {
}
