import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RationCardComponent } from './ration-card.component';

describe('RationCardComponent', () => {
  let component: RationCardComponent;
  let fixture: ComponentFixture<RationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
