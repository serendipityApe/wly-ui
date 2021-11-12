(self["webpackChunkwly_ui"]=self["webpackChunkwly_ui"]||[]).push([[935],{1651:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(8699),a=r(4043),o=r.n(a),l=r(4348),c="import React from 'react';\nimport { Carousel } from 'wly-ui';\n\nconst contentStyle = {\n  height: '160px',\n  color: '#fff',\n  lineHeight: '160px',\n  textAlign: 'center',\n  background: '#364d79',\n};\nfunction after(current) {\n  console.log(current);\n}\nexport default () => (\n  <Carousel afterChange={after}>\n    <div>\n      <h3 style={contentStyle}>1</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>2</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>3</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>4</h3>\n    </div>\n  </Carousel>\n);",s="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\n\nexport default () => (\n  <div>\n    <Panel header=\"\u6d4b\u8bd5\">\u5c55\u5f00</Panel>\n  </div>\n);",i='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',u='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        <Panel header="\u6d4b\u8bd51.1" key="\u6d4b\u8bd51.1">\n          \u5c55\u5f00\n        </Panel>\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',p="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\nexport default () => (\n  <div>\n    <Collapse accordion>\n      <Panel header=\"\u6d4b\u8bd51\">\u5c55\u5f00</Panel>\n      <Panel header=\"\u6d4b\u8bd52\">\u5c55\u5f00</Panel>\n    </Collapse>\n  </div>\n);",d='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction onDragged(sorts) {\n  console.log(sorts);\n}\nexport default () => (\n  <div>\n    <Collapse draggable onDragged={onDragged}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd53" key="\u6d4b\u8bd53">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd54" key="\u6d4b\u8bd54">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',f={"carousel-basic":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,9171));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:c}},dependencies:{react:{version:"16.14.0"}},identifier:"carousel-basic"}},"collapse-basic":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,3709));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:s}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-basic"}},"collapse-group":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,4042));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:i}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-group"}},"collapse-nesting":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,3094));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:u}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-nesting"}},"collapse-accordion":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,9774));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:p}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-accordion"}},"collapse-draggable":{component:(0,l.dynamic)({loader:function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.e(50).then(r.bind(r,9735));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:d}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-draggable"}}}},4446:function(e,n,r){"use strict";r.r(n);var t=r(7294),a=r(6089);r(1651);n["default"]=e=>(t.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),t.createElement(t.Fragment,null))},2022:function(e){"use strict";e.exports={}}}]);