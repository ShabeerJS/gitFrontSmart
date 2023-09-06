import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfixedproductsComponent } from './allfixedproducts.component';

describe('AllfixedproductsComponent', () => {
  let component: AllfixedproductsComponent;
  let fixture: ComponentFixture<AllfixedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllfixedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllfixedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
