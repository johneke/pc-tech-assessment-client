import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvPagedDataSizeComponent } from './ev-paged-data-size.component';

describe('EvPagedDataSizeComponent', () => {
  let component: EvPagedDataSizeComponent;
  let fixture: ComponentFixture<EvPagedDataSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvPagedDataSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvPagedDataSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
