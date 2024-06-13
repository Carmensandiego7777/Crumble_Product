import { Component } from '@angular/core';

import { CategoryService } from '../../services/category.service';
import { categoryData } from '../../models/home';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
})
export class BodyComponent {
  constructor(private categoryService: CategoryService) {}

  categoryData: categoryData[] = [];
  // ngOnInit() {
  //   console.log("categoryData")
  //   this.categoryService
  //     .getCategory()
  //     .subscribe((result) => {
  //       console.log(result);
  //       return this.categoryData = result});
  // }

  ngOnInit() {
    console.log("Fetching category data...");
    this.categoryService.getCategory().subscribe(
      (result) => {
        console.log("Received category data:", result);
        if (result.status === "Ok" && result.message) {
          this.categoryData = result.message;
        } else {
          console.error("Error: Invalid data format received");
        }
      },
      (error) => {
        console.error("Error fetching category data:", error);
      }
    );
  }
}

