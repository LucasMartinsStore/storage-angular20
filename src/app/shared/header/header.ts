import { Component, OnInit } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [MenubarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  menuItems: MenuItem[] | undefined;

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
      },
      {
        label: 'Login',
        icon: PrimeIcons.USER,
        routerLink: '/login',
      },
      {
        label: 'Register',
        icon: PrimeIcons.USER_PLUS,
        routerLink: '/register',
      },
    ];
  }
}
