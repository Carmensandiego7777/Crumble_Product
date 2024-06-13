import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloproductComponent } from './soloproduct.component';

describe('SoloproductComponent', () => {
  let component: SoloproductComponent;
  let fixture: ComponentFixture<SoloproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SoloproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoloproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
