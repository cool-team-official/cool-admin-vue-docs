import{R as o,aF as p,aG as u,aH as l,aI as c,aJ as f,aK as d,aL as m,aM as h,aN as g,aO as A,d as P,u as v,v as R,s as w,aP as y,aQ as C,aR as E,aE as b}from"./chunks/framework._3VRxuGv.js";import{R as S}from"./chunks/theme.CYf3NGhO.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(S),T=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return R(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),C(),E(),s.setup&&s.setup(),()=>b(s.Layout)}});async function _(){globalThis.__VITEPRESS__=!0;const e=F(),a=D();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function D(){return h(T)}function F(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&_().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{_ as createApp};