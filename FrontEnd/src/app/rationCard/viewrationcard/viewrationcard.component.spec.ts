import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrationcardComponent } from './viewrationcard.component';

describe('ViewrationcardComponent', () => {
  let component: ViewrationcardComponent;
  let fixture: ComponentFixture<ViewrationcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrationcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewrationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
