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

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    CardsComponent,
    WorkerDashComponent,
    GridListComponent,
    // FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      // { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'employee', component: WorkerDashComponent },

      // { path: 'home', component: HomeComponent },
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
