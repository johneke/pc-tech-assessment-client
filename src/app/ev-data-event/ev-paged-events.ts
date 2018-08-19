import { EvEvent } from './ev-event'

export class EvPagedEvents {
  page: number;
  limit: number;
  totalPages: number;
  events: Array<EvEvent>
  
  constructor(page: number, limit: number, totalPages: number, events: Array<EvEvent>) {
  	this.page = page;
  	this.limit = limit;
  	this.totalPages = totalPages;
  	this.events = events;
  }

}