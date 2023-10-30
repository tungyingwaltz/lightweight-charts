"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=l.createContext({}),s=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(o.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,m=c["".concat(o,".").concat(d)]||c[d]||k[d]||r;return n?l.createElement(m,a(a({ref:t},u),{},{components:n})):l.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:i,a[1]=p;for(var s=2;s<r;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19808:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var l=n(87462),i=(n(67294),n(3905));const r={id:"PriceLineOptions",title:"Interface: PriceLineOptions",sidebar_label:"PriceLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},a=void 0,p={unversionedId:"api/interfaces/PriceLineOptions",id:"api/interfaces/PriceLineOptions",title:"Interface: PriceLineOptions",description:"Represents a price line options.",source:"@site/docs/api/interfaces/PriceLineOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/PriceLineOptions",permalink:"/lightweight-charts/docs/next/api/interfaces/PriceLineOptions",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"PriceLineOptions",title:"Interface: PriceLineOptions",sidebar_label:"PriceLineOptions",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},s=[{value:"Properties",id:"properties",level:2},{value:"id",id:"id",level:3},{value:"price",id:"price",level:3},{value:"color",id:"color",level:3},{value:"lineWidth",id:"linewidth",level:3},{value:"lineStyle",id:"linestyle",level:3},{value:"lineVisible",id:"linevisible",level:3},{value:"axisLabelVisible",id:"axislabelvisible",level:3},{value:"title",id:"title",level:3},{value:"axisLabelColor",id:"axislabelcolor",level:3},{value:"axisLabelTextColor",id:"axislabeltextcolor",level:3}],u={toc:s},c="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a price line options."),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The optional ID of this price line."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"price"},"price"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"price"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Price line's value."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"color"},"color"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"color"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Price line's color."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"''")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linewidth"},"lineWidth"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lineWidth"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/#linewidth"},(0,i.kt)("inlineCode",{parentName:"a"},"LineWidth"))),(0,i.kt)("p",null,"Price line's width in pixels."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"1")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linestyle"},"lineStyle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lineStyle"),": ",(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LineStyle"},(0,i.kt)("inlineCode",{parentName:"a"},"LineStyle"))),(0,i.kt)("p",null,"Price line's style."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LineStyle#solid"},"Solid")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"linevisible"},"lineVisible"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"lineVisible"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Display line."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"axislabelvisible"},"axisLabelVisible"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"axisLabelVisible"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Display the current price value in on the price scale."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"title"},"title"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"title"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Price line's on the chart pane."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"''")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"axislabelcolor"},"axisLabelColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"axisLabelColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Background color for the axis label.\nWill default to the price line color if unspecified."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"''")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"axislabeltextcolor"},"axisLabelTextColor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"axisLabelTextColor"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Text color for the axis label."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Default Value"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"''")))}k.isMDXComponent=!0}}]);