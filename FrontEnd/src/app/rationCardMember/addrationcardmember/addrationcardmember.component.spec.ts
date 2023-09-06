import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrationcardmemberComponent } from './addrationcardmember.component';

describe('AddrationcardmemberComponent', () => {
  let component: AddrationcardmemberComponent;
  let fixture: ComponentFixture<AddrationcardmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrationcardmemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrationcardmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
