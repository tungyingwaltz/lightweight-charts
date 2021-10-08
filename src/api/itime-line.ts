import { TimeLineOptions } from '../model/time-line-options';

export interface ITimeLine {
	applyOptions(options: Partial<TimeLineOptions>): void;
	options(): Readonly<TimeLineOptions>;
}
