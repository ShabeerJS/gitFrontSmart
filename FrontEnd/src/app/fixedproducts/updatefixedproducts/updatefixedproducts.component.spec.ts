import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefixedproductsComponent } from './updatefixedproducts.component';

describe('UpdatefixedproductsComponent', () => {
  let component: UpdatefixedproductsComponent;
  let fixture: ComponentFixture<UpdatefixedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatefixedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatefixedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
