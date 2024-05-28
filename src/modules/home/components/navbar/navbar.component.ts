import { Component } from '@angular/core';

@Component({
  selector: 'app1-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  title: string = 'CRUMBLE';
  links: string[] = ['offers', 'Home', 'Sign in', 'liked'];
  imglinks: string[] = [
    '../../../../assets/Logo.png',
    '../../../../assets/nav2/home.png',
    '../../../../assets/offer.png',
    '../../../../assets/user.png',
    '../../../../assets/nav2/heart.png',
  ];

  isActive = false;

  onActivate() {
    this.isActive = true;
  }
}
