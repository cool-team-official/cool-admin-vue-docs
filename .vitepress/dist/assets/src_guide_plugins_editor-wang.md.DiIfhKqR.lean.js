import{_ as s,c as i,a3 as a,o as n}from"./chunks/framework._3VRxuGv.js";const o=JSON.parse('{"title":"editor-wang","description":"","frontmatter":{},"headers":[],"relativePath":"src/guide/plugins/editor-wang.md","filePath":"src/guide/plugins/editor-wang.md","lastUpdated":1721048877000}'),l={name:"src/guide/plugins/editor-wang.md"};function e(d,t,h,p,r,k){return n(),i("div",null,t[0]||(t[0]=[a(`<h1 id="editor-wang" tabindex="-1">editor-wang <a class="header-anchor" href="#editor-wang" aria-label="Permalink to &quot;editor-wang&quot;">​</a></h1><p><a href="https://www.wangeditor.com/" target="_blank" rel="noreferrer">wang</a> 富文本编辑器。</p><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>modelValue</td><td>绑定值</td><td>string</td><td></td><td></td></tr><tr><td>mode</td><td>类型</td><td>default / simple</td><td></td><td>default</td></tr><tr><td>height</td><td>高度</td><td>string / number</td><td></td><td>500</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td></td><td>false</td></tr><tr><td>preview</td><td>是否预览模式</td><td>boolean</td><td></td><td>false</td></tr><tr><td>isSpace</td><td>是否使用文件空间</td><td>boolean</td><td></td><td>false</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">cl-editor-wang</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ref } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;vue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> value</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;&lt;p&gt;&lt;span style=&quot;font-size: 22px;&quot;&gt;&lt;em&gt;富文本编&lt;/em&gt;&lt;/span&gt;&lt;span style=&quot;color: rgb(216, 68, 147); font-size: 22px;&quot;&gt;&lt;em&gt;辑器&lt;/em&gt;&lt;/span&gt;&lt;/p&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,5)]))}const E=s(l,[["render",e]]);export{o as __pageData,E as default};