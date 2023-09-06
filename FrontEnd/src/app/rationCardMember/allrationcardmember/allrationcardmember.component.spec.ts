import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrationcardmemberComponent } from './allrationcardmember.component';

describe('AllrationcardmemberComponent', () => {
  let component: AllrationcardmemberComponent;
  let fixture: ComponentFixture<AllrationcardmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrationcardmemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllrationcardmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
