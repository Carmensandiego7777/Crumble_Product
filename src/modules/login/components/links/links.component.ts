import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { ActivatedRoute } from '@angular/router';
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
  @Input() isDisplay: boolean = true;

  isActive = false;
  @Output() action = new EventEmitter();
  constructor(public dialog: MatDialog, private Routed: ActivatedRoute) {}
  ngOnInit() {
    // this.openModal();
    // console.log(this.Routed.url);
  }

  openModal() {
    if (this.txt == 'Sign in') {
      this.openDialog('0ms', '0ms');
    }
  }

  onActivate() {
    this.isActive = true;
  }

  onClick() {
    console.log('links');
    this.onActivate();
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
