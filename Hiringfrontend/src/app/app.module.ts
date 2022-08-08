import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './cards/cards.component';
import { WorkerDashComponent } from './worker-dash/worker-dash.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditWorkProfileComponent } from './edit-work-profile/edit-work-profile.component';

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
    // FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // { path: 'employees', component: EmployeeDashComponent },
      // { path: 'employees', component: WorkerDashComponent },

      //----------  test path
      { path: 'employees/specific', component: WorkerDashComponent },
      { path: 'editprofile', component: EditWorkProfileComponent },

      { path: '', component: HomepageComponent },
      // { path: 'signup', component: SignupComponent },
    ]),
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ConfigInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
