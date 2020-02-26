import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 

    this.meta.setTitle('Helios Medical Marketing - Contact Us');
    this.meta.setTag('og:description', 'Contact us TODAY and submit your queries and questions, and our Support Team at Helios Medical Marketing would be happy to have them answered for you as soon as we can.');
    this.meta.setTag('twitter:description', 'Contact us TODAY and submit your queries and questions, and our Support Team at Helios Medical Marketing would be happy to have them answered for you as soon as we can.');

    this.meta.setTag('og:keyword', 'Helios Medical Marketing Contact Us, Contact Helios Medical Marketing, Helios Medical Marketing Contact, Helios Medical Marketing Support');
    this.meta.setTag('twitter:keyword', 'Helios Medical Marketing Contact Us, Contact Helios Medical Marketing, Helios Medical Marketing Contact, Helios Medical Marketing Support');

    this.meta.setTag('og:title', 'Helios Medical Marketing - Contact Us');
    this.meta.setTag('twitter:title', 'Helios Medical Marketing - Contact Us');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo-fb.jpg');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo-twitter.jpg');

  }

  ngOnInit() {
  }

}
