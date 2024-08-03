import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.CW9PQe9n.js";const u=JSON.parse('{"title":"v-model的实现原理","description":"","frontmatter":{},"headers":[],"relativePath":"interview/vue/v-model的实现原理.md","filePath":"interview/vue/v-model的实现原理.md","lastUpdated":1722652796000}'),n={name:"interview/vue/v-model的实现原理.md"},e=t(`<h1 id="v-model的实现原理" tabindex="-1">v-model的实现原理 <a class="header-anchor" href="#v-model的实现原理" aria-label="Permalink to &quot;v-model的实现原理&quot;">​</a></h1><p>v-model只不过是一个语法糖而已,真正的实现靠的还是</p><p>v-bind:绑定响应式数据 触发oninput 事件并传递数据</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- 等同于--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sth&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> @input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sth = $event.target.value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--自html5开始,input每次输入都会触发oninput事件，所以输入时input的内容会绑定到sth中，于是sth的值就被改变--&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--$event 指代当前触发的事件对象;--&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--$event.target 指代当前触发的事件对象的dom;--&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--$event.target.value 就是当前dom的value值;--&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--在@input方法中，value =&gt; sth;--&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--在:value中,sth =&gt; value;--&gt;</span></span></code></pre></div>`,4),l=[e];function p(h,k,d,o,r,g){return a(),i("div",null,l)}const v=s(n,[["render",p]]);export{u as __pageData,v as default};
