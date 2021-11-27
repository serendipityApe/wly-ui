(self["webpackChunkwly_ui"]=self["webpackChunkwly_ui"]||[]).push([[227],{902:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return y}});var t=r(8699),a=r(4043),o=r.n(a),s=r(4348),i="import React from 'react';\nimport { Carousel } from 'wly-ui';\n\nconst contentStyle = {\n  height: '160px',\n  color: '#fff',\n  lineHeight: '160px',\n  textAlign: 'center',\n  background: '#364d79',\n};\nfunction after(current) {\n  console.log(current);\n}\nexport default () => (\n  <Carousel afterChange={after}>\n    <div>\n      <h3 style={contentStyle}>1</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>2</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>3</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>4</h3>\n    </div>\n  </Carousel>\n);",c="import React from 'react';\r\nimport { Carousel, Grallery } from 'wly-ui';\r\nimport './customSwiper.css';\r\nconst imgList = [\r\n  'https://cdn.pixabay.com/photo/2016/12/10/11/50/beach-1897129_1280.jpg',\r\n  'https://cdn.pixabay.com/photo/2018/12/17/08/20/sea-island-3879938_1280.jpg',\r\n  'https://cdn.pixabay.com/photo/2018/12/17/08/20/sea-island-3879937_1280.jpg',\r\n];\r\nexport default () => (\r\n  <Carousel\r\n    grallery={\r\n      <Grallery>\r\n        {imgList.map(item => (\r\n          <img style={{ borderRadius: '0.75rem' }} key={item + 'dots'} src={item} alt=\"\" />\r\n        ))}\r\n      </Grallery>\r\n    }\r\n  >\r\n    {imgList.map(item => (\r\n      <div key={item} className=\"displayItem\">\r\n        <img className=\"displayItemImg\" src={item} alt=\"\" />\r\n      </div>\r\n    ))}\r\n  </Carousel>\r\n);",l=".gallery-thumbs {\r\n  padding: 10px;\r\n  background-color: white;\r\n  border-radius: 1.25rem;\r\n}\r\n.gallery-thumbs .swiper-active {\r\n  transform: scale(1.2);\r\n}\r\n\r\n.displayItem {\r\n  height: 500px;\r\n  color: '#fff';\r\n  text-align: center;\r\n}\r\n.displayItemImg{\r\n    width: 100%;\r\n    height: 100%;\r\n}",p="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\n\nexport default () => (\n  <div>\n    <Panel header=\"\u6d4b\u8bd5\">\u5c55\u5f00</Panel>\n  </div>\n);",u='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',d='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        <Panel header="\u6d4b\u8bd51.1" key="\u6d4b\u8bd51.1">\n          \u5c55\u5f00\n        </Panel>\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',m="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\nexport default () => (\n  <div>\n    <Collapse accordion>\n      <Panel header=\"\u6d4b\u8bd51\">\u5c55\u5f00</Panel>\n      <Panel header=\"\u6d4b\u8bd52\">\u5c55\u5f00</Panel>\n    </Collapse>\n  </div>\n);",h='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction onDragged(sorts) {\n  console.log(sorts);\n}\nexport default () => (\n  <div>\n    <Collapse draggable onDragged={onDragged}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd53" key="\u6d4b\u8bd53">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd54" key="\u6d4b\u8bd54">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',f='import React from \'react\';\r\nimport { Grallery } from \'wly-ui\';\r\n\r\nexport default () => (\r\n  <Grallery\r\n    showQuantity={3}\r\n    gap={10}\r\n    itemWidth={45}\r\n    itemClick={k => {\r\n      console.log(k);\r\n    }}\r\n  >\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n  </Grallery>\r\n);',y={"carousel-basic":{component:(0,s.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,1458));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:i}},dependencies:{react:{version:"16.14.0"}},identifier:"carousel-basic"}},"carousel-customswiper":{component:(0,s.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,7653));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:c},"customSwiper.css":{import:"./customSwiper.css",content:l}},dependencies:{react:{version:"16.14.0"}},identifier:"carousel-customswiper"}},"collapse-basic":{component:(0,s.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,3709));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:p}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-basic"}},"collapse-group":{component:(0,s.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,4042));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:u}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-group"}},"collapse-nesting":{component:(0,s.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,3094));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:d}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-nesting"}},"collapse-accordion":{component:(0,s.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,9774));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:m}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-accordion"}},"collapse-draggable":{component:(0,s.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,9735));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:h}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-draggable"}},"grallery-basic":{component:(0,s.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,115));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:f}},dependencies:{react:{version:"16.14.0"}},identifier:"grallery-basic"}}}},9582:function(e,n,r){"use strict";r.r(n);var t=r(7294),a=r(6089);r(902);n["default"]=e=>(t.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.createElement(t.Fragment,null,t.createElement("div",{className:"markdown"},t.createElement("h1",{id:"\u5e2e\u52a9"},t.createElement(a.AnchorLink,{to:"#\u5e2e\u52a9","aria-hidden":"true",tabIndex:-1},t.createElement("span",{className:"icon icon-link"})),"\u5e2e\u52a9"),t.createElement("p",null,"Balabala..."))))},2022:function(e){"use strict";e.exports={}}}]);