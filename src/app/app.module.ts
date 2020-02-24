import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';
import { NgtUniversalModule } from '@ng-toolkit/universal';

import { MetaModule } from '@ngx-meta/core';

//import 'hammerjs';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent, comingSoonDialogfooter } from './layout/footer/footer.component';


import { HomeComponent } from './component/home/home.component';
import { DemoMaterialModule } from 'src/material-module';
import { GeofenceFeaturesComponent } from './component/geofence-features/geofence-features.component';
import { HowItWorksComponent } from './component/how-it-works/how-it-works.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { MedicalListsComponent } from './component/medical-lists/medical-lists.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,

    HomeComponent,
    GeofenceFeaturesComponent,
    HowItWorksComponent,    
    comingSoonDialogfooter, 
    ContactUsComponent, 
    MedicalListsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MetaModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    TransferHttpCacheModule,
    HttpClientModule,
    NgtUniversalModule,
    DemoMaterialModule,  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [comingSoonDialogfooter]
})
export class AppModule { }
