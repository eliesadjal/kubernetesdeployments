(()=>{(self.webpackChunkapp=self.webpackChunkapp||[]).push([[991],{56755:function(b,x,k){(function(a){a(k(23326))})(function(a){"use strict";function v(t,r,f,i){if(f&&f.call){var d=f;f=null}else var d=p(t,f,"rangeFinder");typeof r=="number"&&(r=a.Pos(r,0));var h=p(t,f,"minFoldSize");function F(u){var o=d(t,r);if(!o||o.to.line-o.from.line<h)return null;if(i==="fold")return o;for(var s=t.findMarksAt(o.from),c=0;c<s.length;++c)if(s[c].__isFold){if(!u)return null;o.cleared=!0,s[c].clear()}return o}var l=F(!0);if(p(t,f,"scanUp"))for(;!l&&r.line>t.firstLine();)r=a.Pos(r.line-1,0),l=F(!1);if(!(!l||l.cleared||i==="unfold")){var e=O(t,f,l);a.on(e,"mousedown",function(u){n.clear(),a.e_preventDefault(u)});var n=t.markText(l.from,l.to,{replacedWith:e,clearOnEnter:p(t,f,"clearOnEnter"),__isFold:!0});n.on("clear",function(u,o){a.signal(t,"unfold",t,u,o)}),a.signal(t,"fold",t,l.from,l.to)}}function O(t,r,f){var i=p(t,r,"widget");if(typeof i=="function"&&(i=i(f.from,f.to)),typeof i=="string"){var d=document.createTextNode(i);i=document.createElement("span"),i.appendChild(d),i.className="CodeMirror-foldmarker"}else i&&(i=i.cloneNode(!0));return i}a.newFoldFunction=function(t,r){return function(f,i){v(f,i,{rangeFinder:t,widget:r})}},a.defineExtension("foldCode",function(t,r,f){v(this,t,r,f)}),a.defineExtension("isFolded",function(t){for(var r=this.findMarksAt(t),f=0;f<r.length;++f)if(r[f].__isFold)return!0}),a.commands.toggleFold=function(t){t.foldCode(t.getCursor())},a.commands.fold=function(t){t.foldCode(t.getCursor(),null,"fold")},a.commands.unfold=function(t){t.foldCode(t.getCursor(),{scanUp:!1},"unfold")},a.commands.foldAll=function(t){t.operation(function(){for(var r=t.firstLine(),f=t.lastLine();r<=f;r++)t.foldCode(a.Pos(r,0),{scanUp:!1},"fold")})},a.commands.unfoldAll=function(t){t.operation(function(){for(var r=t.firstLine(),f=t.lastLine();r<=f;r++)t.foldCode(a.Pos(r,0),{scanUp:!1},"unfold")})},a.registerHelper("fold","combine",function(){var t=Array.prototype.slice.call(arguments,0);return function(r,f){for(var i=0;i<t.length;++i){var d=t[i](r,f);if(d)return d}}}),a.registerHelper("fold","auto",function(t,r){for(var f=t.getHelpers(r,"fold"),i=0;i<f.length;i++){var d=f[i](t,r);if(d)return d}});var _={rangeFinder:a.fold.auto,widget:"\u2194",minFoldSize:0,scanUp:!1,clearOnEnter:!0};a.defineOption("foldOptions",null);function p(t,r,f){if(r&&r[f]!==void 0)return r[f];var i=t.options.foldOptions;return i&&i[f]!==void 0?i[f]:_[f]}a.defineExtension("foldOption",function(t,r){return p(this,t,r)})})},991:function(b,x,k){(function(a){a(k(23326),k(56755))})(function(a){"use strict";a.defineOption("foldGutter",!1,function(e,n,u){u&&u!=a.Init&&(e.clearGutter(e.state.foldGutter.options.gutter),e.state.foldGutter=null,e.off("gutterClick",d),e.off("changes",h),e.off("viewportChange",F),e.off("fold",l),e.off("unfold",l),e.off("swapDoc",h)),n&&(e.state.foldGutter=new O(_(n)),i(e),e.on("gutterClick",d),e.on("changes",h),e.on("viewportChange",F),e.on("fold",l),e.on("unfold",l),e.on("swapDoc",h))});var v=a.Pos;function O(e){this.options=e,this.from=this.to=0}function _(e){return e===!0&&(e={}),e.gutter==null&&(e.gutter="CodeMirror-foldgutter"),e.indicatorOpen==null&&(e.indicatorOpen="CodeMirror-foldgutter-open"),e.indicatorFolded==null&&(e.indicatorFolded="CodeMirror-foldgutter-folded"),e}function p(e,n){for(var u=e.findMarks(v(n,0),v(n+1,0)),o=0;o<u.length;++o)if(u[o].__isFold){var s=u[o].find(-1);if(s&&s.line===n)return u[o]}}function t(e){if(typeof e=="string"){var n=document.createElement("div");return n.className=e+" CodeMirror-guttermarker-subtle",n}else return e.cloneNode(!0)}function r(e,n,u){var o=e.state.foldGutter.options,s=n-1,c=e.foldOption(o,"minFoldSize"),y=e.foldOption(o,"rangeFinder"),E=typeof o.indicatorFolded=="string"&&f(o.indicatorFolded),T=typeof o.indicatorOpen=="string"&&f(o.indicatorOpen);e.eachLine(n,u,function(U){++s;var w=null,g=U.gutterMarkers;if(g&&(g=g[o.gutter]),p(e,s)){if(E&&g&&E.test(g.className))return;w=t(o.indicatorFolded)}else{var S=v(s,0),G=y&&y(e,S);if(G&&G.to.line-G.from.line>=c){if(T&&g&&T.test(g.className))return;w=t(o.indicatorOpen)}}!w&&!g||e.setGutterMarker(U,o.gutter,w)})}function f(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function i(e){var n=e.getViewport(),u=e.state.foldGutter;!u||(e.operation(function(){r(e,n.from,n.to)}),u.from=n.from,u.to=n.to)}function d(e,n,u){var o=e.state.foldGutter;if(!!o){var s=o.options;if(u==s.gutter){var c=p(e,n);c?c.clear():e.foldCode(v(n,0),s)}}}function h(e){var n=e.state.foldGutter;if(!!n){var u=n.options;n.from=n.to=0,clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout(function(){i(e)},u.foldOnChangeTimeSpan||600)}}function F(e){var n=e.state.foldGutter;if(!!n){var u=n.options;clearTimeout(n.changeUpdate),n.changeUpdate=setTimeout(function(){var o=e.getViewport();n.from==n.to||o.from-n.to>20||n.from-o.to>20?i(e):e.operation(function(){o.from<n.from&&(r(e,o.from,n.from),n.from=o.from),o.to>n.to&&(r(e,n.to,o.to),n.to=o.to)})},u.updateViewportTimeSpan||400)}}function l(e,n){var u=e.state.foldGutter;if(!!u){var o=n.line;o>=u.from&&o<u.to&&r(e,o,o+1)}}})}}]);})();

//# sourceMappingURL=991.ff3723e0.chunk.js.map