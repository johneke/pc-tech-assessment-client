import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvPagedDataTableComponent } from './ev-paged-data-table.component';

describe('EvPagedDataTableComponent', () => {
	let component: EvPagedDataTableComponent;
	let fixture: ComponentFixture<EvPagedDataTableComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EvPagedDataTableComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EvPagedDataTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
