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
  ngOnInit() {
    this.categoryService
      .getCategory()
      .subscribe((result) => (this.categoryData = result));
  }
}
