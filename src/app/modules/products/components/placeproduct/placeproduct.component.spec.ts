import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceproductComponent } from './placeproduct.component';

describe('PlaceproductComponent', () => {
  let component: PlaceproductComponent;
  let fixture: ComponentFixture<PlaceproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaceproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
