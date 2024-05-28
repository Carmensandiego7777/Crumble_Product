import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products: any;
  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.products = this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
}
