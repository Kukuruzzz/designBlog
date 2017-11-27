import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

// servicies
import { ContactsService } from '../services/contacts.service';
import { AuthGuard } from '../services/auth-guard.service';

import { AdminComponent } from './admin.component';
import { ManageContactsComponent } from '../manage-contacts/manage-contacts.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
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
