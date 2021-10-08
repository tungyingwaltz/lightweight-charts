import { CustomTimeLine } from '../model/custom-time-line';
import { TimeLineOptions } from '../model/time-line-options';

import { ITimeLine } from './itime-line';

export class TimeLine implements ITimeLine {
	private readonly _timeLine: CustomTimeLine;

	public constructor(timeLine: CustomTimeLine) {
		this._timeLine = timeLine;
	}

	public applyOptions(options: Partial<TimeLineOptions>): void {
		this._timeLine.applyOptions(options);
	}
	public options(): Readonly<TimeLineOptions> {
		return this._timeLine.options();
	}

	public timeLine(): CustomTimeLine {
		return this._timeLine;
	}
}
