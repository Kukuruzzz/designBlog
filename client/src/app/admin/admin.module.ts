import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import { ManageContactsComponent } from '../manage-contacts/manage-contacts.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule

  ],
  declarations: [
    AdminComponent,
    ManageContactsComponent
  ]
})
export class AdminModule { }
