import{V as t,W as n,_ as e,a as s,i as r,s as a,b as c,S as o,c as u,e as i,t as f,q as l,d as h,f as p,g as d,h as v,j as m,k as y,l as x,m as b,C as g,E as R,n as j,o as E,p as k}from"./client.4d5bbde1.js";function D(t){return function(){var n,e=E(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var s=E(this).constructor;n=Reflect.construct(e,arguments,s)}else n=e.apply(this,arguments);return k(this,n)}}function H(t){var n,e,s,r,a,c,o=t[0].title+"",E=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=u(),s=i("h1"),r=f(o),a=u(),c=i("div"),this.h()},l:function(t){l('[data-svelte="svelte-1uty71u"]',document.head).forEach(h),e=p(t),s=d(t,"H1",{});var n=v(s);r=m(n,o),n.forEach(h),a=p(t),c=d(t,"DIV",{class:!0}),v(c).forEach(h),this.h()},h:function(){y(c,"class","content svelte-gnxal1")},m:function(t,n){x(t,e,n),x(t,s,n),b(s,r),x(t,a,n),x(t,c,n),c.innerHTML=E},p:function(t,e){var s=g(e,1)[0];1&s&&n!==(n=t[0].title)&&(document.title=n),1&s&&o!==(o=t[0].title+"")&&R(r,o),1&s&&E!==(E=t[0].html+"")&&(c.innerHTML=E)},i:j,o:j,d:function(t){t&&h(e),t&&h(s),t&&h(a),t&&h(c)}}}function q(t){return w.apply(this,arguments)}function w(){return(w=t(n.mark(function t(e){var s,r,a;return n.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.params,e.query,t.next=3,this.fetch("blog/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function L(t,n,e){var s=n.post;return t.$set=function(t){"post"in t&&e(0,s=t.post)},[s]}export default(function(t){e(u,o);var n=D(u);function u(t){var e;return s(this,u),e=n.call(this),r(c(e),t,L,H,a,{post:0}),e}return u}());export{q as preload};