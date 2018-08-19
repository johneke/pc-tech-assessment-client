import { Component } from '@angular/core';
import { EvPagedEvents } from './ev-data-event/ev-paged-events';
import { EvEvent } from './ev-data-event/ev-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public events: EvPagedEvents = new EvPagedEvents(0, 20, 10, [
		new EvEvent(new Date(), 'random_type', 'this is the summary', 5004, 'these are the deets')
	]);
}
