import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { validData, otpData, loginData } from '../models/login-interface';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'https://192.168.1.149:7117';

  constructor(private http: HttpClient) {}

  createAccount(user: validData): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/create`, { ...user });
  }

  login(user: loginData): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login`, { ...user });
  }

  loginWithOtp(email:string): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/login/otp`, { email });

  }
  verifyAccount(token: otpData): Observable<any> {
    const newData = {
      email: token.email,
      otp: parseInt(token.otp),
    };
    return this.http.post(`${this.apiUrl}/user/verify`, { ...newData });
  }
}
