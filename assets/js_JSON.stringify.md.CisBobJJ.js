import{_ as s,c as i,o as n,a2 as a}from"./chunks/framework.DS0qWYV_.js";const g=JSON.parse('{"title":"JSON.stringify()","description":"","frontmatter":{},"headers":[],"relativePath":"js/JSON.stringify.md","filePath":"js/JSON.stringify.md"}'),l={name:"js/JSON.stringify.md"},e=a(`<h1 id="json-stringify" tabindex="-1">JSON.stringify() <a class="header-anchor" href="#json-stringify" aria-label="Permalink to &quot;JSON.stringify()&quot;">​</a></h1><p>在 JavaScript 中，<code>JSON.stringify()</code> 方法用于将一个对象或数组转换为 JSON 字符串。在此过程中，它会忽略或处理某些特定类型的值。这些值包括：</p><ol><li><p><strong>函数</strong>：</p><ul><li>函数（无论是普通函数还是箭头函数）会被忽略。</li></ul></li><li><p><strong><code>undefined</code></strong>：</p><ul><li>对于对象中的属性值为 <code>undefined</code>，该属性会被忽略。</li><li>对于数组中的元素值为 <code>undefined</code>，该元素会被转换为 <code>null</code>。</li></ul></li><li><p><strong>Symbol</strong>：</p><ul><li>对象中的 <code>Symbol</code> 类型属性会被忽略。</li><li>数组中的 <code>Symbol</code> 类型元素会被转换为 <code>null</code>。</li></ul></li><li><p><strong>循环引用</strong>：</p><ul><li>如果对象中有循环引用，<code>JSON.stringify()</code> 会抛出错误。</li></ul></li></ol><h3 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    b: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    d: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    e: [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;e&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    f: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        g: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加循环引用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">obj.f.h </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">try</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Error:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, error.message);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修复循环引用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj.f.h;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj));</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Output: {&quot;a&quot;:1,&quot;e&quot;:[1,null,null,null],&quot;f&quot;:{&quot;g&quot;:3}}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="解释" tabindex="-1">解释 <a class="header-anchor" href="#解释" aria-label="Permalink to &quot;解释&quot;">​</a></h3><ol><li><p><strong><code>a: 1</code></strong>：</p><ul><li>正常属性，会被保留在 JSON 字符串中。</li></ul></li><li><p><strong><code>b: undefined</code></strong>：</p><ul><li><code>undefined</code> 会被忽略，因此不会出现在 JSON 字符串中。</li></ul></li><li><p><strong><code>c: function</code></strong>：</p><ul><li>函数属性会被忽略，因此不会出现在 JSON 字符串中。</li></ul></li><li><p><strong><code>d: Symbol(&#39;d&#39;)</code></strong>：</p><ul><li><code>Symbol</code> 属性会被忽略，因此不会出现在 JSON 字符串中。</li></ul></li><li><p><strong><code>e: [1, undefined, function() {}, Symbol(&#39;e&#39;)]</code></strong>：</p><ul><li>数组中的 <code>undefined</code> 和 <code>function</code> 元素会被转换为 <code>null</code>。</li><li>数组中的 <code>Symbol</code> 元素也会被转换为 <code>null</code>。</li><li>最终结果是 <code>[1, null, null, null]</code>。</li></ul></li><li><p><strong>循环引用</strong>：</p><ul><li>如果对象包含循环引用，<code>JSON.stringify()</code> 会抛出错误。在示例中，<code>obj.f.h = obj</code> 形成了循环引用，因此 <code>JSON.stringify(obj)</code> 抛出了错误。</li><li>删除循环引用后，<code>JSON.stringify(obj)</code> 可以成功执行。</li></ul></li></ol><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>在使用 <code>JSON.stringify()</code> 方法时，需要注意以上这些情况，以避免意外的结果或错误。对于忽略的值，可以通过自定义的序列化函数（第二个参数）来控制某些值的转换行为。</p>`,9),p=[e];function t(h,k,r,d,o,E){return n(),i("div",null,p)}const u=s(l,[["render",t]]);export{g as __pageData,u as default};
