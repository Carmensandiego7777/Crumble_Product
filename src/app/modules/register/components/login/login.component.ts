import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Input() imgLink: string = '';
  @Input() siz: string = '';
  @Input() txt: string = '';
  @Input() isDisplay: boolean = true;


}
