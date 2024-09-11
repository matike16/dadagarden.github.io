import{_ as n,r as a,o as l,c as e,b as t,a as s,e as p}from"./app-Bwc_1wC4.js";const d="/dadagarden.github.io/assets/1-DD8erC5A.png",h="/dadagarden.github.io/assets/2-BvFupT3j.png",r={},k=s("h2",{id:"参考资料",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#参考资料"},[s("span",null,"参考资料")])],-1),c=p('<h2 id="什么是vue" tabindex="-1"><a class="header-anchor" href="#什么是vue"><span>什么是Vue？</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Vue是一套前端框架，免除原生JS中的DOM操作，简化了书写； 基于MVVM（Model--View-ViewModel）思想，实现数据的双向绑定，将编程的关注点放在数据上。</p></div><div class="hint-container important"><p class="hint-container-title">重要</p><p>框架：是一个半成品软件，是一套可重用的、通用的、软件基础代码模型。基于框架进行开发，更加快捷、更加高效。</p></div><h2 id="快速入门" tabindex="-1"><a class="header-anchor" href="#快速入门"><span>快速入门</span></a></h2><figure><img src="'+d+`" alt="MVVM模型" tabindex="0" loading="lazy"><figcaption>MVVM模型</figcaption></figure><p>MVVM：（Model--View-ViewModel）的缩写，有以下三个单词，具体解释如下：</p><ul><li>Model: 数据模型，特指前端中通过请求从后台获取的数据</li><li>View: 视图，用于展示数据的页面，可以理解成我们的html+css搭建的页面，但是没有数据</li><li>ViewModel: 数据绑定到视图，负责将数据（Model）通过JavaScript的DOM技术，将数据展示到视图（View）上</li></ul><p>示例：</p><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;html&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;title&gt;Vue 计数器示例&lt;/title&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 计数器显示 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;p&gt;计数: {{ count }}&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 增加按钮 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;button @click=&quot;increment&quot;&gt;增加&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 减少按钮 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;button @click=&quot;decrement&quot;&gt;减少&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        // 创建一个 Vue 实例或“组件”的构造器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        new Vue({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            el: &#39;#app&#39;, // 指定 Vue 实例将被挂载到的 DOM 元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                count: 0 // 定义数据对象，Vue 实例的属性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            methods: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                // 定义方法对象，Vue 实例的方法</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                increment: function() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    this.count++;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                decrement: function() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    this.count--;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>插值表达式：<code>{{表达式}}</code>。</p><ul><li>内容可以是： <ul><li>变量</li><li>三元运算符</li><li>函数调用</li><li>算数运算符</li></ul></li></ul></div><h2 id="vue指令" tabindex="-1"><a class="header-anchor" href="#vue指令"><span>Vue指令</span></a></h2><p><strong>指令</strong>：HTML 标签上带有 v- 前缀的特殊属性，不同指令具有不同含义。例如：v-if，v-for… 在vue中，通过大量的指令来实现数据绑定到视图。</p><p>常用指令：</p><table><thead><tr><th>指令</th><th>作用</th></tr></thead><tbody><tr><td>v-bind</td><td>为HTML标签绑定属性值，如设置 href , css样式等</td></tr><tr><td>v-model</td><td>在表单元素上创建双向数据绑定</td></tr><tr><td>v-on</td><td>为HTML标签绑定事件</td></tr><tr><td>v-if</td><td>条件性的渲染某元素，判定为true时渲染,否则不渲染</td></tr><tr><td>v-else</td><td></td></tr><tr><td>v-else-if</td><td></td></tr><tr><td>v-show</td><td>根据条件展示某元素，区别在于切换的是display属性的值</td></tr><tr><td>v-for</td><td>列表渲染，遍历容器的元素或者对象的属性</td></tr></tbody></table><h3 id="v-bind和v-model" tabindex="-1"><a class="header-anchor" href="#v-bind和v-model"><span>v-bind和v-model</span></a></h3><ul><li><p>v-bind：为HTML标签绑定属性值，如设置 href , css样式等。当vue对象中的数据模型发生变化时，标签的属性值会随之发生变化。</p></li><li><p>v-model：在表单元素上创建双向数据绑定。什么是双向？</p><ul><li><p>vue对象的data属性中的数据变化，视图展示会一起变化</p></li><li><p>视图数据发生变化，vue对象的data属性中的数据也会随着变化。</p></li></ul></li></ul><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;html&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;title&gt;Vue v-bind 和 v-model 示例&lt;/title&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 使用 v-model 绑定 input 元素的 value 到 data 对象的 message 属性 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;input v-model=&quot;message&quot; type=&quot;text&quot; placeholder=&quot;输入一些文本&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 显示绑定的数据 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;p&gt;输入的消息: {{ message }}&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 使用 v-bind 动态绑定 class --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;div v-bind:class=&quot;{ active: isActive, &#39;text-danger&#39;: hasError }&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            这是一个可激活的区域。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 使用 v-bind 绑定 style --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;div v-bind:style=&quot;styleObject&quot;&gt;这是一个有样式的区域。&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        new Vue({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            el: &#39;#app&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                message: &#39;&#39;, // v-model 绑定的输入框的初始值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                isActive: true, // 控制 &#39;active&#39; class 的布尔值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                hasError: false, // 控制 &#39;text-danger&#39; class 的布尔值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                styleObject: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    color: &#39;blue&#39;, // 动态绑定的样式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    fontSize: &#39;14px&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-on" tabindex="-1"><a class="header-anchor" href="#v-on"><span>v-on</span></a></h3><ul><li>v-on：用来给html标签绑定事件的。</li></ul><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;html&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;title&gt;Vue v-on 示例&lt;/title&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 监听点击事件 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;button v-on:click=&quot;counter += 1&quot;&gt;增加&lt;/button&gt; 计数: {{ counter }}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 监听鼠标移动事件 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;p&gt;鼠标移动到此段落上。&lt;/p&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;p v-on:mousemove=&quot;updateCoordinates&quot;&gt;坐标: {{ x }}, {{ y }}&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 阻止默认的表单提交行为 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;form v-on:submit.prevent=&quot;onSubmit&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;input type=&quot;text&quot; v-model=&quot;formData.username&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;input type=&quot;submit&quot; value=&quot;提交&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;/form&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 监听键盘的 Enter 键 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;input type=&quot;text&quot; v-on:key.enter=&quot;submitOnEnter&quot; placeholder=&quot;按 Enter 提交&quot;&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 监听点击事件，使用事件修饰符 .once 来确保事件只触发一次 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;button v-on:click.once=&quot;doOnce&quot;&gt;点击一次&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        new Vue({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            el: &#39;#app&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                counter: 0,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                x: 0,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                y: 0,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                formData: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    username: &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            methods: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                // 增加计数器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                incrementCounter: function() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    this.counter += 1;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                // 更新鼠标坐标</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                updateCoordinates: function(event) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    this.x = event.clientX;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    this.y = event.clientY;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                // 表单提交时调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                onSubmit: function() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    alert(&#39;提交的用户名是: &#39; + this.formData.username);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                // 按 Enter 键时调用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                submitOnEnter: function() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    alert(&#39;按下 Enter 键！&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                // 点击一次后不再触发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                doOnce: function() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    alert(&#39;这个按钮只能点击一次！&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    this.$el.querySelector(&#39;button&#39;).removeEventListener(&#39;click&#39;, this.doOnce);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-if和v-show" tabindex="-1"><a class="header-anchor" href="#v-if和v-show"><span>v-if和v-show</span></a></h3><ul><li><code>v-if</code> 用于根据条件渲染元素。如果条件为真（true），Vue 将确保元素渲染到 DOM 中；如果条件为假（false），元素不会被渲染。</li></ul><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;html&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;title&gt;Vue v-if 示例&lt;/title&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;input type=&quot;checkbox&quot; v-model=&quot;isVisible&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;label&gt;显示/隐藏文本&lt;/label&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;p v-if=&quot;isVisible&quot;&gt;这段文本会根据复选框的选中状态显示或隐藏。&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;button v-if=&quot;!isLoading&quot; @click=&quot;startLoading&quot;&gt;开始加载&lt;/button&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;p v-else&gt;加载中...&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;div v-if=&quot;error&quot; class=&quot;error&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">          发生错误：{{ error }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        new Vue({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            el: &#39;#app&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                isVisible: true,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                isLoading: false,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                error: null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            methods: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                startLoading: function() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    this.isLoading = true;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    setTimeout(() =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                        this.isLoading = false;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                        this.error = &#39;加载失败。&#39;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    }, 2000);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>v-show</code> 用于根据条件切换元素的显示状态。与 <code>v-if</code> 不同，<code>v-show</code> 不涉及 DOM 元素的插入或删除，而是简单地切换元素的 CSS 属性来控制其可见性。</li></ul><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;html&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;title&gt;Vue v-show 示例&lt;/title&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 使用复选框控制 v-show --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;input type=&quot;checkbox&quot; v-model=&quot;isTextVisible&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;label&gt;显示/隐藏文本&lt;/label&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;p v-show=&quot;isTextVisible&quot;&gt;这段文本会根据复选框的选中状态显示或隐藏。&lt;/p&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 使用按钮切换 v-show --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;button @click=&quot;toggleText&quot;&gt;切换文本显示&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;div v-show=&quot;isTextVisible&quot;&gt;这个 div 也会根据复选框的选中状态切换显示状态。&lt;/div&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        new Vue({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            el: &#39;#app&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                isTextVisible: true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            methods: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                toggleText: function() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    this.isTextVisible = !this.isTextVisible;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="v-for" tabindex="-1"><a class="header-anchor" href="#v-for"><span>v-for</span></a></h3><ul><li>v-for：用于基于源数据多次渲染一个元素或组件。它非常适合用来创建列表、表格等需要重复元素的界面。</li></ul><div class="language-vue line-numbers-mode" data-highlighter="shiki" data-ext="vue" data-title="vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">DOCTYPE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;html&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;title&gt;Vue v-for 示例&lt;/title&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/head&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;div id=&quot;app&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 渲染一个数字列表 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;h2&gt;数字列表&lt;/h2&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;li v-for=&quot;number in numbers&quot; :key=&quot;number&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                {{ number }}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;/ul&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;!-- 渲染一个对象数组 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;h2&gt;用户列表&lt;/h2&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;li v-for=&quot;user in users&quot; :key=&quot;user.id&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                {{ user.name }} ({{ user.email }})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            &lt;/li&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        new Vue({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            el: &#39;#app&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            data: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                numbers: [1, 2, 3, 4, 5],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                users: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    { id: 1, name: &#39;Alice&#39;, email: &#39;alice@example.com&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    { id: 2, name: &#39;Bob&#39;, email: &#39;bob@example.com&#39; },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    { id: 3, name: &#39;Carol&#39;, email: &#39;carol@example.com&#39; }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/body&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;html&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h2><p>vue的生命周期：指的是vue对象从创建到销毁的过程。vue的生命周期包含8个阶段：每触发一个生命周期事件，会自动执行一个生命周期方法，这些生命周期方法也被称为钩子方法。其完整的生命周期如下图所示：</p><table><thead><tr><th>状态</th><th>阶段周期</th></tr></thead><tbody><tr><td>beforeCreate</td><td>创建前</td></tr><tr><td>created</td><td>创建后</td></tr><tr><td>beforeMount</td><td>挂载前</td></tr><tr><td>mounted</td><td>挂载完成</td></tr><tr><td>beforeUpdate</td><td>更新前</td></tr><tr><td>updated</td><td>更新后</td></tr><tr><td>beforeDestroy</td><td>销毁前</td></tr><tr><td>destroyed</td><td>销毁后</td></tr></tbody></table><figure><img src="`+h+'" alt="生命周期示例" tabindex="0" loading="lazy"><figcaption>生命周期示例</figcaption></figure><ul><li><p>“mounted”是在虚拟DOM被添加至文档中并完成所有依赖收集后触发，此时可执行初次数据同步的操作，例如发送网络请求获取数据。</p></li><li><p>在“mounted”方法中，可以通过AJAX或fetch等方式实现数据获取并在用户界面上进行响应处理。</p></li><li><p>尽管Vue.js提供了多个生命周期阶段供开发者利用，但对于JavaScript程序员而言，“mounted”阶段最为重要。这是因为该阶段标志着视图已经完全挂载到DOM上并且完成了所有的依赖收集，因此是最合适发送异步请求获取实时数据的时间点。其他生命周期阶段也有各自的用途，但在实际项目开发中，“mounted”因其特性常用于数据加载场景，方便实现一次性的、与视图状态关联紧密的数据获取操作。</p></li></ul>',33);function v(B,u){const i=a("NavCard");return l(),e("div",null,[k,t(i,{arr:`[
    {"title": "vue", "url": "https://cn.vuejs.org/", "desc": "渐进式 JavaScript 框架", "icon": "/navicon/vuepress.png"}
]`}),c])}const o=n(r,[["render",v],["__file","Vue概述.html.vue"]]),m=JSON.parse('{"path":"/technology/frontend-dev/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue%E6%A6%82%E8%BF%B0.html","title":"Vue概述","lang":"zh-CN","frontmatter":{"title":"Vue概述","icon":"code","date":"2024-08-01T00:00:00.000Z","category":"前端框架","tags":["Vue","Web开发"],"cover":"/assets/images/Vue概述.jpg","order":"1","excerpt":"Vue是一个基于MVVM模式的前端框架，它通过数据双向绑定简化了DOM操作，使得前端开发更加高效和关注于数据。","description":"参考资料 什么是Vue？ 提示 Vue是一套前端框架，免除原生JS中的DOM操作，简化了书写； 基于MVVM（Model--View-ViewModel）思想，实现数据的双向绑定，将编程的关注点放在数据上。 重要 框架：是一个半成品软件，是一套可重用的、通用的、软件基础代码模型。基于框架进行开发，更加快捷、更加高效。 快速入门 MVVM模型MVVM模型...","head":[["meta",{"property":"og:url","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/technology/frontend-dev/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/Vue%E6%A6%82%E8%BF%B0.html"}],["meta",{"property":"og:site_name","content":"哒哒的花园"}],["meta",{"property":"og:title","content":"Vue概述"}],["meta",{"property":"og:description","content":"参考资料 什么是Vue？ 提示 Vue是一套前端框架，免除原生JS中的DOM操作，简化了书写； 基于MVVM（Model--View-ViewModel）思想，实现数据的双向绑定，将编程的关注点放在数据上。 重要 框架：是一个半成品软件，是一套可重用的、通用的、软件基础代码模型。基于框架进行开发，更加快捷、更加高效。 快速入门 MVVM模型MVVM模型..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/Vue概述.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-02T12:10:54.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/Vue概述.jpg"}],["meta",{"name":"twitter:image:alt","content":"Vue概述"}],["meta",{"property":"article:author","content":"哒哒溜"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:tag","content":"Web开发"}],["meta",{"property":"article:published_time","content":"2024-08-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-02T12:10:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue概述\\",\\"image\\":[\\"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/Vue概述.jpg\\"],\\"datePublished\\":\\"2024-08-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-02T12:10:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"哒哒溜\\",\\"url\\":\\"https://github.com/matike16\\"}]}"]]},"headers":[{"level":2,"title":"参考资料","slug":"参考资料","link":"#参考资料","children":[]},{"level":2,"title":"什么是Vue？","slug":"什么是vue","link":"#什么是vue","children":[]},{"level":2,"title":"快速入门","slug":"快速入门","link":"#快速入门","children":[]},{"level":2,"title":"Vue指令","slug":"vue指令","link":"#vue指令","children":[{"level":3,"title":"v-bind和v-model","slug":"v-bind和v-model","link":"#v-bind和v-model","children":[]},{"level":3,"title":"v-on","slug":"v-on","link":"#v-on","children":[]},{"level":3,"title":"v-if和v-show","slug":"v-if和v-show","link":"#v-if和v-show","children":[]},{"level":3,"title":"v-for","slug":"v-for","link":"#v-for","children":[]}]},{"level":2,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]}],"git":{"createdTime":1722512530000,"updatedTime":1722600654000,"contributors":[{"name":"matike16","email":"lda240820@gmail.com","commits":5}]},"readingTime":{"minutes":7.07,"words":2120},"filePathRelative":"technology/frontend-dev/前端框架/Vue概述.md","localizedDate":"2024年8月1日","autoDesc":true}');export{o as comp,m as data};
