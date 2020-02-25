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
    this.meta.setTag('og:description', 'Learn how Helios Medical Marketing makes use of the latest and most effective marketing trends, tools and resources to reach out to your target audience and deliver custom advertisements.');
    this.meta.setTag('twitter:description', 'Learn how Helios Medical Marketing makes use of the latest and most effective marketing trends, tools and resources to reach out to your target audience and deliver custom advertisements.');

    this.meta.setTag('og:keyword', 'Helios Medical Marketing Functions, Helios Medical Marketing Methods, Helios Medical Marketing - How Does It Work, Methods Of Helios Medical Marketing');
    this.meta.setTag('twitter:keyword', 'Helios Medical Marketing Functions, Helios Medical Marketing Methods, Helios Medical Marketing - How Does It Work, Methods Of Helios Medical Marketing');

    this.meta.setTag('og:title', 'Helios Medical Marketing - How It Works');
    this.meta.setTag('twitter:title', 'Helios Medical Marketing - How It Works');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
  }

  ngOnInit() {
  }

}
