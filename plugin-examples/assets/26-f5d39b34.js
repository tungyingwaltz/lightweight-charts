var v=Object.defineProperty;var P=(o,t,i)=>t in o?v(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var s=(o,t,i)=>(P(o,typeof t!="symbol"?t+"":t,i),i);import{o as b,d as C,C as m}from"./lightweight-charts.production-1dc8ab95.js";import{g as f}from"./sample-data-c7d89ab8.js";import{P as w}from"./plugin-base-c80b73a8.js";import{a as g,p as L}from"./positions-0a54307c.js";const h=21,x="M7.5,7.5 m -7,0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0 M4 7.5H11 M7.5 4V11",S=new Path2D(x),M=15;class y{constructor(t){s(this,"_y",0);s(this,"_data");this._data=t}update(t,i){if(this._data=t,!this._data.price){this._y=-1e4;return}this._y=i.priceToCoordinate(this._data.price)??-1e4}}class B{constructor(t){s(this,"_data");this._data=t}draw(t){this._data.visible&&t.useBitmapCoordinateSpace(i=>{const e=i.context,n=h,u=n+1,r=g(this._data.rightX-u,this._data.rightX-1,i.horizontalPixelRatio),a=L(this._data.y,i.verticalPixelRatio,n);e.fillStyle=this._data.color;const l=[5,0,0,5].map(p=>p*i.horizontalPixelRatio);e.beginPath(),e.roundRect(r.position,a.position,r.length,a.length,l),e.fill(),this._data.hovered&&(e.fillStyle=this._data.hoverColor,e.beginPath(),e.roundRect(r.position,a.position,r.length,a.length,l),e.fill()),e.translate(r.position+3*i.horizontalPixelRatio,a.position+3*i.verticalPixelRatio),e.scale(i.horizontalPixelRatio,i.verticalPixelRatio);const c=15/M;e.scale(c,c),e.strokeStyle=this._data.textColor,e.lineWidth=1,e.stroke(S)})}}class R extends y{renderer(){const t=this._data.crosshairColor;return new B({visible:this._data.visible,y:this._y,color:t,textColor:this._data.crosshairLabelColor,rightX:this._data.timeScaleWidth,hoverColor:this._data.hoverColor,hovered:this._data.hovered??!1})}zOrder(){return"top"}}class k extends w{constructor(i){super();s(this,"_paneViews");s(this,"_data",{visible:!1,hovered:!1,timeScaleWidth:0,crosshairLabelColor:"#000000",crosshairColor:"#ffffff",lineColor:"#000000",hoverColor:"#777777"});s(this,"_source");this._paneViews=[new R(this._data)],this._source=i}updateAllViews(){this._paneViews.forEach(i=>i.update(this._data,this.series))}priceAxisViews(){return[]}paneViews(){return this._paneViews}showAddLabel(i,e){const n=this.chart.options().crosshair.horzLine.labelBackgroundColor;this._data={visible:!0,price:i,hovered:e,timeScaleWidth:this.chart.timeScale().width(),crosshairColor:n,crosshairLabelColor:"#FFFFFF",lineColor:this._source.currentLineColor(),hoverColor:this._source.currentHoverColor()},this.updateAllViews(),this.requestUpdate()}hideAddLabel(){this._data.visible=!1,this.updateAllViews(),this.requestUpdate()}}const H={color:"#000000",hoverColor:"#777777",limitToOne:!0};class V{constructor(t,i,e){s(this,"_chart");s(this,"_series");s(this,"_options");s(this,"_labelButtonPrimitive");s(this,"_clickHandler",t=>this._onClick(t));s(this,"_moveHandler",t=>this._onMouseMove(t));this._chart=t,this._series=i,this._options={...H,...e},this._chart.subscribeClick(this._clickHandler),this._chart.subscribeCrosshairMove(this._moveHandler),this._labelButtonPrimitive=new k(this),i.attachPrimitive(this._labelButtonPrimitive),this._setCrosshairMode()}currentLineColor(){return this._options.color}currentHoverColor(){return this._options.hoverColor}_setCrosshairMode(){if(!this._chart)throw new Error("Unable to change crosshair mode because the chart instance is undefined");this._chart.applyOptions({crosshair:{mode:b.Normal}})}remove(){this._chart&&(this._chart.unsubscribeClick(this._clickHandler),this._chart.unsubscribeCrosshairMove(this._moveHandler)),this._series&&this._labelButtonPrimitive&&this._series.detachPrimitive(this._labelButtonPrimitive),this._chart=void 0,this._series=void 0}_onClick(t){const i=this._getMousePrice(t),e=this._distanceFromRightScale(t);i===null||e===null||e>h||!this._series||this._series.createPriceLine({price:i,color:this._options.color,lineStyle:C.Dashed})}_onMouseMove(t){const i=this._getMousePrice(t),e=this._distanceFromRightScale(t);if(i===null||e===null||e>h*2){this._labelButtonPrimitive.hideAddLabel();return}this._labelButtonPrimitive.showAddLabel(i,e<h)}_getMousePrice(t){return!t.point||!this._series?null:this._series.coordinateToPrice(t.point.y)}_distanceFromRightScale(t){if(!t.point||!this._chart)return null;const i=this._chart.timeScale().width();return Math.abs(i-t.point.x)}}const d=window.chart=m("chart",{autoSize:!0}),_=d.addLineSeries(),A=f();_.setData(A);new V(d,_,{color:"hotpink"});
