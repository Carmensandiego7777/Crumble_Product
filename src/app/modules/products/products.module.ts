import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { HomeModule } from '../home/home.module';
import { CardComponent } from './components/card/card.component';
import { ProductsService } from './services/products.service';
import {MatCardModule} from '@angular/material/card';
import { SoloproductComponent } from './components/soloproduct/soloproduct.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CheckoutModule } from '../checkout/checkout.module';
import { PlaceproductComponent } from './components/placeproduct/placeproduct.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CardComponent,
    SoloproductComponent,
    PlaceproductComponent
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HomeModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    CheckoutModule,

  ],
  providers: [ProductsService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
],
  
})
export class ProductsModule { }
