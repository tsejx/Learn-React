(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{fZaY:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),l={light:{background:"#eeeeee",color:"#222222"},dark:{background:"#222222",color:"#eeeeee"}},a=o.a.createContext({theme:l.dark,toggleTheme:()=>{}});function c(){return o.a.createElement(a.Consumer,null,e=>{var t=e.theme,n=e.toggleTheme;return o.a.createElement("button",{onClick:n,style:{outline:"none",color:t.color,backgroundColor:t.background,cursor:"pointer"}},"Toggle Theme")})}class u extends o.a.Component{constructor(e){super(e),this.toggleTheme=()=>{this.setState(e=>({theme:e.theme===l.dark?l.light:l.dark}))},this.state={theme:l.light,toggleTheme:this.toggleTheme}}render(){return o.a.createElement(a.Provider,{value:this.state},o.a.createElement(s,null))}}function s(){return o.a.createElement("div",null,o.a.createElement(c,null))}t["default"]=()=>o.a.createElement(u,null)}}]);