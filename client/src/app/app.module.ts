// angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ProjectsComponent } from './projects/projects.component';

// Modules and Features
import { AdminModule } from './admin/admin.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppMaterialModule } from './app-material.module';
import { AgmCoreModule } from '@agm/core';

// Servicies
import { ContactsService } from './services/contacts.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ContactComponent,
    FooterComponent,
    ContactFormComponent,
    LoginComponent,
    ProjectsComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AdminModule,
    LoginRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBfKN7Tj1k1_zsWlBoawLbX7CETegnzp6M'
    })
  ],
  providers: [
    ContactsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
