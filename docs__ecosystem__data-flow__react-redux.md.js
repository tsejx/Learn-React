(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[36],{LC58:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=(l("B2uJ"),l("+su7"),l("qOys")),c=l.n(r);l("5Yjd");t["default"]=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"react-redux"},n.a.createElement("a",{"aria-hidden":"true",href:"#react-redux"},n.a.createElement("span",{className:"icon icon-link"})),"React Redux"),n.a.createElement("p",null,n.a.createElement("code",null,"react-redux")," \u65f6 Redux \u5b98\u65b9\u63d0\u4f9b\u7684 React \u7ed1\u5b9a\u5e93\u3002\u5177\u6709\u9ad8\u6548\u4e14\u7075\u6d3b\u7684\u7279\u6027\u3002"),n.a.createElement("p",null,"\u9700\u8981\u5c06 React \u548c Redux \u642d\u914d\u4f7f\u7528\uff0c\u5c31\u9700\u8981 React \u7ec4\u4ef6\u53ef\u4ee5\u6839\u636e Redux \u4e2d\u5b58\u50a8\u7684\u72b6\u6001\uff08Store\uff09\u66f4\u65b0 View\u3002\u5e76\u4e14\u53ef\u4ee5\u6539\u53d8 Store\u3002\u5176\u5b9e ",n.a.createElement("code",null,"react-redux")," \u4e3b\u8981\u5c31\u5b8c\u6210\u4e86\u4e24\u4ef6\u4e8b\uff1a"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u901a\u8fc7\u5c06 Store \u4f20\u5165\u6839\u7ec4\u4ef6\u7684 Context \u4e2d\uff0c\u4f7f\u5b50\u8282\u70b9\u53ef\u4ee5\u83b7\u53d6\u5230 State"),n.a.createElement("li",null,"\u901a\u8fc7 Store.subscribe \u8ba2\u9605 store \u7684\u53d8\u5316\uff0c\u66f4\u65b0\u7ec4\u4ef6")),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u53e6\u5916\u8fd8\u6709\u5bf9\u4e8e\u6027\u80fd\u7684\u4f18\u5316\uff0c\u51cf\u5c11\u4e0d\u5fc5\u8981\u7684\u6e32\u67d3\u3002")),n.a.createElement("ul",null,n.a.createElement("li",null,"Provider\uff1a\u63a5\u6536\u4ece Redux \u800c\u6765\u7684 Store\uff0c\u4ee5\u4f9b\u5b50\u7ec4\u4ef6\u4f7f\u7528"),n.a.createElement("li",null,"Connect\uff1a\u9ad8\u9636\u7ec4\u4ef6\uff0c\u5f53\u7ec4\u4ef6\u9700\u8981\u83b7\u53d6\u6216\u8005\u60f3\u8981\u6539\u53d8 Store \u7684\u65f6\u5019\u4f7f\u7528",n.a.createElement("ul",null,n.a.createElement("li",null,"mapStateToProps\uff1a\u83b7\u53d6 Store \u6570\u636e\uff0c\u901a\u8fc7 Props \u6ce8\u5165\u5173\u8054\u7ec4\u4ef6"),n.a.createElement("li",null,"mapDispatchToProps\uff1a\u5f53\u7ec4\u4ef6\u8c03\u7528\u65f6\u4f7f\u7528 ",n.a.createElement("code",null,"dispatch")," \u89e6\u53d1\u5bf9\u5e94\u7684 Action"),n.a.createElement("li",null,"mergeProps\uff1a\u53ef\u4ee5\u5728\u5176\u4e2d\u5bf9 mapStateToProps\u3001mapDispatchToProps \u7684\u7ed3\u679c\u8fdb\u4e00\u6b65\u5904\u7406"),n.a.createElement("li",null,"options\uff1a\u5176\u4f59\u914d\u7f6e\u9879")))),n.a.createElement("p",null,"Reducer \u7684\u62c6\u5206\u4e8e\u91cd\u6784"),n.a.createElement("p",null,"\u968f\u7740\u9879\u76ee\u8d8a\u5927\uff0c\u5982\u679c\u5c06\u6240\u6709\u72b6\u6001\u7684 reducer \u5168\u90e8\u5199\u5728\u4e00\u4e2a\u51fd\u6570\u4e2d\uff0c\u5c06\u4f1a ",n.a.createElement("strong",null,"\u96be\u4ee5\u7ef4\u62a4"),"\uff1b"),n.a.createElement("p",null,"\u53ef\u4ee5\u5c06 reducer \u8fdb\u884c\u62c6\u5206\uff0c\u4e5f\u5c31\u662f ",n.a.createElement("strong",null,"\u51fd\u6570\u5206\u89e3"),"\uff0c\u6700\u7ec8\u518d\u4f7f\u7528",n.a.createElement("code",null,"combineReducers()"),"\u8fdb\u884c\u91cd\u6784\u5408\u5e76\uff1b"),n.a.createElement("p",null,"\u5f02\u6b65 Action"),n.a.createElement("p",null,"\u7531\u4e8e Reducer \u662f\u4e00\u4e2a\u4e25\u683c\u7684\u7eaf\u51fd\u6570\uff0c\u56e0\u6b64\u65e0\u6cd5\u5728 Reducer \u4e2d\u8fdb\u884c\u6570\u636e\u7684\u8bf7\u6c42\uff0c\u9700\u8981\u5148\u83b7\u53d6\u6570\u636e\uff0c\u518d",n.a.createElement("code",null,"dispatch(Action)")," \u5373\u53ef\u3002"),n.a.createElement("p",null,"\u5f02\u6b65\u5b9e\u73b0\uff1a"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Freduxjs%2Fredux-thunk",target:"_blank",rel:"noopener noreferrer"},"redex-thunk",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fredux-saga%2Fredux-saga",target:"_blank",rel:"noopener noreferrer"},"redux-saga",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://link.juejin.im/?target=https%3A%2F%2Fgithub.com%2Fredux-observable%2Fredux-observable",target:"_blank",rel:"noopener noreferrer"},"redux-observable",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),n.a.createElement("p",null,"\u89c6\u56fe\u5c42\u7ed1\u5b9a\u5f15\u5165\u4e86\u51e0\u4e2a\u6982\u5ff5\uff1a"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("code",null,"<Provider>")," \u7ec4\u4ef6\uff1a\u8fd9\u4e2a\u7ec4\u4ef6\u9700\u8981\u5305\u88f9\u5728\u6574\u4e2a\u7ec4\u4ef6\u6811\u7684\u6700\u5916\u5c42\u3002\u8fd9\u4e2a\u7ec4\u4ef6\u8ba9\u6839\u7ec4\u4ef6\u7684\u6240\u6709\u5b50\u5b59\u7ec4\u4ef6\u80fd\u591f\u8f7b\u677e\u7684\u4f7f\u7528 ",n.a.createElement("code",null,"connect()")," \u65b9\u6cd5\u7ed1\u5b9a store"),n.a.createElement("li",null,n.a.createElement("code",null,"connect()"),"\uff1a\u8fd9\u662f react-redux \u63d0\u4f9b\u7684\u4e00\u4e2a\u65b9\u6cd5\u3002\u5982\u679c\u4e00\u4e2a\u7ec4\u4ef6\u60f3\u8981\u54cd\u5e94\u72b6\u6001\u7684\u53d8\u5316\uff0c\u5c31\u628a\u81ea\u5df1\u4f5c\u4e3a\u53c2\u6570\u4f20\u7ed9 ",n.a.createElement("code",null,"connect()")," \u7684\u7ed3\u679c\uff0c",n.a.createElement("code",null,"connect()")," \u65b9\u6cd5\u4f1a\u5904\u7406\u4e0e Store \u7ed1\u5b9a\u7684\u7ec6\u8282\uff0c\u5e76\u901a\u8fc7 selector \u786e\u5b9a\u8be5\u7ed1\u5b9a Store \u4e2d\u54ea\u4e00\u90e8\u5206\u7684\u6570\u636e"),n.a.createElement("li",null,n.a.createElement("code",null,"selector"),"\uff1a\u8fd9\u662f\u4f60\u81ea\u5df1\u7f16\u5199\u7684\u4e00\u4e2a\u51fd\u6570\u3002\u8fd9\u4e2a\u51fd\u6570\u58f0\u660e\u4e86\u4f60\u7684\u7ec4\u4ef6\u9700\u8981\u6574\u4e2a Store \u4e2d\u54ea\u4e00\u90e8\u5206\u6570\u636e\u4f5c\u4e3a\u81ea\u5df1\u7684 Props\u3002"),n.a.createElement("li",null,n.a.createElement("code",null,"dispatch"),"\uff1a\u6bcf\u5f53\u4f60\u60f3\u8981\u6539\u53d8\u5e94\u7528\u4e2d\u7684\u72b6\u6001\u65f6\uff0c\u4f60\u5c31\u8981 dispatch \u4e00\u4e2a action\uff0c\u8fd9\u4e5f\u662f\u552f\u4e00\u6539\u53d8\u72b6\u6001\u7684\u65b9\u6cd5\u3002")),n.a.createElement("h2",{id:"provider"},n.a.createElement("a",{"aria-hidden":"true",href:"#provider"},n.a.createElement("span",{className:"icon icon-link"})),"Provider"),n.a.createElement("blockquote",null,n.a.createElement("p",null,"API \u539f\u578b ",n.a.createElement("code",null,"<Provider store>"))),n.a.createElement("p",null,"\u4f7f\u7ec4\u4ef6\u5c42\u7ea7\u4e2d\u7684 ",n.a.createElement("code",null,"connect()")," \u65b9\u6cd5\u80fd\u591f\u83b7\u5f97 Redux Store\uff08\u5c06 Store \u4f20\u9012\u7ed9 App \u6846\u67b6\uff09\u3002\u901a\u5e38\u60c5\u51b5\u4e0b\u6211\u4eec\u9700\u8981\u5c06\u6839\u7ec4\u4ef6\u5d4c\u5957\u5728\u6807\u7b7e\u4e2d\u624d\u80fd\u4f7f\u7528 ",n.a.createElement("code",null,"connect()")," \u65b9\u6cd5\u3002"),n.a.createElement(c.a,{code:"class Index extends Component {\n  render(){\n    return (\n      <Provider store={configureStore()}>\n         <AppWithNavigationState />\n      </Provider>\n    )\n  }\n}\n",lang:"js"}),n.a.createElement("p",null,"\u5728\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u6211\u4eec\u6807\u7b7e\u5305\u88f9\u4e86\u6839\u7ec4\u4ef6 ",n.a.createElement("code",null,"AppWithNavigationState"),"\uff0c\u7136\u540e\u4e3a\u5b83\u8bbe\u7f6e\u4e86 Store \u53c2\u6570\uff0cStore\uff08Redux Store\uff09\u63a5\u53d7\u7684\u662f\u5e94\u7528\u7a0b\u5e8f\u4e2d\u529f\u80fd\u552f\u4e00\u7684 Redux Store \u5bf9\u8c61\u3002"),n.a.createElement("h2",{id:"connect"},n.a.createElement("a",{"aria-hidden":"true",href:"#connect"},n.a.createElement("span",{className:"icon icon-link"})),"Connect"),n.a.createElement("blockquote",null,n.a.createElement("p",null,"API \u539f\u578b\uff1a",n.a.createElement("code",null,"connect([mapStoreToProps], [mapDispatchToProps], [mergeProps], [options])"))),n.a.createElement("p",null,"\u8fde\u63a5 React \u7ec4\u4ef6\u4e0e Redux store\uff0c\u8fde\u63a5\u64cd\u4f5c\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u4e0e Redux store \u8fde\u63a5\u7684\u7ec4\u4ef6\u7c7b\uff0c\u5e76\u4e14\u8fde\u63a5\u64cd\u4f5c\u4e0d\u4f1a\u6539\u53d8\u539f\u6765\u7684\u7ec4\u4ef6\u7c7b\u3002"),n.a.createElement("p",null,n.a.createElement("code",null,"react-redux")," \u63d0\u4f9b\u4e86 connect \u51fd\u6570\uff0cconnect \u662f\u4e00\u4e2a\u9ad8\u9636\u51fd\u6570\uff0c\u9996\u5148\u4f20\u5165 mapStateToProps\uff0cmapDispatchToProps\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u751f\u4ea7 Component \u7684\u51fd\u6570\uff08wrapWithConnect\uff09\uff0c\u7136\u540e\u518d\u5c06\u771f\u6b63\u7684 Component \u4f5c\u4e3a\u53c2\u6570\u4f20\u5165 wrapWithComponent\uff08MyComponent\uff09\uff0c\u8fd9\u6837\u5c31\u751f\u4ea7\u51fa\u4e00\u4e2a\u7ecf\u8fc7\u5305\u88f9\u7684 Connect \u7ec4\u4ef6\uff0c\u5982 ",n.a.createElement("code",null,"export default connect(mapStateToProps)(HomePage)")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"http://xzfyu.com/2018/07/08/react/react%E7%9B%B8%E5%85%B3/react-redux%E6%BA%90%E7%A0%81%E5%88%86%E6%9E%90/",target:"_blank",rel:"noopener noreferrer"},"React Redux \u6e90\u7801\u5206\u6790",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))),n.a.createElement("p",null,"\u5e26\u7740\u95ee\u9898\u770bReact-Redux\u6e90\u7801",n.a.createElement("a",{href:"https://zhuanlan.zhihu.com/p/80655889",target:"_blank",rel:"noopener noreferrer"},"https://zhuanlan.zhihu.com/p/80655889",n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},n.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),n.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))))))}}}]);