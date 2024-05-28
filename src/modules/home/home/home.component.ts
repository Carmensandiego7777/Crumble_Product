import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EmailState } from '../../../app/store/email/email.state';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private store: Store<{ email: EmailState }>) {}
  ngOnInit() {
    this.store.select('email').subscribe((data) => console.log(data));
  }
}
