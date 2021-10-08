import { merge } from '../helpers/strict-type-checks';

import { CustomTimeLinePaneView } from '../views/pane/custom-time-line-pane-view';
import { IPaneView } from '../views/pane/ipane-view';
import { CustomTimeLineTimeAxisView } from '../views/time-axis/custom-time-line-time-axis-view';

import { ChartModel } from './chart-model';
import { Coordinate } from './coordinate';
import { UTCTimestamp } from './time-data';
import { TimeLineOptions } from './time-line-options';

export class CustomTimeLine {
	private readonly _model: ChartModel;
	private readonly _timeLineView: CustomTimeLinePaneView;
	private readonly _timeAxisView: CustomTimeLineTimeAxisView;
	private readonly _options: TimeLineOptions;

	public constructor(model: ChartModel, options: TimeLineOptions) {
		this._model = model;
		this._options = options;
		this._timeLineView = new CustomTimeLinePaneView(this);
		this._timeAxisView = new CustomTimeLineTimeAxisView(model, this);
	}

	public applyOptions(options: Partial<TimeLineOptions>): void {
		merge(this._options, options);
		this.update();
		this._model.lightUpdate();
	}

	public options(): TimeLineOptions {
		return this._options;
	}

	public paneViews(): readonly IPaneView[] {
		return [
			this._timeLineView,
		];
	}

	public timeAxisView(): CustomTimeLineTimeAxisView {
		return this._timeAxisView;
	}

	public update(): void {
		this._timeLineView.update();
		this._timeAxisView.update();
	}

	public xCoord(): Coordinate | null {
		const timeScale = this._model.timeScale();

		if (timeScale.isEmpty()) {
			return null;
		}

		const timeIndex = timeScale.timeToIndex({ timestamp: this._options.time as UTCTimestamp }, false);
		if (timeIndex === null) {
			return null;
		}
		return timeScale.indexToCoordinate(timeIndex);
	}
}
