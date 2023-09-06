import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrderedproductsComponent } from './my-orderedproducts.component';

describe('MyOrderedproductsComponent', () => {
  let component: MyOrderedproductsComponent;
  let fixture: ComponentFixture<MyOrderedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyOrderedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyOrderedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
