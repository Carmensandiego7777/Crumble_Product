import { Component } from '@angular/core';
import { LoginService, RegService, UpdateOtpPassword,  } from '../../services/login.service';
import { Router } from '@angular/router';
import { loginData } from '../../models/login-interface';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.scss',
})
export class Login2Component {
  email: string = '';
  password: string = '';
  forgot: boolean = false;
  passcode: boolean = false;


  ngOnInit(){

    localStorage.setItem('email', this.email);
  }

  handleEmailChange(email: string) {
    this.email = email;
    console.log('Email changed:', this.email);

  }

  handlePasswordChange(password: string) {
    this.password = password;
    console.log('Password changed:', this.password);
  }

 
  constructor(private regService: RegService,private router: Router, private loginService: LoginService,) { }

  
  toggleReg() {
    this.regService.reg = true; 
    console.log(this.regService.reg);
    this.router.navigate(['/login']);
  }

  toggleLoginForgot(){
this.forgot = !this.forgot;
  }


  
submitLogin() {
  const user: loginData = {
    email: this.email,
    password: this.password
  };

  this.loginService.login(user).subscribe(
    response => {
      console.log('Logged in successfully', response);
      setTimeout(() => {
        
        this.router.navigate(['/home']);
      }, 1000);
      

    },
    error => {
      console.error('Error creating user:');
      alert('Invalid username or password');
    }
  )
}


    
}
