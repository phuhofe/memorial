import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MemorialRoutingModule} from './memorial-routing.module';

import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {CONTAINERS} from './containers';
import {COMPONENTS} from './components';

import {UserListComponent} from './containers/user-list/user-list.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CONTAINERS,
    COMPONENTS
  ],
  imports: [
    CommonModule,
    MemorialRoutingModule,
    BsDropdownModule,

    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [UserListComponent],
})
export class MemorialModule {
}
