"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[528],{528:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,o,u=t(885),a=t(791),i=t(168),c=t(31),l=c.ZP.input(r||(r=(0,i.Z)(["\n  outline:none;\n  height: 20px;\n"]))),s=c.ZP.button(o||(o=(0,i.Z)(["\npadding: 4px 8px;\nmargin-left:8px;\ncolor:black;\nbackground-color:transparent;\nborder: 1px solid black;\n&:hover{\n    color:white;\nbackground-color:orangered;\nborder-color:transparent;\n}\n"]))),f=t(184),h=function(n){var e=n.onSubmit,t=(0,a.useState)(""),r=(0,u.Z)(t,2),o=r[0],i=r[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(e(o),i("")):alert("Please enter smth")},children:[(0,f.jsx)(l,{type:"text",value:o,onChange:function(n){i(n.currentTarget.value)}}),(0,f.jsx)(s,{type:"submit",children:"Search"})]})})},d=t(598),p=t(501),b=t(735),x=t(126),g=function(){var n=(0,a.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,a.useState)(null),i=(0,u.Z)(o,2),c=i[0],l=i[1],s=(0,p.lr)(),g=(0,u.Z)(s,2),m=g[0],v=g[1];(0,a.useEffect)((function(){""!==t&&b.Z.fetchMovieSearch(t).then((function(n){if(0===n.total_results)return alert("Nothing found");l(n.results)}))}),[t,m]);return(0,f.jsxs)(d.W2,{children:[(0,f.jsx)(h,{onSubmit:function(n){r(n),v({query:n}),l(null)}}),c&&(0,f.jsx)(x.Z,{movies:c})]})}}}]);
//# sourceMappingURL=528.dec38084.chunk.js.map