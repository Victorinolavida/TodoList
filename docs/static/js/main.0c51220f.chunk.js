(this["webpackJsonp05-hook-app"]=this["webpackJsonp05-hook-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(8),o=n.n(a),r=n(3),l=n(2),i=n(10),s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(i.a)(e),[t.payload]);case"detele":return e.filter((function(e){return e.id!==t.payload}));case"toggle":case"toggle-old":return e.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{done:!e.done}):e}));default:return e}},d=n(9),u=n(0);function j(e){var t=e.el,n=e.i,c=e.handleToggle,a=e.handleDelete;return Object(u.jsxs)("li",{className:"list-group-item ",children:[Object(u.jsxs)("p",{className:"".concat(t.done&&"complete"),onClick:function(){return c(t.id)},children:[n+1,". ",t.desc]}),Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(){return a(t.id)},children:"Borrar"})]},t.id)}function b(e){var t=e.data,n=e.handleToggle,c=e.handleDelete;return Object(u.jsx)("ul",{className:"list-group list-group-flush",children:t.map((function(e,t){return Object(u.jsx)(j,{el:e,i:t,handleToggle:n,handleDelete:c},e.id)}))})}var h=n(6);function p(e){var t=e.handleAddTo,n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(r.a)(t,2),a=n[0],o=n[1];return[a,function(e){var t=e.target;o(Object(l.a)(Object(l.a)({},a),{},Object(h.a)({},t.name,t.value)))},function(){o(e)}]}({description:""}),a=Object(r.a)(n,3),o=a[0].description,i=a[1],s=a[2];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h4",{children:"Agregar TODO"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!(o.trim()<=1)){var n={id:(new Date).getTime(),desc:o,done:!1};t(n),s()}},children:[Object(u.jsx)("input",{className:"form-control",type:"text",name:"description",placeholder:"Aprender....",autoComplete:"off",value:o,onChange:i}),Object(u.jsx)("button",{className:"btn btn-outline-primary mt-1 btn-block",type:"submit",children:"Agregar"})]})]})}n(16);function g(){var e=Object(c.useReducer)(s,[],(function(){return JSON.parse(localStorage.getItem("todos"))||[]})),t=Object(r.a)(e,2),n=t[0],a=t[1];Object(d.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:["TodoApp ( ",n.length," )"]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-7",children:["todos",Object(u.jsx)(b,{data:n,handleToggle:function(e){a({type:"toggle",payload:e})},handleDelete:function(e){console.log(e),a({type:"detele",payload:e})}})]}),Object(u.jsx)("div",{className:"col-5",children:Object(u.jsx)(p,{handleAddTo:function(e){a({type:"add",payload:e})}})})]})]})}o.a.render(Object(u.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0c51220f.chunk.js.map