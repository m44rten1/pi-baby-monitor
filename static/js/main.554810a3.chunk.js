(this["webpackJsonppi-baby-monitor"]=this["webpackJsonppi-baby-monitor"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){},15:function(e,t){function s(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}s.keys=function(){return[]},s.resolve=s,e.exports=s,s.id=15},17:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(6),i=s.n(a),l=(s(12),s(2)),o=s(5),r=s(3),d=(s(13),s(14),s(7)),j=s.n(d),b=s(0),m={id:"",password:"",rememberMe:!1},u="SIGN_IN_INFO",h=localStorage.getItem(u);h&&(m=JSON.parse(h));var O=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)(m),i=Object(r.a)(a,2),d=i[0],h=i[1],O=Object(c.useState)(!1),f=Object(r.a)(O,2),p=f[0],x=f[1],v=function(e,t){h(Object(o.a)(Object(o.a)({},d),{},Object(l.a)({},e,t)))};return Object(b.jsxs)(b.Fragment,{children:[s?Object(b.jsx)(b.Fragment,{}):Object(b.jsx)("section",{className:"hero is-primary is-fullheight",children:Object(b.jsx)("div",{className:"hero-body",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"columns is-centered",children:Object(b.jsx)("div",{className:"column is-5-tablet is-4-desktop is-3-widescreen",children:Object(b.jsxs)("form",{action:"",className:"box",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",children:"Identifier"}),Object(b.jsxs)("div",{className:"control has-icons-left",children:[Object(b.jsx)("input",{placeholder:"my-unique-id-12345!",className:"input",autoComplete:"on",required:!0,value:d.id,onChange:function(e){return v("id",e.target.value)},disabled:p}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fa fa-id-card"})})]})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{className:"label",children:"Password"}),Object(b.jsxs)("div",{className:"control has-icons-left",children:[Object(b.jsx)("input",{type:"password",placeholder:"*******",className:"input",autoComplete:"on",required:!0,value:d.password,onChange:function(e){return v("password",e.target.value)},disabled:p}),Object(b.jsx)("span",{className:"icon is-small is-left",children:Object(b.jsx)("i",{className:"fa fa-lock"})})]})]}),Object(b.jsx)("div",{className:"field",children:Object(b.jsxs)("label",{className:"checkbox",children:[Object(b.jsx)("input",{type:"checkbox",checked:d.rememberMe,onChange:function(){return v("rememberMe",!d.rememberMe)},disabled:p}),Object(b.jsx)("span",{className:"ml-1",children:"Remember me"})]})}),Object(b.jsx)("div",{className:"field",children:Object(b.jsx)("button",{className:"button is-success ".concat(p?"is-loading":""),onClick:function(e){e.preventDefault(),x(!0);var t=new j.a;t.on("open",(function(){var e=t.connect(d.id);e.on("open",(function(){e.send(d.password)})),e.on("data",(function(e){"wrong"===e&&x(!1),"permission-failure"===e&&x(!1)}))})),t.on("call",(function(e){e.answer(void 0),e.on("stream",(function(e){x(!1),n(!0),d.rememberMe&&localStorage.setItem(u,JSON.stringify(d));var t=document.getElementById("video");t&&(t.srcObject=e,t.play())}))}))},children:"Connect"})})]})})})})})}),Object(b.jsx)("video",{id:"video",hidden:!s||p,style:{objectFit:"cover",width:"100vw",height:"100vh"},controls:!0,autoPlay:!0})]})},f=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.554810a3.chunk.js.map