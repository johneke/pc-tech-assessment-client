import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

import { EvRange } from '../ev-data-event/ev-range';
import { EvRangeMode } from '../ev-data-event/ev-range-mode';

@Component({
	selector: 'app-ev-date-range-picker',
	templateUrl: './ev-date-range-picker.component.html',
	styleUrls: ['./ev-date-range-picker.component.css']
})
export class EvDateRangePickerComponent implements OnInit {
	static readonly DEBOUNCE_TIME_MS = 500;

	private dateDebounceTimer: any;
	private invalidDate: string = '';

	private updatedRange: EvRange;
	// date held separately from the updatedRange var
	// needs special handling because it could be a string 
	// or a Date
	private startDate: any;

	constructor() { }

	@Input() range: EvRange;
	@Output() rangeChange: EventEmitter<EvRange> = new EventEmitter();

	timeSpanModeChanged(event) {
		this.rangeChange.emit(this.updatedRange);
	}

	timeSpanNumberChanged(event) {
		this.rangeChange.emit(this.updatedRange);
	}

	dateTyped(event) {
		clearTimeout(this.dateDebounceTimer);

		this.dateDebounceTimer = setTimeout(() => {
			if (event && this.isNgbDate(event)) {
				this.invalidDate = '';
				
				this.updatedRange.startDate = new Date(`${event.year} ${event.month} ${event.day}`);
				this.rangeChange.emit(this.updatedRange);
			} else {
				// highlight red
				this.invalidDate = 'border border-danger';
			}
		}, EvDateRangePickerComponent.DEBOUNCE_TIME_MS);
	}

	dateSelected(event) {
		this.invalidDate = '';
				
		this.updatedRange.startDate = new Date(`${event.year} ${event.month} ${event.day}`);
		this.rangeChange.emit(this.updatedRange);
	}

	ngOnInit() {
		this.updatedRange = this.range;
		this.startDate = new NgbDate(this.range.startDate.getFullYear(), this.range.startDate.getMonth() + 1, this.range.startDate.getDate());
	}

	private isNgbDate(obj: any) {
		return obj && obj.day && obj.month && obj.year;
	}
}
