import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiseComponent } from './advertise/advertise.component';
import { ContactComponent } from './contact/contact.component';
import { HelpmeComponent } from './helpme/helpme.component';
import { HomeComponent } from './home/home.component';
import { ListingpostComponent } from './listing-post/listingpost.component';
import { ManageComponent } from './manage/manage.component';
import { NopageComponent } from './nopage/nopage.component';
import { RentalPriceComponent } from './rental-price/rental-price.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'advertise', component:AdvertiseComponent, pathMatch:'full'},
  {path: 'signin', component:SigninComponent, pathMatch:'full'},
  {path: 'signup', component:SignupComponent, pathMatch:'full'},
  {path: 'help', component:HelpmeComponent, pathMatch:'full'},
  {path: 'contact', component:ContactComponent, pathMatch:'full'},
  {path: 'manage', component:ManageComponent, pathMatch:'full'},
  {path: 'price-my-rental', component:RentalPriceComponent,pathMatch:'full'},
  {path: 'post-a-listing',component:ListingpostComponent},


  {path:'**',component:NopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
