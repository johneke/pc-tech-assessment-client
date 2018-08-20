import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector: 'app-ev-paged-data-control',
	templateUrl: './ev-paged-data-control.component.html',
	styleUrls: ['./ev-paged-data-control.component.css']
})
export class EvPagedDataControlComponent implements OnInit {

	constructor() { }

	@Input() page: number;
	@Input() limit: number;
	@Input() totalPages: number;

	@Output() pageChange: EventEmitter<number> = new EventEmitter();

	pageChanged(event: number) {
		this.pageChange.emit(event);
	}

	ngOnInit() {
	}

}
