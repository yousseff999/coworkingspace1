import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reclamation } from './models/reclamation';
import {HomePageComponent} from './FrontOffice/home-page/home-page.component';
import {AddRecComponent} from './FrontOffice/add-rec/add-rec.component';
import {AdminPageComponent}from './BackOffice/admin-page/admin-page.component';
import {RecListComponent} from './BackOffice/rec-list/rec-list.component';
<<<<<<< HEAD
import {ResponseComponent}from './BackOffice/response/response.component';
=======
import { HeaderComponent } from './FrontOffice/header/header.component';
import { PageAcceuilComponent } from './FrontOffice/page-acceuil/page-acceuil.component';
import { LoginComponent } from './FrontOffice/login/login.component';
import { SignupComponent } from './FrontOffice/signup/signup.component';
import { ReservationFormComponent } from './FrontOffice/reservation-form/reservation-form.component';
import { ManageReservationsComponent } from './BackOffice/manage-reservations/manage-reservations.component';
import { AdminReservationsComponent } from './BackOffice/admin-reservation/admin-reservation.component';


>>>>>>> a46320a66e6da45479f08a8647e64a8927cb9561
const routes: Routes = [
 
  
  { path: '', component: HomePageComponent },
  { path: 'add-rec', component: AddRecComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'rec-list', component: RecListComponent },
<<<<<<< HEAD
  { path: 'respond/:id', component: ResponseComponent },
=======
  {path: 'pageAcceuil', component:PageAcceuilComponent  , children:[
    { path: 'make-reservation', component: ReservationFormComponent },
    { path: 'manage-reservations', component: ManageReservationsComponent },
    
  ]},
  { path:'login',component:LoginComponent},
   { path:'signup',component:SignupComponent},
   { path: 'admin/reservations', component: AdminReservationsComponent },
>>>>>>> a46320a66e6da45479f08a8647e64a8927cb9561

  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
