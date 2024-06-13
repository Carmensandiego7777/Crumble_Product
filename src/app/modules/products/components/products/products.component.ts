import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../checkout/models/product';
import { CartService } from '../../../checkout/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  userId: number | undefined;
  placeholderItems = Array.from({ length: 4 }, (_, i) => i + 1);

  constructor(
    private productService: ProductsService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log("Fetching products...");

    this.route.paramMap.subscribe(params => {
      const userIdParam = params.get('id');
      if (userIdParam !== null) {
        this.userId = +userIdParam; // The '+' operator converts the string to a number
        if (!isNaN(this.userId)) {
          this.fetchProducts(this.userId);
        } else {
          console.error("Error: Invalid userId");
        }
      } else {
        console.error("Error: userId is null");
      }
    });
  }

  fetchProducts(userId: number) {
    this.productService.getProducts(userId).subscribe(
      (result) => {
        console.log("Received product data:", result);
        if (Array.isArray(result)) {
          this.products = result;
        } else if (result && typeof result === 'object') {
          this.products = [result];
        } else {
          console.error("Error: Expected an array of products, but got:", result);
        }
      },
      (error) => {
        console.error("Error fetching product data:", error);
      }
    );
  }

  fetch() {
    console.log(this.products);
  }
}
