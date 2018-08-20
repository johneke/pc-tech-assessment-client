export class EvEvent {

	constructor(
		public id: string, 
		public event_date: Date, 
		public event_type: string, 
		public event_summary: string, 
		public event_size: number, 
		public event_details: string) {
	}

	formattedDates() {
		// return `${this.event_date.getFullYear()}-${this.event_date.getMonth() + 1}-${this.event_date.getDate()}`;
		return 'BLAH'
	}
}