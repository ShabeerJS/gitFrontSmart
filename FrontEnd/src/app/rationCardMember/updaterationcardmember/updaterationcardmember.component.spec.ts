import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterationcardmemberComponent } from './updaterationcardmember.component';

describe('UpdaterationcardmemberComponent', () => {
  let component: UpdaterationcardmemberComponent;
  let fixture: ComponentFixture<UpdaterationcardmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterationcardmemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdaterationcardmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
