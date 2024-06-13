import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogmailComponent } from './logmail.component';

describe('LogmailComponent', () => {
  let component: LogmailComponent;
  let fixture: ComponentFixture<LogmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogmailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
