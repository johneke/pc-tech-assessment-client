import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvPaginatedTableComponent } from './ev-paginated-table.component';

describe('EvPaginatedTableComponent', () => {
  let component: EvPaginatedTableComponent;
  let fixture: ComponentFixture<EvPaginatedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvPaginatedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvPaginatedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
