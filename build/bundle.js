var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i,a="undefined"!=typeof window?e=>requestAnimationFrame(e):e;function c(e,t){e.appendChild(t)}function u(e,t,n){e.insertBefore(t,n||null)}function l(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function m(){return e=" ",document.createTextNode(e);var e}function p(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e){i=e}const b=[],g=[],v=[],$=[],y=Promise.resolve();let x=!1;function k(e){v.push(e)}let _=!1;const w=new Set;function j(){if(!_){_=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];h(t),N(t.$$)}for(h(null),b.length=0;g.length;)g.pop()();for(let e=0;e<v.length;e+=1){const t=v[e];w.has(t)||(w.add(t),t())}v.length=0}while(b.length);for(;$.length;)$.pop()();x=!1,_=!1,w.clear()}}function N(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const T=new Set;function E(e,t){e&&e.i&&(T.delete(e),e.i(t))}function L(e,n,s,i){const{fragment:a,on_mount:c,on_destroy:u,after_update:l}=e.$$;a&&a.m(n,s),i||k((()=>{const n=c.map(t).filter(r);u?u.push(...n):o(n),e.$$.on_mount=[]})),l.forEach(k)}function M(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function A(e,t){-1===e.$$.dirty[0]&&(b.push(e),x||(x=!0,y.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function H(t,r,s,a,c,u,d=[-1]){const m=i;h(t);const p=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:r.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let f=!1;if(p.ctx=s?s(t,r.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[e],p.ctx[e]=r)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](r),f&&A(t,e)),n})):[],p.update(),f=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);p.fragment&&p.fragment.l(e),e.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&E(t.$$.fragment),L(t,r.target,r.anchor,r.customElement),j()}h(m)}class q{$destroy(){M(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const O=[{id:0,nombre:"la incondicional",url:"https://mus6.djxd.tk/mp3/71a52391-b06e-4310-841e-96bf02b137d1.mp3"},{id:1,nombre:"ahora te puedes marchar",url:"https://mus6.djxd.tk/mp3/c169cbcf-da09-4b05-ae43-71102933fe77.mp3"},{id:2,nombre:"historia de taxi",url:"https://mus6.djxd.tk/mp3/08b96961-7b84-4ba0-b1e2-2204e851d420.mp3"},{id:3,nombre:"verbo no sustantivo",url:"https://mus6.djxd.tk/mp3/94a39101-2658-43c1-80b8-671d7ee64fcd.mp3"},{id:4,nombre:"mi novia se me esta poniendo vieja",url:"https://mus6.djxd.tk/mp3/726d832e-ef9b-42dd-8637-0cd2e0b212a1.mp3"},{id:5,nombre:"señora de las 4 decadas",url:"https://mus6.djxd.tk/mp3/16d32aaa-e374-47d0-a7fe-479a5d115afb.mp3"},{id:6,nombre:"me dedique a perderte",url:"https://mus7.djxd.tk/mp3/b7955edf-2e4b-4b22-9ae6-58cc8d92ed1b.mp3"},{id:7,nombre:"carreteras mojadas",url:"https://github.com/luis16121013/music/blob/master/christian-meier/carreteras-mojadas.mp3?raw=true"},{id:8,nombre:"november rain",url:"https://github.com/luis16121013/music/blob/master/guns-roses/november-rain.mp3?raw=true"},{id:9,nombre:"sweet child",url:"https://github.com/luis16121013/music/blob/master/guns-roses/sweet-child.mp3?raw=true"},{id:10,nombre:"lloro pidiendo perdon",url:"https://github.com/luis16121013/music/blob/master/pepe-moreno/lloro-pidiendo-perdon.mp3?raw=true"}];function C(t){let n,r,s;return{c(){n=d("button"),n.innerHTML='<img class="mid svelte-hea1o3" src="./images/play2.png" alt="img"/>',f(n,"class","svelte-hea1o3")},m(e,o){u(e,n,o),r||(s=[p(n,"click",t[13]),p(n,"click",t[7])],r=!0)},p:e,d(e){e&&l(n),r=!1,o(s)}}}function F(t){let n,r,s;return{c(){n=d("button"),n.innerHTML='<img class="mid svelte-hea1o3" src="./images/pause.png" alt="img"/>',f(n,"class","svelte-hea1o3")},m(e,o){u(e,n,o),r||(s=[p(n,"click",P),p(n,"click",t[7])],r=!0)},p:e,d(e){e&&l(n),r=!1,o(s)}}}function S(t){let n,r,s,i,h,b,g,v,$,y,x,_,w,j,N,T=!1,E=!0;function L(){cancelAnimationFrame(v),g.paused||(v=a(L),T=!0),t[10].call(g)}function M(e,t){return e[6]?F:C}let A=M(t),H=A(t);return{c(){n=d("div"),r=d("div"),s=d("div"),s.innerHTML='<img class="logo-git svelte-hea1o3" src="./images/github.svg"/>',i=m(),h=d("input"),b=m(),g=d("audio"),g.innerHTML='<track kind="captions"/>',$=m(),y=d("button"),y.innerHTML='<img src="./images/prev.png" alt="imgs" class="svelte-hea1o3"/>',x=m(),H.c(),_=m(),w=d("button"),w.innerHTML='<img class="inv svelte-hea1o3" src="./images/prev.png" alt="img"/>',f(s,"class","content-logo svelte-hea1o3"),f(h,"type","range"),f(h,"min","0"),f(h,"max",t[0]),f(h,"step","0.01"),h.value=t[1],f(h,"class","svelte-hea1o3"),f(g,"id","music"),g.controls=!0,f(g,"class","svelte-hea1o3"),void 0===t[0]&&k((()=>t[9].call(g))),f(y,"class","svelte-hea1o3"),f(w,"class","svelte-hea1o3"),f(r,"class","button-container svelte-hea1o3"),f(n,"class","container-card svelte-hea1o3")},m(e,o){u(e,n,o),c(n,r),c(r,s),c(r,i),c(r,h),c(r,b),c(r,g),g.muted=t[2],isNaN(t[4])||(g.volume=t[4]),c(r,$),c(r,y),c(r,x),H.m(r,null),c(r,_),c(r,w),j||(N=[p(g,"durationchange",t[9]),p(g,"timeupdate",L),p(g,"volumechange",t[11]),p(g,"play",t[12]),p(g,"pause",t[12]),p(w,"click",t[14])],j=!0)},p(e,[t]){1&t&&f(h,"max",e[0]),2&t&&(h.value=e[1]),!T&&2&t&&!isNaN(e[1])&&(g.currentTime=e[1]),T=!1,4&t&&(g.muted=e[2]),16&t&&!isNaN(e[4])&&(g.volume=e[4]),8&t&&E!==(E=e[3])&&g[E?"pause":"play"](),A===(A=M(e))&&H?H.p(e,t):(H.d(1),H=A(e),H&&(H.c(),H.m(r,_)))},i:e,o:e,d(e){e&&l(n),H.d(),j=!1,o(N)}}}function B({url:e}){music.src=e,music.play()}function P(){music.pause()}function z(e,t,n){let o,r=!1,s=0,i=!1,a=.55,c=0,u=!1;const l=()=>{let e=O.length-1;return n(5,c+=1),c>e?(n(5,c=0),c):c};return e.$$.update=()=>{3&e.$$.dirty&&o===s&&(console.log("termino music"),n(1,s=0),B(O[l()]))},[o,s,r,i,a,c,u,()=>n(6,u=!u),l,function(){o=this.duration,n(0,o)},function(){s=this.currentTime,n(1,s),n(0,o)},function(){r=this.muted,a=this.volume,n(2,r),n(4,a)},function(){i=this.paused,n(3,i)},()=>{!function({url:e}){music.src!=e?(music.src=e,music.play()):music.play()}(O[c])},()=>{B(O[l()])}]}class D extends q{constructor(e){super(),H(this,e,z,S,s,{})}}function G(t){let n,o,r;return o=new D({}),{c(){var e;n=d("main"),(e=o.$$.fragment)&&e.c(),f(n,"class","svelte-vq1ptx")},m(e,t){u(e,n,t),L(o,n,null),r=!0},p:e,i(e){r||(E(o.$$.fragment,e),r=!0)},o(e){!function(e,t,n,o){if(e&&e.o){if(T.has(e))return;T.add(e),(void 0).c.push((()=>{T.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}(o.$$.fragment,e),r=!1},d(e){e&&l(n),M(o)}}}return new class extends q{constructor(e){super(),H(this,e,null,G,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map