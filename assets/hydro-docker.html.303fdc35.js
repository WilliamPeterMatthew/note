import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as c,c as i,a as e,b as o,d,e as l}from"./app.f3a391e8.js";const s={},h={href:"https://github.com/WPMZKX/CPPUOJ-Docker",target:"_blank",rel:"noopener noreferrer"},n=e("p",null,[e("img",{src:"https://img.shields.io/github/v/release/WPMZKX/CPPUOJ-Docker?sort=date&display_name=tag",alt:"GitHub Release"})],-1),p=e("p",null,[e("img",{src:"https://img.shields.io/github/release-date/WPMZKX/CPPUOJ-Docker?display_date=published_at",alt:"GitHub Release Date"})],-1),u={id:"hydro-docker",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#hydro-docker","aria-hidden":"true"},"#",-1),b={href:"https://github.com/WilliamPeterMatthew/Hydro-Docker",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[e("img",{src:"https://img.shields.io/github/v/release/WilliamPeterMatthew/Hydro-Docker?sort=date&display_name=tag",alt:"GitHub Release"})],-1),m=e("p",null,[e("img",{src:"https://img.shields.io/github/release-date/WilliamPeterMatthew/Hydro-Docker?display_date=published_at",alt:"GitHub Release Date"})],-1),g={href:"https://github.com/hydro-dev/Hydro",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"Hydro/install/docker",-1),f=l('<h2 id="docker-\u5B89\u88C5\u65B9\u5F0F\u4EC5\u9002\u7528\u4E8E\u53EF\u719F\u7EC3\u4F7F\u7528-docker-compose-\u7EF4\u62A4\u5BB9\u5668\u7684\u7528\u6237-\u5E76\u8981\u6C42\u60A8\u6709\u57FA\u7840\u7684\u9519\u8BEF\u6392\u67E5\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#docker-\u5B89\u88C5\u65B9\u5F0F\u4EC5\u9002\u7528\u4E8E\u53EF\u719F\u7EC3\u4F7F\u7528-docker-compose-\u7EF4\u62A4\u5BB9\u5668\u7684\u7528\u6237-\u5E76\u8981\u6C42\u60A8\u6709\u57FA\u7840\u7684\u9519\u8BEF\u6392\u67E5\u80FD\u529B" aria-hidden="true">#</a> docker \u5B89\u88C5\u65B9\u5F0F\u4EC5\u9002\u7528\u4E8E\u53EF\u719F\u7EC3\u4F7F\u7528 docker-compose \u7EF4\u62A4\u5BB9\u5668\u7684\u7528\u6237\uFF0C\u5E76\u8981\u6C42\u60A8\u6709\u57FA\u7840\u7684\u9519\u8BEF\u6392\u67E5\u80FD\u529B</h2><h2 id="\u8BE5\u5B89\u88C5\u6A21\u5757\u975E\u5B98\u65B9\u7EF4\u62A4-\u5373\u4E0D\u4F1A\u63D0\u4F9B\u4EFB\u4F55\u6280\u672F\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u8BE5\u5B89\u88C5\u6A21\u5757\u975E\u5B98\u65B9\u7EF4\u62A4-\u5373\u4E0D\u4F1A\u63D0\u4F9B\u4EFB\u4F55\u6280\u672F\u652F\u6301" aria-hidden="true">#</a> \u8BE5\u5B89\u88C5\u6A21\u5757\u975E\u5B98\u65B9\u7EF4\u62A4\uFF0C\u5373\u4E0D\u4F1A\u63D0\u4F9B\u4EFB\u4F55\u6280\u672F\u652F\u6301</h2><h2 id="\u666E\u901A\u7528\u6237\u8BF7\u52A1\u5FC5\u4F7F\u7528\u81EA\u52A8\u811A\u672C\u5B89\u88C5-\u8FD9\u53EF\u5927\u5927\u63D0\u9AD8\u60A8\u4E00\u6B21\u6210\u529F\u7684\u53EF\u80FD\u6027" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u7528\u6237\u8BF7\u52A1\u5FC5\u4F7F\u7528\u81EA\u52A8\u811A\u672C\u5B89\u88C5-\u8FD9\u53EF\u5927\u5927\u63D0\u9AD8\u60A8\u4E00\u6B21\u6210\u529F\u7684\u53EF\u80FD\u6027" aria-hidden="true">#</a> \u666E\u901A\u7528\u6237\u8BF7\u52A1\u5FC5\u4F7F\u7528\u81EA\u52A8\u811A\u672C\u5B89\u88C5\uFF0C\u8FD9\u53EF\u5927\u5927\u63D0\u9AD8\u60A8\u4E00\u6B21\u6210\u529F\u7684\u53EF\u80FD\u6027</h2><p>\u672C\u6587\u5047\u8BBE\u60A8\u5DF2\u7ECF\u5B89\u88C5\u4E86 <code>Docker</code> \u3001 <code>docker-compose</code> \u3001 <code>git</code> \u3002</p><p><strong>\u672A\u5B89\u88C5\u8BF7\u5148\u5B89\u88C5</strong>\u3002</p><h2 id="\u5F00\u59CB\u5B89\u88C5-\u4E0D\u5EFA\u8BAE\u4F7F\u7528windows" tabindex="-1"><a class="header-anchor" href="#\u5F00\u59CB\u5B89\u88C5-\u4E0D\u5EFA\u8BAE\u4F7F\u7528windows" aria-hidden="true">#</a> \u5F00\u59CB\u5B89\u88C5\uFF08\u4E0D\u5EFA\u8BAE\u4F7F\u7528Windows\uFF09</h2><ol><li><p>\u8BF7\u9009\u62E9\u78C1\u76D8\u7A7A\u95F4\u5BCC\u88D5\u7684\u4F4D\u7F6E\uFF0C\u8FD0\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><p><code>git clone https://github.com/WilliamPeterMatthew/Hydro-Docker.git &amp;&amp; cd Hydro-Docker</code></p></li><li><p>\u542F\u52A8\u670D\u52A1\u3002</p><p><code>docker-compose up -d</code></p></li></ol><p>\u56E0\u4E3A\u662F\u5728\u672C\u673A\u5236\u4F5Cdocker\u955C\u50CF\uFF0C\u6240\u4EE5\u8017\u65F6\u53EF\u80FD\u4F1A\u6BD4\u8F83\u4E45\u3002\u6839\u636E\u7F51\u901F\u60C5\u51B5\uFF0C\u5927\u7EA65\u523030\u5206\u949F\u5C31\u53EF\u4EE5\u81EA\u52A8\u642D\u5EFA\u5B8C\u6210\uFF0C\u5168\u7A0B\u65E0\u9700\u4EBA\u5DE5\u5E72\u9884\u3002</p><p>\u7B49\u547D\u4EE4\u6267\u884C\u5B8C\u6210\uFF0C\u7136\u540E\u8FD0\u884C <code>docker ps -a</code>\uFF0C\u5F53\u770B\u5230\u6240\u6709\u7684\u5BB9\u5668\u7684\u72B6\u6001\u6CA1\u6709<code>Exited (x) xxx</code>\u5C31\u4EE3\u8868 OJ \u5DF2\u7ECF\u542F\u52A8\u6210\u529F\u3002</p><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><p>\u5B89\u88C5\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u9ED8\u8BA4\u6CE8\u518C\u4E00\u4E2A\u8D85\u7EA7\u7BA1\u7406\u5458\u8D26\u53F7\uFF0C\u7528\u6765\u505A\u6D4B\u8BC4\u8D26\u53F7\u3002\u7528\u6237\u540D\uFF1A<code>hydro</code>\uFF0C\u5BC6\u7801\uFF1A<code>hydro123</code>\u3002<strong>\u8BF7\u52A1\u5FC5\u53CA\u65F6\u4FEE\u6539\u5BC6\u7801</strong>\u3002\u4FEE\u6539\u8BE5\u8D26\u53F7\u5BC6\u7801\u540E\uFF0C\u8BF7\u4FEE\u6539<code>data/judge/config/judge.yaml</code>\u4E2D\u7684<code>password</code>\u3002\u5426\u5219\u53EF\u80FD\u4F1A\u65E0\u6CD5\u6D4B\u8BC4\u3002</p><p>\u53EF\u4EE5\u5C1D\u8BD5\u5728Hydro\u4E0A\u767B\u5F55\u8BE5\u8D26\u53F7\uFF0C\u82E5\u65E0\u6CD5\u767B\u5F55\u8BE5\u8D26\u53F7\uFF0C\u9700\u8981\u624B\u52A8\u6267\u884C\u4EE5\u4E0B\u6307\u4EE4<br><code>hydrooj cli user create Hydro@hydro.local hydro hydro123</code><br><code>hydrooj cli user setPassword 1 hydro123</code><br><code>hydrooj cli user setJudge 1</code><br> \u6765\u786E\u4FDD\u8BC4\u6D4B\u673A\u53EF\u4EE5\u6B63\u5E38\u8FDE\u63A5\u5230\u540E\u7AEF\u3002</p><p>\u5982\u679C\u65E0\u6CD5\u8BBF\u95EE\u7AEF\u53E3\uFF0C\u4E14Hydro\u7684\u65E5\u5FD7\u6B63\u5E38\uFF0C\u8BF7\u6267\u884C\u4EE5\u4E0B\u6307\u4EE4<br><code>hydrooj cli system set server.host 0.0.0.0</code></p><h2 id="\u6D4B\u8BC4\u673A\u9ED8\u8BA4\u7F16\u8BD1\u5668" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BC4\u673A\u9ED8\u8BA4\u7F16\u8BD1\u5668" aria-hidden="true">#</a> \u6D4B\u8BC4\u673A\u9ED8\u8BA4\u7F16\u8BD1\u5668</h2><p>\u6D4B\u8BC4\u673A\u9ED8\u8BA4\u5B89\u88C5\u4E86\u4EE5\u4E0B\u51E0\u4E2A\u7F16\u8BD1\u5668\uFF0C\u5982\u6709\u9700\u8981\uFF0C\u8BF7\u81EA\u884C\u5B89\u88C5\u3002</p><p>\u7F16\u8BD1\u5668\u5217\u8868\uFF1A</p><ol><li>gcc</li><li>python3</li><li>g++</li><li>fp-compiler</li><li>openjdk-17-jdk-headless</li><li>rustc</li><li>ghc</li><li>cabal-install</li><li>libjavascriptcoregtk-4.0-bin</li><li>golang</li><li>ruby</li><li>mono-runtime</li><li>mono-mcs</li></ol><h2 id="hydro\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#hydro\u4F7F\u7528" aria-hidden="true">#</a> Hydro\u4F7F\u7528</h2>',18),x={href:"https://hydro.js.org/",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"oj-backend",-1),H=e("code",null,"oj-judge",-1),j=e("p",null,[o("\u8FDB\u5165\u5BB9\u5668\u7684\u65B9\u6CD5\u662F"),e("br"),e("code",null,"docker exec -it <\u5BB9\u5668\u540D> /bin/bash"),e("br"),o(" \u4F8B\u5982"),e("br"),e("code",null,"docker exec -it oj-backend /bin/bash")],-1);function D(w,v){const r=a("ExternalLinkIcon");return c(),i("div",null,[e("blockquote",null,[e("p",null,[o("\u5BF9\u4E8ECPPU\u6B63\u5728\u8FD0\u884C\u7684\u7248\u672C\uFF0C\u6211\u5199\u4E86\u4E00\u4E2A\u7279\u522B\u7684\u7248\u672C\u5728\u8FD9\u91CC\uFF1A"),e("a",h,[o("CPPUOJ-Docker"),d(r)]),o("\u3002")]),n,p]),e("h2",u,[_,o(),e("a",b,[o("Hydro-Docker"),d(r)])]),k,m,e("blockquote",null,[e("p",null,[o("\u4EE5\u4E0B\u5185\u5BB9\u9B54\u6539\u81EA "),e("a",g,[o("\u6E90\u4ED3\u5E93"),d(r)]),o(" \u7684 "),y,o(" \u6587\u4EF6\u5939\uFF0C\u811A\u672C\u5185\u5BB9\u4E0D\u4E00\u5B9A\u4E3A\u6700\u65B0\u7248\uFF0C\u8BF7\u6838\u5BF9\u540E\u4F7F\u7528")])]),f,e("p",null,[o("\u53C2\u8003 "),e("a",x,[o("\u5B98\u65B9\u6587\u6863"),d(r)]),o(" \uFF0C\u4E3B\u8981\u64CD\u4F5C\u8BF7\u8FDB\u5165 "),P,o(" \u5BB9\u5668\u64CD\u4F5C\uFF0C\u6D89\u53CA\u4F5C\u4E3A\u72EC\u7ACB\u8FDB\u7A0B\u7684\u8BC4\u6D4B\u673A\uFF0C\u8BF7\u8FDB\u5165 "),H,o(" \u5BB9\u5668\u64CD\u4F5C\u3002")]),j])}var C=t(s,[["render",D],["__file","hydro-docker.html.vue"]]);export{C as default};
