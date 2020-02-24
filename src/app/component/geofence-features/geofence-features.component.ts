import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-geofence-features',
  templateUrl: './geofence-features.component.html',
  styleUrls: ['./geofence-features.component.css']
})
export class GeofenceFeaturesComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Helios Medical Marketing - Geofence Features');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', 'Helios Medical Marketing,Geofence Features, Targeted Digital Marketing, The Healthcare Industry');
    this.meta.setTag('twitter:keyword', 'Helios Medical Marketing, Geofence Features, Targeted Digital Marketing, The Healthcare Industry');

    this.meta.setTag('og:title', 'Helios Medical Marketing - Geofence Features');
    this.meta.setTag('twitter:title', 'Helios Medical Marketing - Geofence Features');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
   }

  ngOnInit() {
  }

}
