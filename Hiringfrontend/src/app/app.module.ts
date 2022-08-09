import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CardsComponent } from './cards/cards.component';
import { WorkerDashComponent } from './worker-dash/worker-dash.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditWorkProfileComponent } from './edit-work-profile/edit-work-profile.component';

import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SendTokenInterceptor } from './send-token.interceptor';
import { ScanTokenGuard } from './scan-token.guard';
import { CreateWorkerProfileComponent } from './create-worker-profile/create-worker-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    CardsComponent,
    WorkerDashComponent,
    GridListComponent,

    EmployeeDashComponent,
    HomepageComponent,
    EditWorkProfileComponent,
    LoginComponent,
    CreateWorkerProfileComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // { path: 'employees', component: EmployeeDashComponent },
      // { path: 'employees', component: WorkerDashComponent },

      //----------  test path
      { path: 'workers/signup', component: CreateWorkerProfileComponent },
      { path: 'editprofile', component: EditWorkProfileComponent },

      { path: 'home', component: HomepageComponent },

      // { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'employee', component: WorkerDashComponent },
      // { path: 'home', component: HomeComponent, canActivate: [ScanTokenGuard] },
      { path: 'signup', component: SignupComponent },
      {
        path: 'login',
        component: LoginComponent,
      },
      { path: '**', redirectTo: 'signup' },
    ]),
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SendTokenInterceptor,
      multi: true,
    },
    ScanTokenGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
