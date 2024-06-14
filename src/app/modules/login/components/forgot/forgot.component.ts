import { Component } from '@angular/core';
import { LoginService, UpdateOtpPassword, } from '../../services/login.service';
import { otpData } from '../../models/login-interface';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.scss'
})
export class ForgotComponent {
email: string='';
redirect:boolean=false;
updatePassword:boolean=false;
otp:string='';

constructor(private loginser: LoginService) { }
handleEmailChange(email: string) {
  this.email = email;
  console.log('Email changed:', this.email);

}

handleOtpChange(otp: string) {
  this.otp = otp;
  console.log('otp changed:', this.otp);
}

submitLogin() {
  this.loginser.loginWithOtp(this.email).subscribe((
    response) => {
      console.log('otp successfully sent to mail', response);
      confirm("Please check your email for OTP"),
      this.redirect=true;
    },
    error => {
      console.error('OTP not sent to mail', error);
      alert('Invalid email');
    }
  )
}


submitLoginOtp() {
  const user:otpData  = {
    
    email: this.email,
    otp: this.otp
  };
  this.loginser.loginOtpVerify(user).subscribe(
    response => {
      console.log('otp verified successfully:', response);
      window.confirm("Kindly create new password ");
      
      
    },
    error => {
      console.error('Error otp:', error);
      alert("Invalid OTP")
      
    }
  );


}

}