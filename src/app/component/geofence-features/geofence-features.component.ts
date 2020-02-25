import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-geofence-features',
  templateUrl: './geofence-features.component.html',
  styleUrls: ['./geofence-features.component.css']
})
export class GeofenceFeaturesComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Helios Medical Marketing - GEOFence Features');
    this.meta.setTag('og:description', 'Helios Medical Marketing’s GEOFence marketing tool will allow you to precisely target your preferred audiences, and deliver custom advertising content directly to their mobile devices.');
    this.meta.setTag('twitter:description', 'Helios Medical Marketing’s GEOFence marketing tool will allow you to precisely target your preferred audiences, and deliver custom advertising content directly to their mobile devices.');

    this.meta.setTag('og:keyword', 'Helios Medical Marketing GEOFencing, GEOFence Helios Medical Marketing, GEOFence Medical Marketing, GEOFence Marketing For Medical');
    this.meta.setTag('twitter:keyword', 'Helios Medical Marketing GEOFencing, GEOFence Helios Medical Marketing, GEOFence Medical Marketing, GEOFence Marketing For Medical');

    this.meta.setTag('og:title', 'Helios Medical Marketing - GEOFence Features');
    this.meta.setTag('twitter:title', 'Helios Medical Marketing - GEOFence Features');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
   }

  ngOnInit() {
  }

}
