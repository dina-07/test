import{r as t,u as n,_ as r,a as e,i as o,s as i,b as a,S as c,e as u,t as f,c as s,g as l,h as d,j as h,d as p,f as g,k as m,l as v,m as y,v as b,w as k,x,y as w,z as E,A as I,B as z,q as B,C as O,o as R,p as C,D as P,E as S,F as L,G as M,H as N,I as T,J as j,K as A,L as D,M as H,n as U,N as q}from"./client.4d5bbde1.js";function K(t){var n=t-1;return n*n*n+1}function F(t){return--t*t*t*t*t+1}function V(t,n){var r=n.delay,e=void 0===r?0:r,o=n.duration,i=void 0===o?400:o,a=n.easing,c=void 0===a?K:a,u=n.x,f=void 0===u?0:u,s=n.y,l=void 0===s?0:s,d=n.opacity,h=void 0===d?0:d,p=getComputedStyle(t),g=+p.opacity,m="none"===p.transform?"":p.transform,v=g*(1-h);return{delay:e,duration:i,easing:c,css:function(t,n){return"\n\t\t\ttransform: ".concat(m," translate(").concat((1-t)*f,"px, ").concat((1-t)*l,"px);\n\t\t\topacity: ").concat(g-v*n)}}}function W(r){var e=r.fallback,o=function(t,n){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(r[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(r[e[o]]=t[e[o]])}return r}(r,["fallback"]),i=new Map,a=new Map;function c(r,i,a){return function(c,u){return r.set(u.key,{rect:c.getBoundingClientRect()}),function(){if(i.has(u.key)){var f=i.get(u.key).rect;return i.delete(u.key),function(r,e,i){var a=n(n({},o),i),c=a.delay,u=void 0===c?0:c,f=a.duration,s=void 0===f?function(t){return 30*Math.sqrt(t)}:f,l=a.easing,d=void 0===l?K:l,h=e.getBoundingClientRect(),p=r.left-h.left,g=r.top-h.top,m=r.width/h.width,v=r.height/h.height,y=Math.sqrt(p*p+g*g),b=getComputedStyle(e),k="none"===b.transform?"":b.transform,x=+b.opacity;return{delay:u,duration:t(s)?s(y):s,easing:d,css:function(t,n){return"\n\t\t\t\topacity: ".concat(t*x,";\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ").concat(k," translate(").concat(n*p,"px,").concat(n*g,"px) scale(").concat(t+(1-t)*m,", ").concat(t+(1-t)*v,");\n\t\t\t")}}}(f,c,u)}return r.delete(u.key),e&&e(c,u,a)}}}return[c(a,i,!1),c(i,a,!0)]}function J(n,r,e){var o=getComputedStyle(n),i="none"===o.transform?"":o.transform,a=r.from.width/n.clientWidth,c=r.from.height/n.clientHeight,u=(r.from.left-r.to.left)/a,f=(r.from.top-r.to.top)/c,s=Math.sqrt(u*u+f*f),l=e.delay,d=void 0===l?0:l,h=e.duration,p=void 0===h?function(t){return 120*Math.sqrt(t)}:h,g=e.easing,m=void 0===g?K:g;return{delay:d,duration:t(p)?p(s):p,easing:m,css:function(t,n){return"transform: ".concat(i," translate(").concat(n*u,"px, ").concat(n*f,"px);")}}}function G(t){return function(){var n,r=R(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var e=R(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return C(this,n)}}function Y(t,n,r){var e=t.slice();return e[13]=n[r],e[14]=n,e[15]=r,e}function _(t,n,r){var e=t.slice();return e[13]=n[r],e[16]=n,e[17]=r,e}function Q(t){for(var n,r,e,o,i,a,c,z,B,O,R,C,P,S,L,M,N,j,A,U,q,K=[],F=new Map,W=[],J=new Map,G=t[1].filter(tt),Q=function(t){return t[13].id},$=0;$<G.length;$+=1){var rt=_(t,G,$),et=Q(rt);F.set(et,K[$]=X(et,rt))}for(var ot=t[1].filter(nt),it=function(t){return t[13].id},at=0;at<ot.length;at+=1){var ct=Y(t,ot,at),ut=it(ct);J.set(ut,W[at]=Z(ut,ct))}return{c:function(){n=u("p"),r=f("Flies in and out"),o=s(),i=u("style"),a=f(".new-todo {\r\n\t\tfont-size: 1.4em;\r\n\t\twidth: 100%;\r\n\t\tmargin: 2em 0 1em 0;\r\n\t}\r\n\r\n\t.board {\r\n\t\tmax-width: 36em;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.left, .right {\r\n\t\tfloat: left;\r\n\t\twidth: 50%;\r\n\t\tpadding: 0 1em 0 0;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\th2 {\r\n\t\tfont-size: 2em;\r\n\t\tfont-weight: 200;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\tlabel {\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tdisplay: block;\r\n\t\tfont-size: 1em;\r\n\t\tline-height: 1;\r\n\t\tpadding: 0.5em;\r\n\t\tmargin: 0 auto 0.5em auto;\r\n\t\tborder-radius: 2px;\r\n\t\tbackground-color: #eee;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\tinput { margin: 0 }\r\n\r\n\t.right label {\r\n\t\tbackground-color: rgb(180,240,100);\r\n\t}\r\n\r\n\tbutton {\r\n\t\tfloat: right;\r\n\t\theight: 1em;\r\n\t\tbox-sizing: border-box;\r\n\t\tpadding: 0 0.5em;\r\n\t\tline-height: 1;\r\n\t\tbackground-color: transparent;\r\n\t\tborder: none;\r\n\t\tcolor: rgb(170,30,30);\r\n\t\topacity: 0;\r\n\t\ttransition: opacity 0.2s;\r\n\t}\r\n\r\n\tlabel:hover button {\r\n\t\topacity: 1;\r\n\t}"),c=s(),z=u("div"),B=u("input"),O=s(),R=u("div"),C=u("h2"),P=f("todo"),S=s();for(var t=0;t<K.length;t+=1)K[t].c();L=s(),M=u("div"),N=u("h2"),j=f("done"),A=s();for(var e=0;e<W.length;e+=1)W[e].c();this.h()},l:function(t){n=l(t,"P",{});var e=d(n);r=h(e,"Flies in and out"),e.forEach(p),o=g(t),i=l(t,"STYLE",{});var u=d(i);a=h(u,".new-todo {\r\n\t\tfont-size: 1.4em;\r\n\t\twidth: 100%;\r\n\t\tmargin: 2em 0 1em 0;\r\n\t}\r\n\r\n\t.board {\r\n\t\tmax-width: 36em;\r\n\t\tmargin: 0 auto;\r\n\t}\r\n\r\n\t.left, .right {\r\n\t\tfloat: left;\r\n\t\twidth: 50%;\r\n\t\tpadding: 0 1em 0 0;\r\n\t\tbox-sizing: border-box;\r\n\t}\r\n\r\n\th2 {\r\n\t\tfont-size: 2em;\r\n\t\tfont-weight: 200;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\tlabel {\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tdisplay: block;\r\n\t\tfont-size: 1em;\r\n\t\tline-height: 1;\r\n\t\tpadding: 0.5em;\r\n\t\tmargin: 0 auto 0.5em auto;\r\n\t\tborder-radius: 2px;\r\n\t\tbackground-color: #eee;\r\n\t\tuser-select: none;\r\n\t}\r\n\r\n\tinput { margin: 0 }\r\n\r\n\t.right label {\r\n\t\tbackground-color: rgb(180,240,100);\r\n\t}\r\n\r\n\tbutton {\r\n\t\tfloat: right;\r\n\t\theight: 1em;\r\n\t\tbox-sizing: border-box;\r\n\t\tpadding: 0 0.5em;\r\n\t\tline-height: 1;\r\n\t\tbackground-color: transparent;\r\n\t\tborder: none;\r\n\t\tcolor: rgb(170,30,30);\r\n\t\topacity: 0;\r\n\t\ttransition: opacity 0.2s;\r\n\t}\r\n\r\n\tlabel:hover button {\r\n\t\topacity: 1;\r\n\t}"),u.forEach(p),c=g(t),z=l(t,"DIV",{class:!0});var f=d(z);B=l(f,"INPUT",{class:!0,placeholder:!0}),O=g(f),R=l(f,"DIV",{class:!0});var s=d(R);C=l(s,"H2",{});var m=d(C);P=h(m,"todo"),m.forEach(p),S=g(s);for(var v=0;v<K.length;v+=1)K[v].l(s);s.forEach(p),L=g(f),M=l(f,"DIV",{class:!0});var y=d(M);N=l(y,"H2",{});var b=d(N);j=h(b,"done"),b.forEach(p),A=g(y);for(var k=0;k<W.length;k+=1)W[k].l(y);y.forEach(p),f.forEach(p),this.h()},h:function(){m(B,"class","new-todo"),m(B,"placeholder","what needs to be done?"),m(R,"class","left"),m(M,"class","right"),m(z,"class","board")},m:function(e,u,f){v(e,n,u),y(n,r),v(e,o,u),v(e,i,u),y(i,a),v(e,c,u),v(e,z,u),y(z,B),y(z,O),y(z,R),y(R,C),y(C,P),y(R,S);for(var s=0;s<K.length;s+=1)K[s].m(R,null);y(z,L),y(z,M),y(M,N),y(N,j),y(M,A);for(var l=0;l<W.length;l+=1)W[l].m(M,null);U=!0,f&&q(),q=b(B,"keydown",t[8])},p:function(t,n){if(34&n){var r=t[1].filter(tt);D();for(var e=0;e<K.length;e+=1)K[e].r();K=k(K,n,Q,1,t,r,F,R,H,X,null,_);for(var o=0;o<K.length;o+=1)K[o].a();x()}if(34&n){var i=t[1].filter(nt);D();for(var a=0;a<W.length;a+=1)W[a].r();W=k(W,n,it,1,t,i,J,M,H,Z,null,Y);for(var c=0;c<W.length;c+=1)W[c].a();x()}},i:function(t){if(!U){T(function(){e||(e=E(n,V,{y:200,duration:2e3},!0)),e.run(1)});for(var r=0;r<G.length;r+=1)w(K[r]);for(var o=0;o<ot.length;o+=1)w(W[o]);U=!0}},o:function(t){e||(e=E(n,V,{y:200,duration:2e3},!1)),e.run(0);for(var r=0;r<K.length;r+=1)I(K[r]);for(var o=0;o<W.length;o+=1)I(W[o]);U=!1},d:function(t){t&&p(n),t&&e&&e.end(),t&&p(o),t&&p(i),t&&p(c),t&&p(z);for(var r=0;r<K.length;r+=1)K[r].d();for(var a=0;a<W.length;a+=1)W[a].d();q()}}}function X(t,n){var r,e,o,i,a,c,k,x,w,E,I,z,B,O=n[13].description+"",R=U;function C(){n[9].call(e,n[13])}function D(){for(var t,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return(t=n)[10].apply(t,[n[13]].concat(e))}return{key:t,first:null,c:function(){r=u("label"),e=u("input"),o=s(),i=f(O),a=s(),c=u("button"),k=f("x"),x=s(),this.h()},l:function(t){r=l(t,"LABEL",{});var n=d(r);e=l(n,"INPUT",{type:!0}),o=g(n),i=h(n,O),a=g(n),c=l(n,"BUTTON",{});var u=d(c);k=h(u,"x"),u.forEach(p),x=g(n),n.forEach(p),this.h()},h:function(){m(e,"type","checkbox"),this.first=r},m:function(t,u,f){v(t,r,u),y(r,e),e.checked=n[13].done,y(r,o),y(r,i),y(r,a),y(r,c),y(c,k),y(r,x),z=!0,f&&P(B),B=[b(e,"change",C),b(c,"click",D)]},p:function(t,r){n=t,2&r&&(e.checked=n[13].done),(!z||2&r)&&O!==(O=n[13].description+"")&&S(i,O)},r:function(){I=r.getBoundingClientRect()},f:function(){L(r),R(),M(r,I)},a:function(){R(),R=N(r,I,J,{})},i:function(t){z||(T(function(){E&&E.end(1),w||(w=j(r,n[3],{key:n[13].id})),w.start()}),z=!0)},o:function(t){w&&w.invalidate(),E=A(r,n[2],{key:n[13].id}),z=!1},d:function(t){t&&p(r),t&&E&&E.end(),P(B)}}}function Z(t,n){var r,e,o,i,a,c,k,x,w,E,I,z,B,O=n[13].description+"",R=U;function C(){n[11].call(e,n[13])}function D(){for(var t,r=arguments.length,e=new Array(r),o=0;o<r;o++)e[o]=arguments[o];return(t=n)[12].apply(t,[n[13]].concat(e))}return{key:t,first:null,c:function(){r=u("label"),e=u("input"),o=s(),i=f(O),a=s(),c=u("button"),k=f("x"),x=s(),this.h()},l:function(t){r=l(t,"LABEL",{});var n=d(r);e=l(n,"INPUT",{type:!0}),o=g(n),i=h(n,O),a=g(n),c=l(n,"BUTTON",{});var u=d(c);k=h(u,"x"),u.forEach(p),x=g(n),n.forEach(p),this.h()},h:function(){m(e,"type","checkbox"),this.first=r},m:function(t,u,f){v(t,r,u),y(r,e),e.checked=n[13].done,y(r,o),y(r,i),y(r,a),y(r,c),y(c,k),y(r,x),z=!0,f&&P(B),B=[b(e,"change",C),b(c,"click",D)]},p:function(t,r){n=t,2&r&&(e.checked=n[13].done),(!z||2&r)&&O!==(O=n[13].description+"")&&S(i,O)},r:function(){I=r.getBoundingClientRect()},f:function(){L(r),R(),M(r,I)},a:function(){R(),R=N(r,I,J,{})},i:function(t){z||(T(function(){E&&E.end(1),w||(w=j(r,n[3],{key:n[13].id})),w.start()}),z=!0)},o:function(t){w&&w.invalidate(),E=A(r,n[2],{key:n[13].id}),z=!1},d:function(t){t&&p(r),t&&E&&E.end(),P(B)}}}function $(t){var n,r,e,o,i,a,c,k,E,R,C,P,S,L,M,N,T,j,A,H=t[0]&&Q(t);return{c:function(){n=u("link"),r=s(),e=u("h1"),o=f("Welcome!!"),i=s(),a=u("p"),c=f("Information for you :"),k=s(),E=u("hr"),R=s(),C=u("br"),P=s(),S=u("label"),L=u("input"),M=f("\r\n\tKlik untuk tampilkan/sembunyikan"),N=s(),H&&H.c(),T=z(),this.h()},l:function(t){var u=B('[data-svelte="svelte-18sii7"]',document.head);n=l(u,"LINK",{rel:!0,href:!0}),u.forEach(p),r=g(t),e=l(t,"H1",{});var f=d(e);o=h(f,"Welcome!!"),f.forEach(p),i=g(t),a=l(t,"P",{});var s=d(a);c=h(s,"Information for you :"),s.forEach(p),k=g(t),E=l(t,"HR",{}),R=g(t),C=l(t,"BR",{}),P=g(t),S=l(t,"LABEL",{});var m=d(S);L=l(m,"INPUT",{type:!0}),M=h(m,"\r\n\tKlik untuk tampilkan/sembunyikan"),m.forEach(p),N=g(t),H&&H.l(t),T=z(),this.h()},h:function(){m(n,"rel","stylesheet"),m(n,"href","https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"),document.title="Information",m(L,"type","checkbox")},m:function(u,f,s){y(document.head,n),v(u,r,f),v(u,e,f),y(e,o),v(u,i,f),v(u,a,f),y(a,c),v(u,k,f),v(u,E,f),v(u,R,f),v(u,C,f),v(u,P,f),v(u,S,f),y(S,L),L.checked=t[0],y(S,M),v(u,N,f),H&&H.m(u,f),v(u,T,f),j=!0,s&&A(),A=b(L,"change",t[7])},p:function(t,n){var r=O(n,1)[0];1&r&&(L.checked=t[0]),t[0]?H?(H.p(t,r),w(H,1)):((H=Q(t)).c(),w(H,1),H.m(T.parentNode,T)):H&&(D(),I(H,1,1,function(){H=null}),x())},i:function(t){j||(w(H),j=!0)},o:function(t){I(H),j=!1},d:function(t){p(n),t&&p(r),t&&p(e),t&&p(i),t&&p(a),t&&p(k),t&&p(E),t&&p(R),t&&p(C),t&&p(P),t&&p(S),t&&p(N),H&&H.d(t),t&&p(T),A()}}}var tt=function(t){return!t.done},nt=function(t){return t.done};function rt(t,n,r){var e=!0,o=W({fallback:function(t,n){var r=getComputedStyle(t),e="none"===r.transform?"":r.transform;return{duration:600,easing:F,css:function(t){return"\n\t\t\t\t\ttransform: ".concat(e," scale(").concat(t,");\n\t\t\t\t\topacity: ").concat(t,"\n\t\t\t\t")}}}}),i=O(o,2),a=i[0],c=i[1],u=[{id:1,done:!1,description:"write some docs"},{id:2,done:!1,description:"start writing JSConf talk"},{id:3,done:!0,description:"buy some milk"},{id:4,done:!1,description:"mow the lawn"},{id:5,done:!1,description:"feed the turtle"},{id:6,done:!1,description:"fix some bugs"}],f=u.length+1;function s(t){var n={id:f++,done:!1,description:t.value};r(1,u=[n].concat(q(u))),t.value=""}function l(t){r(1,u=u.filter(function(n){return n!==t}))}return[e,u,a,c,s,l,f,function(){e=this.checked,r(0,e)},function(t){return 13===t.which&&s(t.target)},function(t){t.done=this.checked,r(1,u)},function(t){return l(t)},function(t){t.done=this.checked,r(1,u)},function(t){return l(t)}]}export default(function(t){r(u,c);var n=G(u);function u(t){var r;return e(this,u),r=n.call(this),o(a(r),t,rt,$,i,{}),r}return u}());
