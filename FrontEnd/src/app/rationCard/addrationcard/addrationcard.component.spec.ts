import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrationcardComponent } from './addrationcard.component';

describe('AddrationcardComponent', () => {
  let component: AddrationcardComponent;
  let fixture: ComponentFixture<AddrationcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrationcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
