import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { Router,Route } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { SoloproductComponent } from '../soloproduct/soloproduct.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardData:any = {} 
  constructor(private router: Router,public dialog: MatDialog ) {}

  // openDialog() {
  //   const dialogRef = this.dialog.open(SoloproductComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }
  openDialog(event: MouseEvent): void {
    event.stopPropagation();
    this.dialog.open(SoloproductComponent, {
    // Apply the custom class here
      data: { cardData: this.cardData },
      // hasBackdrop: true,
    });
  }
  
  // ngOninit() {
  //   console.log(this.cardData);
  //   console.log("hello");
  // }
  // onCardClick(){
  //   this.router.navigate([`/${this.cardData.categoryId}/${this.cardData.id}`]);
  // }
}

