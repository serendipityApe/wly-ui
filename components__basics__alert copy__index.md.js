(self["webpackChunkwly_ui"]=self["webpackChunkwly_ui"]||[]).push([[160],{2231:function(e,n,t){"use strict";t.d(n,{m:function(){return r.m}});var r=t(9684);t(2255)},1393:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return E}});var r=t(8699),i=t(4043),o=t.n(i),a=t(4348),p="import React from 'react';\nimport Alert from '../';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",l="import React from 'react';\nimport t from 'prop-types';\n\nexport interface AlertProps {\n  /**\n   * @description       Alert \u7684\u7c7b\u578b\n   * @default           'info'\n   */\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'happy-alert';\n\nconst kinds: KindMap = {\n  info: '#5352ED',\n  positive: '#2ED573',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n  <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    {...rest}\n  >\n    {children}\n  </div>\n);\n\nAlert.propTypes = {\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",s="import './index.less';",c="@popupPrefix: happy-alert;\n\n.@{popupPrefix} {\n  padding: 20px;\n  color: white;\n  background: white;\n  border-radius: 3px;\n}",d="import React from 'react';\nimport Alert from '../';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",u="import React from 'react';\nimport t from 'prop-types';\n\nexport interface AlertProps {\n  /**\n   * @description       Alert \u7684\u7c7b\u578b\n   * @default           'info'\n   */\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'happy-alert';\n\nconst kinds: KindMap = {\n  info: '#5352ED',\n  positive: '#2ED573',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n  <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    {...rest}\n  >\n    {children}\n  </div>\n);\n\nAlert.propTypes = {\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",m="import './index.less';",f="@popupPrefix: happy-alert;\n\n.@{popupPrefix} {\n  padding: 20px;\n  color: white;\n  background: white;\n  border-radius: 3px;\n}",x="import React from 'react';\nimport Alert from '../';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",y="import React from 'react';\nimport t from 'prop-types';\n\nexport interface AlertProps {\n  /**\n   * @description       Alert \u7684\u7c7b\u578b\n   * @default           'info'\n   */\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'happy-alert';\n\nconst kinds: KindMap = {\n  info: '#5352ED',\n  positive: '#2ED573',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n  <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    {...rest}\n  >\n    {children}\n  </div>\n);\n\nAlert.propTypes = {\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",h="import './index.less';",v="@popupPrefix: happy-alert;\n\n.@{popupPrefix} {\n  padding: 20px;\n  color: white;\n  background: white;\n  border-radius: 3px;\n}",k="import React from 'react';\nimport Alert from '../';\nimport '../style';\n\nexport default () => <Alert kind=\"warning\">\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u63d0\u793a</Alert>;",A="import React from 'react';\nimport t from 'prop-types';\n\nexport interface AlertProps {\n  /**\n   * @description       Alert \u7684\u7c7b\u578b\n   * @default           'info'\n   */\n  kind?: 'info' | 'positive' | 'negative' | 'warning';\n}\n\nexport type KindMap = Record<Required<AlertProps>['kind'], string>;\n\nconst prefixCls = 'happy-alert';\n\nconst kinds: KindMap = {\n  info: '#5352ED',\n  positive: '#2ED573',\n  negative: '#FF4757',\n  warning: '#FFA502',\n};\n\nconst Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (\n  <div\n    className={prefixCls}\n    style={{\n      background: kinds[kind],\n    }}\n    {...rest}\n  >\n    {children}\n  </div>\n);\n\nAlert.propTypes = {\n  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),\n};\n\nexport default Alert;",g="import './index.less';",w="@popupPrefix: happy-alert;\n\n.@{popupPrefix} {\n  padding: 20px;\n  color: white;\n  background: white;\n  border-radius: 3px;\n}",E={"alert-basic":{component:(0,a.dynamic)({loader:function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(899).then(t.bind(t,8803));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:p},"index.tsx":{import:"../",content:l},"style/index.ts":{import:"../style",content:s},"index.less":{import:"./index.less",content:c}},dependencies:{react:{version:"16.14.0"},"prop-types":{version:"15.7.2"}},componentName:"alert",identifier:"alert-basic"}},"alert copy-basic":{component:(0,a.dynamic)({loader:function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(879).then(t.bind(t,6961));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:d},"index.tsx":{import:"../",content:u},"style/index.ts":{import:"../style",content:m},"index.less":{import:"./index.less",content:f}},dependencies:{react:{version:"16.14.0"},"prop-types":{version:"15.7.2"}},componentName:"alert copy",identifier:"alert copy-basic"}},"alert-basic-1":{component:(0,a.dynamic)({loader:function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(899).then(t.bind(t,3409));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:x},"index.tsx":{import:"../",content:y},"style/index.ts":{import:"../style",content:h},"index.less":{import:"./index.less",content:v}},dependencies:{react:{version:"16.14.0"},"prop-types":{version:"15.7.2"}},componentName:"alert",identifier:"alert-basic-1"}},"alert copy-basic-1":{component:(0,a.dynamic)({loader:function(){var e=(0,r.Z)(o().mark((function e(){return o().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.e(879).then(t.bind(t,217));case 2:return e.abrupt("return",e.sent.default);case 3:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()}),previewerProps:{sources:{_:{tsx:k},"index.tsx":{import:"../",content:A},"style/index.ts":{import:"../style",content:g},"index.less":{import:"./index.less",content:w}},dependencies:{react:{version:"16.14.0"},"prop-types":{version:"15.7.2"}},componentName:"alert copy",identifier:"alert copy-basic-1"}}}},805:function(e,n,t){"use strict";var r=t(7294),i=t(6089),o={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};n["Z"]=function(e){var n=e.identifier,t=e.export,a=(0,i.useApiData)(n),p=(0,r.useContext)(i.context),l=p.locale,s=/^zh|cn$/i.test(l)?o["zh-CN"]:o["en-US"];return r.createElement(r.Fragment,null,a&&r.createElement("table",{style:{marginTop:24}},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,s.name),r.createElement("th",null,s.description),r.createElement("th",null,s.type),r.createElement("th",null,s.default))),r.createElement("tbody",null,a[t].map((function(e){return r.createElement("tr",{key:e.identifier},r.createElement("td",null,e.identifier),r.createElement("td",null,e.description||"--"),r.createElement("td",null,r.createElement("code",null,e.type)),r.createElement("td",null,r.createElement("code",null,e.default||e.required&&s.required||"--")))})))))}},9901:function(e,n,t){"use strict";t.r(n);var r=t(7294),i=t(6089),o=t(805),a=t(4842),p=t(1393),l=r.memo(p.default["alert copy-basic-1"].component);n["default"]=e=>(r.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&i.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(r.Fragment,null,r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h1",{id:"alert-\u8b66\u544a\u63d0\u793a"},r.createElement(i.AnchorLink,{to:"#alert-\u8b66\u544a\u63d0\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"Alert \u8b66\u544a\u63d0\u793a"),r.createElement("p",null,"\u8b66\u544a\u63d0\u793a\uff0c\u5c55\u73b0\u9700\u8981\u5173\u6ce8\u7684\u4fe1\u606f\u3002"),r.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.createElement(i.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a"),r.createElement("h3",{id:"\u57fa\u672c\u7528\u6cd5"},r.createElement(i.AnchorLink,{to:"#\u57fa\u672c\u7528\u6cd5","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5")),r.createElement(a.default,p.default["alert copy-basic-1"].previewerProps,r.createElement(l,null)),r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"api"},r.createElement(i.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"API"),r.createElement(o.Z,{src:"./index.tsx",identifier:"alert copy",export:"default"})))))},2022:function(e){"use strict";e.exports=JSON.parse('{"alert":{"default":[{"identifier":"kind","description":"Alert \u7684\u7c7b\u578b","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]},"alert copy":{"default":[{"identifier":"kind","description":"Alert \u7684\u7c7b\u578b","type":"\\"info\\" | \\"positive\\" | \\"negative\\" | \\"warning\\"","default":"info"}]}}')}}]);