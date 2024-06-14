import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError, BehaviorSubject, map } from 'rxjs';
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { validData, otpData, loginData } from '../models/login-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // createAccount(user: validData): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/user/create`, user).pipe(
  //     catchError(error => {
  //       console.error('Error creating user:', error);
  //       return throwError('Error creating user');
  //     })
  //   );
  // }

  createAccount(user: validData): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/create`, user).pipe(
      map((response: any) => {
        if (response.status === 'Error') {
          // Construct error message from response
          const errorMessage = 'The credentials are wrong. ' + response.message.map((msg: any) => msg.description).join(' ');
          throw new Error(errorMessage);
        } else if (response.status === 'Ok') {
          // Handle success response and proceed with OTP verification
          return { message: 'Proceed to OTP verification', data: response };
        } else {
          // Handle unexpected response
          throw new Error('Unexpected response from server');
        }
      }),
      catchError(error => {
        console.error('Error creating user:', error);
        return throwError(error.message || 'Error creating user');
      })
    );
  }

  login(user: loginData): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, user).pipe(
      tap((response: any) => {
        const token = response.message.token;
        if (token) {
          localStorage.setItem('access_token', token);
          console.log('access token', token)
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        return throwError(error);
      })
    );
  }

  loginWithOtp(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login/otp`, { email });
  }

  loginOtpVerify(user:otpData): Observable<any> {
    const newData ={
      email: user.email,
      otp: parseInt(user.otp),
    };
    return this.http.post(`${this.apiUrl}/user/login/verify/otp`, newData);
  }

  verifyAccount(token: otpData): Observable<any> {
    const newData = {
      email: token.email,
      otp: parseInt(token.otp),
    };
    return this.http.post(`${this.apiUrl}/user/verify`, newData);
  }
}

export class RegService {
  private _reg: boolean = false;

  get reg(): boolean {
    return this._reg;
  }

  set reg(value: boolean) {
    this._reg = value;
  }
}

export class SharedService {
  // Use BehaviorSubject to keep track of the shared property
  private sharedMail = new BehaviorSubject<string>('');
  
  // Observable to allow components to subscribe to changes
  sharedMail$ = this.sharedMail.asObservable();

  // Method to update the shared property
  setSharedProperty(value: string) {
    this.sharedMail.next(value);
  }
}
  export class UpdateOtpPassword {
    private updatePassword: boolean = false;
  
    get reg(): boolean {
      return this.updatePassword;
    }
  
    set reg(value: boolean) {
      this.updatePassword = value;
    }
  }
