<<<<<<< HEAD
=======
import { ContactComponent } from '../contact/contact.component';
>>>>>>> origin/express
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
// modules
import { AdminModule } from './../admin/admin.module';

// components
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from './../login/login.component';
import { ProjectsComponent } from './../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';

=======
import { HomeComponent } from '../home/home.component';
import { ProjectsComponent } from '../projects/projects.component';
import { LoginComponent } from '../login/login.component';
>>>>>>> origin/express

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'admin', component: AdminModule },
=======
>>>>>>> origin/express
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
<<<<<<< HEAD
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    LoginComponent,
    AdminComponent
=======

>>>>>>> origin/express
  ]
})
export class AppRoutingModule { }
