import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Reclamation } from './models/reclamation';
import {HomePageComponent} from './FrontOffice/home-page/home-page.component';
import {AddRecComponent} from './FrontOffice/add-rec/add-rec.component';
import {AdminPageComponent}from './BackOffice/admin-page/admin-page.component';
import {RecListComponent} from './BackOffice/rec-list/rec-list.component';
import {ResponseComponent}from './BackOffice/response/response.component';
const routes: Routes = [
 
  
  { path: '', component: HomePageComponent },
  { path: 'add-rec', component: AddRecComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'rec-list', component: RecListComponent },
  { path: 'respond/:id', component: ResponseComponent },

  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
