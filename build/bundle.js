var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u,s="undefined"!=typeof window?t=>requestAnimationFrame(t):t;function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function m(){return t=" ",document.createTextNode(t);var t}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){u=t}const b=[],g=[],$=[],x=[],v=Promise.resolve();let y=!1;function k(t){$.push(t)}let _=!1;const w=new Set;function j(){if(!_){_=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];h(e),N(e.$$)}for(h(null),b.length=0;g.length;)g.pop()();for(let t=0;t<$.length;t+=1){const e=$[t];w.has(e)||(w.add(e),e())}$.length=0}while(b.length);for(;x.length;)x.pop()();y=!1,_=!1,w.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const E=new Set;function C(t,e){t&&t.i&&(E.delete(t),t.i(e))}function A(t,n,i,u){const{fragment:s,on_mount:c,on_destroy:a,after_update:d}=t.$$;s&&s.m(n,i),u||k((()=>{const n=c.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),d.forEach(k)}function T(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(b.push(t),y||(y=!0,v.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function L(e,r,i,s,c,a,l=[-1]){const m=u;h(e);const p=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:r.context||[]),callbacks:n(),dirty:l,skip_bound:!1};let f=!1;if(p.ctx=i?i(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),f&&q(e,t)),n})):[],p.update(),f=!0,o(p.before_update),p.fragment=!!s&&s(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();r.intro&&C(e.$$.fragment),A(e,r.target,r.anchor,r.customElement),j()}h(m)}class M{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const O=[{id:0,nombre:"la incondicional",url:"https://mus6.djxd.tk/mp3/71a52391-b06e-4310-841e-96bf02b137d1.mp3"},{id:1,nombre:"ahora te puedes marchar",url:"https://mus6.djxd.tk/mp3/c169cbcf-da09-4b05-ae43-71102933fe77.mp3"},{id:2,nombre:"historia de taxi",url:"https://mus6.djxd.tk/mp3/08b96961-7b84-4ba0-b1e2-2204e851d420.mp3"},{id:3,nombre:"verbo no sustantivo",url:"https://mus6.djxd.tk/mp3/94a39101-2658-43c1-80b8-671d7ee64fcd.mp3"},{id:4,nombre:"mi novia se me esta poniendo vieja",url:"https://mus6.djxd.tk/mp3/726d832e-ef9b-42dd-8637-0cd2e0b212a1.mp3"},{id:5,nombre:"señora de las 4 decadas",url:"https://mus6.djxd.tk/mp3/16d32aaa-e374-47d0-a7fe-479a5d115afb.mp3"},{id:6,nombre:"me dedique a perderte",url:"https://mus7.djxd.tk/mp3/b7955edf-2e4b-4b22-9ae6-58cc8d92ed1b.mp3"},{id:7,nombre:"carreteras mojadas",url:"https://github.com/luis16121013/music/blob/master/christian-meier/carreteras-mojadas.mp3?raw=true"},{id:8,nombre:"november rain",url:"https://github.com/luis16121013/music/blob/master/guns-roses/november-rain.mp3?raw=true"},{id:9,nombre:"sweet child",url:"https://github.com/luis16121013/music/blob/master/guns-roses/sweet-child.mp3?raw=true"},{id:10,nombre:"lloro pidiendo perdon",url:"https://github.com/luis16121013/music/blob/master/pepe-moreno/lloro-pidiendo-perdon.mp3?raw=true"}];function F(e){let n;return{c(){n=l("div"),n.innerHTML="<h2>hola</h2>",f(n,"class","svelte-d0f7x3")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&d(n)}}}class H extends M{constructor(t){super(),L(this,t,null,F,i,{})}}function S(t){let e,n,r,i,u,h,b,g,$,x,v,y,_,w,j,N,q,L,M,O,F,S=!1,B=!0;function z(){cancelAnimationFrame(h),u.paused||(h=s(z),S=!0),t[11].call(u)}return L=new H({}),{c(){var o;e=l("main"),n=l("div"),r=l("input"),i=m(),u=l("audio"),u.innerHTML='<track kind="captions"/>',b=m(),g=l("button"),g.textContent="play",$=m(),x=l("button"),x.textContent="pause",v=m(),y=l("button"),y.textContent="reset",_=m(),w=l("button"),w.textContent="next",j=m(),N=l("button"),N.textContent="view",q=m(),(o=L.$$.fragment)&&o.c(),f(r,"type","range"),f(r,"min","0"),f(r,"max",t[0]),f(r,"step","0.01"),r.value=t[1],f(u,"id","music"),u.controls=!0,f(u,"class","svelte-7ehqia"),void 0===t[0]&&k((()=>t[10].call(u)))},m(o,s){a(o,e,s),c(e,n),c(n,r),c(n,i),c(n,u),u.muted=t[2],isNaN(t[4])||(u.volume=t[4]),c(e,b),c(e,g),c(e,$),c(e,x),c(e,v),c(e,y),c(e,_),c(e,w),c(e,j),c(e,N),c(e,q),A(L,e,null),M=!0,O||(F=[p(r,"click",t[9]),p(u,"durationchange",t[10]),p(u,"timeupdate",z),p(u,"volumechange",t[12]),p(u,"play",t[13]),p(u,"pause",t[13]),p(g,"click",t[14]),p(x,"click",P),p(y,"click",t[6]),p(w,"click",t[15]),p(N,"click",t[7])],O=!0)},p(t,[e]){(!M||1&e)&&f(r,"max",t[0]),(!M||2&e)&&(r.value=t[1]),!S&&2&e&&!isNaN(t[1])&&(u.currentTime=t[1]),S=!1,4&e&&(u.muted=t[2]),16&e&&!isNaN(t[4])&&(u.volume=t[4]),8&e&&B!==(B=t[3])&&u[B?"pause":"play"]()},i(t){M||(C(L.$$.fragment,t),M=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),(void 0).c.push((()=>{E.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}(L.$$.fragment,t),M=!1},d(t){t&&d(e),T(L),O=!1,o(F)}}}function B({url:t}){music.src=t,music.play()}function P(){music.pause()}function z(t,e,n){let o,r=!1,i=0,u=!1,s=.55,c=0;const a=()=>{let t=O.length-1;return n(5,c+=1),c>t?(n(5,c=0),c):c};return t.$$.update=()=>{3&t.$$.dirty&&o===i&&(console.log("termino music"),n(1,i=0),B(O[a()]))},[o,i,r,u,s,c,()=>{n(1,i=0)},()=>{console.log(c),console.log(O.length)},a,t=>console.log(t.target.value),function(){o=this.duration,n(0,o)},function(){i=this.currentTime,n(1,i),n(0,o)},function(){r=this.muted,s=this.volume,n(2,r),n(4,s)},function(){u=this.paused,n(3,u)},()=>{B(O[c])},()=>{B(O[a()])}]}return new class extends M{constructor(t){super(),L(this,t,z,S,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map