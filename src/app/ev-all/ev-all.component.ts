import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  static readonly DEFAULT_LIMIT = 25;

  private startDate: number = 0;
  private endDate: number = null;
  private page: number = 0;
  private limit: number = EvAllComponent.DEFAULT_LIMIT;

  public events: EvPagedEvents;

  constructor(private evHttpClientService: EvHttpClientService, private router: Router) {
    this.events = new EvPagedEvents();
    this.loadPage();
  }

  loadPage() {
    this.evHttpClientService.events(this.startDate, this.endDate, this.page, this.limit)
    .subscribe((pagedEvents: EvPagedEvents) => {
      this.events = pagedEvents;
    });
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
