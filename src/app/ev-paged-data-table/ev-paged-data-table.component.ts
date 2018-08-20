import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EvEvent } from '../ev-data-event/ev-event'

@Component({
  selector: 'app-ev-paged-data-table',
  templateUrl: './ev-paged-data-table.component.html',
  styleUrls: ['./ev-paged-data-table.component.css']
})
export class EvPagedDataTableComponent implements OnInit {

  constructor() { }

  @Input() events: Array<EvEvent>;

  @Output() eventDetail: EventEmitter<EvEvent> = new EventEmitter();

  details(event: EvEvent) {
  	this.eventDetail.emit(event);
  }

  ngOnInit() {
  }

}
