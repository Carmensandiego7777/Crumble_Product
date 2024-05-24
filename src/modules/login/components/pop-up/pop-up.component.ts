import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';

import { validData, otpData, loginData } from '../../models/login-interface';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    private loginSer: LoginService
  ) {}

  form1Feilds: string[] = ['Email', 'Password', 'Otp'];
  form2Feilds: string[] = ['Name', 'Phone Number'];
  btnTxt: string[] = ['Login', 'Create Account', 'Verify'];

  isForm1Visible: boolean = true;
  isActive: boolean = false;

  phoneNumber: string = '999999999';
  name: string = 'madhu';
  email: string = 'madhusmart0173@gmail.com';
  password: string = 'Madhusmart0173@';
  otp: string = '1234';

  logindata: loginData = {} as loginData;

  data: validData = {
    name: this.name,
    email: this.email,
    password: this.password,
    phoneNumber: this.phoneNumber,
  };

  otpdata: otpData = {
    email: this.email,
    otp: this.otp,
  };

  toggleForm() {
    this.isActive = !this.isActive;
    this.isForm1Visible = !this.isForm1Visible;
  }

  login() {
    this.logindata = {
      email: this.email,
      password: this.password,
    };
    console.log(this.logindata.email);
    this.loginSer.login(this.logindata).subscribe((res) => console.log(res));
  }

  confirm() {
    this.otpdata = {
      email: this.email,
      otp: this.otp,
    };
    console.log(this.otpdata);
    this.loginSer
      .verifyAccount(this.otpdata)
      .subscribe((res: any) => console.log(res));
  }

  create() {
    this.loginSer
      .createAccount(this.data)
      .subscribe((res: any) => console.log(res));
  }

  changeActive() {
    this.isActive = !this.isActive;
  }
  changeVisible() {
    this.isForm1Visible = !this.isForm1Visible;
  }
  logined() {
    console.log('The page is directed to home');
  }
}
