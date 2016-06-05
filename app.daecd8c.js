!function(s){function e(a){if(M[a])return M[a].exports;var i=M[a]={exports:{},id:a,loaded:!1};return s[a].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var M={};return e.m=s,e.c=M,e.p="/",e(0)}([function(s,e,M){"use strict";function a(s){return s&&s.__esModule?s:{"default":s}}var i=M(8),n=a(i),c=M(2),t=a(c);new n["default"]({el:"body",components:{App:t["default"]}})},function(s,e,M){s.exports="<section class=page-home> <div class=page-home-content> <div class=page-home-jumbotron> <div class=page-home-logo :class=\"{ 'logo-animate': logoAnimateReady }\"> <img src="+M(6)+' alt=""> <p class=page-home-title>Mint UI</p> <p></p> </div> <p class=page-home-desc :class="{ \'logo-animate\': descAnimateReady }">基于 Vue.js 的移动端组件库</p> <div class=page-home-buttons> <a href=/docs/#!/zh-cn class=page-home-button v-show=descAnimateReady transition=enter target=_blank><span>开始使用</span></a> <a href=//elemefe.github.io/mint-ui class=page-home-button v-show=descAnimateReady transition=enter target=_blank><span>查看示例</span></a> </div> <div class=page-home-gitbtn> <iframe src="https://ghbtns.com/github-btn.html?user=ElemeFE&repo=mint-ui&type=star&count=true" frameborder=0 scrolling=0 width=80px height=20px v-show=descAnimateReady transition=enter></iframe> <iframe src="https://ghbtns.com/github-btn.html?user=ElemeFE&repo=mint-ui&type=fork&count=true" frameborder=0 scrolling=0 width=80px height=20px v-show=descAnimateReady transition=enter></iframe> </div> </div> <p class=page-home-sector>快速开始</p> <div class=page-home-start :style="{ \'width\': smallScreen ? \'90%\' : \'650px\' }"> <code> <span class=page-home-comment>// 引入全部组件</span> <span> <span class=pl-k>import </span><span class=pl-smi>Vue </span><span class=pl-k>from </span><span class=pl-s>\'vue\'</span><span class=pl-smi>;</span> </span> <span> <span class=pl-k>import </span><span class=pl-smi>Mint </span><span class=pl-k>from </span><span class=pl-s>\'mint-ui\'</span><span class=pl-smi>;</span> </span> <span> <span class=pl-smi>Vue.</span><span class=pl-en>use</span><span class=pl-smi>(Mint);</span> </span> </code> <code> <span class=page-home-comment>// 按需引入部分组件</span> <span> <span class=pl-k>import </span><span class=pl-smi>{ Cell, Checklist } </span><span class=pl-k>from </span><span class=pl-s>\'minu-ui\'</span><span class=pl-smi>;</span> </span> <span> <span class=pl-smi>Vue.</span><span class=pl-en>component</span><span class=pl-smi>(Cell.name, Cell);</span> </span> <span> <span class=pl-smi>Vue.</span><span class=pl-en>component</span><span class=pl-smi>(Checklist.name, Checklist);</span> </span></code> </div> <p class="page-home-sector page-home-sector--dark">特性介绍</p> <div class=page-home-show> <div class=page-home-left> <ul class=page-home-feature :style="{ \'width\': smallScreen ? \'100%\' : \'650px\' }"> <li> <i class="iconfont icon-zujian"></i> <span>Mint UI 包含丰富的 CSS 和 JS 组件，能够满足日常的移动端开发需要。通过它，可以快速构建出风格统一的页面，提升开发效率。</span> </li> <li> <i class="iconfont icon-anxufufei"></i> <span>真正意义上的按需加载组件。可以只加载声明过的组件及其样式文件，无需再纠结文件体积过大。</span> </li> <li> <i class="iconfont icon-xingnengtongji"></i> <span>考虑到移动端的性能门槛，Mint UI 采用 CSS3 处理各种动效，避免浏览器进行不必要的重绘和重排，从而使用户获得流畅顺滑的体验。</span> </li> <li> <i class="iconfont icon-shiliangzhinengduixiang9"></i> <span>依托 Vue.js 高效的组件化方案，Mint UI 做到了轻量化。即使全部引入，压缩后的文件体积也仅有 100+ K。</span> </li> </ul> <div class=page-home-qrcode> <img src='+M(7)+' alt=""> </div> </div> <div class=page-home-phone v-if=!smallScreen> <iframe src=//elemefe.github.io/mint-ui frameborder=0></iframe> </div> </div> <footer class=page-home-footer> <a href=https://github.com/ElemeFE>© ElemeFE</a> </footer> </div> </section>'},function(s,e,M){var a,i;M(4),a=M(3),i=M(1),s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]),i&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=i)},function(s,e,M){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),M(5),e["default"]={name:"app",data:function(){return{smallScreen:!0,isMobile:!1,logoAnimateReady:!1,descAnimateReady:!1}},methods:{handleResize:function(){this.smallScreen=document.body.clientWidth<=650}},compiled:function(){var s=this;this.logoAnimateReady=!0,setTimeout(function(){s.descAnimateReady=!0},500),this.handleResize(),window.addEventListener("resize",function(){s.handleResize()}),this.isMobile=document.body.clientWidth<=500},beforeDestroy:function(){var s=this;window.removeEventListener("resize",function(){s.handleResize()})}}},function(s,e){},function(s,e){},function(s,e){s.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjE3NXB4IiBoZWlnaHQ9IjIwMHB4IiB2aWV3Qm94PSIwIDAgMTc1IDIwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy44LjIgKDI5NzUzKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT7nu7/lj7ZAMXg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iMjU2LWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00MC4wMDAwMDAsIC0yOC4wMDAwMDApIiBmaWxsPSIjMjZhMmZmIj4KICAgICAgICAgICAgPGcgaWQ9Iue7v+WPtiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAyOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zMDQ2ODgsIDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTgzLjcyOTQ4OTUsMTU1LjAxMTg3NiBDODIuMTA5MzUsMTUxLjY2MDE1OSA4MC4wMzY0ODA3LDE0Ny4xMTY3MTIgNzcuOTA3NTkzMiwxNDEuNzU1NTIgQzc1Ljc3ODcwNTcsMTQ0LjUwMzU5NyA3My40NTk2MzU3LDE0Ny4yNjc0MjMgNzAuOTU3NTYsMTUwLjA2MzU0NCBMNjYuOTk0NDI4MywxNTQuNTc1MDk1IEw2MS45NzQ1Mjc5LDE1Mi40NTQzOCBDNDcuMzA0MTYyNSwxNDYuMjY2ODcxIDQuNzYyMjk2MDksMTI1LjU4MzgyOSAwLjM3NzczMjYxNyw5Mi4xNzYzMDM1IEMtMi43NTk0ODA4Niw1Ny4zNzA5MTY2IDE3LjYwNTc5MzIsMzkuMDg2NDg2MSAxMC4yNDI5MDA0LDE5LjczNzcxMTcgQzM5Ljk0MTA3MDUsMjYuODM4NjU0OSA2My4zNTY0NDA4LDM4LjMzOTkxMDQgNzguMzM2NjAwMiw1My4wNTc5MjExIEMxMDEuODM5Mjg3LDIzLjA1NzkzMDkgMTMxLjk0Mjk0LDIxLjg4MjM0OCAxMzkuOTcyNjY4LDAgQzE5NS43MzkzOTMsNzcuOTQyNzE5OSAxODYuODQzMjc5LDE0OS4xODk5OCA5My44ODgzMDM5LDE2MC42NzQ4ODkgQzg2LjAyNTIzNTQsMTc1LjEzOTEyMyA3Ny4yNjQyODIsMTg4LjU3MDExMyA2Ny43NDA4MDQ5LDIwMCBMNTQuNzA2NzI2NiwxOTEuOTA2MjggQzY1Ljg4MjIzOTUsMTgxLjE3NTUyMyA3NS40NDU1ODczLDE2OC42NDk3OTQgODMuNzI5NDg5NSwxNTUuMDExODc2IEw4My43Mjk0ODk1LDE1NS4wMTE4NzYgTDgzLjcyOTQ4OTUsMTU1LjAxMTg3NiBaIE05Mi42OTcxNzE1LDExNi4xNzk3NjQgQzk0LjYzNTI3ODUsMTIxLjM5ODAyMSA5Ni42MjEwMzA3LDEyNS42MjM1IDk3Ljg5OTg3ODMsMTI4LjE4ODc3MSBDMTExLjQzNDUzMSw5OC44MDA1OTQ1IDEyMC42NzE5MzgsNjYuNjYzOTQyMiAxMjguMTE0MzcyLDM3LjA2OTAzNjkgQzEyMC4wOTIwMjEsNDUuNDA4OTU3MiAxMDQuNjM1NDA4LDQ4LjY2NTU4MyA5Mi41MzA1MTI3LDY1LjQzMjkzOTMgQzkxLjc2ODE4NzksNjYuNTc2NjI1OCA5MS4xMDA1NTU5LDY3Ljc2MDE4MjYgOTAuNTA1Mjg4Nyw2OC45Njc0NjI3IEM5OC4wNjY3MzY1LDgyLjk3MDU5NDUgOTkuMjI2MTcxOSw5OC45NDM3Mjk3IDkyLjY5NzE3MTUsMTE2LjE3OTc2NCBMOTIuNjk3MTcxNSwxMTYuMTc5NzY0IEw5Mi42OTcxNzE1LDExNi4xNzk3NjQgWiBNNTIuNjA5NzM1NCwxMjcuNzEyMzE4IEM0Ny40NjI4NDczLDk5LjA2Mjc0MzQgNDAuNTEyODE0MSw3Mi40MzgzOTI2IDI4LjM1MjQ5ODYsNDguODgwMDg2MyBMMjguMzUyNDk4Niw0OC44ODAwODYzIEM0MS4zMzA5NTc2LDY2Ljk5NzY1ODYgNTYuNDA2NDA3Niw5My4yNjQ1Njk5IDY0LjM5Njg2MjUsMTIyLjk5NDIzOCBDOTIuNDM1MDIyNyw4OS43NjE1NDQzIDc0LjA5NTE3MjEsNTQuOTQwMjA5MiAyMi4zODc0NjcsNDIuNTg5MzEyNSBDMjcuMTkyODYzOSw1NS4yMjY0Nzk3IDEzLjg4ODY2MjcsNjcuMTcyMjkxNiAxNS45Mzc4MDksODkuOTEyNjUzNSBDMTguOTU2MDA5LDExMi44NTkzNDYgNDQuNjI3MjU0NSwxMjQuNDg3Nzg4IDUyLjYwOTczNTQsMTI3LjcxMjMxOCBMNTIuNjA5NzM1NCwxMjcuNzEyMzE4IEw1Mi42MDk3MzU0LDEyNy43MTIzMTggWiBNMTA4Ljc4MTM0NiwxMjkuNjkwMjk2IEMxNTkuNzEwNTc5LDEyMC45MjEzNjggMTY1LjQ0NTE1OSw4MC42ODMwMjIzIDEzNS44MTA3ODEsMzUuNzkwMTg5MyBDMTMyLjAyOTg1OCw2Mi45NTQ1ODY1IDEyMi41OTM4OTcsOTcuMTg4MjI5OSAxMDguNzgxMzQ2LDEyOS42OTAyOTYgTDEwOC43ODEzNDYsMTI5LjY5MDI5NiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},function(s,e,M){s.exports=M.p+"static/qrcode.f245129.svg"},function(s,e){s.exports=Vue}]);