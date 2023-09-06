import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addrationcardmember1Component } from './addrationcardmember1.component';

describe('Addrationcardmember1Component', () => {
  let component: Addrationcardmember1Component;
  let fixture: ComponentFixture<Addrationcardmember1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Addrationcardmember1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addrationcardmember1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
