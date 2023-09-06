import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrationcardmemberComponent } from './viewrationcardmember.component';

describe('ViewrationcardmemberComponent', () => {
  let component: ViewrationcardmemberComponent;
  let fixture: ComponentFixture<ViewrationcardmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrationcardmemberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewrationcardmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
