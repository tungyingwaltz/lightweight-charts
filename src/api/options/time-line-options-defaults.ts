import { UTCTimestamp } from '../../model/time-data';
import { TimeLineOptions } from '../../model/time-line-options';
import { LineStyle } from '../../renderers/draw-line';

export const timeLineOptionsDefaults: TimeLineOptions = {
	color: '#FF0000',
	time: 0 as UTCTimestamp,
	lineStyle: LineStyle.Dashed,
	lineWidth: 1,
	axisLabelVisible: true,
	title: '',
};
