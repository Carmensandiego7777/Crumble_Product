import { Component, Input } from '@angular/core';
import { otpData, validData } from '../../models/login-interface';
import { LoginService, RegService, SharedService } from '../../services/login.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.scss'
})
export class OtpComponent {
  email: string = '';
  OTP: string = '';
  verify: boolean= false;

  constructor(private sharedService: SharedService, private loginService: LoginService,private route: Router, private regis: RegService) {}
  ngOnInit() {
    this.sharedService.sharedMail$.subscribe(
      value => {
        this.email = value;
      }
    );
  }

 handleOtpChange(value: string) {
  this.OTP = value;
    console.log('Password changed:', this.OTP);

}

submitLogin() {
    
    
  const user:otpData  = {
    
    email: this.email,
    otp: this.OTP
  };


    
  

  this.loginService.verifyAccount(user).subscribe(
    response => {
      console.log('User created successfully:', response);
      this.verify= true;
      this.sharedService.setSharedProperty(this.email);
      this.regis.reg=false;
      window.confirm("Kindly Login ");
      this.route.navigate(['/login'])
      
    },
    error => {
      console.error('Error creating user:', error);
      alert("Invalid OTP")
      
    }
  );
}

}