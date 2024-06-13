import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LogmailComponent } from '../logmail/logmail.component';


import { Store } from '@ngrx/store';

import { setEmailid } from  '../../../../store/email/email.action';
import { EmailState } from '../../../../../app/store/email/email.reducer';
import { selectEmail } from '../../../../../app/store/email/email.selector';

import { validData, otpData, loginData } from '../../models/login-interface';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'], // Corrected property name
})
export class PopUpComponent {
  inputData: loginData[] = []; 
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    private loginSer: LoginService,
    private snackBar: MatSnackBar,
    private router: Router,
    private store: Store<{ email: EmailState }>,
    private dialog: MatDialog
  ) {}

  showToast(message: string) {
    this.snackBar.open(message, '', {
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

  phoneNumber: string = '';
  name: string = '';
  email: string = '';
  password: string = '';
  otp: string = '';

  logindata: loginData = {} as loginData;
  data: validData = {} as validData;
  otpdata: otpData = {} as otpData;

  // setData(emailid: string) {
  //   this.store.dispatch(setEmailid({ emailid }));
  //   this.getData();
  // }
  setData(data: any) {
    this.inputData.push(data); // Push data into inputData array
  }

get(){
  console.log(this.inputData)
}
  getData() {
    this.store.select('email').subscribe((data) => console.log(data));
  }

  toggleForm() {
    this.isActive = !this.isActive;
    this.isForm1Visible = !this.isForm1Visible;
  }

  login() {
    this.logindata = {
      email: this.email,
      password: this.password,
    };
    this.loginSer.login(this.logindata).subscribe({
      next: (res) => {
        localStorage.setItem('access_token', res.token);
        this.router.navigate(['/product']); // Redirect to product page
      },
      error: (err) => {
        this.showToast('Invalid login details, please register.');
        this.toggleForm(); // Show registration form
      }
    });
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
    this.loginSer.verifyAccount(this.otpdata).subscribe((res: any) => console.log(res));
  }

  create() {
    this.data = {
      name: this.name,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
    };
    this.loginSer.createAccount(this.data).subscribe((res: any) => console.log(res));
  }

  changeActive() {
    this.isActive = !this.isActive;
  }

  changeVisible(txt: string) {
    if (txt === 'Next') {
      this.canLogin = true;
      this.showToast('Proceed to login');
    } else if (txt === 'Login') {
      this.login();
    }
  }

  makereg(){
    this.isForm1Visible= true;
    this.isActive= true;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LogmailComponent, {
      width: 'auto',
      height: 'auto',
      maxWidth: '90vw', // optional, for responsiveness
      maxHeight: '90vh' // optional, for responsiveness
    });
}
}