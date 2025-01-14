import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginComponent } from './login/login.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { NavbarComponent } from '../login/components/navbar/navbar.component';
import { LinksComponent } from '../login/components/links/links.component';

import { LoginService } from './services/login.service';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { LogmailComponent } from './components/logmail/logmail.component';
import { RegisterComponent } from './components/register/register.component';
import { OtpComponent } from './components/otp/otp.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Login2Component } from './components/login2/login2.component';
import { RegService } from './services/login.service';
import { SharedService } from './services/login.service';
import { ForgotComponent } from './components/forgot/forgot.component';


@NgModule({ declarations: [
        LoginComponent,
        PopUpComponent,
        NavbarComponent,
        LinksComponent,
        InputComponent,
        ButtonComponent,
        LogmailComponent,
        RegisterComponent,
        OtpComponent,
        Login2Component,
        ForgotComponent,
    ],
    exports: [NavbarComponent, LinksComponent, InputComponent, ButtonComponent], imports: [CommonModule,
        LoginRoutingModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        FormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatSidenavModule
    ], providers: [LoginService, RegService,SharedService, provideHttpClient(withInterceptorsFromDi())] })
export class LoginModule {}
