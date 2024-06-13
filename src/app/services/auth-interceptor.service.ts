import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, BehaviorSubject, mergeMap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AuthInterceptorService implements HttpInterceptor {

  
  private excludedRoutes: string[] = [`${environment.apiUrl}/user/login`];
  private tokenSubject: BehaviorSubject<string>;
  public email: string;
  public access_token: string;
  constructor() {
    this.tokenSubject = new BehaviorSubject<string>(
      localStorage.getItem("access_token") ?? ''
    );
    this.email = localStorage.getItem('email') ?? '';
    this.access_token = localStorage.getItem('access_token')??"";
  }

  setToken(): void {

    const token = localStorage.getItem("access_token") || "";
    console.log("New token set:", token);
    this.tokenSubject.next(token);
   
  }

  getToken(): Observable<string> {
    return this.tokenSubject.asObservable();
  }

  getEmail(): string {
    return localStorage.getItem('email') || '';
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (this.isExcludedRoute(request.url)) {
      return next.handle(request);
    }

    console.log(request.url);
    return this.getToken().pipe(
      mergeMap((token: string) => {
        const authRequest = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`,
          },
        });
        return next.handle(authRequest);
      })
    );
  }

  private isExcludedRoute(url: string): boolean {
    // Check if the request URL matches any of the excluded routes
    return this.excludedRoutes.some(route => url.includes(route));
  }
}
