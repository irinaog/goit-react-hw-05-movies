"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,t,c){c.r(t);var a=c(885),n=c(791),r=c(871),s=c(735),l=c(184);t.default=function(){var e=(0,r.UO)().movieId,t=(0,n.useState)(null),c=(0,a.Z)(t,2),i=c[0],h=c[1];return(0,n.useEffect)((function(){i||s.Z.fetchCast(e).then((function(e){console.log(e.cast),h(e.cast)}))}),[i,e]),(0,l.jsx)("ul",{children:i&&i.map((function(e){var t=e.cast_id,c=e.name,a=e.character,n=e.profile_path;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n),alt:c}),(0,l.jsx)("p",{children:c}),(0,l.jsxs)("p",{children:["Character: ",(0,l.jsx)("span",{children:a})]})]},t)}))})}}}]);
//# sourceMappingURL=597.0059df7c.chunk.js.map