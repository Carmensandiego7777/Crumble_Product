import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { HomeModule } from '../home/home.module';
import { CardComponent } from './components/card/card.component';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    ProductsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HomeModule
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
