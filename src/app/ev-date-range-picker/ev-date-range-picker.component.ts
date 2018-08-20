import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

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
  private range: EvRange = new EvRange(new Date('2000 01 01'), 10, EvRangeMode.YEARS);

  timeSpanMode: string = '' + this.range.timeSpanMode;
  timeSpanNumber: number = this.range.timeSpanNumber;

  constructor() { }

  @Output() rangeChange: EventEmitter<EvRange> = new EventEmitter();

  timeSpanModeChanged(event) {
  	this.range.timeSpanMode = Number(this.timeSpanMode);
  	this.rangeChange.emit(this.range);
  }

  timeSpanNumberChanged(event) {
  	this.range.timeSpanNumber = this.timeSpanNumber;
  	this.rangeChange.emit(this.range);
  }

  dateChanged(event) {
  	clearTimeout(this.dateDebounceTimer);

  	this.dateDebounceTimer = setTimeout(() => {
  		// this is nasty!
  		if (event.year && event.month && event.day) {
  			this.range.startDate = new Date(`${event.year} ${event.month} ${event.day}`);
  			this.rangeChange.emit(this.range);
  		} else {
  			let date = new Date(event);
  			if (!isNaN(date.getTime())) {
  				this.range.startDate = date;
  				this.rangeChange.emit(this.range);
  			} else {
  				// highlight red
  			}
  		}
  	}, EvDateRangePickerComponent.DEBOUNCE_TIME_MS);
  }

  ngOnInit() {
  }
}
