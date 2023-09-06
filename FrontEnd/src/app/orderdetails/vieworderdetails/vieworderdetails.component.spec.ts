import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworderdetailsComponent } from './vieworderdetails.component';

describe('VieworderdetailsComponent', () => {
  let component: VieworderdetailsComponent;
  let fixture: ComponentFixture<VieworderdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieworderdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VieworderdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
