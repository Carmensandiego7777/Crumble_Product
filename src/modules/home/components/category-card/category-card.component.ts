import { Component, Input } from '@angular/core';
import { categoryData } from '../../models/home';

import { Router } from '@angular/router';
@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss',
})
export class CategoryCardComponent {
  constructor(private route: Router) {}
  @Input() cardData: categoryData = {} as categoryData;

  navigateTo() {
    this.route.navigate([`/category/${this.cardData.id}`]);
  }
}
