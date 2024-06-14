import { Component } from '@angular/core';
import { RegService } from '../services/login.service';
import { ResponsiveService } from '../../../services/responsive.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  reg:boolean = false;
  isMobile$: Observable<boolean>;
  constructor(private register: RegService, private screenService: ResponsiveService) {
    this.isMobile$ = this.screenService.isMobile$;
   }

  ngDoCheck(){
    this.reg = this.register.reg;
  }
}
