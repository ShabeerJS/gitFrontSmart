import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfixedproductsComponent } from './addfixedproducts.component';

describe('AddfixedproductsComponent', () => {
  let component: AddfixedproductsComponent;
  let fixture: ComponentFixture<AddfixedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfixedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfixedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
