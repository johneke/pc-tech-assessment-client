import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvPagedDataControlComponent } from './ev-paged-data-control.component';

describe('EvPagedDataControlComponent', () => {
  let component: EvPagedDataControlComponent;
  let fixture: ComponentFixture<EvPagedDataControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvPagedDataControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvPagedDataControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
