import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterationcardComponent } from './updaterationcard.component';

describe('UpdaterationcardComponent', () => {
  let component: UpdaterationcardComponent;
  let fixture: ComponentFixture<UpdaterationcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdaterationcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdaterationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
