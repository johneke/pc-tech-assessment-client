export class EvEvent {
  constructor(
  	public id: string, 
  	public event_date: Date, 
  	public event_type: string, 
  	public event_summary: string, 
  	public event_size: number, 
  	public event_details: string) {
  }
}