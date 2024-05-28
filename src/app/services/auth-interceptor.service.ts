import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, BehaviorSubject, mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  private tokenSubject: BehaviorSubject<string>;
  constructor() {
    this.tokenSubject = new BehaviorSubject<string>(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImNiYzFiZjc2LTI3YTYtNGFkYS1hMWFmLTdlMGIxNWQzOGVhZSIsIm5iZiI6MTcxNjgxMzk1NywiZXhwIjoxNzE3NDE4NzU3LCJpYXQiOjE3MTY4MTM5NTcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMDYiLCJhdWQiOiJsb2NhbGhvc3QtYXBpIn0.jHEOKIXBI2Ttm19H4ADbICUpOq097W5ocDbpIxOVfew'
    );
  }

  setToken(token: string): void {
    this.tokenSubject.next(token);
    console.log(token);
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
}
