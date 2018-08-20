import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EvPagedEvents } from '../ev-data-event/ev-paged-events'
import { EvEvent } from '../ev-data-event/ev-event'

@Component({
	selector: 'app-ev-paginated-table',
	templateUrl: './ev-paginated-table.component.html',
	styleUrls: ['./ev-paginated-table.component.css']
})
export class EvPaginatedTableComponent implements OnInit {
	constructor() { }

	@Input() events: EvPagedEvents;

	@Output() pageChange: EventEmitter<number> = new EventEmitter();
	@Output() limitChange: EventEmitter<number> = new EventEmitter();
	@Output() eventDetail: EventEmitter<EvEvent> = new EventEmitter();

	pageChanged(event: number) {
		this.pageChange.emit(event);
	}

	limitChanged(event: number) {
		this.limitChange.emit(event);
	}

	eventDetailRequested(event: EvEvent) {
		this.eventDetail.emit(event);
	}

	ngOnInit() {
	}

}
