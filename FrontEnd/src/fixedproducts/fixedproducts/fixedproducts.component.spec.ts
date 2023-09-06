import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedproductsComponent } from './fixedproducts.component';

describe('FixedproductsComponent', () => {
  let component: FixedproductsComponent;
  let fixture: ComponentFixture<FixedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
