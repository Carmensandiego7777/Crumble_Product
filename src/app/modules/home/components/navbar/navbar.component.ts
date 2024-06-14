import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterceptorService } from '../../../../services/auth-interceptor.service';

@Component({
  selector: 'app1-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  title: string = 'CRUMBLE';
  links: string[] = ['offers', 'Home', 'LogOut', 'Cart'];
  imglinks: string[] = [
    '../../../../assets/Logo.png',
    '../../../../assets/nav2/home.png',
   
    '../../../../assets/user.png',
    '../../../../assets/nav2/heart.png',
    '../../../../assets/cart.png',

  ];

  isActive = false;
  
  constructor(private router:Router, private auth:AuthInterceptorService){}

  onActivate() {
    this.isActive = true;
  }

  checkout(){
    this.router.navigate(['/checkout']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  login(){
    this.auth.logout();
      this.router.navigate(['/login'])
  }
}
