import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { NavbarComponent } from '../login/components/navbar/navbar.component';
import { LinksComponent } from '../login/components/links/links.component';

import { LoginService } from './services/login.service';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
@NgModule({
  declarations: [
    LoginComponent,
    PopUpComponent,
    NavbarComponent,
    LinksComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [LoginService],
})
export class LoginModule {}
