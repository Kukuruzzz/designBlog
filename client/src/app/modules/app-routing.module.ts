import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// modules
import { AdminModule } from './../admin/admin.module';

// components
import { HomeComponent } from '../home/home.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginComponent } from './../login/login.component';
import { ProjectsComponent } from './../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminModule },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    LoginComponent,
    AdminComponent
  ]
})
export class AppRoutingModule { }
