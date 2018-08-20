import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvAllComponent } from './ev-all.component';

describe('EvAllComponent', () => {
	let component: EvAllComponent;
	let fixture: ComponentFixture<EvAllComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ EvAllComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EvAllComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
