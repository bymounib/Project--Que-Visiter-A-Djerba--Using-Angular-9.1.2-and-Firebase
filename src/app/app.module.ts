import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
// Reactive Form
import { ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireAuthModule } from "@angular/fire/auth";

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';


import {FormsModule} from '@angular/forms';

import {CrudService} from './shared/services/crud.service';


// Auth service
import { AuthService } from "./shared/services/auth.service";
import { HomeComponent } from './components/home/home.component';

import { FooterComponent } from './components/footer/footer.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { PlacesComponent } from './components/places/places.component';
import { PlagesComponent } from './components/plages/plages.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';


@NgModule({
  declarations: [
    AppComponent,
    
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HomeComponent,
    
    FooterComponent,
    HotelsComponent,
    PlacesComponent,
    PlagesComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [AuthService , {provide: APP_BASE_HREF, useValue : '/' },CrudService],
  bootstrap: [AppComponent]
})

export class AppModule { }