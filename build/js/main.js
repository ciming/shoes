var Zepto=function(){function t(t){return null==t?String(t):B[G.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function r(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(e){return"object"==t(e)}function o(t){return i(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){return"number"==typeof t.length}function s(t){return A.call(t,function(t){return null!=t})}function u(t){return t.length>0?b.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in j?j[t]:j[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||D[c(t)]?e:e+"px"}function h(t){var e,n;return I[t]||(e=_.createElement(t),_.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),I[t]=n),I[t]}function p(t){return"children"in t?O.call(t.children):b.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function d(t,e,n){for(T in e)n&&(o(e[T])||Y(e[T]))?(o(e[T])&&!o(t[T])&&(t[T]={}),Y(e[T])&&!Y(t[T])&&(t[T]=[]),d(t[T],e[T],n)):e[T]!==x&&(t[T]=e[T])}function v(t,e){return null==e?b(t):b(t).filter(e)}function m(t,n,r,i){return e(n)?n.call(t,r,i):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function y(t,e){var n=t.className||"",r=n&&n.baseVal!==x;return e===x?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function E(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?b.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,r=t.childNodes.length;r>n;n++)w(t.childNodes[n],e)}var x,T,b,S,P,C,N=[],O=N.slice,A=N.filter,_=window.document,I={},j={},D={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},R=/^\s*<(\w+|!)[^>]*>/,L=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,M=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,H=/^(?:body|html)$/i,W=/([A-Z])/g,k=["val","css","html","text","data","width","height","offset"],F=["after","prepend","before","append"],Z=_.createElement("table"),$=_.createElement("tr"),U={tr:_.createElement("tbody"),tbody:Z,thead:Z,tfoot:Z,td:$,th:$,"*":_.createElement("div")},z=/complete|loaded|interactive/,q=/^[\w-]*$/,B={},G=B.toString,X={},V=_.createElement("div"),J={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Y=Array.isArray||function(t){return t instanceof Array};return X.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=V).appendChild(t),r=~X.qsa(i,e).indexOf(t),o&&V.removeChild(t),r},P=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},C=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},X.fragment=function(t,e,n){var r,i,a;return L.test(t)&&(r=b(_.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(M,"<$1></$2>")),e===x&&(e=R.test(t)&&RegExp.$1),e in U||(e="*"),a=U[e],a.innerHTML=""+t,r=b.each(O.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(i=b(r),b.each(n,function(t,e){k.indexOf(t)>-1?i[t](e):i.attr(t,e)})),r},X.Z=function(t,e){return t=t||[],t.__proto__=b.fn,t.selector=e||"",t},X.isZ=function(t){return t instanceof X.Z},X.init=function(t,n){var r;if(!t)return X.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&R.test(t))r=X.fragment(t,RegExp.$1,n),t=null;else{if(n!==x)return b(n).find(t);r=X.qsa(_,t)}else{if(e(t))return b(_).ready(t);if(X.isZ(t))return t;if(Y(t))r=s(t);else if(i(t))r=[t],t=null;else if(R.test(t))r=X.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==x)return b(n).find(t);r=X.qsa(_,t)}}return X.Z(r,t)},b=function(t,e){return X.init(t,e)},b.extend=function(t){var e,n=O.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){d(t,n,e)}),t},X.qsa=function(t,e){var n,i="#"==e[0],o=!i&&"."==e[0],a=i||o?e.slice(1):e,s=q.test(a);return r(t)&&s&&i?(n=t.getElementById(a))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:O.call(s&&!i?o?t.getElementsByClassName(a):t.getElementsByTagName(e):t.querySelectorAll(e))},b.contains=_.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},b.type=t,b.isFunction=e,b.isWindow=n,b.isArray=Y,b.isPlainObject=o,b.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},b.inArray=function(t,e,n){return N.indexOf.call(e,t,n)},b.camelCase=P,b.trim=function(t){return null==t?"":String.prototype.trim.call(t)},b.uuid=0,b.support={},b.expr={},b.map=function(t,e){var n,r,i,o=[];if(a(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&o.push(n);else for(i in t)n=e(t[i],i),null!=n&&o.push(n);return u(o)},b.each=function(t,e){var n,r;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(r in t)if(e.call(t[r],r,t[r])===!1)return t;return t},b.grep=function(t,e){return A.call(t,e)},window.JSON&&(b.parseJSON=JSON.parse),b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){B["[object "+e+"]"]=e.toLowerCase()}),b.fn={forEach:N.forEach,reduce:N.reduce,push:N.push,sort:N.sort,indexOf:N.indexOf,concat:N.concat,map:function(t){return b(b.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return b(O.apply(this,arguments))},ready:function(t){return z.test(_.readyState)&&_.body?t(b):_.addEventListener("DOMContentLoaded",function(){t(b)},!1),this},get:function(t){return t===x?O.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return N.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):b(A.call(this,function(e){return X.matches(e,t)}))},add:function(t,e){return b(C(this.concat(b(t,e))))},is:function(t){return this.length>0&&X.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==x)this.each(function(e){t.call(this,e)||n.push(this)});else{var r="string"==typeof t?this.filter(t):a(t)&&e(t.item)?O.call(t):b(t);this.forEach(function(t){r.indexOf(t)<0&&n.push(t)})}return b(n)},has:function(t){return this.filter(function(){return i(t)?b.contains(this,t):b(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:b(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:b(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?b(t).filter(function(){var t=this;return N.some.call(n,function(e){return b.contains(e,t)})}):1==this.length?b(X.qsa(this[0],t)):this.map(function(){return X.qsa(this,t)}):b()},closest:function(t,e){var n=this[0],i=!1;for("object"==typeof t&&(i=b(t));n&&!(i?i.indexOf(n)>=0:X.matches(n,t));)n=n!==e&&!r(n)&&n.parentNode;return b(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=b.map(n,function(t){return(t=t.parentNode)&&!r(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return v(e,t)},parent:function(t){return v(C(this.pluck("parentNode")),t)},children:function(t){return v(this.map(function(){return p(this)}),t)},contents:function(){return this.map(function(){return O.call(this.childNodes)})},siblings:function(t){return v(this.map(function(t,e){return A.call(p(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return b.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=h(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var r=b(t).get(0),i=r.parentNode||this.length>1;return this.each(function(e){b(this).wrapAll(n?t.call(this,e):i?r.cloneNode(!0):r)})},wrapAll:function(t){if(this[0]){b(this[0]).before(t=b(t));for(var e;(e=t.children()).length;)t=e.first();b(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var r=b(this),i=r.contents(),o=n?t.call(this,e):t;i.length?i.wrapAll(o):r.append(o)})},unwrap:function(){return this.parent().each(function(){b(this).replaceWith(b(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=b(this);(t===x?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return b(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return b(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;b(this).empty().append(m(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=m(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(i(t))for(T in t)g(this,T,t[T]);else g(this,t,m(this,e,n,this.getAttribute(t)))}):this.length&&1===this[0].nodeType?!(n=this[0].getAttribute(t))&&t in this[0]?this[0][t]:n:x},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=J[t]||t,1 in arguments?this.each(function(n){this[t]=m(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(t,e){var n="data-"+t.replace(W,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?E(r):x},val:function(t){return 0 in arguments?this.each(function(e){this.value=m(this,t,e,this.value)}):this[0]&&(this[0].multiple?b(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=b(this),r=m(this,t,e,n.offset()),i=n.offsetParent().offset(),o={top:r.top-i.top,left:r.left-i.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var r,i=this[0];if(!i)return;if(r=getComputedStyle(i,""),"string"==typeof e)return i.style[P(e)]||r.getPropertyValue(e);if(Y(e)){var o={};return b.each(e,function(t,e){o[e]=i.style[P(e)]||r.getPropertyValue(e)}),o}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(T in e)e[T]||0===e[T]?a+=c(T)+":"+f(T,e[T])+";":this.each(function(){this.style.removeProperty(c(T))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(b(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?N.some.call(this,function(t){return this.test(y(t))},l(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=y(this),r=m(this,t,e,n);r.split(/\s+/g).forEach(function(t){b(this).hasClass(t)||S.push(t)},this),S.length&&y(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===x)return y(this,"");S=y(this),m(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),y(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var r=b(this),i=m(this,t,n,y(this));i.split(/\s+/g).forEach(function(t){(e===x?!r.hasClass(t):e)?r.addClass(t):r.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===x?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===x?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=H.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(b(t).css("margin-top"))||0,n.left-=parseFloat(b(t).css("margin-left"))||0,r.top+=parseFloat(b(e[0]).css("border-top-width"))||0,r.left+=parseFloat(b(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||_.body;t&&!H.test(t.nodeName)&&"static"==b(t).css("position");)t=t.offsetParent;return t})}},b.fn.detach=b.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});b.fn[t]=function(i){var o,a=this[0];return i===x?n(a)?a["inner"+e]:r(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=b(this),a.css(t,m(this,i,e,a[t]()))})}}),F.forEach(function(e,n){var r=n%2;b.fn[e]=function(){var e,i,o=b.map(arguments,function(n){return e=t(n),"object"==e||"array"==e||null==n?n:X.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){i=r?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=b.contains(_.documentElement,i);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!i)return b(t).remove();i.insertBefore(t,e),s&&w(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},b.fn[r?e+"To":"insert"+(n?"Before":"After")]=function(t){return b(t)[e](this),this}}),X.Z.prototype=b.fn,X.uniq=C,X.deserializeValue=E,b.zepto=X,b}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function e(t){return t._zid||(t._zid=h++)}function n(t,n,o,a){if(n=r(n),n.ns)var s=i(n.ns);return(m[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function i(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!y&&t.e in E||!!e}function a(t){return w[t]||y&&E[t]||t}function s(n,i,s,u,l,h,p){var d=e(n),v=m[d]||(m[d]=[]);i.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var i=r(e);i.fn=s,i.sel=l,i.e in w&&(s=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?i.fn.apply(this,arguments):void 0}),i.del=h;var d=h||s;i.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},i.i=v.length,v.push(i),"addEventListener"in n&&n.addEventListener(a(i.e),i.proxy,o(i,p))})}function u(t,r,i,s,u){var c=e(t);(r||"").split(/\s/).forEach(function(e){n(t,e,i,s).forEach(function(e){delete m[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(S,function(t,r){var i=n[t];e[t]=function(){return this[r]=x,i&&i.apply(n,arguments)},e[r]=T}),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function l(t){var e,n={originalEvent:t};for(e in t)b.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,h=1,p=Array.prototype.slice,d=t.isFunction,v=function(t){return"string"==typeof t},m={},g={},y="onfocusin"in window,E={focus:"focusin",blur:"focusout"},w={mouseenter:"mouseover",mouseleave:"mouseout"};g.click=g.mousedown=g.mouseup=g.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,r){var i=2 in arguments&&p.call(arguments,2);if(d(n)){var o=function(){return n.apply(r,i?i.concat(p.call(arguments)):arguments)};return o._zid=e(n),o}if(v(r))return i?(i.unshift(n[r],n),t.proxy.apply(null,i)):t.proxy(n[r],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var x=function(){return!0},T=function(){return!1},b=/^([A-Z]|returnValue$|layer[XY]$)/,S={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,r,i,o){var a,c,h=this;return e&&!v(e)?(t.each(e,function(t,e){h.on(t,n,r,e,o)}),h):(v(n)||d(i)||i===!1||(i=r,r=n,n=f),(d(r)||r===!1)&&(i=r,r=f),i===!1&&(i=T),h.each(function(f,h){o&&(a=function(t){return u(h,t.type,i),i.apply(this,arguments)}),n&&(c=function(e){var r,o=t(e.target).closest(n,h).get(0);return o&&o!==h?(r=t.extend(l(e),{currentTarget:o,liveFired:h}),(a||i).apply(o,[r].concat(p.call(arguments,1)))):void 0}),s(h,e,i,r,n,c||a)}))},t.fn.off=function(e,n,r){var i=this;return e&&!v(e)?(t.each(e,function(t,e){i.off(t,n,e)}),i):(v(n)||d(r)||r===!1||(r=n,n=f),r===!1&&(r=T),i.each(function(){u(this,e,r,n)}))},t.fn.trigger=function(e,n){return e=v(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in E&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,r){var i,o;return this.each(function(a,s){i=l(v(e)?t.Event(e):e),i._args=r,i.target=s,t.each(n(s,e.type||e),function(t,e){return o=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){v(t)||(e=t,t=e.type);var n=document.createEvent(g[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),c(n)}}(Zepto),function(t){function e(e,n,r){var i=t.Event(n);return t(e).trigger(i,r),!i.isDefaultPrevented()}function n(t,n,r,i){return t.global?e(n||y,r,i):void 0}function r(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function i(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var r=e.context;return e.beforeSend.call(r,t,e)===!1||n(e,r,"ajaxBeforeSend",[t,e])===!1?!1:void n(e,r,"ajaxSend",[t,e])}function a(t,e,r,i){var o=r.context,a="success";r.success.call(o,t,a,e),i&&i.resolveWith(o,[t,a,e]),n(r,o,"ajaxSuccess",[e,r,t]),u(a,e,r)}function s(t,e,r,i,o){var a=i.context;i.error.call(a,r,e,t),o&&o.rejectWith(a,[r,e,t]),n(i,a,"ajaxError",[r,i,t||e]),u(e,r,i)}function u(t,e,r){var o=r.context;r.complete.call(o,e,t),n(r,o,"ajaxComplete",[e,r]),i(r)}function c(){}function l(t){return t&&(t=t.split(";",2)[0]),t&&(t==b?"html":t==T?"json":w.test(t)?"script":x.test(t)&&"xml")||"text"}function f(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=f(e.url,e.data),e.data=void 0)}function p(e,n,r,i){return t.isFunction(n)&&(i=r,r=n,n=void 0),t.isFunction(r)||(i=r,r=void 0),{url:e,data:n,success:r,dataType:i}}function d(e,n,r,i){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),i&&(n=r?i:i+"["+(s||"object"==o||"array"==o?n:"")+"]"),!i&&a?e.add(u.name,u.value):"array"==o||!r&&"object"==o?d(e,u,r,n):e.add(n,u)})}var v,m,g=0,y=window.document,E=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,x=/^(?:text|application)\/xml/i,T="application/json",b="text/html",S=/^\s*$/,P=y.createElement("a");P.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var r,i,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"jsonp"+ ++g,l=y.createElement("script"),f=window[c],h=function(e){t(l).triggerHandler("error",e||"abort")},p={abort:h};return n&&n.promise(p),t(l).on("load error",function(o,u){clearTimeout(i),t(l).off().remove(),"error"!=o.type&&r?a(r[0],p,e,n):s(null,u||"error",p,e,n),window[c]=f,r&&t.isFunction(f)&&f(r[0]),f=r=void 0}),o(p,e)===!1?(h("abort"),p):(window[c]=function(){r=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),y.head.appendChild(l),e.timeout>0&&(i=setTimeout(function(){h("timeout")},e.timeout)),p)},t.ajaxSettings={type:"GET",beforeSend:c,success:c,error:c,complete:c,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:T,xml:"application/xml, text/xml",html:b,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n,i=t.extend({},e||{}),u=t.Deferred&&t.Deferred();for(v in t.ajaxSettings)void 0===i[v]&&(i[v]=t.ajaxSettings[v]);r(i),i.crossDomain||(n=y.createElement("a"),n.href=i.url,n.href=n.href,i.crossDomain=P.protocol+"//"+P.host!=n.protocol+"//"+n.host),i.url||(i.url=window.location.toString()),h(i);var p=i.dataType,d=/\?.+=\?/.test(i.url);if(d&&(p="jsonp"),i.cache!==!1&&(e&&e.cache===!0||"script"!=p&&"jsonp"!=p)||(i.url=f(i.url,"_="+Date.now())),"jsonp"==p)return d||(i.url=f(i.url,i.jsonp?i.jsonp+"=?":i.jsonp===!1?"":"callback=?")),t.ajaxJSONP(i,u);var g,E=i.accepts[p],w={},x=function(t,e){w[t.toLowerCase()]=[t,e]},T=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,b=i.xhr(),C=b.setRequestHeader;if(u&&u.promise(b),i.crossDomain||x("X-Requested-With","XMLHttpRequest"),x("Accept",E||"*/*"),(E=i.mimeType||E)&&(E.indexOf(",")>-1&&(E=E.split(",",2)[0]),b.overrideMimeType&&b.overrideMimeType(E)),(i.contentType||i.contentType!==!1&&i.data&&"GET"!=i.type.toUpperCase())&&x("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(m in i.headers)x(m,i.headers[m]);if(b.setRequestHeader=x,b.onreadystatechange=function(){if(4==b.readyState){b.onreadystatechange=c,clearTimeout(g);var e,n=!1;if(b.status>=200&&b.status<300||304==b.status||0==b.status&&"file:"==T){p=p||l(i.mimeType||b.getResponseHeader("content-type")),e=b.responseText;try{"script"==p?(0,eval)(e):"xml"==p?e=b.responseXML:"json"==p&&(e=S.test(e)?null:t.parseJSON(e))}catch(r){n=r}n?s(n,"parsererror",b,i,u):a(e,b,i,u)}else s(b.statusText||null,b.status?"error":"abort",b,i,u)}},o(b,i)===!1)return b.abort(),s(null,"abort",b,i,u),b;if(i.xhrFields)for(m in i.xhrFields)b[m]=i.xhrFields[m];var N="async"in i?i.async:!0;b.open(i.type,i.url,N,i.username,i.password);for(m in w)C.apply(b,w[m]);return i.timeout>0&&(g=setTimeout(function(){b.onreadystatechange=c,b.abort(),s(null,"timeout",b,i,u)},i.timeout)),b.send(i.data?i.data:null),b},t.get=function(){return t.ajax(p.apply(null,arguments))},t.post=function(){var e=p.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=p.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,r){if(!this.length)return this;var i,o=this,a=e.split(/\s/),s=p(e,n,r),u=s.success;return a.length>1&&(s.url=a[0],i=a[1]),s.success=function(e){o.html(i?t("<div>").html(e.replace(E,"")).find(i):e),u&&u.apply(o,arguments)},t.ajax(s),this};var C=encodeURIComponent;t.param=function(e,n){var r=[];return r.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(C(e)+"="+C(n))},d(r,e,n),r.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,r=[],i=function(t){return t.forEach?t.forEach(i):void r.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(r,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&i(t(o).val())}),r},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);var touch=touch||{};!function(t,e){"use strict";function n(t){if(P){for(var e=[],n=null,r=0,i=t.touches.length;i>r;r++)n=t.touches[r],e.push({x:n.pageX,y:n.pageY});return e}return[{x:t.pageX,y:t.pageY}]}function r(t,e){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function i(t){return t.touches?t.touches.length:1}function o(t,e){if(t.length>=2&&e.length>=2){var n=r(t[1],t[0]),i=r(e[1],e[0]);return i/n}return 1}function a(t,e){return 180*Math.atan2(e.y-t.y,e.x-t.x)/Math.PI}function s(t,e){var n=Math.atan(-1*(e.y-t.y)/(e.x-t.x))*(180/Math.PI);return 0>n?n+180:n}function u(t){var e={up:-45>t&&t>-135,down:t>=45&&135>t,left:t>=135||-135>=t,right:t>=-45&&45>=t};for(var n in e)if(e[n])return n;return null}function c(t){for(var e=0,n=0;t.offsetParent;)e+=t.offsetLeft,n+=t.offsetTop,t=t.offsetParent;return{left:e,top:n}}function l(){A=_=I=null,W=M=j=D=!1,R=!1,N={},F=!1}function f(t){return"touchmove"===t.type||"mousemove"===t.type}function h(t){return"touchend"===t.type||"mouseup"===t.type||"touchcancel"===t.type}function p(){var e=P?"touchstart touchmove touchend touchcancel":"mouseup mousedown mousemove mouseout";X(t,"DOMContentLoaded",function(){var n=t.body;X(n,e,G)})}var d=function(){var t=window.navigator,e=t.userAgent,n=e.match(/(Android)[\s\/]+([\d\.]+)/),r=e.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/),i=e.match(/(Windows\s+Phone)\s([\d\.]+)/),o=/WebKit\/[\d.]+/i.test(e),a=r?t.standalone?o:/Safari/i.test(e)&&!/CriOS/i.test(e)&&!/MQQBrowser/i.test(e):!1,s={};return n&&(s.android=!0,s.version=n[2]),r&&(s.ios=!0,s.version=r[2].replace(/_/g,"."),s.ios7=/^7/.test(s.version),"iPad"===r[1]?s.ipad=!0:"iPhone"===r[1]?(s.iphone=!0,s.iphone5=568==screen.height):"iPod"===r[1]&&(s.ipod=!0)),i&&(s.wp=!0,s.version=i[2],s.wp8=/^8/.test(s.version)),o&&(s.webkit=!0),a&&(s.safari=!0),s}(),v={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touchcancel:"mouseout"},m={getType:function(t){return Object.prototype.toString.call(t).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},getSelector:function(t){if(t.id)return"#"+t.id;if(t.className){var e=t.className.split(/\s+/);return"."+e.join(".")}return t.tagName.toLowerCase()},matchSelector:function(t,e){return t.webkitMatchesSelector(e)},getEventListeners:function(t){return t.listeners},getPCevts:function(t){return v[t]||t},forceReflow:function(){var t=document.getElementById("domTreeOp");t||(t=document.createElement("div"),t.id="domTreeOp",document.body.appendChild(t));var e=t.parentNode,n=t.nextSibling;e.removeChild(t),e.insertBefore(t,n)},simpleClone:function(t){return JSON.parse(JSON.stringify(t))}},g=0,y=[],E=function(t,e,n){n=n||{};var r,i={bubbles:!0,cancelable:!0,detail:n};"undefined"!=typeof CustomEvent?(r=new CustomEvent(e,i),t&&t.dispatchEvent(r)):(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,!0,!0,n),t&&t.dispatchEvent(r))},w=function(t,e,n){t.listeners=t.listeners||{},t.listeners[e]?t.listeners[e].push(n):t.listeners[e]=[n];var r=function(t){d.ios7&&m.forceReflow(),t.originEvent=t,t.startRotate=function(){F=!0};for(var e in t.detail)"type"!==e&&(t[e]=t.detail[e]);n.call(t.target,t)};n.proxy=n.proxy||{},n.proxy[e]?n.proxy[e].push(g++):n.proxy[e]=[g++],y.push(r),t.addEventListener&&t.addEventListener(e,r,!1)},x=function(t,e,n){if(n){var r=n.proxy[e];r&&r.length&&r.forEach(function(n){t.removeEventListener&&t.removeEventListener(e,y[n],!1)})}else{var i=t.listeners[e];i&&i.length&&i.forEach(function(n){t.removeEventListener(e,n,!1)})}},T=function(t,e,n,r){var i=function(e){var i;e.originEvent=e,e.startRotate=function(){F=!0};for(var o in e.detail)"type"!==o&&(e[o]=e.detail[o]);var a=m.getSelector(t)+" "+n,s=m.matchSelector(e.target,a),u=m.matchSelector(e.target,a+" "+e.target.nodeName);if(!s&&u){for(d.ios7&&m.forceReflow(),i=e.target;!m.matchSelector(i,a);)i=i.parentNode;r.call(i,e)}else d.ios7&&m.forceReflow(),(s||u)&&r.call(e.target,e)};r.proxy=r.proxy||{},r.proxy[e]?r.proxy[e].push(g++):r.proxy[e]=[g++],y.push(i),t.listeners=t.listeners||{},t.listeners[e]?t.listeners[e].push(i):t.listeners[e]=[i],t.addEventListener&&t.addEventListener(e,i,!1)},b=function(t,e,n,r){if(r){var i=r.proxy[e];i.length&&i.forEach(function(n){t.removeEventListener&&t.removeEventListener(e,y[n],!1)})}else{var o=t.listeners[e];o.forEach(function(n){t.removeEventListener(e,n,!1)})}},S={tap:!0,doubleTap:!0,tapMaxDistance:10,hold:!0,holdTime:650,maxDoubleTapInterval:300,swipe:!0,swipeTime:300,swipeMinDistance:18,swipeFactor:5,drag:!0,pinch:!0,minScaleRate:0,minRotationAngle:0},P="ontouchstart"in window,C={TOUCH_START:"touchstart",TOUCH_MOVE:"touchmove",TOUCH_END:"touchend",TOUCH_CANCEL:"touchcancel",MOUSE_DOWN:"mousedown",MOUSE_MOVE:"mousemove",MOUSE_UP:"mouseup",CLICK:"click",PINCH_START:"pinchstart",PINCH_END:"pinchend",PINCH:"pinch",PINCH_IN:"pinchin",PINCH_OUT:"pinchout",ROTATION_LEFT:"rotateleft",ROTATION_RIGHT:"rotateright",ROTATION:"rotate",SWIPE_START:"swipestart",SWIPING:"swiping",SWIPE_END:"swipeend",SWIPE_LEFT:"swipeleft",SWIPE_RIGHT:"swiperight",SWIPE_UP:"swipeup",SWIPE_DOWN:"swipedown",SWIPE:"swipe",DRAG:"drag",DRAGSTART:"dragstart",DRAGEND:"dragend",HOLD:"hold",TAP:"tap",DOUBLE_TAP:"doubletap"},N={start:null,move:null,end:null},O=0,A=null,_=null,I=null,j=!1,D=!1,R=!1,L={},M=!1,H=null,W=!1,k=1,F=!1,Z=[],$=0,U=0,z=0,q=null,B={_getAngleDiff:function(t){for(var e=parseInt($-s(t[0],t[1]),10),n=0;Math.abs(e-U)>90&&n++<50;)0>U?e-=180:e+=180;return U=parseInt(e,10)},pinch:function(t){var e=t.target;if(S.pinch){if(!M)return;if(i(t)<2&&!h(t))return;var n=o(N.start,N.move),r=this._getAngleDiff(N.move),a={type:"",originEvent:t,scale:n,rotation:r,direction:r>0?"right":"left",fingersCount:i(t)};if(D?f(t)?a.fingerStatus="move":h(t)&&(a.fingerStatus="end",E(e,C.PINCH_END,a),l()):(D=!0,a.fingerStatus="start",E(e,C.PINCH_START,a)),E(e,C.PINCH,a),Math.abs(1-n)>S.minScaleRate){var s=m.simpleClone(a),u=1e-11;n>k?(k=n-u,E(e,C.PINCH_OUT,s,!1)):k>n&&(k=n+u,E(e,C.PINCH_IN,s,!1)),h(t)&&(k=1)}if(Math.abs(r)>S.minRotationAngle){var c,p=m.simpleClone(a);c=r>0?C.ROTATION_RIGHT:C.ROTATION_LEFT,E(e,c,p,!1),E(e,C.ROTATION,a)}}},rotateSingleFinger:function(t){var e=t.target;if(F&&i(t)<2){if(!N.move)return;if(Z.length<2){var n=c(e);Z=[{x:n.left+e.offsetWidth/2,y:n.top+e.offsetHeight/2},N.move[0]],$=parseInt(s(Z[0],Z[1]),10)}var r=[Z[0],N.move[0]],o=this._getAngleDiff(r),a={type:"",originEvent:t,rotation:o,direction:o>0?"right":"left",fingersCount:i(t)};f(t)?a.fingerStatus="move":(h(t)||"mouseout"===t.type)&&(a.fingerStatus="end",E(e,C.PINCH_END,a),l());var u=o>0?C.ROTATION_RIGHT:C.ROTATION_LEFT;E(e,u,a),E(e,C.ROTATION,a)}},swipe:function(t){var e=t.target;if(M&&N.move&&!(i(t)>1)){var n=Date.now(),o=n-O,s=r(N.start[0],N.move[0]),c={x:N.move[0].x-L.left,y:N.move[0].y-L.top},l=a(N.start[0],N.move[0]),p=u(l),d=o/1e3,v=10*(10-S.swipeFactor)*d*d,m={type:C.SWIPE,originEvent:t,position:c,direction:p,distance:s,distanceX:N.move[0].x-N.start[0].x,distanceY:N.move[0].y-N.start[0].y,angle:l,duration:o,
fingersCount:i(t),factor:v};if(S.swipe){var g=function(){var t=C;switch(p){case"up":E(e,t.SWIPE_UP,m);break;case"down":E(e,t.SWIPE_DOWN,m);break;case"left":E(e,t.SWIPE_LEFT,m);break;case"right":E(e,t.SWIPE_RIGHT,m)}};j?f(t)?(m.fingerStatus=m.swipe="move",E(e,C.SWIPING,m),o>S.swipeTime&&o<S.swipeTime+50&&s>S.swipeMinDistance&&(g(),E(e,C.SWIPE,m,!1))):(h(t)||"mouseout"===t.type)&&(m.fingerStatus=m.swipe="end",E(e,C.SWIPE_END,m),S.swipeTime>o&&s>S.swipeMinDistance&&(g(),E(e,C.SWIPE,m,!1))):(m.fingerStatus=m.swipe="start",j=!0,E(e,C.SWIPE_START,m))}S.drag&&(R?f(t)?(m.fingerStatus=m.swipe="move",E(e,C.DRAG,m)):h(t)&&(m.fingerStatus=m.swipe="end",E(e,C.DRAGEND,m)):(m.fingerStatus=m.swipe="start",R=!0,E(e,C.DRAGSTART,m)))}},tap:function(t){var e=t.target;if(S.tap){var n=Date.now(),o=n-O,a=r(N.start[0],N.move?N.move[0]:N.start[0]);clearTimeout(H);var s=function(){if(q&&S.doubleTap&&O-z<S.maxDoubleTapInterval){var t=r(q,N.start[0]);if(16>t)return!0}return!1}();if(s)return void E(e,C.DOUBLE_TAP,{type:C.DOUBLE_TAP,originEvent:t,position:N.start[0]});if(S.tapMaxDistance<a)return;S.holdTime>o&&i(t)<=1&&(W=!0,z=n,q=N.start[0],E(e,C.TAP,{type:C.TAP,originEvent:t,fingersCount:i(t),position:N.start[0]}))}},hold:function(t){var e=t.target;S.hold&&(clearTimeout(H),H=setTimeout(function(){if(N.start){var n=r(N.start[0],N.move?N.move[0]:N.start[0]);S.tapMaxDistance<n||W||E(e,"hold",{type:"hold",originEvent:t,fingersCount:i(t),position:N.start[0]})}},S.holdTime))}},G=function(t){var e=t.target;switch(t.type){case"touchstart":case"mousedown":Z=[],M=!0,(!N.start||N.start.length<2)&&(N.start=n(t)),i(t)>=2&&($=parseInt(s(N.start[0],N.start[1]),10)),O=Date.now(),A=t,L={};var r=e.getBoundingClientRect(),o=document.documentElement;L={top:r.top+(window.pageYOffset||o.scrollTop)-(o.clientTop||0),left:r.left+(window.pageXOffset||o.scrollLeft)-(o.clientLeft||0)},B.hold(t);break;case"touchmove":case"mousemove":if(!M||!N.start)return;N.move=n(t),i(t)>=2?B.pinch(t):F?B.rotateSingleFinger(t):B.swipe(t);break;case"touchend":case"touchcancel":case"mouseup":case"mouseout":if(!M)return;I=t,D?B.pinch(t):F?B.rotateSingleFinger(t):j?B.swipe(t):B.tap(t),l(),$=0,U=0,t.touches&&1===t.touches.length&&(M=!0,F=!0)}},X=function(){function e(t){P||(t=m.getPCevts(t)),u.forEach(function(e){T(e,t,a,o[t])})}function n(t){P||(t=m.getPCevts(t)),u.forEach(function(e){w(e,t,o[t])})}var r,i,o,a,s=arguments;if(s.length<2||s>4)return console.error("unexpected arguments!");var u="string"===m.getType(s[0])?t.querySelectorAll(s[0]):s[0];if(u=u.length?Array.prototype.slice.call(u):[u],3===s.length&&"string"===m.getType(s[1]))return r=s[1].split(" "),i=s[2],void r.forEach(function(t){P||(t=m.getPCevts(t)),u.forEach(function(e){w(e,t,i)})});if(3!==s.length||"object"!==m.getType(s[1]))if(2!==s.length||"object"!==m.getType(s[1])){if(4===s.length&&"object"===m.getType(s[2]))return r=s[1].split(" "),i=s[3],void r.forEach(function(t){P||(t=m.getPCevts(t)),u.forEach(function(e){w(e,t,i)})});if(4===s.length){var c=u[0];return r=s[1].split(" "),a=s[2],i=s[3],void r.forEach(function(t){P||(t=m.getPCevts(t)),T(c,t,a,i)})}}else{o=s[1];for(var l in o)n(l)}else{o=s[1],a=s[2];for(var f in o)e(f)}},V=function(){var e,n,r=arguments;if(r.length<1||r.length>4)return console.error("unexpected arguments!");var i="string"===m.getType(r[0])?t.querySelectorAll(r[0]):r[0];if(i=i.length?Array.prototype.slice.call(i):[i],1===r.length||2===r.length)return void i.forEach(function(t){e=r[1]?r[1].split(" "):Object.keys(t.listeners),e.length&&e.forEach(function(e){P||(e=m.getPCevts(e)),x(t,e),b(t,e)})});if(3===r.length&&"function"===m.getType(r[2]))return n=r[2],void i.forEach(function(t){e=r[1].split(" "),e.forEach(function(e){P||(e=m.getPCevts(e)),x(t,e,n)})});if(3===r.length&&"string"===m.getType(r[2])){var o=r[2];return void i.forEach(function(t){e=r[1].split(" "),e.forEach(function(e){P||(e=m.getPCevts(e)),b(t,e,o)})})}return 4===r.length?(n=r[3],void i.forEach(function(t){e=r[1].split(" "),e.forEach(function(e){P||(e=m.getPCevts(e)),b(t,e,o,n)})})):void 0},J=function(e,n,r){var i=arguments;P||(n=m.getPCevts(n));var o="string"===m.getType(i[0])?t.querySelectorAll(i[0]):i[0];o=o.length?Array.prototype.call(o):[o],o.forEach(function(t){E(t,n,r)})};p(),e.on=X,e.off=V,e.bind=X,e.unbind=V,e.live=X,e.die=V,e.config=S,e.trigger=J}(document,touch),function(t,e){function n(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function r(t){return i?i+t:t.toLowerCase()}var i,o,a,s,u,c,l,f,h,p,d="",v={Webkit:"webkit",Moz:"",O:"o"},m=document.createElement("div"),g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,y={};t.each(v,function(t,n){return m.style[t+"TransitionProperty"]!==e?(d="-"+t.toLowerCase()+"-",i=n,!1):void 0}),o=d+"transform",y[a=d+"transition-property"]=y[s=d+"transition-duration"]=y[c=d+"transition-delay"]=y[u=d+"transition-timing-function"]=y[l=d+"animation-name"]=y[f=d+"animation-duration"]=y[p=d+"animation-delay"]=y[h=d+"animation-timing-function"]="",t.fx={off:i===e&&m.style.transitionProperty===e,speeds:{_default:400,fast:200,slow:600},cssPrefix:d,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},t.fn.animate=function(n,r,i,o,a){return t.isFunction(r)&&(o=r,i=e,r=e),t.isFunction(i)&&(o=i,i=e),t.isPlainObject(r)&&(i=r.easing,o=r.complete,a=r.delay,r=r.duration),r&&(r=("number"==typeof r?r:t.fx.speeds[r]||t.fx.speeds._default)/1e3),a&&(a=parseFloat(a)/1e3),this.anim(n,r,i,o,a)},t.fn.anim=function(r,i,d,v,m){var E,w,x,T={},b="",S=this,P=t.fx.transitionEnd,C=!1;if(i===e&&(i=t.fx.speeds._default/1e3),m===e&&(m=0),t.fx.off&&(i=0),"string"==typeof r)T[l]=r,T[f]=i+"s",T[p]=m+"s",T[h]=d||"linear",P=t.fx.animationEnd;else{w=[];for(E in r)g.test(E)?b+=E+"("+r[E]+") ":(T[E]=r[E],w.push(n(E)));b&&(T[o]=b,w.push(o)),i>0&&"object"==typeof r&&(T[a]=w.join(", "),T[s]=i+"s",T[c]=m+"s",T[u]=d||"linear")}return x=function(e){if("undefined"!=typeof e){if(e.target!==e.currentTarget)return;t(e.target).unbind(P,x)}else t(this).unbind(P,x);C=!0,t(this).css(y),v&&v.call(this)},i>0&&(this.bind(P,x),setTimeout(function(){C||x.call(S)},1e3*(i+m)+25)),this.size()&&this.get(0).clientLeft,this.css(T),0>=i&&setTimeout(function(){S.each(function(){x.call(this)})},0),this},m=null}(Zepto);