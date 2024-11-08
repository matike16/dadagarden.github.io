import{_ as s,o as n,c as a,e}from"./app-CUd4Tm9A.js";const i="/dadagarden.github.io/assets/1-CDtf3qkA.png",l={},p=e(`<h2 id="文件上传" tabindex="-1"><a class="header-anchor" href="#文件上传"><span>文件上传</span></a></h2><p>Web开发中的上传功能允许用户将文件从客户端传输到服务器，而下载功能则相反，是从服务器传输文件到客户端。</p><h3 id="基础前端项目搭建" tabindex="-1"><a class="header-anchor" href="#基础前端项目搭建"><span>基础前端项目搭建</span></a></h3><ul><li>使用Vue3进行创建</li></ul><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">vue create demo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>具体创建Vue项目参考<a href="/technology/frontend-dev/%E5%89%8D%E7%AB%AF%E6%A1%86%E6%9E%B6/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96Vue-cli" target="_blank" rel="noopener noreferrer">前端工程化Vue-cli</a></p><ul><li>使用Vue3+ElementPlus进行开发时推荐使用TS</li><li>记得提前引入路由</li><li>使用手动配置的方式</li></ul></div><ul><li>定义一个路由，用于导航到<code>文件上传</code>页面</li><li>在View文件夹中新建一个<code>UploadView.vue</code>文件</li></ul><div class="language-uploadview.vue line-numbers-mode" data-highlighter="shiki" data-ext="uploadview.vue" data-title="uploadview.vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;upload&quot;&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;文件上传页面&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在router包的<code>index.js</code>中引入上述的视图文件并定义好全局路由</li></ul><div class="language-index.ts line-numbers-mode" data-highlighter="shiki" data-ext="index.ts" data-title="index.ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>// 导入createRouter和createWebHistory函数，用于创建Vue路由实例</span></span>
<span class="line"><span>import { createRouter, createWebHistory } from &#39;vue-router&#39;</span></span>
<span class="line"><span>// 导入UploadView组件，用于文件上传页面</span></span>
<span class="line"><span>import UploadView from &#39;../views/UploadView.vue&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 定义路由数组，包含一个路由对象</span></span>
<span class="line"><span>const routes = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    // 定义路由的路径</span></span>
<span class="line"><span>    path: &#39;/upload&#39;,</span></span>
<span class="line"><span>    // 定义路由的名称</span></span>
<span class="line"><span>    name: &#39;upload&#39;,</span></span>
<span class="line"><span>    // 指定路由对应的组件</span></span>
<span class="line"><span>    component: UploadView</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 使用createRouter函数创建路由实例，并传入路由数组和路由模式</span></span>
<span class="line"><span>const router = createRouter({</span></span>
<span class="line"><span>  history: createWebHistory(process.env.BASE_URL), // 使用HTML5 History模式</span></span>
<span class="line"><span>  routes // 传入路由数组</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 导出路由实例</span></span>
<span class="line"><span>export default router</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在需要的导航页面中使用<code>&lt;router-link to=&quot;/upload&quot;&gt;文件上传&lt;/router-link&gt;</code>标签进行路由跳转。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>此处我直接将文件上传页面的路由定义在App.vue中，仅做Demo演示。</p><ul><li>文件下载页面的路由同理</li></ul></div><figure><img src="`+i+`" alt="编写基本路由" tabindex="0" loading="lazy"><figcaption>编写基本路由</figcaption></figure><ul><li>引入<code>ElementPlus</code>的依赖，并进行全局配置，方便后续表单制作。</li></ul><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">pnpm install </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">element</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">plus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>在<code>main.js</code>中全局配置（并不推荐这种方式，虽然可以简便开发，遵循按需引入原则，避免项目最后打包时过大）</li></ul><div class="language-main.ts line-numbers-mode" data-highlighter="shiki" data-ext="main.ts" data-title="main.ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>import { createApp } from &quot;vue&quot;;</span></span>
<span class="line"><span>import App from &quot;./App.vue&quot;;</span></span>
<span class="line"><span>import router from &quot;./router&quot;;</span></span>
<span class="line"><span>import store from &quot;./store&quot;;</span></span>
<span class="line"><span>import ElementPlus from &quot;element-plus&quot;;</span></span>
<span class="line"><span>import &quot;element-plus/dist/index.css&quot;;</span></span>
<span class="line"><span>//引入中文</span></span>
<span class="line"><span>import zhCn from &quot;element-plus/es/locale/lang/zh-cn&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const app = createApp(App);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.use(router);</span></span>
<span class="line"><span>app.use(store);</span></span>
<span class="line"><span>app.use(ElementPlus, { locale: zhCn });</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.mount(&quot;#app&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基础后端项目搭建" tabindex="-1"><a class="header-anchor" href="#基础后端项目搭建"><span>基础后端项目搭建</span></a></h3><ul><li>通过IDEA新建一个Spring Boot项目，引入Web依赖</li></ul><div class="language-pom.xml line-numbers-mode" data-highlighter="shiki" data-ext="pom.xml" data-title="pom.xml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;  </span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;  </span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;  </span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-前端编写文件上传的表单页面" tabindex="-1"><a class="header-anchor" href="#_1-前端编写文件上传的表单页面"><span>1. 前端编写文件上传的表单页面</span></a></h3><ul><li>在前端Vue项目中重新编写<code>UploadView</code>页面</li><li>使用Element-Plus提供的上传组件 —— <a href="https://element-plus.org/zh-CN/component/upload.html#%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8%E6%8E%A7%E5%88%B6" target="_blank" rel="noopener noreferrer">Upload 上传 | Element Plus (element-plus.org)</a></li><li>使用Element-Plus提供的上传组件时，关键是要配置好和后端交互的地址，也就是<code>action</code>属性，此处默认后端服务地址为<code>http://localhost:8080/api/files/upload</code></li><li>前端可以在<code>vue.config.js</code>中修改默认端口号，如下：</li></ul><div class="language-vue.config.js line-numbers-mode" data-highlighter="shiki" data-ext="vue.config.js" data-title="vue.config.js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>const { defineConfig } = require(&#39;@vue/cli-service&#39;)</span></span>
<span class="line"><span>module.exports = defineConfig({</span></span>
<span class="line"><span>  transpileDependencies: true,</span></span>
<span class="line"><span>  devServer: {</span></span>
<span class="line"><span>    host: &#39;localhost&#39;,</span></span>
<span class="line"><span>    port: 8081</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>此处不采用Axios进行跨域处理，Element-Plus提供的组件是可以指定后端接口地址的</p></div><ul><li>UploadView视图组件如下</li></ul><div class="language-uploadview.vue line-numbers-mode" data-highlighter="shiki" data-ext="uploadview.vue" data-title="uploadview.vue" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>&lt;template&gt;</span></span>
<span class="line"><span>  &lt;!-- 上传组件，用于上传图片 --&gt;</span></span>
<span class="line"><span>  &lt;el-upload</span></span>
<span class="line"><span>    v-model:file-list=&quot;fileList&quot;</span></span>
<span class="line"><span>    class=&quot;upload-demo&quot;</span></span>
<span class="line"><span>    action=&quot;http://localhost:8080/api/files/upload&quot;</span></span>
<span class="line"><span>    :before-remove=&quot;handleBeforeRemove&quot;</span></span>
<span class="line"><span>    :before-upload=&quot;handleBeforeUpload&quot;</span></span>
<span class="line"><span>    :on-preview=&quot;handlePreview&quot;</span></span>
<span class="line"><span>    :on-remove=&quot;handleRemove&quot;</span></span>
<span class="line"><span>    :on-success=&quot;handleSuccess&quot;</span></span>
<span class="line"><span>    :on-error=&quot;handleError&quot;</span></span>
<span class="line"><span>    list-type=&quot;picture&quot;</span></span>
<span class="line"><span>  &gt;</span></span>
<span class="line"><span>    &lt;!-- 上传按钮 --&gt;</span></span>
<span class="line"><span>    &lt;el-button type=&quot;primary&quot;&gt;点击上传&lt;/el-button&gt;</span></span>
<span class="line"><span>    &lt;!-- 提示模板，用于显示上传文件的限制 --&gt;</span></span>
<span class="line"><span>    &lt;template #tip&gt;</span></span>
<span class="line"><span>      &lt;div class=&quot;el-upload__tip&quot;&gt;</span></span>
<span class="line"><span>        jpg/png 文件大小不超过5MB</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/template&gt;</span></span>
<span class="line"><span>  &lt;/el-upload&gt;</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script lang=&quot;ts&quot; setup&gt;</span></span>
<span class="line"><span>import { ref } from &#39;vue&#39;</span></span>
<span class="line"><span>import { UploadProps, UploadUserFile } from &#39;element-plus&#39;</span></span>
<span class="line"><span>import { ElMessage, ElMessageBox } from &#39;element-plus&#39; // 引入ElMessage组件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const fileList = ref&lt;UploadUserFile[]&gt;([])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 文件上传成功</span></span>
<span class="line"><span>const handleSuccess: UploadProps[&#39;onSuccess&#39;] = () =&gt; {</span></span>
<span class="line"><span>  // 使用ElMessage弹出成功提示</span></span>
<span class="line"><span>  ElMessage({</span></span>
<span class="line"><span>    message: &#39;文件上传成功！&#39;,</span></span>
<span class="line"><span>    type: &#39;success&#39;,</span></span>
<span class="line"><span>    duration: 2000 // 提示显示时间（毫秒）</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 处理文件上传之前</span></span>
<span class="line"><span>const handleBeforeUpload: UploadProps[&#39;beforeUpload&#39;] = (file) =&gt; {</span></span>
<span class="line"><span>  // 检查文件大小</span></span>
<span class="line"><span>  const isLt5M = file.size / 1024 / 1024 &lt; 5</span></span>
<span class="line"><span>  if (!isLt5M) {</span></span>
<span class="line"><span>    ElMessage({</span></span>
<span class="line"><span>      message: &#39;上传文件大小不能超过5MB!&#39;,</span></span>
<span class="line"><span>      type: &#39;warning&#39;,</span></span>
<span class="line"><span>      duration: 2000 // 提示显示时间（毫秒）</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 文件上传失败</span></span>
<span class="line"><span>const handleError: UploadProps[&#39;onError&#39;] = (error) =&gt; {</span></span>
<span class="line"><span>  ElMessage({</span></span>
<span class="line"><span>    message: &#39;文件上传失败，请重试!&#39;,</span></span>
<span class="line"><span>    type: &#39;error&#39;,</span></span>
<span class="line"><span>    duration: 2000 // 提示显示时间（毫秒）</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  console.log(error)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 处理文件移除事件</span></span>
<span class="line"><span> * @param {object} uploadFile - 被移除的文件对象</span></span>
<span class="line"><span> * @param {object[]} uploadFiles - 当前上传列表中的所有文件对象</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const handleRemove: UploadProps[&#39;onRemove&#39;] = (uploadFile, uploadFiles) =&gt; {</span></span>
<span class="line"><span>  console.log(uploadFile, uploadFiles)</span></span>
<span class="line"><span>} </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 处理文件移除之前事件</span></span>
<span class="line"><span>const handleBeforeRemove: UploadProps[&#39;beforeRemove&#39;] = () =&gt; {</span></span>
<span class="line"><span>  return ElMessageBox.confirm(&#39;此操作将永久删除该文件, 是否继续?&#39;, &#39;提示&#39;, {</span></span>
<span class="line"><span>    confirmButtonText: &#39;确定&#39;,</span></span>
<span class="line"><span>    cancelButtonText: &#39;取消&#39;,</span></span>
<span class="line"><span>    type: &#39;warning&#39;</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>    .then(() =&gt; {</span></span>
<span class="line"><span>      // 用户点击确定，返回 true 以继续删除文件</span></span>
<span class="line"><span>      return true;</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    .catch(() =&gt; {</span></span>
<span class="line"><span>      // 用户点击取消，返回 false 以阻止删除文件</span></span>
<span class="line"><span>      return false;</span></span>
<span class="line"><span>    });</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 处理文件预览事件</span></span>
<span class="line"><span> * @param {object} file - 需要预览的文件对象</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const handlePreview: UploadProps[&#39;onPreview&#39;] = (file) =&gt; {</span></span>
<span class="line"><span>  console.log(file)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;style scoped&gt;</span></span>
<span class="line"><span>/* 在这里添加样式 */</span></span>
<span class="line"><span>&lt;/style&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-后端在全局配置中添加文件上传的相关配置" tabindex="-1"><a class="header-anchor" href="#_2-后端在全局配置中添加文件上传的相关配置"><span>2. 后端在全局配置中添加文件上传的相关配置</span></a></h3><div class="language-application.yml line-numbers-mode" data-highlighter="shiki" data-ext="application.yml" data-title="application.yml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>spring:  </span></span>
<span class="line"><span>  application:  </span></span>
<span class="line"><span>    name: demo2  </span></span>
<span class="line"><span>  servlet:  </span></span>
<span class="line"><span>    multipart:  </span></span>
<span class="line"><span>      # 单个文件上传大小限制  </span></span>
<span class="line"><span>      max-file-size: 10MB  </span></span>
<span class="line"><span>      # 总文件数量上传大小限制  </span></span>
<span class="line"><span>      max-request-size: 50MB</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后端编写文件上传的控制类" tabindex="-1"><a class="header-anchor" href="#后端编写文件上传的控制类"><span>后端编写文件上传的控制类</span></a></h3><div class="language-filecontroller.java line-numbers-mode" data-highlighter="shiki" data-ext="filecontroller.java" data-title="filecontroller.java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>package com.example.demo.controller;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>import jakarta.servlet.MultipartConfigElement;  </span></span>
<span class="line"><span>import org.springframework.core.io.Resource;  </span></span>
<span class="line"><span>import org.springframework.core.io.UrlResource;  </span></span>
<span class="line"><span>import org.springframework.http.HttpHeaders;  </span></span>
<span class="line"><span>import org.springframework.http.MediaType;  </span></span>
<span class="line"><span>import org.springframework.http.ResponseEntity;  </span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.*;  </span></span>
<span class="line"><span>import org.springframework.web.multipart.MultipartFile;  </span></span>
<span class="line"><span>import org.springframework.web.servlet.support.ServletUriComponentsBuilder;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>import java.io.IOException;  </span></span>
<span class="line"><span>import java.nio.file.Files;  </span></span>
<span class="line"><span>import java.nio.file.Path;  </span></span>
<span class="line"><span>import java.nio.file.Paths;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>@RestController  </span></span>
<span class="line"><span>@CrossOrigin(origins = &quot;http://localhost:8081&quot;)  </span></span>
<span class="line"><span>@RequestMapping(&quot;/api/files&quot;)  </span></span>
<span class="line"><span>public class FileController {  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    private final Path fileStorageLocation = Paths.get(&quot;uploaded-files&quot;).toAbsolutePath().normalize();  </span></span>
<span class="line"><span>    private final MultipartConfigElement multipartConfigElement;  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    public FileController(MultipartConfigElement multipartConfigElement) {  </span></span>
<span class="line"><span>        this.multipartConfigElement = multipartConfigElement;  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @PostMapping(&quot;/upload&quot;)  </span></span>
<span class="line"><span>    public ResponseEntity&lt;String&gt; uploadFile(@RequestParam(&quot;file&quot;) MultipartFile file){  </span></span>
<span class="line"><span>        try {  </span></span>
<span class="line"><span>            Files.createDirectories(fileStorageLocation);  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>            // 检查文件名是否为null或空  </span></span>
<span class="line"><span>            String filename = file.getOriginalFilename();  </span></span>
<span class="line"><span>            if (filename == null || filename.isEmpty()) {  </span></span>
<span class="line"><span>                return ResponseEntity.badRequest().body(&quot;文件名缺失！&quot;);  </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>            Path targetLocation = fileStorageLocation.resolve(filename);  </span></span>
<span class="line"><span>            file.transferTo(targetLocation);  </span></span>
<span class="line"><span>            String fileDownloadUrl = ServletUriComponentsBuilder.fromCurrentContextPath()  </span></span>
<span class="line"><span>                    .path(&quot;/api/files/download/&quot;)  </span></span>
<span class="line"><span>                    .path(file.getOriginalFilename())  </span></span>
<span class="line"><span>                    .toUriString();  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>            return ResponseEntity.ok(fileDownloadUrl);  </span></span>
<span class="line"><span>        }catch (IOException ex) {  </span></span>
<span class="line"><span>            return ResponseEntity.internalServerError().body(&quot;无法上传文件，请重试！&quot;);  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>    @GetMapping(&quot;/download/{fileName:.+}&quot;)  </span></span>
<span class="line"><span>    public ResponseEntity&lt;Resource&gt; downloadFile(@PathVariable String fileName) {  </span></span>
<span class="line"><span>        try {  </span></span>
<span class="line"><span>            Path filePath = fileStorageLocation.resolve(fileName).normalize();  </span></span>
<span class="line"><span>            Resource resource = new UrlResource(filePath.toUri());  </span></span>
<span class="line"><span>            if (resource.exists()) {  </span></span>
<span class="line"><span>                return ResponseEntity.ok()  </span></span>
<span class="line"><span>                        .contentType(MediaType.parseMediaType(Files.probeContentType(filePath)))  </span></span>
<span class="line"><span>                        .header(HttpHeaders.CONTENT_DISPOSITION, &quot;attachment; filename=\\&quot;&quot; + resource.getFilename() + &quot;\\&quot;&quot;)  </span></span>
<span class="line"><span>                        .body(resource);  </span></span>
<span class="line"><span>            }else {  </span></span>
<span class="line"><span>                return ResponseEntity.notFound().build();  </span></span>
<span class="line"><span>            }  </span></span>
<span class="line"><span>        }catch (IOException ex) {  </span></span>
<span class="line"><span>            return ResponseEntity.internalServerError().build();  </span></span>
<span class="line"><span>        }  </span></span>
<span class="line"><span>    }  </span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件下载" tabindex="-1"><a class="header-anchor" href="#文件下载"><span>文件下载</span></a></h2><p>下载文件通过IO流实现，所以多数框架并没有对文件下载进行封装处理。</p>`,32),t=[p];function d(r,c){return n(),a("div",null,t)}const v=s(l,[["render",d],["__file","文件上传与下载.html.vue"]]),u=JSON.parse('{"path":"/technology/demo/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E4%B8%8E%E4%B8%8B%E8%BD%BD.html","title":"文件上传与下载","lang":"zh-CN","frontmatter":{"title":"文件上传与下载","icon":"code","date":"2024-09-27T00:00:00.000Z","category":"Demo","tags":["SpringBoot","Web开发","Vue3"],"cover":"/assets/images/demo.jpg","excerpt":"使用SpringBoot+Vue3进行示例。开发Web应用时，文件上传是很常见的一个需求，浏览器通过表单形式将文件以流的形式传递给服务器，服务器再对上传的数据进行解析处理。下载文件通过IO流实现，所以多数框架并没有对文件下载进行封装处理。","order":"1","description":"文件上传 Web开发中的上传功能允许用户将文件从客户端传输到服务器，而下载功能则相反，是从服务器传输文件到客户端。 基础前端项目搭建 使用Vue3进行创建 提示 具体创建Vue项目参考前端工程化Vue-cli 使用Vue3+ElementPlus进行开发时推荐使用TS 记得提前引入路由 使用手动配置的方式 定义一个路由，用于导航到文件上传页面 在Vie...","head":[["meta",{"property":"og:url","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/technology/demo/%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0%E4%B8%8E%E4%B8%8B%E8%BD%BD.html"}],["meta",{"property":"og:site_name","content":"哒哒的花园"}],["meta",{"property":"og:title","content":"文件上传与下载"}],["meta",{"property":"og:description","content":"文件上传 Web开发中的上传功能允许用户将文件从客户端传输到服务器，而下载功能则相反，是从服务器传输文件到客户端。 基础前端项目搭建 使用Vue3进行创建 提示 具体创建Vue项目参考前端工程化Vue-cli 使用Vue3+ElementPlus进行开发时推荐使用TS 记得提前引入路由 使用手动配置的方式 定义一个路由，用于导航到文件上传页面 在Vie..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/demo.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-12T04:50:03.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/demo.jpg"}],["meta",{"name":"twitter:image:alt","content":"文件上传与下载"}],["meta",{"property":"article:author","content":"哒哒溜"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"Web开发"}],["meta",{"property":"article:tag","content":"Vue3"}],["meta",{"property":"article:published_time","content":"2024-09-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-12T04:50:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件上传与下载\\",\\"image\\":[\\"https://matike16.github.io/dadagarden.github.io/dadagarden.github.io/assets/images/demo.jpg\\"],\\"datePublished\\":\\"2024-09-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-12T04:50:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"哒哒溜\\",\\"url\\":\\"https://github.com/matike16\\"}]}"]]},"headers":[{"level":2,"title":"文件上传","slug":"文件上传","link":"#文件上传","children":[{"level":3,"title":"基础前端项目搭建","slug":"基础前端项目搭建","link":"#基础前端项目搭建","children":[]},{"level":3,"title":"基础后端项目搭建","slug":"基础后端项目搭建","link":"#基础后端项目搭建","children":[]},{"level":3,"title":"1. 前端编写文件上传的表单页面","slug":"_1-前端编写文件上传的表单页面","link":"#_1-前端编写文件上传的表单页面","children":[]},{"level":3,"title":"2. 后端在全局配置中添加文件上传的相关配置","slug":"_2-后端在全局配置中添加文件上传的相关配置","link":"#_2-后端在全局配置中添加文件上传的相关配置","children":[]},{"level":3,"title":"后端编写文件上传的控制类","slug":"后端编写文件上传的控制类","link":"#后端编写文件上传的控制类","children":[]}]},{"level":2,"title":"文件下载","slug":"文件下载","link":"#文件下载","children":[]}],"git":{"createdTime":1727399781000,"updatedTime":1728708603000,"contributors":[{"name":"matike16","email":"lda240820@gmail.com","commits":5}]},"readingTime":{"minutes":5.36,"words":1609},"filePathRelative":"technology/demo/文件上传与下载.md","localizedDate":"2024年9月27日","autoDesc":true}');export{v as comp,u as data};
