import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './component/home/home.component';
import { GeofenceFeaturesComponent } from './component/geofence-features/geofence-features.component';
import { HowItWorksComponent } from './component/how-it-works/how-it-works.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { MedicalListsComponent } from './component/medical-lists/medical-lists.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'geofence-features', component: GeofenceFeaturesComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'medical-lists', component: MedicalListsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
