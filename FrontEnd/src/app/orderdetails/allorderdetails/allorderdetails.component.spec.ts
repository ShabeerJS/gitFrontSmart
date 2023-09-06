import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllorderdetailsComponent } from './allorderdetails.component';

describe('AllorderdetailsComponent', () => {
  let component: AllorderdetailsComponent;
  let fixture: ComponentFixture<AllorderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllorderdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllorderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
