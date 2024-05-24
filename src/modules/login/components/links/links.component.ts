import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
})
export class LinksComponent {
  @Input() imgLink: string = '';
  @Input() siz: string = '';
  @Input() txt: string = '';

  @Output() action = new EventEmitter();
  constructor(public dialog: MatDialog) {}
  ngOnInit() {
    this.openModal();
  }

  openModal() {
    if (this.txt == 'Sign in') {
      this.openDialog('0ms', '0ms');
    }
  }

  onClick() {
    console.log('links');
    this.action.emit();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(PopUpComponent, {
      width: '300px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        txt: 'name',
      },
    });
  }
}
