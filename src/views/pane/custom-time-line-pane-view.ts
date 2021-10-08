
import { Coordinate } from '../../model/coordinate';
import { CustomTimeLine } from '../../model/custom-time-line';
import { LineStyle } from '../../renderers/draw-line';
import { IPaneRenderer } from '../../renderers/ipane-renderer';
import { VerticalLineRenderer, VerticalLineRendererData } from '../../renderers/vertical-line-renderer';

import { IPaneView } from './ipane-view';

export class CustomTimeLinePaneView implements IPaneView {
	protected readonly _lineRendererData: VerticalLineRendererData = {
		width: 0,
		height: 0,
		x: 0 as Coordinate,
		color: 'rgba(0, 0, 0, 0)',
		lineWidth: 1,
		lineStyle: LineStyle.Solid,
		visible: false,
	};
	protected readonly _lineRenderer: VerticalLineRenderer = new VerticalLineRenderer();
	private _invalidated: boolean = true;

	private readonly _timeLine: CustomTimeLine;

	public constructor(timeLine: CustomTimeLine) {
		this._timeLine = timeLine;
		this._lineRenderer.setData(this._lineRendererData);
	}

	public update(): void {
		this._invalidated = true;
	}

	public renderer(height: number, width: number): IPaneRenderer | null {
		if (this._invalidated) {
			this._updateImpl(height, width);
			this._invalidated = false;
		}
		return this._lineRenderer;
	}

	protected _updateImpl(height: number, width: number): void {
		const data = this._lineRendererData;
		data.visible = false;

		const x = this._timeLine.xCoord();
		if (x === null) {
			return;
		}

		const lineOptions = this._timeLine.options();

		data.visible = true;
		data.x = x;
		data.color = lineOptions.color;
		data.width = width;
		data.height = height;
		data.lineWidth = lineOptions.lineWidth;
		data.lineStyle = lineOptions.lineStyle;
	}
}
