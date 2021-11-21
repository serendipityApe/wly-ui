(self["webpackChunkwly_ui"]=self["webpackChunkwly_ui"]||[]).push([[799],{2231:function(e,n,t){"use strict";t.d(n,{m:function(){return r.m}});var r=t(9684);t(2255)},1080:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(8699),a=t(4043),l=t.n(a),c=t(4348),i="import React from 'react';\nimport { Carousel } from 'wly-ui';\n\nconst contentStyle = {\n  height: '160px',\n  color: '#fff',\n  lineHeight: '160px',\n  textAlign: 'center',\n  background: '#364d79',\n};\nfunction after(current) {\n  console.log(current);\n}\nexport default () => (\n  <Carousel afterChange={after}>\n    <div>\n      <h3 style={contentStyle}>1</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>2</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>3</h3>\n    </div>\n    <div>\n      <h3 style={contentStyle}>4</h3>\n    </div>\n  </Carousel>\n);",o="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\n\nexport default () => (\n  <div>\n    <Panel header=\"\u6d4b\u8bd5\">\u5c55\u5f00</Panel>\n  </div>\n);",s='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',u='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        <Panel header="\u6d4b\u8bd51.1" key="\u6d4b\u8bd51.1">\n          \u5c55\u5f00\n        </Panel>\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',d="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\nexport default () => (\n  <div>\n    <Collapse accordion>\n      <Panel header=\"\u6d4b\u8bd51\">\u5c55\u5f00</Panel>\n      <Panel header=\"\u6d4b\u8bd52\">\u5c55\u5f00</Panel>\n    </Collapse>\n  </div>\n);",p='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction onDragged(sorts) {\n  console.log(sorts);\n}\nexport default () => (\n  <div>\n    <Collapse draggable onDragged={onDragged}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd53" key="\u6d4b\u8bd53">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd54" key="\u6d4b\u8bd54">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',m='import React from \'react\';\r\nimport { Grallery } from \'wly-ui\';\r\n\r\nexport default () => (\r\n  <Grallery\r\n    showQuantity={3}\r\n    gap={10}\r\n    itemWidth={45}\r\n    itemClick={k => {\r\n      console.log(k);\r\n    }}\r\n  >\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n    <img src="https://joeschmoe.io/api/v1/random" alt="" className="controls__img" />\r\n  </Grallery>\r\n);',f={"carousel-basic":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,4650));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:i}},dependencies:{react:{version:"16.14.0"}},identifier:"carousel-basic"}},"collapse-basic":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,3709));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:o}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-basic"}},"collapse-group":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,4042));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:s}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-group"}},"collapse-nesting":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,3094));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:u}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-nesting"}},"collapse-accordion":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,9774));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:d}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-accordion"}},"collapse-draggable":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,9735));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:p}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-draggable"}},"grallery-basic":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,2599));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{jsx:m}},dependencies:{react:{version:"16.14.0"}},identifier:"grallery-basic"}}}},1959:function(e,n,t){"use strict";t.r(n);var r=t(7294),a=t(6089),l=t(9693),c=t(1080),i=r.memo(c.default["grallery-basic"].component);n["default"]=e=>(r.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"grallery-\u6ed1\u5757"},r.createElement(a.AnchorLink,{to:"#grallery-\u6ed1\u5757","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Grallery \u6ed1\u5757"),r.createElement("p",null,"\u53ef\u6ed1\u52a8\u7684\u5757\u7ea7\u5143\u7d20"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(a.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h3",{id:"\u57fa\u672c\u4f7f\u7528"},r.createElement(a.AnchorLink,{to:"#\u57fa\u672c\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),r.createElement("strong",null,"\u57fa\u672c\u4f7f\u7528"))),r.createElement(l.default,c.default["grallery-basic"].previewerProps,r.createElement(i,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(a.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement("h3",{id:"grallery"},r.createElement(a.AnchorLink,{to:"#grallery","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Grallery"),r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",{align:"left"},"\u5c5e\u6027"),r.createElement("th",{align:"left"},"\u8bf4\u660e"),r.createElement("th",{align:"left"},"\u7c7b\u578b"),r.createElement("th",{align:"left"},"\u9ed8\u8ba4\u503c"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",{align:"left"},"gap"),r.createElement("td",{align:"left"},"\u7f1d\u9699"),r.createElement("td",{align:"left"},"number"),r.createElement("td",{align:"left"},"-")),r.createElement("tr",null,r.createElement("td",{align:"left"},"itemWidth"),r.createElement("td",{align:"left"},"\u7f1d\u9699"),r.createElement("td",{align:"left"},"number"),r.createElement("td",{align:"left"},"-")),r.createElement("tr",null,r.createElement("td",{align:"left"},"showQuantity"),r.createElement("td",{align:"left"},"\u663e\u793aitem\u7684\u6570\u91cf"),r.createElement("td",{align:"left"},"number"),r.createElement("td",{align:"left"},"3")),r.createElement("tr",null,r.createElement("td",{align:"left"},"itemClick"),r.createElement("td",{align:"left"},"item\u70b9\u51fb\u4e8b\u4ef6(\u53c2\u6570\u4e3aitem\u7684\u7d22\u5f15)"),r.createElement("td",{align:"left"},"number"),r.createElement("td",{align:"left"},"-"))))))))},2022:function(e){"use strict";e.exports={}}}]);