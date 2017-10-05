import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ManageContactsComponent} from '../manage-contacts/manage-contacts.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule

  ],
  declarations: [
    AdminComponent,
    ManageContactsComponent
  ]
})
export class AdminModule { }
