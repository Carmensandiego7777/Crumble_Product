import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { validData, otpData, loginData } from '../models/login-interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  createAccount(user: validData): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/create`, user).pipe(
      catchError(error => {
        console.error('Error creating user:', error);
        return throwError('Error creating user');
      })
    );
  }

  login(user: loginData): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, user).pipe(
      tap((response: any) => {
        const token = response.token;
        if (token) {
          localStorage.setItem('access_token', token);
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

  verifyAccount(token: otpData): Observable<any> {
    const newData = {
      email: token.email,
      otp: parseInt(token.otp),
    };
    return this.http.post(`${this.apiUrl}/user/verify`, newData);
  }
}
