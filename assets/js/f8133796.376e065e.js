"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9169],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),o=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=o(a),u=n,f=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return a?r.createElement(f,p(p({ref:t},c),{},{components:a})):r.createElement(f,p({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,p[1]=s;for(var o=2;o<i;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82798:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={id:"SeriesDataItemTypeMap",title:"Interface: SeriesDataItemTypeMap",sidebar_label:"SeriesDataItemTypeMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,s={unversionedId:"api/interfaces/SeriesDataItemTypeMap",id:"version-3.8/api/interfaces/SeriesDataItemTypeMap",title:"Interface: SeriesDataItemTypeMap",description:"Represents the type of data that a series contains.",source:"@site/versioned_docs/version-3.8/api/interfaces/SeriesDataItemTypeMap.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesDataItemTypeMap",permalink:"/lightweight-charts/docs/3.8/api/interfaces/SeriesDataItemTypeMap",draft:!1,editUrl:null,tags:[],version:"3.8",sidebarPosition:0,frontMatter:{id:"SeriesDataItemTypeMap",title:"Interface: SeriesDataItemTypeMap",sidebar_label:"SeriesDataItemTypeMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},l={},o=[{value:"Properties",id:"properties",level:2},{value:"Bar",id:"bar",level:3},{value:"Candlestick",id:"candlestick",level:3},{value:"Area",id:"area",level:3},{value:"Baseline",id:"baseline",level:3},{value:"Line",id:"line",level:3},{value:"Histogram",id:"histogram",level:3}],c={toc:o},h="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents the type of data that a series contains."),(0,n.kt)("p",null,"For example a bar series contains ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/BarData"},"BarData")," or ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/WhitespaceData"},"WhitespaceData"),"."),(0,n.kt)("h2",{id:"properties"},"Properties"),(0,n.kt)("h3",{id:"bar"},"Bar"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"Bar"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/BarData"},(0,n.kt)("inlineCode",{parentName:"a"},"BarData"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/WhitespaceData"},(0,n.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.kt)("p",null,"The types of bar series data."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"candlestick"},"Candlestick"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"Candlestick"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/CandlestickData"},(0,n.kt)("inlineCode",{parentName:"a"},"CandlestickData"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/WhitespaceData"},(0,n.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.kt)("p",null,"The types of candlestick series data."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"area"},"Area"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"Area"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/SingleValueData"},(0,n.kt)("inlineCode",{parentName:"a"},"SingleValueData"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/WhitespaceData"},(0,n.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.kt)("p",null,"The types of area series data."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"baseline"},"Baseline"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"Baseline"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/SingleValueData"},(0,n.kt)("inlineCode",{parentName:"a"},"SingleValueData"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/WhitespaceData"},(0,n.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.kt)("p",null,"The types of baseline series data."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"line"},"Line"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"Line"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/LineData"},(0,n.kt)("inlineCode",{parentName:"a"},"LineData"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/WhitespaceData"},(0,n.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.kt)("p",null,"The types of line series data."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"histogram"},"Histogram"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"Histogram"),": ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/HistogramData"},(0,n.kt)("inlineCode",{parentName:"a"},"HistogramData"))," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/3.8/api/interfaces/WhitespaceData"},(0,n.kt)("inlineCode",{parentName:"a"},"WhitespaceData"))),(0,n.kt)("p",null,"The types of histogram series data."))}d.isMDXComponent=!0}}]);