(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[6],{165:function(t,e,a){"use strict";var n=a(2),c=a(83),s=["mousedown","touchstart"];e.a=function(t,e,a){void 0===a&&(a=s);var r=Object(n.useRef)(e);Object(n.useEffect)((function(){r.current=e}),[e]),Object(n.useEffect)((function(){for(var e=function(e){var a=t.current;a&&!a.contains(e.target)&&r.current(e)},n=0,s=a;n<s.length;n++){var o=s[n];Object(c.d)(document,o,e)}return function(){for(var t=0,n=a;t<n.length;t++){var s=n[t];Object(c.c)(document,s,e)}}}),[a,t])}},728:function(t,e,a){"use strict";a.r(e);var n=a(37),c=a(7),s=a(2),r=a(726),o=a(5),i=a(89),d=a(165),l=a(18),u=void 0,j=function(t){var e=t.stateCode,a=t.trail,j=Object(s.useState)(!1),b=Object(n.a)(j,2),f=b[0],m=b[1],v=Object(s.useRef)(),O=Object(o.g)(),h=Object(r.a)().t;Object(d.a)(v,(function(){m(!1)}));var p=Object(i.useTransition)(f,{from:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},enter:{opacity:1,transform:"translate3d(0, 0px, 0)",zIndex:999},leave:{opacity:0,transform:"translate3d(0, 2px, 0)",zIndex:999},config:{mass:1,tension:210,friction:20}}),x=Object(s.useCallback)((function(t){m(!1),O.push("/state/".concat(t))}),[O]);return Object(l.jsxs)("div",{className:"StateDropdown",ref:v,children:[Object(l.jsx)(i.animated.h1,{className:"state-name fadeInUp",style:a,onClick:m.bind(u,!f),children:h(c.v[e])}),p((function(t,a){return a&&Object(l.jsx)(i.animated.div,{className:"dropdown",style:t,children:Object.keys(c.k).filter((function(t){return"TT"!==t&&t!==e})).sort((function(t,e){return c.v[t].localeCompare(c.v[e])})).map((function(t){return Object(l.jsx)("h1",{className:"item",onClick:x.bind(u,t),children:h(c.v[t])},t)}))})})),f&&Object(l.jsx)("div",{className:"backdrop"})]})},b=a(20);function f(t){var e,a,n,o,d,u=t.data,f=t.stateCode,m=Object(r.a)().t,v=Object(s.useMemo)((function(){var t=[];return[0,0,0].map((function(e,a){return t.push({animationDelay:"".concat(250*a,"ms")}),null})),t}),[]),O=Object(i.useSpring)({total:Object(b.h)(u,"total","tested"),config:c.s});return Object(l.jsxs)("div",{className:"StateHeader",children:[Object(l.jsxs)("div",{className:"header-left",children:[Object(l.jsx)(j,{stateCode:f,hyperlink:!1,trail:v[0]}),(null===u||void 0===u||null===(e=u.meta)||void 0===e?void 0:e.last_updated)&&Object(l.jsx)("h5",{className:"fadeInUp",style:v[1],children:"".concat(m("Last Updated on")," ").concat(Object(b.c)(u.meta.last_updated,"dd MMM, p")," ").concat(m("IST"))})]}),Object(l.jsxs)("div",{className:"header-right fadeInUp",style:v[2],children:[Object(l.jsx)("h5",{children:m("Tested")}),Object(l.jsx)(i.animated.h2,{children:O.total.to((function(t){return Object(b.e)(Math.floor(t))}))}),(null===u||void 0===u||null===(a=u.meta)||void 0===a||null===(n=a.tested)||void 0===n?void 0:n.last_updated)&&Object(l.jsx)("h5",{className:"timestamp",children:"".concat(m("As of")," ").concat(Object(b.c)(u.meta.tested.last_updated,"dd MMMM"))}),(null===u||void 0===u||null===(o=u.meta)||void 0===o||null===(d=o.tested)||void 0===d?void 0:d.source)&&Object(l.jsxs)("h5",{children:["".concat(m("per")," "),Object(l.jsx)("a",{href:u.meta.tested.source,target:"_noblank",children:m("source")})]})]})]})}e.default=Object(s.memo)(f)}}]);
//# sourceMappingURL=6.ec4ecd94.chunk.js.map