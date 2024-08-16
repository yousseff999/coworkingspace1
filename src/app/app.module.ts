import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './FrontOffice/home-page/home-page.component';
import { AddRecComponent } from './FrontOffice/add-rec/add-rec.component';
import { FormsModule } from '@angular/forms'; 
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AdminPageComponent } from './BackOffice/admin-page/admin-page.component';
import { RecListComponent } from './BackOffice/rec-list/rec-list.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddRecComponent,
    AdminPageComponent,
    RecListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    
  ],
  providers: [
    
    provideClientHydration(),
    provideHttpClient(withFetch()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
