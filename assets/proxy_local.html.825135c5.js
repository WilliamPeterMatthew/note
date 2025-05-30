import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as l,c as t,a as s,b as e,d as n,e as i}from"./app.00886464.js";const d={},c={id:"proxy-local",tabindex:"-1"},p=s("a",{class:"header-anchor",href:"#proxy-local","aria-hidden":"true"},"#",-1),u={href:"https://github.com/WilliamPeterMatthew/sslocal-manager-alpine/tree/proxy_local",target:"_blank",rel:"noopener noreferrer"},v=i('<h3 id="sslocal-manager" tabindex="-1"><a class="header-anchor" href="#sslocal-manager" aria-hidden="true">#</a> sslocal-manager</h3><p>\u4E00\u4E2A\u7528\u4E8E\u7BA1\u7406 sslocal \u7684\u7F51\u9875\u5DE5\u5177\u3002</p><p><img src="https://img.shields.io/docker/pulls/petermatthew/sslocal-manager" alt="Docker Pulls"><img src="https://img.shields.io/docker/image-size/petermatthew/sslocal-manager" alt="Docker Image Size"><img src="https://img.shields.io/docker/v/petermatthew/sslocal-manager" alt="Docker Image Version"></p><p>\u901A\u8FC7 Docker Compose \u6784\u5EFA\uFF0C\u57FA\u4E8E Python Flask \u6846\u67B6\u5F00\u53D1\u3002</p><h3 id="ssserver-rust" tabindex="-1"><a class="header-anchor" href="#ssserver-rust" aria-hidden="true">#</a> ssserver-rust</h3><p>\u4E00\u4E2A\u7528\u4E8E\u542F\u52A8 ssserver \u7684\u955C\u50CF\u3002</p><p><img src="https://img.shields.io/docker/pulls/petermatthew/ssserver-rust" alt="Docker Pulls"><img src="https://img.shields.io/docker/image-size/petermatthew/ssserver-rust" alt="Docker Image Size"><img src="https://img.shields.io/docker/v/petermatthew/ssserver-rust" alt="Docker Image Version"></p>',7),m={href:"https://github.com/shadowsocks/shadowsocks-rust/",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="\u7B2C1\u6B65" tabindex="-1"><a class="header-anchor" href="#\u7B2C1\u6B65" aria-hidden="true">#</a> \u7B2C1\u6B65</h2><p>\u514B\u9686\u672C\u4ED3\u5E93\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/WilliamPeterMatthew/sslocal-manager-alpine.git -b proxy_local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7B2C2\u6B65" tabindex="-1"><a class="header-anchor" href="#\u7B2C2\u6B65" aria-hidden="true">#</a> \u7B2C2\u6B65</h2><p>\u4FEE\u6539 <code>.ssconfig.json</code> \u6587\u4EF6\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  {
    &quot;server&quot;: &quot;ssserver-rust&quot;,
    &quot;server_port&quot;: 8388,
    &quot;local_address&quot;: &quot;0.0.0.0&quot;,
    &quot;local_port&quot;: 1080,
    &quot;password&quot;: &quot;Password&quot;,
    &quot;timeout&quot;: 300,
    &quot;method&quot;: &quot;aes-256-gcm&quot;
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u65F6\uFF0C\u4FEE\u6539 <code>server.ssconfig.json</code> \u6587\u4EF6\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  {
    &quot;server&quot;: &quot;0.0.0.0&quot;,
    &quot;server_port&quot;: 8388,
    &quot;password&quot;: &quot;Password&quot;,
    &quot;timeout&quot;: 300,
    &quot;method&quot;: &quot;aes-256-gcm&quot;
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B2C3\u6B65" tabindex="-1"><a class="header-anchor" href="#\u7B2C3\u6B65" aria-hidden="true">#</a> \u7B2C3\u6B65</h2><p>\u6839\u636E\u9700\u8981\u4FEE\u6539\u6216\u4FDD\u7559 <code>docker-compose.yml</code> \u6587\u4EF6\u4E2D\u7684\u7AEF\u53E3\uFF08\u5982\u679C\u60F3\u4F7F\u7528\u9884\u6784\u5EFA\u955C\u50CF\uFF0C\u53EF\u4F7F\u7528 <code>docker-compose-prebuild.yml</code> \u6587\u4EF6\uFF09\u3002</p><h2 id="\u7B2C4\u6B65" tabindex="-1"><a class="header-anchor" href="#\u7B2C4\u6B65" aria-hidden="true">#</a> \u7B2C4\u6B65</h2><p>\u5728\u9879\u76EE\u76EE\u5F55\u4E0B\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u542F\u52A8\u9879\u76EE\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u4F7F\u7528\u9884\u6784\u5EFA\u955C\u50CF\u542F\u52A8\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> -f docker-compose-prebuild.yml up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u606D\u559C" tabindex="-1"><a class="header-anchor" href="#\u606D\u559C" aria-hidden="true">#</a> \u606D\u559C</h2><p>\u73B0\u5728\u53EF\u4EE5\u901A\u8FC7\u7B2C 3 \u6B65\u8BBE\u7F6E\u7684\u7AEF\u53E3\u8BBF\u95EE\u7F51\u9875\u7BA1\u7406\u754C\u9762\u3002</p><h2 id="\u53EF\u9009\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u914D\u7F6E" aria-hidden="true">#</a> \u53EF\u9009\u914D\u7F6E</h2><p>\u53EF\u4EE5\u901A\u8FC7 Apache \u6216 Nginx \u914D\u7F6E\u53CD\u5411\u4EE3\u7406\u5230 80 \u7AEF\u53E3\u3002</p><p>Apache Example</p><div class="language-apache ext-apache line-numbers-mode"><pre class="language-apache"><code>&lt;VirtualHost *:80&gt;
    ServerName example.com

    ProxyRequests Off
    ProxyPreserveHost On
    ProxyPass / http://localhost:&lt;\u4F60\u5728\u7B2C3\u6B65\u8BBE\u7F6E\u7684\u7AEF\u53E3&gt;/
    ProxyPassReverse / http://localhost:&lt;\u4F60\u5728\u7B2C3\u6B65\u8BBE\u7F6E\u7684\u7AEF\u53E3&gt;/

    ErrorLog \${APACHE_LOG_DIR}/error.log
    CustomLog \${APACHE_LOG_DIR}/access.log combined
&lt;/VirtualHost&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Nginx Example</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span> example.com</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://localhost:&lt;\u4F60\u5728\u7B2C3\u6B65\u8BBE\u7F6E\u7684\u7AEF\u53E3&gt;</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">error_log</span> /var/log/nginx/sslocal_manager_error.log</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">access_log</span> /var/log/nginx/sslocal_manager_access.log</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function b(g,k){const a=o("ExternalLinkIcon");return l(),t("div",null,[s("h2",c,[p,e(),s("a",u,[e("Proxy_Local"),n(a)])]),v,s("p",null,[e("\u901A\u8FC7 Docker Compose \u6784\u5EFA\uFF0C\u4E8C\u8FDB\u5236\u6587\u4EF6\u6E90\u4ED3\u5E93\uFF1A"),s("a",m,[e("shadowsocks-rust"),n(a)]),e("\u3002")]),h])}var q=r(d,[["render",b],["__file","proxy_local.html.vue"]]);export{q as default};
