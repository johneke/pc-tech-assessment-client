export class EvEvent {
  date: Date;
  type: string;
  summary: string;
  size: number;
  details: string;
  
  constructor(date: Date, type: string, summary: string, size: number, details: string) {
  	this.date = date;
  	this.type = type;
  	this.summary = summary;
  	this.size = size;
  	this.details = details;
  }

}