(self["webpackChunkwly_ui"]=self["webpackChunkwly_ui"]||[]).push([[50],{3928:function(e,t,r){"use strict";r.d(t,{Tm:function(){return i}});var n=r(7294),a=n.isValidElement;function l(e,t,r){return a(e)?n.cloneElement(e,"function"===typeof r?r(e.props||{}):r):t}function i(e,t){return l(e,e,t)}},1458:function(e,t,r){"use strict";r.r(t);var n=r(5838),a=r(7294),l={height:"160px",color:"#fff",lineHeight:"160px",textAlign:"center",background:"#364d79"};function i(e){console.log(e)}t["default"]=()=>a.createElement(n.Z,{afterChange:i},a.createElement("div",null,a.createElement("h3",{style:l},"1")),a.createElement("div",null,a.createElement("h3",{style:l},"2")),a.createElement("div",null,a.createElement("h3",{style:l},"3")),a.createElement("div",null,a.createElement("h3",{style:l},"4")))},7653:function(e,t,r){"use strict";r.r(t);var n=r(5838),a=r(2874),l=r(7294),i=["https://cdn.pixabay.com/photo/2016/12/10/11/50/beach-1897129_1280.jpg","https://cdn.pixabay.com/photo/2018/12/17/08/20/sea-island-3879938_1280.jpg","https://cdn.pixabay.com/photo/2018/12/17/08/20/sea-island-3879937_1280.jpg"];t["default"]=()=>l.createElement(n.Z,{grallery:l.createElement(a.Z,{showQuantity:3,gap:10,itemWidth:45,itemClick:(e,t)=>{t(e),console.log(e)},active:"swiper-active"},i.map((e=>l.createElement("img",{style:{borderRadius:"0.75rem"},key:e+"dots",src:e,alt:""}))))},i.map((e=>l.createElement("div",{key:e,className:"displayItem"},l.createElement("img",{className:"displayItemImg",src:e,alt:""})))))},5838:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(8573),a=r(2663),l=r(7294),i={},c=e=>{var t=(0,a.Z)((0,a.Z)({},i),e),r=l.useRef(null);return l.createElement("div",{ref:r,className:t.activeKey===t.myKey?"swiper-slide swiper-slide-active":"swiper-slide",style:t.activeKey===t.myKey?{opacity:"1",transition:"opacity 300ms",width:t.width,transform:"translate(".concat(t.width*t.myKey*-1,"px)")}:{opacity:"0",transition:"opacity 300ms",width:t.width,transform:"translate(".concat(t.width*t.myKey*-1,"px)")}},t.children)},o=c;function s(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{leading:!1,trailing:!0},n=null;return()=>{var a=!1;null==n&&r.leading&&(e.apply(void 0,arguments),a=!0),n&&clearTimeout(n),n=setTimeout((()=>{r.trailing&&!a&&e.apply(void 0,arguments),n=null}),t)}}function u(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];var i=(0,l.useRef)(!0);(0,l.useEffect)((()=>{i.current?i.current=!1:e.apply(void 0,n)}),t)}var m=r(3928),d={},h=e=>{var t=(0,a.Z)((0,a.Z)({},d),e),r=(0,l.useState)(0),i=(0,n.Z)(r,2),c=i[0],h=i[1],g=(0,l.useRef)(l.Children.count(t.children));function p(){var e=t.children;return l.Children.map(e,((e,t)=>l.createElement(o,{key:t,myKey:t,width:E.width,activeKey:c},e)))}var f=(0,l.useRef)(null),y=(0,l.useState)({width:0}),v=(0,n.Z)(y,2),E=v[0],b=v[1];return(0,l.useEffect)((()=>{var e=()=>{b({width:f.current.clientWidth})},t=s(e,1500,{leading:!0,trailing:!0});return e(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]),t.afterChange&&u(t.afterChange,[c],c),l.createElement("div",{className:"wly-carousel"},l.createElement("div",{className:"swiper-container",ref:f},l.createElement("div",{className:"swiper-wrapper"},p())),l.createElement("ul",{className:"swiper-dots swiper-dots-bottom"},(()=>{if(console.log(l.isValidElement(t.grallery)),t.grallery){console.log(t.grallery);var e=t.grallery.props.onClick,r=function(t){t._swiperTo=h,e(t)},n=t.grallery.props.itemClick,a=function(e){n(e,h)},i={onClick:r,itemClick:a},o=(0,m.Tm)(t.grallery,i);return o}for(var s=[],u=function(e){s.push(l.createElement("li",{key:e,className:c===e?"swiper-active":""},l.createElement("button",{onClick:()=>{h(e)}},e)))},d=0;d<g.current;d++)u(d);return s})()))},g=h},9774:function(e,t,r){"use strict";r.r(t);var n=r(1966),a=r(7294),l=n.Z.Panel;t["default"]=()=>a.createElement("div",null,a.createElement(n.Z,{accordion:!0},a.createElement(l,{header:"\u6d4b\u8bd51"},"\u5c55\u5f00"),a.createElement(l,{header:"\u6d4b\u8bd52"},"\u5c55\u5f00")))},3709:function(e,t,r){"use strict";r.r(t);var n=r(1966),a=r(7294),l=n.Z.Panel;t["default"]=()=>a.createElement("div",null,a.createElement(l,{header:"\u6d4b\u8bd5"},"\u5c55\u5f00"))},9735:function(e,t,r){"use strict";r.r(t);var n=r(1966),a=r(7294),l=n.Z.Panel;function i(e){console.log(e)}t["default"]=()=>a.createElement("div",null,a.createElement(n.Z,{draggable:!0,onDragged:i},a.createElement(l,{header:"\u6d4b\u8bd51",key:"\u6d4b\u8bd51"},"\u5c55\u5f00"),a.createElement(l,{header:"\u6d4b\u8bd52",key:"\u6d4b\u8bd52"},"\u5c55\u5f00"),a.createElement(l,{header:"\u6d4b\u8bd53",key:"\u6d4b\u8bd53"},"\u5c55\u5f00"),a.createElement(l,{header:"\u6d4b\u8bd54",key:"\u6d4b\u8bd54"},"\u5c55\u5f00")))},4042:function(e,t,r){"use strict";r.r(t);var n=r(1966),a=r(7294),l=n.Z.Panel;function i(e){console.log(e)}t["default"]=()=>a.createElement("div",null,a.createElement(n.Z,{onChange:i},a.createElement(l,{header:"\u6d4b\u8bd51",key:"\u6d4b\u8bd51"},"\u5c55\u5f00"),a.createElement(l,{header:"\u6d4b\u8bd52",key:"\u6d4b\u8bd52"},"\u5c55\u5f00")))},3094:function(e,t,r){"use strict";r.r(t);var n=r(1966),a=r(7294),l=n.Z.Panel;function i(e){console.log(e)}t["default"]=()=>a.createElement("div",null,a.createElement(n.Z,{onChange:i},a.createElement(l,{header:"\u6d4b\u8bd51",key:"\u6d4b\u8bd51"},a.createElement(l,{header:"\u6d4b\u8bd51.1",key:"\u6d4b\u8bd51.1"},"\u5c55\u5f00")),a.createElement(l,{header:"\u6d4b\u8bd52",key:"\u6d4b\u8bd52"},"\u5c55\u5f00")))},1966:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var n=r(8573),a=r(2663),l=r(7294),i={},c=e=>{var t=(0,a.Z)((0,a.Z)({},i),e),r=(0,l.useState)(!1),c=(0,n.Z)(r,2),o=c[0],s=c[1],u=(0,l.useState)({}),m=(0,n.Z)(u,2),d=m[0],h=m[1],g=(0,l.useRef)(null);function p(){if(t.myKey)if(o)if(t.accordion)t.setActiveKey([]);else{var e=t.activeKey.filter((e=>e!==t.myKey));t.setActiveKey([...e])}else t.accordion?t.setActiveKey([t.myKey]):t.setActiveKey([...t.activeKey,t.myKey]);else s(!o)}function f(){if(t.myKey){for(var e=!1,r=0;r<t.activeKey.length;r+=1)if(t.activeKey[r]===t.myKey){e=!0;break}return e}return!1}return e!==d&&(s(f()),h(e)),(0,l.useEffect)((()=>{g.current.style.height=o?"".concat(g.current.scrollHeight,"px"):"0"}),[o]),l.createElement("div",{draggable:!!t.draggable,className:o?"collapse__item collapse-open":"collapse__item"},l.createElement("header",{className:"collapse__header",onClick:"disabled"===t.collapsible?()=>!1:p},l.createElement("i",{className:"bx bx-plus collapse__icon"}),l.createElement("h3",{className:"collapse__title"},t.header)),l.createElement("div",{className:"collapse__content",ref:g},l.createElement("div",{className:"collapse__description"},t.children)))},o=c;function s(e){return Array.isArray(e)?e:[e]}function u(e,t){var r=!0;return function(){if(r){r=!1;for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];e.apply(void 0,a),setTimeout((()=>{r=!0}),t)}}}var m=r(3928),d={},h=e=>{var t=(0,a.Z)((0,a.Z)({},d),e),r=(0,l.useState)(t.activeKey?t.activeKey:[]),i=(0,n.Z)(r,2),c=i[0],o=i[1],h=(0,l.useState)(y()),g=(0,n.Z)(h,2),p=g[0],f=g[1];function y(){for(var e=[],r=0;r<s(t.children).length;r++)e[r]=r;return e}function v(){var e=t.children,r=t.accordion,n=t.draggable;return s(e).map(((e,t)=>{var l=e.key||String(t),i=(0,a.Z)((0,a.Z)({},e.props),{},{activeKey:c,setActiveKey:o,key:l,myKey:l,accordion:r,draggable:n});return(0,m.Tm)(e,i)}))}function E(){var e=t.children,r=t.accordion,n=t.draggable;return p.map((t=>{var l=s(e)[t],i=l.key||String(t),u=(0,a.Z)((0,a.Z)({},l.props),{},{activeKey:c,setActiveKey:o,key:i,myKey:i,accordion:r,draggable:n});return(0,m.Tm)(l,u)}))}function b(e){var t=0;if(!e||!e.parentNode)return-1;while(e&&(e=e.previousElementSibling))t++;return t}var w=(0,l.useState)(0),k=(0,n.Z)(w,2),N=k[0],Z=k[1];function T(e){Z(b(e.target))}function H(e){e.preventDefault();var t=e.target;if(t instanceof Element){var r=b(t.parentNode);if("HEADER"==t.nodeName&&"collapse__header"==t.className&&N!==r){var n=[...p],a=[n[r],n[N]];n[N]=a[0],n[r]=a[1],Z(r),f(n)}}}var x=u(H,300);function _(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];var i=(0,l.useRef)(!0);(0,l.useEffect)((()=>{i.current?i.current=!1:e.apply(void 0,n)}),t)}return t.onChange&&_(t.onChange,[c],c),t.draggable&&t.onDragged&&_(t.onDragged,[p],(()=>p.map((e=>{var r=s(t.children)[e],n=r.key||String(e);return n})))()),t.draggable?l.createElement("div",{className:"collapse",onDragStart:e=>T(e),onDragOver:e=>x(e)},E()):l.createElement("div",{className:"collapse"},v())};h.Panel=o;var g=h},115:function(e,t,r){"use strict";r.r(t);var n=r(2874),a=r(7294);t["default"]=()=>a.createElement(n.Z,{showQuantity:3,gap:10,itemWidth:45,itemClick:e=>{console.log(e)}},a.createElement("img",{src:"https://joeschmoe.io/api/v1/random",alt:"",className:"controls__img"}),a.createElement("img",{src:"https://joeschmoe.io/api/v1/random",alt:"",className:"controls__img"}),a.createElement("img",{src:"https://joeschmoe.io/api/v1/random",alt:"",className:"controls__img"}),a.createElement("img",{src:"https://joeschmoe.io/api/v1/random",alt:"",className:"controls__img"}),a.createElement("img",{src:"https://joeschmoe.io/api/v1/random",alt:"",className:"controls__img"}),a.createElement("img",{src:"https://joeschmoe.io/api/v1/random",alt:"",className:"controls__img"}),a.createElement("img",{src:"https://joeschmoe.io/api/v1/random",alt:"",className:"controls__img"}),a.createElement("img",{src:"https://joeschmoe.io/api/v1/random",alt:"",className:"controls__img"}))},2874:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(8573),a=r(2663),l=r(7294),i=e=>{var t=e.itemWidth,r=e.itemClick,n=e.children,a=e.active;return l.createElement("div",{className:a?"".concat(a," controls-item"):"controls-item",style:{minWidth:"".concat(t,"px"),height:"".concat(t,"px")},onDragStart:e=>{e.preventDefault()},onClick:r},n)},c=i,o={},s=e=>{var t,r,i,s=(0,a.Z)((0,a.Z)({},o),e),u=s.gap,m=void 0===u?10:u,d=s.itemWidth,h=s.showQuantity,g=void 0===h?3:h,p=l.useState(0),f=(0,n.Z)(p,2),y=f[0],v=f[1],E=l.useState(!1),b=(0,n.Z)(E,2),w=b[0],k=b[1],N=l.Children.count(s.children),Z=l.useState(0),T=(0,n.Z)(Z,2),H=T[0],x=T[1];function _(){var e=s.children,t=s.itemClick,r=s.active;return l.Children.map(e,((e,n)=>l.createElement(c,{itemWidth:Number(d),itemClick:t?()=>{t(n),x(n)}:()=>{},active:r&&H===n?r:""},e)))}function C(e){document.onselectstart=()=>!1,t=e.clientX,document.onmousemove=e=>{i=e.clientX-t+y,v(i),r=Math.abs(Math.round(i/Number(d)))+g},document.onmouseup=e=>{k(!0),i>0?v(0):r&&(r>=N?(i=(N-g)*(Number(d)+Number(m))*-1,v(i)):(i=(r-g)*(Number(d)+Number(m))*-1,v(i))),setTimeout((()=>{k(!1)}),300),document.onmousemove=null,document.onmouseup=null,document.onselectstart=null}}return l.createElement("div",{className:"gallery-thumbs controls",onMouseDown:e=>{C(e)}},l.createElement("div",{className:"gallery-content",style:{transform:"translateX(".concat(y,"px)"),maxWidth:"".concat((Number(d)+Number(m))*g-Number(m),"px"),gap:"".concat(m,"px"),transitionDuration:"".concat(w?300:0,"ms")}},_()))},u=s},1427:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(8573),a=r(2663),l=r(7294),i={},c=e=>{var t,r=(0,a.Z)((0,a.Z)({},i),e),c=r.children,o=void 0===c?"":c,s=l.useState(o),u=(0,n.Z)(s,2),m=u[0],d=u[1];(function(e){e[e["Paragraph"]=0]="Paragraph",e[e["Header1"]=1]="Header1",e[e["Header2"]=2]="Header2",e[e["Header3"]=3]="Header3",e[e["HorizontalRule"]=4]="HorizontalRule"})(t||(t={}));class h{constructor(){this.tagType=new Map,this.tagType.set(t.Paragraph,"p"),this.tagType.set(t.Header1,"h1"),this.tagType.set(t.Header2,"h2"),this.tagType.set(t.Header3,"h3"),this.tagType.set(t.HorizontalRule,"hr")}getOpeningTag(e){return this.getTag(e,"<")}getClosingTag(e){return this.getTag(e,"</")}getTag(e,t){var r=this.tagType.get(e);return r?"".concat(t).concat(r,">"):"".concat(t,"p>")}}class g{constructor(){this.currentLine=""}}class p{constructor(){this.next=null}setNext(e){return this.next=e}HandleRequest(e){this.canHandle(e)||null!==this.next&&this.next.HandleRequest(e)}}class f extends p{constructor(e,t,r){super(),this.dispatch=e,this.tag=t,this.tagType=r}canHandle(e){var t=(new Z).parse(e.currentLine,this.tag);return t[0]&&this.dispatch({type:this.tagType,currentLine:t[1]}),t[0]}}class y extends p{constructor(e){super(),this.dispatch=e}canHandle(e){return this.dispatch({type:t.Paragraph,currentLine:e.currentLine}),!0}}class v extends f{constructor(e){super(e,"# ",t.Header1)}}class E extends f{constructor(e){super(e,"## ",t.Header2)}}class b extends f{constructor(e){super(e,"### ",t.Header3)}}class w extends f{constructor(e){super(e,"---",t.HorizontalRule)}}class k{Build(e){var t=new v(e),r=new E(e),n=new b(e),a=new w(e),l=new y(e);return t.setNext(r).setNext(n).setNext(a).setNext(l),t}}class N{ToHtml(e){for(var t=(new k).Build(_),r=e.split("\n"),n=0;n<r.length;n++){var a=new g;a.currentLine=r[n],t.HandleRequest(a)}}}class Z{parse(e,t){var r=[!1,""];r[1]=e;var n=e.startsWith("".concat(t));return n&&(r[0]=!0,r[1]=e.substring(t.length)),r}}l.useEffect((()=>{function e(e){var t=new N;_({type:"reset",currentLine:""}),t.ToHtml(e)}console.log(m),e(m)}),[m]);var T=l.useReducer(C,{output:""}),H=(0,n.Z)(T,2),x=H[0],_=H[1];function C(e,r){function n(){for(var t=e.output,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return n.forEach((e=>{t+=e})),{output:t,currentLine:""}}var a=new h;switch(r.type){case"reset":return{output:""};case t.Header1:return n(a.getOpeningTag(t.Header1),r.currentLine,a.getClosingTag(t.Header1));case t.Header2:return n(a.getOpeningTag(t.Header2),r.currentLine,a.getClosingTag(t.Header2));case t.Header3:return n(a.getOpeningTag(t.Header3),r.currentLine,a.getClosingTag(t.Header3));case t.HorizontalRule:return n(a.getOpeningTag(t.HorizontalRule),a.getClosingTag(t.HorizontalRule));case t.Paragraph:return n(a.getOpeningTag(t.Paragraph),r.currentLine,a.getClosingTag(t.Paragraph));default:return{output:""}}}return l.createElement("div",{className:"wly-markdown"},l.createElement("div",{className:"container"},l.createElement("div",{className:"left"},l.createElement("textarea",{className:"myMarkdown",defaultValue:m,onChange:e=>{e.persist(),e.target instanceof HTMLTextAreaElement&&d(e.target.value)}})),l.createElement("div",{className:"right"},l.createElement("div",{className:"markdownOutput",dangerouslySetInnerHTML:{__html:x.output}}))))},o=c,s=()=>l.createElement(o,null,"# Scrollbar\r\n## Custom scrollbar\r\n---\r\nCustom scrollbars are getting more popular nowadays, and I\u2019m very keen to dig into them. There are different reasons why to customize a scrollbar. ")},5540:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var n=r(2663),a=r(7294),l={},i=e=>{var t=(0,n.Z)((0,n.Z)({},l),e);return a.createElement("div",{className:"wly-scrollbar"},t.children)},c=i,o=()=>a.createElement(c,null,a.createElement("div",{className:"test"},a.createElement("p",null,"Custom scrollbars are getting more popular nowadays, and I\u2019m very keen to dig into them. There are different reasons why to customize a scrollbar. For example, the default scrollbar can make an app UI look inconsistent across multiple operating systems, and here we can get the benefit of having a unified style."),a.createElement("p",null,"I have always been interested in learning about how to customize a scrollbar in CSS but didn\u2019t get the chance to do so. In this article, I will take the opportunity and learn about them and document this journey."),a.createElement("p",null,"Having a custom scrollbar used to be webkit only so Firefox and IE were out of the game. We have a new syntax that works only in Firefox and will make things easier for us when it\u2019s fully supported. I will go through the old Webkit syntax, and then the new one."),a.createElement("p",null,"The first thing that I want to explain is the components or the parts of a scrollbar. A scrollbar contains the track and the thumb. Here is a visual that shows them: The track is the base of the scrollbar, where the thumb is what the user drag to scroll within a page or a section."),a.createElement("p",null,"There is one important thing to keep in mind that a scrollbar can work horizontally or vertically, depending on the design. Also, that can change while working on a multilingual website that works in both left-to-right (LTR) and right-to-left (RTL) directions")))},2663:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return l}})},8573:function(e,t,r){"use strict";function n(e){if(Array.isArray(e))return e}function a(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,l=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)if(r.push(i.value),t&&r.length===t)break}catch(o){a=!0,l=o}finally{try{n||null==c["return"]||c["return"]()}finally{if(a)throw l}}return r}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){if(e){if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){return n(e)||a(e,t)||i(e,t)||c()}r.d(t,{Z:function(){return o}})}}]);