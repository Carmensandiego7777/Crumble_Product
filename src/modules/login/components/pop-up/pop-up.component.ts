import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';

import { setEmailid } from '../../../../app/store/email/email.action';
import { EmailState } from '../../../../app/store/email/email.reducer';
import { selectEmail } from '../../../../app/store/email/email.selector';

import { validData, otpData, loginData } from '../../models/login-interface';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
})
export class PopUpComponent {
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    private loginSer: LoginService,
    private snackBar: MatSnackBar,
    private Router: Router,
    private store: Store<{ email: EmailState }>
  ) {}

  showToast() {
    this.snackBar.open('User Found', '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1000,
    });
  }
  form1Feilds: string[] = ['Email', 'Password', 'Otp'];
  form2Feilds: string[] = ['Name', 'Phone Number'];
  btnTxt: string[] = ['Next', 'Login', 'Create Account', 'Verify'];

  isForm1Visible: boolean = true;
  canLogin: boolean = false;

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

  setData(emailid: string) {
    this.store.dispatch(setEmailid({ emailid }));
    this.getData();
  }
  getData() {
    this.store.select('email').subscribe((data) => console.log(data));
  }

  toggleForm() {
    this.isActive = !this.isActive;
    this.isForm1Visible = !this.isForm1Visible;
    // this.Router.navigate(['home']);
  }

  login() {
    this.logindata = {
      email: this.email,
      password: this.password,
    };
    console.log(this.logindata.email);
    this.loginSer.login(this.logindata).subscribe((res) => console.log(res));
  }

  forgetPassword() {
    this.toggleForm();
    this.loginSer.loginWithOtp(this.email).subscribe((res) => console.log(res));
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
  
  changeVisible(txt: string) {
    if (txt == 'Next') {
      this.canLogin = true;
      this.showToast();
    } else {
      this.login();
      this.isForm1Visible = !this.isForm1Visible;
    }
  }
  logined() {
    console.log('The page is directed to home');
  }
  changeToPass() {}
}
