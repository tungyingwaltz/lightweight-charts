import { ChartModel } from '../../model/chart-model';
import { CustomTimeLine } from '../../model/custom-time-line';
import { UTCTimestamp } from '../../model/time-data';
import { TimeAxisViewRenderer, TimeAxisViewRendererData } from '../../renderers/time-axis-view-renderer';

import { ITimeAxisView } from './itime-axis-view';

export class CustomTimeLineTimeAxisView implements ITimeAxisView {
	private _invalidated: boolean = true;
	private readonly _renderer: TimeAxisViewRenderer = new TimeAxisViewRenderer();
	private readonly _rendererData: TimeAxisViewRendererData = {
		visible: true,
		background: '#4c525e',
		color: 'white',
		text: '',
		width: 0,
		coordinate: NaN,
	};
	private readonly _model: ChartModel;
	private readonly _timeLine: CustomTimeLine;

	public constructor(model: ChartModel, timeLine: CustomTimeLine) {
		this._model = model;
		this._timeLine = timeLine;
	}

	public update(): void {
		this._invalidated = true;
	}

	public renderer(): TimeAxisViewRenderer {
		if (this._invalidated) {
			this._updateImpl();
			this._invalidated = false;
		}

		this._renderer.setData(this._rendererData);

		return this._renderer;
	}

	private _updateImpl(): void {
		const data = this._rendererData;
		data.visible = false;

		const timeScale = this._model.timeScale();
		if (timeScale.isEmpty()) {
			return;
		}
		const lineOptions = this._timeLine.options();

		data.width = timeScale.width();

		data.coordinate = this._timeLine.xCoord() as number;
		data.text = timeScale.formatDateTime({ timestamp: lineOptions.time as UTCTimestamp });
		data.visible = true;

		data.background = lineOptions.color;
	}
}
