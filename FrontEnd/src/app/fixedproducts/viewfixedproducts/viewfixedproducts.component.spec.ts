import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfixedproductsComponent } from './viewfixedproducts.component';

describe('ViewfixedproductsComponent', () => {
  let component: ViewfixedproductsComponent;
  let fixture: ComponentFixture<ViewfixedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewfixedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewfixedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
