import { EvRangeMode } from './ev-range-mode';

export class EvRange {
	constructor(
		public startDate: Date,
		public timeSpanNumber: number,
		public timeSpanMode: EvRangeMode) {
	}
}