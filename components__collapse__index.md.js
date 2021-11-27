(self["webpackChunkwly_ui"]=self["webpackChunkwly_ui"]||[]).push([[183],{2231:function(e,t,n){"use strict";n.d(t,{m:function(){return a.m}});var a=n(9684);n(2255)},902:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var a=n(8699),r=n(4043),l=n.n(r),i=n(4348),o="import React from 'react';\nimport { Carousel } from 'wly-ui';\n\nconst contentStyle = {\n  height: '160px',\n  color: '#fff',\n  lineHeight: '160px',\n  textAlign: 'center',\n  background: '#364d79',\n};\nfunction after(current) {\n  console.log(current);\n}\nexport default () => (\n  <Carousel afterChange={after}>\n    <div>\n      <h3 style={contentStyle}>1</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>2</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>3</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>4</h3>\n    </div>\n  </Carousel>\n);",c="import React from 'react';\r\nimport { Carousel, Grallery } from 'wly-ui';\r\nimport './customSwiper.css';\r\nconst imgList = [\r\n  'https://cdn.pixabay.com/photo/2016/12/10/11/50/beach-1897129_1280.jpg',\r\n  'https://cdn.pixabay.com/photo/2018/12/17/08/20/sea-island-3879938_1280.jpg',\r\n  'https://cdn.pixabay.com/photo/2018/12/17/08/20/sea-island-3879937_1280.jpg',\r\n];\r\nexport default () => (\r\n  <Carousel\r\n    grallery={\r\n      <Grallery>\r\n        {imgList.map(item => (\r\n          <img style={{ borderRadius: '0.75rem' }} key={item + 'dots'} src={item} alt=\"\" />\r\n        ))}\r\n      </Grallery>\r\n    }\r\n  >\r\n    {imgList.map(item => (\r\n      <div key={item} className=\"displayItem\">\r\n        <img className=\"displayItemImg\" src={item} alt=\"\" />\r\n      </div>\r\n    ))}\r\n  </Carousel>\r\n);",m=".gallery-thumbs {\r\n  padding: 10px;\r\n  background-color: white;\r\n  border-radius: 1.25rem;\r\n}\r\n.gallery-thumbs .swiper-active {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.displayItem {\r\n  height: 500px;\r\n  color: '#fff';\r\n  text-align: center;\r\n}\r\n.displayItemImg{\r\n    width: 100%;\r\n    height: 100%;\r\n}",s="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\n\nexport default () => (\n  <div>\n    <Panel header=\"\u6d4b\u8bd5\">\u5c55\u5f00</Panel>\n  </div>\n);",d='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',p='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        <Panel header="\u6d4b\u8bd51.1" key="\u6d4b\u8bd51.1">\n          \u5c55\u5f00\n        </Panel>\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',u="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\nexport default () => (\n  <div>\n    <Collapse accordion>\n      <Panel header=\"\u6d4b\u8bd51\">\u5c55\u5f00</Panel>\n      <Panel header=\"\u6d4b\u8bd52\">\u5c55\u5f00</Panel>\n    </Collapse>\n  </div>\n);",f='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction onDragged(sorts) {\n  console.log(sorts);\n}\nexport default () => (\n  <div>\n    <Collapse draggable onDragged={onDragged}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd53" key="\u6d4b\u8bd53">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd54" key="\u6d4b\u8bd54">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',g='import React from \'react\';\r\nimport { Grallery } from \'wly-ui\';\r\n\r\nexport default () => (\r\n  <Grallery\r\n    showQuantity={3}\r\n    gap={10}\r\n    itemWidth={45}\r\n    itemClick={k => {\r\n      console.log(k);\r\n    }}\r\n  >\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n  </Grallery>\r\n);',E={"carousel-basic":{component:(0,i.dynamic)({loader:function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(50).then(n.bind(n,1458));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:o}},dependencies:{react:{version:"16.14.0"}},identifier:"carousel-basic"}},"carousel-customswiper":{component:(0,i.dynamic)({loader:function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(50).then(n.bind(n,7653));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:c},"customSwiper.css":{import:"./customSwiper.css",content:m}},dependencies:{react:{version:"16.14.0"}},identifier:"carousel-customswiper"}},"collapse-basic":{component:(0,i.dynamic)({loader:function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(50).then(n.bind(n,3709));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:s}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-basic"}},"collapse-group":{component:(0,i.dynamic)({loader:function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(50).then(n.bind(n,4042));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:d}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-group"}},"collapse-nesting":{component:(0,i.dynamic)({loader:function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(50).then(n.bind(n,3094));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:p}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-nesting"}},"collapse-accordion":{component:(0,i.dynamic)({loader:function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(50).then(n.bind(n,9774));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:u}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-accordion"}},"collapse-draggable":{component:(0,i.dynamic)({loader:function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(50).then(n.bind(n,9735));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:f}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-draggable"}},"grallery-basic":{component:(0,i.dynamic)({loader:function(){var e=(0,a.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.e(50).then(n.bind(n,115));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),previewerProps:{sources:{_:{jsx:g}},dependencies:{react:{version:"16.14.0"}},identifier:"grallery-basic"}}}},998:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(6089),l=n(9693),i=n(902),o=a.memo(i.default["collapse-basic"].component),c=a.memo(i.default["collapse-group"].component),m=a.memo(i.default["collapse-nesting"].component),s=a.memo(i.default["collapse-accordion"].component),d=a.memo(i.default["collapse-draggable"].component);t["default"]=e=>(a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"collapse-\u6298\u53e0\u9762\u677f"},a.createElement(r.AnchorLink,{to:"#collapse-\u6298\u53e0\u9762\u677f","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"Collapse \u6298\u53e0\u9762\u677f"),a.createElement("p",null,"\u53ef\u4ee5\u6298\u53e0/\u5c55\u5f00\u7684\u5185\u5bb9\u533a\u57df\u3002"),a.createElement("p",null,a.createElement(r.Link,{to:"https://www.wolai.com/772qXiDuDR6or5rk1mpjAi?theme=light"},"collapse\u5f00\u53d1\u65e5\u5fd7")),a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),a.createElement("h3",{id:"\u57fa\u672c\u4f7f\u7528"},a.createElement(r.AnchorLink,{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),a.createElement("strong",null,"\u57fa\u672c\u4f7f\u7528")),a.createElement("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7Panel\u5355\u4e2a\u4f7f\u7528\u3002")),a.createElement(l.default,i.default["collapse-basic"].previewerProps,a.createElement(o,null)),a.createElement("div",{className:"markdown"},a.createElement("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7Collapse\u5305\u88f9,\u4f7f\u7528\u591a\u4e2a\u3002",a.createElement("br",null),"(\u5f3a\u70c8\u5efa\u8bae\u60a8\u4f7f\u7528\u591a\u4e2aPanel\u7684\u65f6\u5019\u7528Collapse\u5305\u88f9)")),a.createElement(l.default,i.default["collapse-group"].previewerProps,a.createElement(c,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"\u5d4c\u5957\u4f7f\u7528"},a.createElement(r.AnchorLink,{to:"#\u5d4c\u5957\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),a.createElement("strong",null,"\u5d4c\u5957\u4f7f\u7528")),a.createElement("p",null,a.createElement("span",{className:"math math-inline"},a.createElement("mjx-container",{className:"MathJax",jax:"SVG"},a.createElement("svg",{style:{verticalAlign:"-0.464ex"},xmlns:"http://www.w3.org/2000/svg",width:"33.89ex",height:"2.161ex",role:"img",focusable:"false",viewBox:"0 -750 14979.3 955",xmlnsXlink:"http://www.w3.org/1999/xlink"},a.createElement("defs",null,a.createElement("path",{id:"MJX-1-TEX-I-1D44F",d:"M73 647Q73 657 77 670T89 683Q90 683 161 688T234 694Q246 694 246 685T212 542Q204 508 195 472T180 418L176 399Q176 396 182 402Q231 442 283 442Q345 442 383 396T422 280Q422 169 343 79T173 -11Q123 -11 82 27T40 150V159Q40 180 48 217T97 414Q147 611 147 623T109 637Q104 637 101 637H96Q86 637 83 637T76 640T73 647ZM336 325V331Q336 405 275 405Q258 405 240 397T207 376T181 352T163 330L157 322L136 236Q114 150 114 114Q114 66 138 42Q154 26 178 26Q211 26 245 58Q270 81 285 114T318 219Q336 291 336 325Z"}),a.createElement("path",{id:"MJX-1-TEX-I-1D462",d:"M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"}),a.createElement("path",{id:"MJX-1-TEX-I-1D454",d:"M311 43Q296 30 267 15T206 0Q143 0 105 45T66 160Q66 265 143 353T314 442Q361 442 401 394L404 398Q406 401 409 404T418 412T431 419T447 422Q461 422 470 413T480 394Q480 379 423 152T363 -80Q345 -134 286 -169T151 -205Q10 -205 10 -137Q10 -111 28 -91T74 -71Q89 -71 102 -80T116 -111Q116 -121 114 -130T107 -144T99 -154T92 -162L90 -164H91Q101 -167 151 -167Q189 -167 211 -155Q234 -144 254 -122T282 -75Q288 -56 298 -13Q311 35 311 43ZM384 328L380 339Q377 350 375 354T369 368T359 382T346 393T328 402T306 405Q262 405 221 352Q191 313 171 233T151 117Q151 38 213 38Q269 38 323 108L331 118L384 328Z"}),a.createElement("path",{id:"MJX-1-TEX-N-2E",d:"M78 60Q78 84 95 102T138 120Q162 120 180 104T199 61Q199 36 182 18T139 0T96 17T78 60Z"})),a.createElement("g",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",transform:"scale(1,-1)"},a.createElement("g",{"data-mml-node":"math"},a.createElement("g",{"data-mml-node":"mstyle",fill:"red",stroke:"red"},a.createElement("g",{"data-mml-node":"TeXAtom","data-mjx-texclass":"ORD"},a.createElement("g",{"data-mml-node":"mi"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u76ee")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(1000,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u524d")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(2000,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u6709")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(3000,0)"},a.createElement("use",{"data-c":"1D44F",xlinkHref:"#MJX-1-TEX-I-1D44F"})),a.createElement("g",{"data-mml-node":"mi",transform:"translate(3429,0)"},a.createElement("use",{"data-c":"1D462",xlinkHref:"#MJX-1-TEX-I-1D462"})),a.createElement("g",{"data-mml-node":"mi",transform:"translate(4001,0)"},a.createElement("use",{"data-c":"1D454",xlinkHref:"#MJX-1-TEX-I-1D454"})),a.createElement("g",{"data-mml-node":"mi",transform:"translate(4478,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\uff0c")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(5478,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u6b63")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(6478,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u5728")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(7478,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u7d27")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(8478,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u6025")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(9478,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u7ef4")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(10478,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u62a4")),a.createElement("g",{"data-mml-node":"mi",transform:"translate(11478,0)"},a.createElement("text",{"data-variant":"italic",transform:"scale(1,-1)",fontSize:"884px",fontFamily:"serif",fontStyle:"italic"},"\u4e2d")),a.createElement("g",{"data-mml-node":"mo",transform:"translate(12478,0)"},a.createElement("use",{"data-c":"2E",xlinkHref:"#MJX-1-TEX-N-2E"})),a.createElement("g",{"data-mml-node":"mo",transform:"translate(12922.7,0)"},a.createElement("use",{"data-c":"2E",xlinkHref:"#MJX-1-TEX-N-2E"})),a.createElement("g",{"data-mml-node":"mo",transform:"translate(13367.3,0)"},a.createElement("use",{"data-c":"2E",xlinkHref:"#MJX-1-TEX-N-2E"})),a.createElement("g",{"data-mml-node":"mo",transform:"translate(13812,0)"},a.createElement("use",{"data-c":"2E",xlinkHref:"#MJX-1-TEX-N-2E"})),a.createElement("g",{"data-mml-node":"mo",transform:"translate(14256.7,0)"},a.createElement("use",{"data-c":"2E",xlinkHref:"#MJX-1-TEX-N-2E"})),a.createElement("g",{"data-mml-node":"mo",transform:"translate(14701.3,0)"},a.createElement("use",{"data-c":"2E",xlinkHref:"#MJX-1-TEX-N-2E"}))))))))))),a.createElement(l.default,i.default["collapse-nesting"].previewerProps,a.createElement(m,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"\u624b\u98ce\u7434\u6a21\u5f0f"},a.createElement(r.AnchorLink,{to:"#\u624b\u98ce\u7434\u6a21\u5f0f","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),a.createElement("strong",null,"\u624b\u98ce\u7434\u6a21\u5f0f")),a.createElement("p",null,"\u6bcf\u6b21\u53ea\u6253\u5f00\u4e00\u4e2atab")),a.createElement(l.default,i.default["collapse-accordion"].previewerProps,a.createElement(s,null)),a.createElement("div",{className:"markdown"},a.createElement("h3",{id:"\u62d6\u62fd\u6392\u5e8f"},a.createElement(r.AnchorLink,{to:"#\u62d6\u62fd\u6392\u5e8f","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),a.createElement("strong",null,"\u62d6\u62fd\u6392\u5e8f")),a.createElement("p",null,"\u53ef\u62d6\u62fd\u6392\u5e8f")),a.createElement(l.default,i.default["collapse-draggable"].previewerProps,a.createElement(d,null)),a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"api"},a.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"API"),a.createElement("h3",{id:"collapse"},a.createElement(r.AnchorLink,{to:"#collapse","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"Collapse"),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{align:"left"},"\u5c5e\u6027"),a.createElement("th",{align:"left"},"\u8bf4\u660e"),a.createElement("th",{align:"left"},"\u7c7b\u578b"),a.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{align:"left"},"activeKey"),a.createElement("td",{align:"left"},"\u5f53\u524d\u6fc0\u6d3b tab \u9762\u677f\u7684 key"),a.createElement("td",{align:"left"},"string[] | number[] ",a.createElement("br",null),"| string | number"),a.createElement("td",{align:"left"},"-")),a.createElement("tr",null,a.createElement("td",{align:"left"},"onChange"),a.createElement("td",{align:"left"},"\u5207\u6362\u9762\u677f\u7684\u56de\u8c03(\u53c2\u6570\u4e3aactiveKey)"),a.createElement("td",{align:"left"},"(keys?:type activeKey) => void"),a.createElement("td",{align:"left"},"-")),a.createElement("tr",null,a.createElement("td",{align:"left"},"accordion"),a.createElement("td",{align:"left"},"\u624b\u98ce\u7434\u6a21\u5f0f"),a.createElement("td",{align:"left"},"boolean"),a.createElement("td",{align:"left"},"false")),a.createElement("tr",null,a.createElement("td",{align:"left"},"draggable"),a.createElement("td",{align:"left"},"\u62d6\u62fd\u6392\u5e8f\u6a21\u5f0f"),a.createElement("td",{align:"left"},"boolean"),a.createElement("td",{align:"left"},"false")),a.createElement("tr",null,a.createElement("td",{align:"left"},"onDragged"),a.createElement("td",{align:"left"},"\u62d6\u62fd\u987a\u5e8f\u5207\u6362\u540e\u7684\u56de\u8c03(\u53c2\u6570\u4e3apanel\u7684key\u503c\u7684\u6392\u5e8f\u6570\u7ec4)"),a.createElement("td",{align:"left"},"(keys?:type keySorts) => void"),a.createElement("td",{align:"left"},"-")))),a.createElement("h3",{id:"collapsepanel"},a.createElement(r.AnchorLink,{to:"#collapsepanel","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"Collapse.Panel"),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{align:"left"},"\u5c5e\u6027"),a.createElement("th",{align:"left"},"\u8bf4\u660e"),a.createElement("th",{align:"left"},"\u7c7b\u578b"),a.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{align:"left"},"header"),a.createElement("td",{align:"left"},"\u9762\u677f\u5934\u5185\u5bb9"),a.createElement("td",{align:"left"},"ReactNode"),a.createElement("td",{align:"left"},"-")),a.createElement("tr",null,a.createElement("td",{align:"left"},"key"),a.createElement("td",{align:"left"},"\u5bf9\u5e94 activeKey"),a.createElement("td",{align:"left"},"string | number"),a.createElement("td",{align:"left"},"-")),a.createElement("tr",null,a.createElement("td",{align:"left"},"collapsible"),a.createElement("td",{align:"left"},"\u662f\u5426\u53ef\u6298\u53e0"),a.createElement("td",{align:"left"},"'disabled'"),a.createElement("td",{align:"left"},"-")))),a.createElement("style",{dangerouslySetInnerHTML:{__html:'\nmjx-container[jax="SVG"] {\n  direction: ltr;\n}\n\nmjx-container[jax="SVG"] > svg {\n  overflow: visible;\n  min-height: 1px;\n  min-width: 1px;\n}\n\nmjx-container[jax="SVG"] > svg a {\n  fill: blue;\n  stroke: blue;\n}\n\nmjx-container[jax="SVG"][display="true"] {\n  display: block;\n  text-align: center;\n  margin: 1em 0;\n}\n\nmjx-container[jax="SVG"][display="true"][width="full"] {\n  display: flex;\n}\n\nmjx-container[jax="SVG"][justify="left"] {\n  text-align: left;\n}\n\nmjx-container[jax="SVG"][justify="right"] {\n  text-align: right;\n}\n\ng[data-mml-node="merror"] > g {\n  fill: red;\n  stroke: red;\n}\n\ng[data-mml-node="merror"] > rect[data-background] {\n  fill: yellow;\n  stroke: none;\n}\n\ng[data-mml-node="mtable"] > line[data-line], svg[data-table] > g > line[data-line] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node="mtable"] > rect[data-frame], svg[data-table] > g > rect[data-frame] {\n  stroke-width: 70px;\n  fill: none;\n}\n\ng[data-mml-node="mtable"] > .mjx-dashed, svg[data-table] > g > .mjx-dashed {\n  stroke-dasharray: 140;\n}\n\ng[data-mml-node="mtable"] > .mjx-dotted, svg[data-table] > g > .mjx-dotted {\n  stroke-linecap: round;\n  stroke-dasharray: 0,140;\n}\n\ng[data-mml-node="mtable"] > g > svg {\n  overflow: visible;\n}\n\n[jax="SVG"] mjx-tool {\n  display: inline-block;\n  position: relative;\n  width: 0;\n  height: 0;\n}\n\n[jax="SVG"] mjx-tool > mjx-tip {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\nmjx-tool > mjx-tip {\n  display: inline-block;\n  padding: .2em;\n  border: 1px solid #888;\n  font-size: 70%;\n  background-color: #F8F8F8;\n  color: black;\n  box-shadow: 2px 2px 5px #AAAAAA;\n}\n\ng[data-mml-node="maction"][data-toggle] {\n  cursor: pointer;\n}\n\nmjx-status {\n  display: block;\n  position: fixed;\n  left: 1em;\n  bottom: 1em;\n  min-width: 25%;\n  padding: .2em .4em;\n  border: 1px solid #888;\n  font-size: 90%;\n  background-color: #F8F8F8;\n  color: black;\n}\n\nforeignObject[data-mjx-xml] {\n  font-family: initial;\n  line-height: normal;\n  overflow: visible;\n}\n\nmjx-container[jax="SVG"] path[data-c], mjx-container[jax="SVG"] use[data-c] {\n  stroke-width: 3;\n}\n'}})))))},2022:function(e){"use strict";e.exports={}}}]);