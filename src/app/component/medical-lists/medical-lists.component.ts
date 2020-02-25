import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-medical-lists',
  templateUrl: './medical-lists.component.html',
  styleUrls: ['./medical-lists.component.css']
})
export class MedicalListsComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Helios Medical Marketing - Medical Lists');
    this.meta.setTag('og:description', 'Helios Medical Marketing uses highly accurate Medically surveyed Database that is updated regularly in order to enable your marketing practices to target audiences with great precision.');
    this.meta.setTag('twitter:description', 'Helios Medical Marketing uses highly accurate Medically surveyed Database that is updated regularly in order to enable your marketing practices to target audiences with great precision.');

    this.meta.setTag('og:keyword', 'Helios Medical Marketing Medical Lists, Helios Medical Marketing Database, Database Helios Medical Marketing, Marketing Lists Helios Medical Marketing');
    this.meta.setTag('twitter:keyword', 'Helios Medical Marketing Medical Lists, Helios Medical Marketing Database, Database Helios Medical Marketing, Marketing Lists Helios Medical Marketing');

    this.meta.setTag('og:title', 'Helios Medical Marketing -  Medical Lists');
    this.meta.setTag('twitter:title', 'Helios Medical Marketing -  Medical Lists');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
    this.meta.setTag('twitter:image', 'https://all-frontend-assets.s3.amazonaws.com/helios/images/logo.png');
   }

  ngOnInit() {
  }

}
