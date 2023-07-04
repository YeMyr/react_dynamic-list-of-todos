(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s,a=c(5),n=c.n(a),l=c(2),o=c(1),d=(c(10),c(11),c(12),c(4)),r=c.n(d),i=c(0),j=function(e){var t=e.todo,c=e.setSelectedTodo,s=e.selectedTodo,a=!!s&&s.id===t.id;return Object(i.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(i.jsx)("td",{className:"is-vcentered",children:t.id}),t.completed?Object(i.jsx)("td",{className:"is-vcentered",children:Object(i.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(i.jsx)("i",{className:"fas fa-check"})})}):Object(i.jsx)("td",{className:"is-vcentered"}),Object(i.jsx)("td",{className:"is-vcentered is-expanded",children:Object(i.jsx)("p",{className:r()({"has-text-success":t.completed},{"has-text-danger":!t.completed}),children:t.title})}),Object(i.jsx)("td",{className:"has-text-right is-vcentered",children:Object(i.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(t)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:r()("far",{"fa-eye":!a},{"fa-eye-slash":a})})})})})]})},u=Object(o.memo)((function(e){var t=e.todos,c=e.setSelectedTodo,s=e.selectedTodo;return Object(i.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:"fas fa-check"})})}),Object(i.jsx)("th",{children:"Title"}),Object(i.jsx)("th",{children:" "})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(j,{todo:e,setSelectedTodo:c,selectedTodo:s},e.id)}))})]})}));!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=Object(o.memo)((function(e){var t=e.query,c=e.setQuery,a=e.applyQuery,n=e.filterType,o=e.setFilterType;return Object(i.jsxs)("form",{className:"field has-addons",children:[Object(i.jsx)("p",{className:"control",children:Object(i.jsx)("span",{className:"select",children:Object(i.jsx)("select",{"data-cy":"statusSelect",value:n,onChange:function(e){o(e.target.value)},children:Object.entries(s).map((function(e){var t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(i.jsx)("option",{value:s,children:c},c)}))})})}),Object(i.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(i.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){var t=e.target.value.toLowerCase().trim();c(e.target.value),a(t)}}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(i.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(i.jsx)("button",{"aria-label":"clearSearchButton","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){c(""),a("")}})})]})]})})),m=(c(14),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){if(!e.ok)throw new Error("Failed to upload data: ".concat(e.status," - ").concat(e.statusText));return e.json()}))}var O=Object(o.memo)((function(e){var t=e.selectedTodo,c=e.setSelectedTodo,s=Object(o.useState)(null),a=Object(l.a)(s,2),n=a[0],d=a[1],r=Object(o.useState)(!0),j=Object(l.a)(r,2),u=j[0],b=j[1];Object(o.useEffect)((function(){var e;(e=t.userId,h("/users/".concat(e))).then((function(e){d(e),b(!1)}))}),[]);return Object(i.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(i.jsx)("div",{className:"modal-background"}),u?Object(i.jsx)(m,{}):Object(i.jsxs)("div",{className:"modal-card",children:[Object(i.jsxs)("header",{className:"modal-card-head",children:[Object(i.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(i.jsx)("button",{"aria-label":"closeModal",type:"button",className:"delete","data-cy":"modal-close",onClick:function(){c(null),d(null),b(!0)}})]}),Object(i.jsxs)("div",{className:"modal-card-body",children:[Object(i.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(i.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(i.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(i.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(i.jsx)("a",{href:"mailto:".concat(null===n||void 0===n?void 0:n.email),children:null===n||void 0===n?void 0:n.name})]})]})]})]})})),x=function(){var e=Object(o.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(o.useState)(!0),d=Object(l.a)(n,2),r=d[0],j=d[1],x=Object(o.useState)(""),f=Object(l.a)(x,2),p=f[0],v=f[1],y=Object(o.useState)(""),N=Object(l.a)(y,2),T=N[0],g=N[1],S=Object(o.useState)(s.All),k=Object(l.a)(S,2),w=k[0],C=k[1],A=Object(o.useState)(null),E=Object(l.a)(A,2),_=E[0],B=E[1];Object(o.useEffect)((function(){h("/todos").then((function(e){return a(e)})).finally((function(){return j(!1)}))}),[]);var F=Object(o.useCallback)(function(e,t){var c;return function(){clearTimeout(c);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];c=setTimeout.apply(void 0,[e,t].concat(a))}}(g,500),[]),L=Object(o.useMemo)((function(){return function(e,t,c){return e.filter((function(e){var a=e.title.toLowerCase().includes(c);switch(t){case s.All:return a;case s.Active:return a&&!e.completed;case s.Completed:return a&&e.completed;default:throw new Error("Unable to filter todos")}}))}(c,w,T)}),[T,w,c]);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"box",children:[Object(i.jsx)("h1",{className:"title",children:"Todos:"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)(b,{query:p,setQuery:v,applyQuery:F,filterType:w,setFilterType:C})}),Object(i.jsxs)("div",{className:"block",children:[r&&Object(i.jsx)(m,{}),!r&&Object(i.jsx)(u,{todos:L,setSelectedTodo:B,selectedTodo:_})]})]})})}),_&&Object(i.jsx)(O,{selectedTodo:_,setSelectedTodo:B})]})};n.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6a63d3bb.chunk.js.map