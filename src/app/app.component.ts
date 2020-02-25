import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public url;
  public loading: boolean = false;
  constructor(private router: Router) {
    /* Universal Loader for Reslove */
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          console.log(this.loading)
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          console.log(this.loading)
          break;
        }
        default: {
          break;
        }
      }
    });
  }
  title = 'helios-serverless';
}
