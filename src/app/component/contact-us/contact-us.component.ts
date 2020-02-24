import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private readonly meta: MetaService) { 

    this.meta.setTitle('Helios Medical Marketing - Contact Me');
    this.meta.setTag('og:description', 'Get in touch with Helios Medical Marketing today to learn how his programs can help you or your employees in improving their performances in the workplace, as well as create better lives for themselves.');
    this.meta.setTag('twitter:description', 'Get in touch with Helios Medical Marketing today to learn how his programs can help you or your employees in improving their performances in the workplace, as well as create better lives for themselves.');

    this.meta.setTag('og:keyword', 'Helios Medical Marketing Contact, Contact Helios Medical Marketing, Helios Medical Marketing Contact Us');
    this.meta.setTag('twitter:keyword', 'Helios Medical Marketing Contact, Contact Helios Medical Marketing, Helios Medical Marketing Contact Us');

    this.meta.setTag('og:title', 'Helios Medical Marketing - Contact Me');
    this.meta.setTag('twitter:title', 'Helios Medical Marketing - Contact Me');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');

  }

  ngOnInit() {
  }

}
