import { TestBed, inject } from '@angular/core/testing';

import { EvHttpClientService } from './ev-http-client.service';

describe('EvHttpClientService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [EvHttpClientService]
		});
	});

	it('should be created', inject([EvHttpClientService], (service: EvHttpClientService) => {
		expect(service).toBeTruthy();
	}));
});
