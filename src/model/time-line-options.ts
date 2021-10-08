import { LineStyle, LineWidth } from '../renderers/draw-line';

import { BusinessDay, UTCTimestamp } from './time-data';

export interface TimeLineOptions {
	time: UTCTimestamp | BusinessDay | string;
	color: string;
	lineWidth: LineWidth;
	lineStyle: LineStyle;
	axisLabelVisible: boolean;
	title: string;
}
