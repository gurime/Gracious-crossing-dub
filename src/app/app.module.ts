import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { ManageComponent } from './manage/manage.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HelpmeComponent } from './helpme/helpme.component';
import { ContactComponent } from './contact/contact.component';
import { RentalPriceComponent } from './rental-price/rental-price.component';
import { ListingpostComponent } from './listing-post/listingpost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdvertiseComponent,
    ManageComponent,
    SigninComponent,
    SignupComponent,
    HelpmeComponent,
    ContactComponent,
    RentalPriceComponent,
    ListingpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
