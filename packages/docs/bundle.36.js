(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{245:function(e,t,a){var r={"./bash":159,"./bash.js":159,"./css":160,"./css.js":160,"./htmlbars":161,"./htmlbars.js":161,"./javascript":162,"./javascript.js":162,"./scss":163,"./scss.js":163,"./typescript":164,"./typescript.js":164};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=c,e.exports=n,n.id=245},91:function(e,t,a){"use strict";var r=a(223),n=(a(224),a(225)),c=(a(226),function(){return r.createElement(r.Fragment,{},r.createElement("h1",{id:"reset",className:"react-demo-h1"},"Reset"),r.createElement("h2",{id:"介绍",className:"react-demo-h2"},"介绍"),r.createElement("p",{className:"react-demo-p"},"用于快速重置，其内部自动做与 Form 组件的通讯，无需写过多的重置相关的处理逻辑"),r.createElement("h2",{id:"依赖",className:"react-demo-h2"},"依赖"),r.createElement(n,{code:"import { Reset } from '@uform/next(antd)'\n",justCode:!0,lang:"javascript"}),r.createElement("h2",{id:"api",className:"react-demo-h2"},"API"),r.createElement("p",{className:"react-demo-p"},"继承 next-button / ",r.createElement("a",{href:"https://ant.design/components/button-cn/",className:"react-demo-a"},"ant-button")),r.createElement("blockquote",{className:"react-demo-blockquote"},r.createElement("p",{className:"react-demo-p"},"注意：如果要实现默认值重置，必须在 Field 级别设置 default 属性才生效，如果是在\nForm 级别传 value 或 defaultValue 是不能实现默认值重置的")),r.createElement("h2",{id:"用例",className:"react-demo-h2"},"用例"),r.createElement(n,{code:"import React from 'react'\nimport ReactDOM from 'react-dom'\nimport { SchemaForm, FormButtonGroup, Reset } from '@uform/next(antd)'\n\nReactDOM.render(\n  <SchemaForm>\n    <FormButtonGroup offset={7} sticky align=\"center\">\n      <Reset />\n      // 自定义文案\n      <Reset>自定义重置文案</Reset>\n    </FormButtonGroup>\n  </SchemaForm>,\n  document.getElementById('root')\n)\n",justCode:!0,lang:"javascript"}))});c.meta={username:"zhili.wzl",email:"wangzhili56@126.com"},e.exports=c}}]);
//# sourceMappingURL=bundle.36.js.map