import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  title: string = 'CRUMBLE';
  links: string[] = ['offers', 'Help', 'Sign in', 'cart'];
  imglinks: string[] = [
    '../../../../assets/Logo.png',
    '../../../../assets/offer.png',
    '../../../../assets/help.png',
    '../../../../assets/user.png',
    'https://img.icons8.com/fluency-systems-regular/48/shopping-bag--v1.png',
    '../../../../assets/hamburger.png',
  ];
}
