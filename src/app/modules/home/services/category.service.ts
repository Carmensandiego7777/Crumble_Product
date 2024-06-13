import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private apiUrl = environment.apiUrl;
  // private token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImMzZDQ0YzczLTIyZDctNDcyNy1hOTcyLTg3YjBhYzJhZWNlOCIsIm5iZiI6MTcxNjk4MTU0NywiZXhwIjoxNzE3NTg2MzQ3LCJpYXQiOjE3MTY5ODE1NDcsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcxMDYiLCJhdWQiOiJsb2NhbGhvc3QtYXBpIn0.v2rvYFQxJRv_hP17YLN_F_4s__sLiygSUm_W8yhTyB8';


  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    // return this.http.get('assets/data/category.json');
    return this.http.get(`${this.apiUrl}/user/product/categories`);
  }
}
