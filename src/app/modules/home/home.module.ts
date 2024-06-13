import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoginModule } from '../login/login.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Nav2Component } from './components/nav2/nav2.component';
import { BodyComponent } from './components/body/body.component';

import { CategoryService } from './services/category.service';

import { CategoryCardComponent } from './components/category-card/category-card.component';
import { Nav3Component } from './components/nav3/nav3.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    Nav2Component,
    BodyComponent,
    CategoryCardComponent,
    Nav3Component,
  ],
  imports: [CommonModule, HomeRoutingModule, LoginModule, HttpClientModule, ],
  bootstrap: [HomeComponent],
  exports:[NavbarComponent,Nav3Component],
  providers: [CategoryService],
})
export class HomeModule {}
