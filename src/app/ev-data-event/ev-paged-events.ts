import { EvEvent } from './ev-event'

export class EvPagedEvents {
	
	constructor(
		public page: number = 0,
		public limit: number = 0, 
		public total_pages: number = 0, 
		public items: Array<EvEvent> = []) {
	}

}