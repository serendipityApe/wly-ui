(self["webpackChunkwly_ui"]=self["webpackChunkwly_ui"]||[]).push([[935],{1337:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(8699),a=r(4043),o=r.n(a),l=r(4348),c="import React from 'react';\r\nimport { Carousel } from 'wly-ui';\r\n\r\nconst contentStyle = {\r\n  height: '160px',\r\n  color: '#fff',\r\n  lineHeight: '160px',\r\n  textAlign: 'center',\r\n  background: '#364d79',\r\n};\r\n\r\nexport default () => (\r\n  <Carousel>\r\n    <div>\r\n      <h3 style={contentStyle}>1</h3>\r\n    </div>\r\n    <div>\r\n      <h3 style={contentStyle}>2</h3>\r\n    </div>\r\n    <div>\r\n      <h3 style={contentStyle}>3</h3>\r\n    </div>\r\n    <div>\r\n      <h3 style={contentStyle}>4</h3>\r\n    </div>\r\n  </Carousel>\r\n);",s="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\n\nexport default () => (\n  <div>\n    <Panel header=\"\u6d4b\u8bd5\">\u5c55\u5f00</Panel>\n  </div>\n);",i='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',u='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        <Panel header="\u6d4b\u8bd51.1" key="\u6d4b\u8bd51.1">\n          \u5c55\u5f00\n        </Panel>\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',p="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\nexport default () => (\n  <div>\n    <Collapse accordion>\n      <Panel header=\"\u6d4b\u8bd51\">\u5c55\u5f00</Panel>\n      <Panel header=\"\u6d4b\u8bd52\">\u5c55\u5f00</Panel>\n    </Collapse>\n  </div>\n);",d='import React from \'react\';\r\nimport { Collapse } from \'wly-ui\';\r\n\r\nconst { Panel } = Collapse;\r\nfunction onDragged(sorts) {\r\n  console.log(sorts);\r\n}\r\nexport default () => (\r\n  <div>\r\n    <Collapse draggable onDragged={onDragged}>\r\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\r\n        \u5c55\u5f00\r\n      </Panel>\r\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\r\n        \u5c55\u5f00\r\n      </Panel>\r\n      <Panel header="\u6d4b\u8bd53" key="\u6d4b\u8bd53">\r\n        \u5c55\u5f00\r\n      </Panel>\r\n      <Panel header="\u6d4b\u8bd54" key="\u6d4b\u8bd54">\r\n        \u5c55\u5f00\r\n      </Panel>\r\n    </Collapse>\r\n  </div>\r\n);',f={"carousel-basic":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,8565));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:c}},dependencies:{react:{version:"16.14.0"}},identifier:"carousel-basic"}},"collapse-basic":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,691));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:s}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-basic"}},"collapse-group":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,2403));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:i}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-group"}},"collapse-nesting":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,6890));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:u}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-nesting"}},"collapse-accordion":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,2569));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-accordion"}},"collapse-draggable":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,9927));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:d}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-draggable"}}}},4446:function(e,n,r){"use strict";r.r(n);var t=r(7294),a=r(6089);r(1337);n["default"]=e=>(t.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.createElement(t.Fragment,null))},2022:function(e){"use strict";e.exports={}}}]);