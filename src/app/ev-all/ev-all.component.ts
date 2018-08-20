import { Component } from '@angular/core';
import { Router } from '@angular/router';

import swal from 'sweetalert2';

import { EvPagedEvents } from '../ev-data-event/ev-paged-events';
import { EvEvent } from '../ev-data-event/ev-event';
import { EvHttpClientService } from '../ev-http-client.service';
import { EvRange } from '../ev-data-event/ev-range';
import { EvRangeMode } from '../ev-data-event/ev-range-mode';

@Component({
	selector: 'app-root',
	templateUrl: './ev-all.component.html',
	styleUrls: ['./ev-all.component.css']
})
export class EvAllComponent {
	static readonly DEFAULT_LIMIT: number = 25;
	static readonly DEFAULT_START_DATE: Date = new Date('2010 01 01');
	static readonly DEFAULT_TIMESPAN_NUMBER: number = 10;
	static readonly DEFAULT_TIMESPAN_MODE: EvRangeMode = EvRangeMode.YEARS;

	private startDate: number;
	private endDate: number;
	private page: number;
	private limit: number;

	private events: EvPagedEvents;
	private range: EvRange;
	private loading: boolean;

	constructor(private evHttpClientService: EvHttpClientService, private router: Router) {
		this.events = new EvPagedEvents();
		this.range = new EvRange(
			EvAllComponent.DEFAULT_START_DATE, 
			EvAllComponent.DEFAULT_TIMESPAN_NUMBER, 
			EvAllComponent.DEFAULT_TIMESPAN_MODE
		);
		this.loading = false;

		this.startDate = this.range.startDate.getTime();
		this.endDate = null;
		this.page = 0;
		this.limit = EvAllComponent.DEFAULT_LIMIT;

		this.loadPage();
	}

	loadPage() {
		this.loading = true;

		this.evHttpClientService.events(this.startDate, this.endDate, this.page, this.limit)
		.subscribe(
			(pagedEvents: EvPagedEvents) => {
				this.loading = false;
				this.events = pagedEvents
			},
			error => {
				this.loading = false;
				console.log('Error occured', error);

				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Failed to fetch events from server :('
				});
			}
		);
	}

	rangeChanged(event: EvRange) {
		this.page = 0; // reset page
		this.startDate = event.startDate.getTime();
		this.endDate = this.calculateEndDate(event);
		this.loadPage();
	}

	pageChanged(event: number) {
		this.page = event - 1;
		this.loadPage();
	}

	limitChanged(event: number) {
		this.limit = event;
		this.loadPage();
	}

	eventDetailRequested(event: EvEvent) {
		this.router.navigate(['/events', event.id]);
	}

	private calculateEndDate(range: EvRange): number {
		let numDays;
		const DAYS_TO_MS = 86400000;

		switch (range.timeSpanMode) {
			case EvRangeMode.DAYS:
				numDays = 1;
				break;

			case EvRangeMode.MONTHS:
				numDays = 30;
				break;

			case EvRangeMode.YEARS:
				numDays = 365;
				break;
			
			default:
				throw 'Got unknown timeSpanMode: ' + range.timeSpanMode;
		}

		return range.startDate.getTime() + (range.timeSpanNumber * numDays * DAYS_TO_MS);
	}
}
