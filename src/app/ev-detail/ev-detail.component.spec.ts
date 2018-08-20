import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvDetailComponent } from './ev-detail.component';

describe('EvDetailComponent', () => {
  let component: EvDetailComponent;
  let fixture: ComponentFixture<EvDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
