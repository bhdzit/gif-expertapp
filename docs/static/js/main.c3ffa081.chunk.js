(this["webpackJsonpgif-expertapp"]=this["webpackJsonpgif-expertapp"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(7),a=n.n(c),i=(n(15),n(2)),u=n(9),s=n(0);var o=function(t){var e=t.setcategory,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],o=c[1];return Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),a.length>0&&(e((function(t){return[a].concat(Object(u.a)(t))})),o(""))},children:Object(s.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})})},j=n(10),d=n(6),f=n.n(d),l=n(8),p=function(){var t=Object(l.a)(f.a.mark((function t(e){var n,r,c,a,i;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=HIe6DRQYbpPhlSBf9teJst6oa0fD0jse&q=".concat(encodeURI(e),"&limit=10"),t.next=3,fetch(n);case 3:return r=t.sent,t.next=6,r.json();case 6:return c=t.sent,a=c.data,i=a.map((function(t){var e;return{id:t.id,titel:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(t){var e=t.url,n=t.titel;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{src:e,alt:n}),Object(s.jsx)("p",{children:n})]})},O=function(t){var e=function(t){var e=Object(r.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){p(t).then((function(t){setTimeout((function(){a({data:t,loading:!1})}),3e3)}))}),[t]),c}(t.category),n=e.data,c=e.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h3",{children:c&&"Cargando..."}),Object(s.jsx)("div",{className:"card-grid",children:n.map((function(t){return Object(s.jsx)(b,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(r.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],c=e[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(o,{setcategory:c}),Object(s.jsx)("hr",{}),Object(s.jsx)("ol",{children:n.map((function(t){return Object(s.jsx)(O,{category:t},t)}))})]})};a.a.render(Object(s.jsx)(h,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c3ffa081.chunk.js.map