import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AdminRoutingModule } from './admin-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { StandardTemplateComponent } from './standard-template/standard-template.component';
import { NewGenerationTemplateComponent } from './new-generation-template/new-generation-template.component';
import { NetNoticeTemplateComponent } from './net-notice-template/net-notice-template.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SettingsComponent,
    StandardTemplateComponent,
    NewGenerationTemplateComponent,
    NetNoticeTemplateComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    CarouselModule.forRoot(),
  ]
})
export class AdminModule { }
