import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {


  private mobileBreakpoint = 671;
  private isMobileSubject = new BehaviorSubject<boolean>(window.innerWidth <= this.mobileBreakpoint);
  isMobile$ = this.isMobileSubject.asObservable();

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize() {
    this.isMobileSubject.next(window.innerWidth <= this.mobileBreakpoint);
  }
}
