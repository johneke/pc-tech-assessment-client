import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import swal from 'sweetalert2';

import { EvHttpClientService } from '../ev-http-client.service';
import { EvEvent } from '../ev-data-event/ev-event';

@Component({
	selector: 'app-ev-detail',
	templateUrl: './ev-detail.component.html',
	styleUrls: ['./ev-detail.component.css']
})
export class EvDetailComponent implements OnInit {
	private id: string;
	private event: EvEvent = new EvEvent('', new Date(0), '', '', 0, '');

	constructor(private evHttpClientService: EvHttpClientService, private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe((params: Params) => {
			this.id = params['id'];

			this.evHttpClientService.event(this.id)
			.subscribe(
				(event: EvEvent) => {
					this.event = event;
				},
				error => {
					console.log('Error occured', error);

					swal({
						type: 'error',
						title: 'Oops...',
						text: 'Failed to load this event.'
					})
					.then((result) => {
						this.router.navigate(['/events']);
					});
				}
			);
		});
	}

}
