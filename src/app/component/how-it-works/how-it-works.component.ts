import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 
    this.meta.setTitle('Helios Medical Marketing - How It Works');
    this.meta.setTag('og:description', '');
    this.meta.setTag('twitter:description', '');

    this.meta.setTag('og:keyword', 'Helios Medical Marketing, Targeted Digital Marketing, The Healthcare Industry');
    this.meta.setTag('twitter:keyword', 'Helios Medical Marketing, Targeted Digital Marketing, The Healthcare Industry');

    this.meta.setTag('og:title', 'Helios Medical Marketing -  How It Works');
    this.meta.setTag('twitter:title', 'Helios Medical Marketing -  How It Works');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
  }

  ngOnInit() {
  }

}
