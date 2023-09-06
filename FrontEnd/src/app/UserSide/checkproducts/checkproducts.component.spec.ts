import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckproductsComponent } from './checkproducts.component';

describe('CheckproductsComponent', () => {
  let component: CheckproductsComponent;
  let fixture: ComponentFixture<CheckproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
