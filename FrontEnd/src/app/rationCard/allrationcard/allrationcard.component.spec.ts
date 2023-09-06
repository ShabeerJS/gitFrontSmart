import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrationcardComponent } from './allrationcard.component';

describe('AllrationcardComponent', () => {
  let component: AllrationcardComponent;
  let fixture: ComponentFixture<AllrationcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrationcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllrationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
