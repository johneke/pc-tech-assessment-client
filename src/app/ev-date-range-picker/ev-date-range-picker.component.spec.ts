import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvDateRangePickerComponent } from './ev-date-range-picker.component';

describe('EvDateRangePickerComponent', () => {
  let component: EvDateRangePickerComponent;
  let fixture: ComponentFixture<EvDateRangePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvDateRangePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvDateRangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
