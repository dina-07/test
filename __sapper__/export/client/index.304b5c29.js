import{S as t,i as s,s as e,e as l,t as r,b as n,f as o,g as a,d as h,h as c,j as f,k as i,z as u,a as p,q as g,c as d,n as m,L as v}from"./client.6f6998a4.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=r(d),this.h()},l(t){s=n(t,"LI",{});var l=o(s);e=n(l,"A",{rel:!0,href:!0});var r=o(e);p=a(r,d),r.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="blog/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function j(t){let s,e,u,j,x,L=t[0],q=[];for(let s=0;s<L.length;s+=1)q[s]=b(E(t,L,s));return{c(){s=p(),e=l("h1"),u=r("Recent posts"),j=p(),x=l("ul");for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(t){g('[data-svelte="svelte-hfp9t8"]',document.head).forEach(h),s=d(t),e=n(t,"H1",{});var l=o(e);u=a(l,"Recent posts"),l.forEach(h),j=d(t),x=n(t,"UL",{class:!0});var r=o(x);for(let t=0;t<q.length;t+=1)q[t].l(r);r.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,j,l),f(t,x,l);for(let t=0;t<q.length;t+=1)q[t].m(x,null)},p(t,[s]){if(1&s){let e;for(L=t[0],e=0;e<L.length;e+=1){const l=E(t,L,e);q[e]?q[e].p(l,s):(q[e]=b(l),q[e].c(),q[e].m(x,null))}for(;e<q.length;e+=1)q[e].d(1);q.length=L.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(x),v(q,t)}}}function x({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function L(t,s,e){let{posts:l}=s;return t.$set=(t=>{"posts"in t&&e(0,l=t.posts)}),[l]}export default class extends t{constructor(t){super(),s(this,t,L,j,e,{posts:0})}}export{x as preload};