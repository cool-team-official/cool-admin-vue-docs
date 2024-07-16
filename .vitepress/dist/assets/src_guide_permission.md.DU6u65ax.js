import{_ as s,c as i,o as a,a5 as n,aY as e,aZ as t}from"./chunks/framework.ClVbL6ic.js";const u=JSON.parse('{"title":"permission","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/permission.md","filePath":"src/guide/permission.md","lastUpdated":1721048877000}'),p={name:"src/guide/permission.md"},l=n('<h1 id="permission" tabindex="-1">permission <a class="header-anchor" href="#permission" aria-label="Permalink to &quot;permission&quot;">​</a></h1><p>基于 <code>service</code> 中的判断：</p><img src="'+e+`"><ul><li><p><code>permission</code> 与后端接口匹配的值</p></li><li><p><code>_permission</code> 可直接用于判断是否有该权限</p></li></ul><h2 id="v-permission" tabindex="-1">v-permission <a class="header-anchor" href="#v-permission" aria-label="Permalink to &quot;v-permission&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>or</td><td>数组</td><td>用于检测数组中的元素是否满足指定条件</td></tr><tr><td>and</td><td>数组</td><td>用于检测数组中的元素是否全部满足指定条件</td></tr></tbody></table><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;service.user.permission.add&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 新增 &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  v-permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        or: [service.user.permission.add, service.user.permission.info]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  新增</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  v-permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        and: [service.user.permission.add, service.user.permission.info, user.id == 1]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  新增</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">el-button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="checkperm" tabindex="-1">checkPerm <a class="header-anchor" href="#checkperm" aria-label="Permalink to &quot;checkPerm&quot;">​</a></h2><p>也可以用于 js 中判断：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { checkPerm } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/$/base&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 验证是否有添加权限，返回一个布尔值</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkPerm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(service.system.user.permission.add): boolean</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">checkPerm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    and: [service.system.user.permission.add, service.system.user.permission.info]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="请求出现-403" tabindex="-1">请求出现 403 <a class="header-anchor" href="#请求出现-403" aria-label="Permalink to &quot;请求出现 403&quot;">​</a></h2><p>给对应的接口配置权限，系统管理 -&gt; 权限管理 -&gt; 菜单列表。如图：</p><img src="`+t+'"><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果没有找到对应的权限：</p><ul><li><p>当前账号的角色是否拥有该权限</p></li><li><p>尝试刷新、重新登录</p></li></ul></div>',16),h=[l];function r(k,d,o,c,E,g){return a(),i("div",null,h)}const y=s(p,[["render",r]]);export{u as __pageData,y as default};