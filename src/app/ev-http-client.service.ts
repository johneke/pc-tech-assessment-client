import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EvHttpClientService {
  constructor(private http: HttpClient) {
  }

  events(startDate?: number, endDate?: number, page?: number, limit?: number) {
  	let qs: any = {}

  	if (startDate) {
  		qs['startdate'] = startDate;
  	}

  	if (endDate) {
  		qs['enddate'] = endDate;
  	}

    if (page) {
      qs['page'] = page;
    }

    if (limit) {
      qs['limit'] = limit;
    }

  	return this.http.get('/api/v1/events', {'params': qs});
  }

  event(id: string) {
  	return this.http.get(`/api/v1/events/${id}`)
  }
}
