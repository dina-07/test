import{S as t,i as s,s as e,e as l,t as r,c as n,d as o,h as a,f as h,j as c,m as f,l as i,B as u,a as p,q as g,g as d,n as m,N as v}from"./client.50384565.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function j(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=r(d),this.h()},l(t){s=n(t,"LI",{});var l=o(s);e=n(l,"A",{rel:!0,href:!0});var r=o(e);p=a(r,d),r.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="blog/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function b(t){let s,e,u,b,x,q=t[0],B=[];for(let s=0;s<q.length;s+=1)B[s]=j(E(t,q,s));return{c(){s=p(),e=l("h1"),u=r("Recent posts"),b=p(),x=l("ul");for(let t=0;t<B.length;t+=1)B[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=n(t,"H1",{});var l=o(e);u=a(l,"Recent posts"),l.forEach(h),b=d(t),x=n(t,"UL",{class:!0});var r=o(x);for(let t=0;t<B.length;t+=1)B[t].l(r);r.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,b,l),f(t,x,l);for(let t=0;t<B.length;t+=1)B[t].m(x,null)},p(t,[s]){if(1&s){let e;for(q=t[0],e=0;e<q.length;e+=1){const l=E(t,q,e);B[e]?B[e].p(l,s):(B[e]=j(l),B[e].c(),B[e].m(x,null))}for(;e<B.length;e+=1)B[e].d(1);B.length=q.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(b),t&&h(x),v(B,t)}}}function x({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function q(t,s,e){let{posts:l}=s;return t.$set=(t=>{"posts"in t&&e(0,l=t.posts)}),[l]}export default class extends t{constructor(t){super(),s(this,t,q,b,e,{posts:0})}}export{x as preload};
