import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ContactsService } from '../services/contacts.service';

import { AdminComponent } from './admin.component';
import { ManageContactsComponent } from '../manage-contacts/manage-contacts.component';

const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [],
    children: [
      {
        path: '',
        children: [
          { path: 'contacts', component: ManageContactsComponent },
          { path: '', redirectTo: 'contacts', pathMatch: 'full' },
          { path: '**', redirectTo: 'contacts' }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    HttpModule,
    RouterModule.forChild(adminRoutes)
  ],
  providers: [
    ContactsService
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}
