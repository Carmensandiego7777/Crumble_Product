import { Component } from '@angular/core';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrl: './nav2.component.scss',
})
export class Nav2Component {
  title: string = 'Home';
  imglinks: string[] = [
    '../../../../assets/nav2/location.png',
    'https://img.icons8.com/fluency-systems-regular/48/shopping-bag--v1.png',
  ];
}
