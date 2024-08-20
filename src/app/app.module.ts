import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './FrontOffice/home-page/home-page.component';
import { AddRecComponent } from './FrontOffice/add-rec/add-rec.component';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AdminPageComponent } from './BackOffice/admin-page/admin-page.component';
import { RecListComponent } from './BackOffice/rec-list/rec-list.component';
<<<<<<< HEAD
import { ResponseComponent } from './BackOffice/response/response.component';
=======
import { PageAcceuilComponent } from './FrontOffice/page-acceuil/page-acceuil.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { SignupComponent } from './FrontOffice/signup/signup.component';
import { ReservationFormComponent } from './FrontOffice/reservation-form/reservation-form.component';
import { ManageReservationsComponent } from './BackOffice/manage-reservations/manage-reservations.component';
import { AdminReservationsComponent } from './BackOffice/admin-reservation/admin-reservation.component';
>>>>>>> a46320a66e6da45479f08a8647e64a8927cb9561
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddRecComponent,
    AdminPageComponent,
    RecListComponent,
<<<<<<< HEAD
    ResponseComponent
=======
    PageAcceuilComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ReservationFormComponent,
    ManageReservationsComponent,
    AdminReservationsComponent
>>>>>>> a46320a66e6da45479f08a8647e64a8927cb9561
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule
    
  ],
  providers: [
    
    provideClientHydration(),
    provideHttpClient(withFetch()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
