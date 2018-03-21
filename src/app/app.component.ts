import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <a
        *ngFor="let item of nav"
        [routerLink]="item.link"
        routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: item.exact }">
        {{ item.name }}</a>
    </div>
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Passengers',
      exact: false
    },
    {
      link: '/oops',
      name: '404',
      exact: false
    }
  ];
}
