import { Component, Input, OnInit } from '@angular/core';
import { EvPagedEvents } from '../ev-data-event/ev-paged-events'

@Component({
  selector: 'app-ev-paginated-table',
  templateUrl: './ev-paginated-table.component.html',
  styleUrls: ['./ev-paginated-table.component.css']
})
export class EvPaginatedTableComponent implements OnInit {
  constructor() { }

  @Input() events: EvPagedEvents;

  ngOnInit() {
  }

}
