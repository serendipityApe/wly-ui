(self["webpackChunkwly_ui"]=self["webpackChunkwly_ui"]||[]).push([[906],{4584:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(8699),a=t(4043),l=t.n(a),c=t(4348),o="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\n\nexport default () => (\n  <div>\n    <Panel header=\"\u6d4b\u8bd5\">\u5c55\u5f00</Panel>\n  </div>\n);",i='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        \u5c55\u5f00\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',s='import React from \'react\';\nimport { Collapse } from \'wly-ui\';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack}>\n      <Panel header="\u6d4b\u8bd51" key="\u6d4b\u8bd51">\n        <Panel header="\u6d4b\u8bd51.1" key="\u6d4b\u8bd51.1">\n          \u5c55\u5f00\n        </Panel>\n      </Panel>\n      <Panel header="\u6d4b\u8bd52" key="\u6d4b\u8bd52">\n        \u5c55\u5f00\n      </Panel>\n    </Collapse>\n  </div>\n);',p="import React from 'react';\nimport { Collapse } from 'wly-ui';\n\nconst { Panel } = Collapse;\nfunction callBack(keys) {\n  console.log(keys);\n}\nexport default () => (\n  <div>\n    <Collapse onChange={callBack} accordion>\n      <Panel header=\"\u6d4b\u8bd51\">\u5c55\u5f00</Panel>\n      <Panel header=\"\u6d4b\u8bd52\">\u5c55\u5f00</Panel>\n    </Collapse>\n  </div>\n);",u={"collapse-basic":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,691));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:o}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-basic"}},"collapse-group":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,2403));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:i}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-group"}},"collapse-nesting":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,6890));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:s}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-nesting"}},"collapse-accordion":{component:(0,c.dynamic)({loader:function(){var e=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(50).then(t.bind(t,2569));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:p}},dependencies:{react:{version:"16.14.0"}},identifier:"collapse-accordion"}}}},9208:function(e,n,t){"use strict";t.r(n);var r=t(7294),a=t(6089),l=t(5659);t(4584);n["default"]=e=>(r.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"\u5feb\u901f\u4e0a\u624b"},r.createElement(a.AnchorLink,{to:"#\u5feb\u901f\u4e0a\u624b","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u5feb\u901f\u4e0a\u624b"),r.createElement("h2",{id:"\u5b89\u88c5"},r.createElement(a.AnchorLink,{to:"#\u5b89\u88c5","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5"),r.createElement("p",null,r.createElement("strong",null,"\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5")),r.createElement(l.Z,{code:"npm install @zzzzw/happy-ui",lang:"shell"}),r.createElement(l.Z,{code:"yarn add @zzzzw/happy-ui",lang:"shell"}),r.createElement("h2",{id:"\u793a\u4f8b"},r.createElement(a.AnchorLink,{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),r.createElement(l.Z,{code:"import Alert from '@zzzzw/happy-ui/es/alert'; // \u624b\u52a8\u6309\u9700\u52a0\u8f7d js\nimport '@zzzzw/happy-ui/es/alert/style'; // \u624b\u52a8\u6309\u9700\u52a0\u8f7d less\n\nReactDOM.render(<Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>, mountNode);",lang:"js"}),r.createElement("h3",{id:"\u81ea\u52a8\u6309\u9700\u52a0\u8f7d"},r.createElement(a.AnchorLink,{to:"#\u81ea\u52a8\u6309\u9700\u52a0\u8f7d","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u81ea\u52a8\u6309\u9700\u52a0\u8f7d"),r.createElement("p",null,"\u4f7f\u7528 ",r.createElement(a.Link,{to:"https://www.npmjs.com/package/babel-plugin-import"},"babel-plugin-import ")," \u4f18\u5316\u5f15\u5165\u65b9\u5f0f\uff0c\u5982\u4e0b\uff1a"),r.createElement(l.Z,{code:"import { Alert } from '@zzzzw/happy-ui'; // \u4e0e\u4e0a\u8ff0\u793a\u4f8b\u7b49\u4ef7\n\nReactDOM.render(<Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>, mountNode);",lang:"js"}),r.createElement("p",null,"\u5b89\u88c5 ",r.createElement("code",null,"babel-plugin-import")),r.createElement(l.Z,{code:"yarn add babel-plugin-import --dev",lang:"unknown"}),r.createElement("p",null,"\u914d\u7f6e",r.createElement("code",null,".babelrc")," \u6216 ",r.createElement("code",null,"babel-loader")),r.createElement(l.Z,{code:'{\n  "plugins": [\n    [\n      "import",\n      {\n        "libraryName": "@zzzzw/happy-ui",\n        "libraryDirectory": "esm", // default: lib\n        "style": true // or \'css\'\n      }\n    ]\n  ]\n}',lang:"json"}))))},2022:function(e){"use strict";e.exports={}}}]);