import { Component, Input } from '@angular/core';
import { LoginService, RegService, SharedService } from '../../services/login.service';
import { validData } from '../../models/login-interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

reg: boolean =false;
verify: boolean = false;

constructor(private regService: RegService,private loginService: LoginService,private sharedService: SharedService){}

ngOnInit(): void {
  this.reg = this.regService.reg; // Initialize component property with service value
}

// Method to toggle reg property
toggleReg() {
  this.reg = !this.reg;
  this.regService.reg = this.reg; // Update service with new value
  console.log(this.reg)
}
email: string = '';
  password: string = '';
  phoneNumber: string = '';
  name: string = '';
  isEmailValid: boolean = false;

  handleEmailChange(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
  if (emailRegex.test(email)) {
    this.email = email; 
    console.log('Email changed:', this.email);
    this.isEmailValid = true;
  } else {
    console.log('Invalid email format. Email not changed.');
    this.isEmailValid = false;
    // Optionally, you might want to notify the user or handle the invalid email case differently
  }
  }
  handleNameChange(name: string) {
    this.name = name;
    console.log('Name changed:', this.name);
  }
  handlePhoneNumberChange(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
    console.log('PhoneNumber changed:', this.phoneNumber);
  }

  handlePasswordChange(password: string) {
    this.password = password;
    console.log('Password changed:', this.password);
  }

  submitLogin() {
    
    
    const user: validData = {
      name: this.name,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber
    };

  
      
    

    this.loginService.createAccount(user).subscribe(
      response => {
        console.log('User created successfully:', response);
        this.verify= true;
        this.sharedService.setSharedProperty(this.email);
        window.confirm("Check your email for OTP");
        
      },
      error => {
        console.error('Error creating user:', error);
        alert(error);
        
      }
    );
  }

}
