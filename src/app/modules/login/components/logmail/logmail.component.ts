import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AuthInterceptorService } from '../../../../services/auth-interceptor.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-logmail',
  templateUrl: './logmail.component.html',
  styleUrl: './logmail.component.scss'
})
export class LogmailComponent {

email:string = "asrithtechsys@gmail.com";
password:string="Quantumdot123$";
  

  constructor(private snackBar: MatSnackBar, private loginservice:LoginService, private router: Router,private auth:AuthInterceptorService,public dialogRef: MatDialogRef<LoginComponent>){}



  showToast(message: string) {
    this.snackBar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 1000,
    });
  }
  login() {
const logindata ={
  email: this.email,
  password:  this.password,
}

    this.loginservice.login(logindata).subscribe({
      next: (res:any) => {
        console.log(res);
        localStorage.setItem('access_token', res.message.token);
        localStorage.setItem('uid', res.message.uid);
        localStorage.setItem("email", this.email);
        this.auth.setToken();
        this.router.navigate(['/home']); 
        this.dialogRef.close();
      },
      error: (err) => {
        this.showToast('Invalid login details, please register.');
        this.toggleForm();
      }
    });
  }
  toggleForm() {
    throw new Error('Method not implemented.');
  }
}
