/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});
jQuery.noConflict();;
/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={};function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r},set:function(e){u(n),r=e}})}function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={},l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)},s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}}return p.apply(this,r)},p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length},"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")},"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e},"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e},"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window},"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e},e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),g.apply(this,arguments)};var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))}),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e})}),s.swap=function(e,t,r,n){var o,i,a={};for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o},e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),s.cssNumber||(s.cssNumber={}),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))};var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={},t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)},s.fx&&(S=s.Tween.prototype.run,M=function(e){return e},s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)},A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A},set:function(e){u(k),A=e}}));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={},t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t},s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)},s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}},s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)},unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)},delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)},undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}});function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}},s.htmlPrefilter=function(e){return P(e),q(e)};var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)});var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)},s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)})}),o=null}).promise()},e&&e.call(i,i),i},s.Deferred.exceptionHook=E.exceptionHook),s});
;
var wpFollowButton;

(function($) {
	var cookies = document.cookie.split( /;\s*/ ), cookie = false;
	for ( i = 0; i < cookies.length; i++ ) {
		if ( cookies[i].match( /^wp_api=/ ) ) {
			cookies = cookies[i].split( '=' );
			cookie = cookies[1];
			break;
		}
	}

wpFollowButton = {

	enable: function() {
		$( 'a.wpcom-follow, a.wpcom-following' ).click( function( e ) {
			e.preventDefault();
		
 	 		var link = $( this );
		
			var blog_id = link.data('id');
			var blog_url = link.data('url');
			var is_following = link.hasClass( 'wpcom-following' );

			if ( blog_id ) {
				var f_id = blog_id;
			} else {
				var ln_classes = link.attr( 'class' ).split( ' ' );
				for ( i=0; i < ln_classes.length; i++ ) {
					if ( 0 == ln_classes[i].indexOf('f-') ) {
						var f_id = ln_classes[i].slice( 2, ln_classes[i].length );
					}
				}
			}

 	 		if ( is_following ) {
				var action = 'ab_unsubscribe_from_blog';
 	 		} else {
				var action = 'ab_subscribe_to_blog';
			}

			f_id = parseInt( f_id, 10 ) || 0;
		
			var elem = $( 'a.f-' + f_id );
			if ( is_following ) {
				elem.fadeOut( 'fast', function() {
					elem.removeClass( 'wpcom-following' ).addClass( 'wpcom-follow' ).text( 'Follow' );
					elem.fadeIn( 'fast' );
 	 			})
			} else {
 	 			elem.fadeOut( 'fast', function() {
 	 				elem.addClass( 'wpcom-following' ).removeClass( 'wpcom-follow' ).text( 'Following' );
 	 				elem.fadeIn( 'fast' );
				})
 	 		}
		
			var href = link.attr( 'href' );
			if ( typeof href == 'undefined' )
				return;
			var params = href.split( '\?' );
			var domain = params[0];
			var flds = 'undefined' != typeof params[1] ? params[1].split( '&' ) : [];
			for ( var i = 0; i < flds.length; i++ ) {
 	 			var pos = flds[i].indexOf( '=' );
 	 			if ( -1 == pos ) continue;
 	 			var argname = flds[i].substring( 0, pos );
 	 			var value = flds[i].substring( pos+1 );
		
				if ( argname == '_wpnonce') {
 	 				var nonce = value; 
				} else if ( argname == 'src' ) {
					var source = value;
 	 			}
			}

			$.post( domain + 'wp-admin/admin-ajax.php', {
 	 			'action': action,
 	 			'_wpnonce': nonce,
 	 			'blog_id': blog_id,
 	 			'blog_url': blog_url,
 	 			'source': source
			}, function( response ) {
 	 			if ( 'object' == typeof response.errors ) {
 	 				if ( is_following )
 	 					elem.removeClass( 'wpcom-follow' ).addClass( 'wpcom-following' ).text( 'Following' );
 	 				else
 	 					elem.removeClass( 'wpcom-following' ).addClass( 'wpcom-follow' ).text( 'Follow' );
 	 			}
 	 		},
			'json' );
		});
	},

	enable_rest: function( el, source ) {
		var t = this;

		el.unbind( 'click' ).bind( 'click', function( e ) {
			e.preventDefault();
 	 		var link = $( this );
			var blog_id = link.attr( 'data-blog-id' );
 	 		var is_following = link.hasClass( 'wpcom-following-rest' );
			var rest_path = '/sites/' + blog_id + '/follows/new';
		
 	 		if ( is_following ) {
				rest_path = '/sites/' + blog_id + '/follows/mine/delete';
 	 		}
			blog_id = parseInt( blog_id, 10 ) || 0;
			//select and update ALL follow buttons on the page (could be more than one)
			var attr_selector = 'data-blog-id="' + blog_id + '"';
			var elem = $( 'a.wpcom-follow-rest[' + attr_selector + '], a.wpcom-following-rest[' + attr_selector + ']' );
			if ( is_following ) {
				elem.fadeOut( 'fast', function() {
					elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
					elem.fadeIn( 'fast' );
 	 			})
			} else {
 	 			elem.fadeOut( 'fast', function() {
 	 				elem.addClass( 'wpcom-following-rest' ).removeClass( 'wpcom-follow-rest' ).text( link.attr( 'data-following-text' ) );
 	 				elem.fadeIn( 'fast' );
				})
 	 		}
		
			t.ajax( {
				type: 'POST',
				path : rest_path,
				success : function( res ) {
					if ( ! res.success ){
						if ( is_following )
							elem.removeClass( 'wpcom-follow-rest' ).addClass( 'wpcom-following-rest' ).text( link.attr( 'data-following-text' ) );
						else
							elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
					}
				},
				error : function( res ) {
					if ( is_following )
						elem.removeClass( 'wpcom-follow-rest' ).addClass( 'wpcom-following-rest' ).text( link.attr( 'data-following-text' ) );
					else
						elem.removeClass( 'wpcom-following-rest' ).addClass( 'wpcom-follow-rest' ).text( link.attr( 'data-follow-text' ) );
				}
			});

			//show post-Follow bubble
			if ( ! is_following ) {
				t.showBubble( link );
				t.bumpStat( link.attr( 'data-stat-src' ) );
			}
		});

		//show unfollow text on hover
		el.hover( function() {
	 	 		var link = $( this );
 		 		var is_following = link.hasClass( 'wpcom-following-rest' );
				if ( is_following )
					link.text( link.attr( 'data-following-hover-text' ) );
			}, function() {
	 	 		var link = $( this );
 		 		var is_following = link.hasClass( 'wpcom-following-rest' );
				if ( is_following )
					link.text( link.attr( 'data-following-text' ) );
			});

	},

	showBubble: function( link ) {
		var pos = link.position();
		var hideBubble = this.hideBubble;
		$( 'div.bubble-txt', 'div.action-bubble' ).html( "New posts from this blog will now appear in <a href='http://wordpress.com/read/following/' onclick='hideBubble()'>your reader</a>." );
		var bubble = $( 'div.action-bubble' );
		link.parent().append( bubble );
		var left = pos.left + ( link.width() / 2 ) - ( $( 'div.wpcom-bubble' ).width() / 2 );
		var top = pos.top + bubble.height();
		bubble.css( { left: left + 'px', top: top + 'px' } );
		bubble.addClass( 'fadein' );
		setTimeout( function() {
			$('body').on( 'click.bubble touchstart.bubble', function(e) {
				if ( !$(e.target).hasClass('action-bubble') && !$(e.target).parents( 'div.action-bubble' ).length )
					hideBubble();
			});
			$(document).on( 'scroll.bubble', hideBubble );
			setTimeout( hideBubble, 10000 );
		}, 500 );
	},

	hideBubble: function() {
		$( 'div.wpcom-bubble.action-bubble' ).remove();
  	},

	//common method for rendering a follow button from the object data
	create : function ( data, source ) {
		var is_following = data['params']['is_following'];
		var follow_link = $('<a></a>', {
			'class' : ( is_following ? 'wpcom-following-rest' : 'wpcom-follow-rest' ),
			href : 'http://public-api.wordpress.com/sites/' + data['params']['site_id'] + '/follows',
			title : data['params']['blog_title'] + 
				' (' + data['params']['blog_domain'] + ')',
			text : is_following ? data['params']['following-text'] : data['params']['follow-text']
		} ).attr( { 
			'data-blog-id' : data['params']['site_id'],
			'data-stat-src' : data['params']['stat-source'],
			'data-follow-text' : data['params']['follow-text'],
			'data-following-text' : data['params']['following-text'],
			'data-following-hover-text' : data['params']['following-hover-text']
		} );
		var follow_button = $( '<div></div>', { 
			'class': 'wpcom-follow-container wpcom-follow-attached',
			style: 'display: inline-block;'
		 } ).append( follow_link );

		this.enable_rest( follow_link, source );
		return follow_button;
	},

	createAll: function() {
		$( '.wpcom-follow-container' ).not( '.wpcom-follow-attached' ).each( function( index ) {
			var el = $( this );
			el.replaceWith( wpFollowButton.create( el.data( 'json' ), el.data( 'follow-source' ) ) );
		});
	},

	ajax: function( options ) {
		if ( document.location.host == 'public-api.wordpress.com' ) {
			//console.log( 'regular ajax call ' + options.type + ' ' + options.path);
			$.ajaxSetup({ beforeSend : function(xhr){
				if ( cookie ) {
					xhr.setRequestHeader( 'Authorization', 'X-WPCOOKIE ' + cookie + ':1:' + document.location.host );
				}
			}});
			var request = {
				type : options.type,
				url : 'https://public-api.wordpress.com/rest/v1' + options.path,
				success : options.success,
				error : options.error,
				data : options.data,
				dataType : 'json'
			};
			$.ajax(request);
			$.ajaxSetup({ beforeSend : null });
		} else {
			//console.log( 'proxied ajax call ' + options.type + ' ' + options.path );
			var request = {
				path: options.path,
				method: options.type
			};
			if ( request.method === "POST" )
				request.body = options.data;
			else
				request.query = options.data;

			$.wpcom_proxy_request(request).done( function ( response, statusCode ) { 
				if ( 200 == statusCode ) 
					options.success( response );
				else
					options.error( statusCode );
			} );
		}
	},

	bumpStat: function( source ) {
		new Image().src = document.location.protocol + 
			'//pixel.wp.com/g.gif?v=wpcom-no-pv&x_follow_source=' + encodeURIComponent( source ) + '&baba=' + Math.random();
	}

};

$(function(){
	wpFollowButton.enable()
	wpFollowButton.createAll()
});

})(jQuery);
;
( function ( g ) {

  var t = {
      PLATFORM_WINDOWS: 'windows',
      PLATFORM_IPHONE: 'iphone',
      PLATFORM_IPOD: 'ipod',
      PLATFORM_IPAD: 'ipad',
      PLATFORM_BLACKBERRY: 'blackberry',
      PLATFORM_BLACKBERRY_10: 'blackberry_10',
      PLATFORM_SYMBIAN: 'symbian_series60',
      PLATFORM_SYMBIAN_S40: 'symbian_series40',
      PLATFORM_J2ME_MIDP: 'j2me_midp',
      PLATFORM_ANDROID: 'android',
      PLATFORM_ANDROID_TABLET: 'android_tablet',
      PLATFORM_FIREFOX_OS: 'firefoxOS',
      PLATFORM_MOBILE_GENERIC: 'mobile_generic',

      userAgent : false, // Shortcut to the browser User Agent String.
      matchedPlatformName : false, // Matched platform name. False otherwise.
      matchedUserAgentName : false, // Matched UA String. False otherwise.

      init: function() {
        try {
          t.userAgent = g.navigator.userAgent.toLowerCase();
          t.getPlatformName();
          t.getMobileUserAgentName();
        }	catch ( e ) {
          console.error( e );
        }
      },

      initForTest: function( userAgent ) {
        t.matchedPlatformName = false;
        t.matchedUserAgentName = false;
        try {
          t.userAgent = userAgent.toLowerCase();
          t.getPlatformName();
          t.getMobileUserAgentName();
        }	catch ( e ) {
          console.error( e );
        }
      },

      /**
       * This method detects the mobile User Agent name.
       */
      getMobileUserAgentName: function() {
        if ( t.matchedUserAgentName !== false )
          return t.matchedUserAgentName;

        if ( t.userAgent === false )
          return false;

        if ( t.isChromeForIOS() )
          t.matchedUserAgentName = 'chrome-for-ios';
        else if ( t.isTwitterForIpad() )
          t.matchedUserAgentName =  'twitter-for-ipad';
        else if ( t.isTwitterForIphone() )
          t.matchedUserAgentName =  'twitter-for-iphone';
        else if ( t.isIPhoneOrIPod() )
          t.matchedUserAgentName = 'iphone';
        else if ( t.isIPad() )
          t.matchedUserAgentName = 'ipad';
        else if ( t.isAndroidTablet() )
          t.matchedUserAgentName = 'android_tablet';
        else if ( t.isAndroid() )
          t.matchedUserAgentName = 'android';
        else if ( t.isBlackberry10() )
          t.matchedUserAgentName = 'blackberry_10';
        else if ( has( 'blackberry' ) )
          t.matchedUserAgentName = 'blackberry';
        else if ( t.isBlackberryTablet() )
          t.matchedUserAgentName = 'blackberry_tablet';
        else if ( t.isWindowsPhone7() )
          t.matchedUserAgentName = 'win7';
        else if ( t.isWindowsPhone8() )
          t.matchedUserAgentName = 'winphone8';
        else if ( t.isOperaMini() )
          t.matchedUserAgentName = 'opera-mini';
        else if ( t.isOperaMobile() )
          t.matchedUserAgentName = 'opera-mobi';
        else if ( t.isKindleFire() )
          t.matchedUserAgentName = 'kindle-fire';
        else if ( t.isSymbianPlatform() )
          t.matchedUserAgentName = 'series60';
        else if ( t.isFirefoxMobile() )
          t.matchedUserAgentName = 'firefox_mobile';
        else if ( t.isFirefoxOS() )
          t.matchedUserAgentName = 'firefoxOS';
        else if ( t.isFacebookForIphone() )
          t.matchedUserAgentName = 'facebook-for-iphone';
        else if ( t.isFacebookForIpad() )
          t.matchedUserAgentName = 'facebook-for-ipad';
        else if ( t.isWordPressForIos() )
          t.matchedUserAgentName = 'ios-app';
        else if ( has( 'iphone' ) )
          t.matchedUserAgentName = 'iphone-unknown';
        else if ( has( 'ipad' ) )
          t.matchedUserAgentName = 'ipad-unknown';

        return t.matchedUserAgentName;
      },

      /**
       * This method detects the mobile platform name.
       */
      getPlatformName : function() {
        if ( t.matchedPlatformName !== false )
          return t.matchedPlatformName;

        if ( t.userAgent === false )
          return false;

        if ( has( 'windows ce' ) || has( 'windows phone' ) ) {
          t.matchedPlatformName = t.PLATFORM_WINDOWS;
        } else if ( has( 'ipad' ) ) {
          t.matchedPlatformName = t.PLATFORM_IPAD;
        } else if ( has( 'ipod' ) ) {
          t.matchedPlatformName = t.PLATFORM_IPOD;
        } else if ( has( 'iphone' ) ) {
          t.matchedPlatformName = t.PLATFORM_IPHONE;
        } else if ( has( 'android' ) ) {
          if ( t.isAndroidTablet() )
            t.matchedPlatformName = t.PLATFORM_ANDROID_TABLET;
          else
            t.matchedPlatformName = t.PLATFORM_ANDROID;
        } else if ( t.isKindleFire() ) {
          t.matchedPlatformName = t.PLATFORM_ANDROID_TABLET;
        } else if ( t.isBlackberry10() ) {
          t.matchedPlatformName = t.PLATFORM_BLACKBERRY_10;
        } else if ( has( 'blackberry' ) ) {
          t.matchedPlatformName = t.PLATFORM_BLACKBERRY;
        } else if ( t.isBlackberryTablet() ) {
          t.matchedPlatformName = t.PLATFORM_BLACKBERRY;
        } else if ( t.isSymbianPlatform() ) {
          t.matchedPlatformName = t.PLATFORM_SYMBIAN;
        } else if ( t.isSymbianS40Platform() ) {
          t.matchedPlatformName = t.PLATFORM_SYMBIAN_S40;
        } else if ( t.isJ2MEPlatform() ) {
          t.matchedPlatformName = t.PLATFORM_J2ME_MIDP;
        } else if ( t.isFirefoxOS() ) {
          t.matchedPlatformName = t.PLATFORM_FIREFOX_OS;
        } else if ( t.isFirefoxMobile() ) {
          t.matchedPlatformName = t.PLATFORM_MOBILE_GENERIC;
        }

        return t.matchedPlatformName;
      },


      /**
       * Detect the BlackBerry OS version.
       *
       * Note: This is for smartphones only. Does not work on BB tablets.
       */
      getBlackBerryOSVersion : check( function() {
        if ( t.isBlackberry10() )
          return '10';

        if ( ! has( 'blackberry' ) )
          return false;

        var rv = -1; // Return value assumes failure.
        var re;

        if ( has( 'webkit' ) ) { // Detecting the BB OS version for devices running OS 6.0 or higher
          re = /Version\/([\d\.]+)/i;
        } else {
          // BlackBerry devices <= 5.XX
          re = /BlackBerry\w+\/([\d\.]+)/i;
        }
        if ( re.exec( t.userAgent ) != null )
          rv =  RegExp.$1.toString();

        return rv === -1 ? false : rv;
      } ),

      /**
       * Detects if the current UA is iPhone Mobile Safari or another iPhone or iPod Touch Browser.
       */
      isIPhoneOrIPod : check( function() {
        return has( 'safari' ) && ( has( 'iphone' ) || has( 'ipod' ) );
      } ),

      /**
       * Detects if the current device is an iPad.
       */
      isIPad : check( function() {
        return has( 'ipad' ) && has( 'safari' );
      } ),


      /**
      *  Detects if the current UA is Chrome for iOS
      */
      isChromeForIOS : check( function() {
        return t.isIPhoneOrIPod() && has( 'crios/' );
      } ),

      /**
       * Detects if the current browser is the Native Android browser.
       */
      isAndroid : check( function() {
        if ( has( 'android' ) ) {
          return ! ( t.isOperaMini() || t.isOperaMobile() || t.isFirefoxMobile() );
        }
      } ),

      /**
       * Detects if the current browser is the Native Android Tablet browser.
       */
       isAndroidTablet : check( function() {
        if ( has( 'android' ) && ! has( 'mobile' ) ) {
          return ! ( t.isOperaMini() || t.isOperaMobile() || t.isFirefoxMobile() );
        }
      } ),


      /**
       * Detects if the current browser is Opera Mobile
       */
      isOperaMobile : check( function() {
        return has( 'opera' ) && has( 'mobi' );
      } ),

      /**
       * Detects if the current browser is Opera Mini
       */
      isOperaMini : check( function() {
        return has( 'opera' ) && has( 'mini' );
      } ),


      /**
       * isBlackberry10() can be used to check the User Agent for a BlackBerry 10 device.
       */
      isBlackberry10 : check( function() {
        return has( 'bb10' ) && has( 'mobile' );
      } ),

      /**
       * isBlackberryTablet() can be used to check the User Agent for a RIM blackberry tablet
       */
      isBlackberryTablet : check( function() {
        return has( 'playbook' ) && has( 'rim tablet' );
      } ),

      /**
       * Detects if the current browser is a Windows Phone 7 device.
       */
      isWindowsPhone7 : check( function () {
        return has( 'windows phone os 7' );
      } ),

      /**
       * Detects if the current browser is a Windows Phone 8 device.
       */
      isWindowsPhone8 : check( function () {
        return has( 'windows phone 8' );
      } ),

      /**
       * Detects if the device platform is J2ME.
       */
      isJ2MEPlatform : check( function () {
        return has( 'j2me/midp' ) || ( has( 'midp' ) && has( 'cldc' ) );
      } ),


      /**
       * Detects if the device platform is the Symbian Series 40.
       */
      isSymbianS40Platform : check( function() {
        if ( has( 'series40' ) ) {
          return has( 'nokia' ) || has( 'ovibrowser' ) || has( 'nokiabrowser' );
        }
      } ),


      /**
       * Detects if the device platform is the Symbian Series 60.
       */
      isSymbianPlatform : check( function() {
        if ( has( 'webkit' ) ) {
          // First, test for WebKit, then make sure it's either Symbian or S60.
          return has( 'symbian' ) || has( 'series60' );
        } else if ( has( 'symbianos' ) && has( 'series60' ) ) {
          return true;
        } else if ( has( 'nokia' ) && has( 'series60' ) ) {
          return true;
        } else if ( has( 'opera mini' ) ) {
          return has( 'symbianos' ) || has( 'symbos' ) || has( 'series 60' );
        }
      } ),


      /**
       * Detects if the current browser is the Kindle Fire Native browser.
       */
      isKindleFire : check( function() {
        return has( 'silk/' ) && has( 'silk-accelerated=' );
      } ),

      /**
       * Detects if the current browser is Firefox Mobile (Fennec)
       */
      isFirefoxMobile : check( function() {
        return has( 'fennec' );
      } ),


      /**
       * Detects if the current browser is the native FirefoxOS browser
       */
      isFirefoxOS : check( function() {
        return has( 'mozilla' ) && has( 'mobile' ) && has( 'gecko' ) && has( 'firefox' );
      } ),


      /**
       * Detects if the current UA is Facebook for iPad
       */
      isFacebookForIpad : check( function() {
        if ( ! has( 'ipad' ) )
          return false;

        return has( 'facebook' ) || has( 'fbforiphone' ) || has( 'fban/fbios;' );
      } ),

      /**
       * Detects if the current UA is Facebook for iPhone
       */
      isFacebookForIphone : check( function() {
        if ( ! has( 'iphone' ) )
          return false;

        return ( has( 'facebook' ) && ! has( 'ipad' ) ) ||
          ( has( 'fbforiphone' ) && ! has( 'tablet' ) ) ||
          ( has( 'fban/fbios;' ) && ! has( 'tablet' ) ); // FB app v5.0 or higher
      } ),

      /**
       * Detects if the current UA is Twitter for iPhone
       */
      isTwitterForIphone : check( function() {
        if ( has( 'ipad' ) )
          return false;

        return has( 'twitter for iphone' );
      } ),

      /**
       * Detects if the current UA is Twitter for iPad
       */
      isTwitterForIpad : check( function() {
        return has( 'twitter for ipad' ) || ( has( 'ipad' ) && has( 'twitter for iphone' ) );
      } ),


      /**
       * Detects if the current UA is WordPress for iOS
       */
      isWordPressForIos : check( function() {
        return has( 'wp-iphone' );
      } )
  };

  function has( str ) {
    return t.userAgent.indexOf( str ) != -1;
  }

  function check( fn ) {
    return function() {
      return t.userAgent === false ? false : fn() || false;
    }
  }

  g.wpcom_mobile_user_agent_info = t;

} )( typeof window !== 'undefined' ? window : this );
;
!function(){function e(e){e.querySelectorAll('[aria-expanded="true"]').forEach((function(e){e.setAttribute("aria-expanded","false")}))}function t(t){const n=t.target.closest("[aria-expanded]");if("true"===n.getAttribute("aria-expanded"))e(n.closest(".wp-block-navigation-item"));else{const t=n.closest(".wp-block-navigation-item");n.closest(".wp-block-navigation__submenu-container, .wp-block-navigation__container, .wp-block-page-list").querySelectorAll(".wp-block-navigation-item").forEach((function(n){n!==t&&e(n)})),n.setAttribute("aria-expanded","true")}}window.addEventListener("load",(()=>{document.querySelectorAll(".wp-block-navigation-submenu__toggle").forEach((function(e){e.addEventListener("click",t)})),document.addEventListener("click",(function(t){document.querySelectorAll(".wp-block-navigation").forEach((function(n){n.contains(t.target)||e(n)}))})),document.addEventListener("keyup",(function(t){document.querySelectorAll(".wp-block-navigation-item.has-child").forEach((function(n){if(n.contains(t.target)){if("Escape"===t.key){const t=n.querySelector('[aria-expanded="true"]');e(n),null==t||t.focus()}}else e(n)}))}))}))}();
//# sourceMappingURL=view.min.js.map;
!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,o){if(e){if("string"==typeof e)return t(e,o);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,o):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var o,n,i,a,r,s=(o=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],n=function(){function t(o){var n=o.targetModal,i=o.triggers,a=void 0===i?[]:i,r=o.onShow,s=void 0===r?function(){}:r,l=o.onClose,c=void 0===l?function(){}:l,d=o.openTrigger,u=void 0===d?"data-micromodal-trigger":d,h=o.closeTrigger,f=void 0===h?"data-micromodal-close":h,v=o.openClass,g=void 0===v?"is-open":v,m=o.disableScroll,b=void 0!==m&&m,y=o.disableFocus,w=void 0!==y&&y,p=o.awaitCloseAnimation,k=void 0!==p&&p,E=o.awaitOpenAnimation,A=void 0!==E&&E,C=o.debugMode,L=void 0!==C&&C;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.modal=document.getElementById(n),this.config={debugMode:L,disableScroll:b,openTrigger:u,closeTrigger:f,openClass:g,onShow:s,onClose:c,awaitCloseAnimation:k,awaitOpenAnimation:A,disableFocus:w},a.length>0&&this.registerTriggers.apply(this,e(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var n;return(n=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation){var o=function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()};this.modal.addEventListener("animationend",o,!1)}else this.setFocusToFirstNode();this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(o);return Array.apply(void 0,e(t))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,n),t}(),i=null,a=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},r=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)a(o);return!0},{init:function(t){var o=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),a=e(document.querySelectorAll("[".concat(o.openTrigger,"]"))),s=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(a,o.openTrigger);if(!0!==o.debugMode||!1!==r(a,s))for(var l in s){var c=s[l];o.targetModal=l,o.triggers=e(c),i=new n(o)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===a(e)||(i&&i.removeEventListeners(),(i=new n(o)).showModal())},close:function(e){e?i.closeModalById(e):i.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=s);var l=s;function c(e){const t=e.querySelector(".wp-block-navigation__responsive-dialog"),o="true"===e.getAttribute("aria-hidden");e.classList.toggle("has-modal-open",!o),t.toggleAttribute("aria-modal",!o),o?(t.removeAttribute("role"),t.removeAttribute("aria-modal")):(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true")),document.documentElement.classList.toggle("has-modal-open")}window.addEventListener("load",(()=>{l.init({onShow:c,onClose:c,openClass:"is-menu-open"}),document.querySelectorAll(".wp-block-navigation-item__content").forEach((function(e){var t,o;if(!(o=e).hash||o.protocol!==window.location.protocol||o.host!==window.location.host||o.pathname!==window.location.pathname||o.search!==window.location.search||"_blank"===(null===(t=e.attributes)||void 0===t?void 0:t.target))return;const n=e.closest(".wp-block-navigation__responsive-container"),i=null==n?void 0:n.getAttribute("id");e.addEventListener("click",(()=>{i&&n.classList.contains("has-modal-open")&&l.close(i)}))}))}))}();
//# sourceMappingURL=view-modal.min.js.map;
// listen for rlt authentication events and pass them to children of this document.
( function() {
	var currentToken;
	var parentOrigin;
	var iframeOrigins;
	var initializationListeners = [];
	var hasBeenInitialized = false;
	var RLT_KEY = 'jetpack:wpcomRLT';

	// IE11 compat version that doesn't require on `new URL( src )`
	function getOriginFromUrl( url ) {
		var parser = document.createElement('a');
		parser.href = url;
		return parser.origin;
	}

	// run on `load` for suitable iframes, this injects the current token if available
	function rltIframeInjector( event ) {
		if ( ! currentToken ) {
			return;
		}
		rltInjectToken( currentToken, event.target.contentWindow, getOriginFromUrl( event.target.src ) );
	}

	// run on DOMContentLoaded or later
	function rltMonitorIframes() {
		// wait until suitable iframes are loaded before trying to inject the RLT
		var iframes = document.querySelectorAll( "iframe" );
		for( var i=0; i<iframes.length; i++ ) {
			var iframe = iframes[i];
			if ( rltShouldAuthorizeIframe( iframe ) ) {
				iframe.addEventListener('load', rltIframeInjector);
			}
		}

		// listen for newly-created iframes, since some are injected dynamically
		var observer = new MutationObserver(function( mutationsList, observer ) {
			for(var i=0; i<mutationsList.length; i++) {
				var mutation = mutationsList[i];
				if (mutation.type === 'childList') {
					for(var j=0; j<mutation.addedNodes.length; j++) {
						var node = mutation.addedNodes[j];
						if (node instanceof HTMLElement && node.nodeName === 'IFRAME' && rltShouldAuthorizeIframe(node)) {
							node.addEventListener('load', rltIframeInjector);
						}
					}
				}
			}
		});

		observer.observe(document.body, { subtree: true, childList: true });
	}

	// should we inject RLT into this iframe?
	function rltShouldAuthorizeIframe( iframe ) {
		if ( ! Array.isArray( iframeOrigins ) ) {
			return;
		}
		return iframeOrigins.indexOf( getOriginFromUrl( iframe.src ) ) >= 0;
	}

	function rltInvalidateWindowToken( token, target, origin ) {
		if ( target && typeof target.postMessage === 'function' ) {
			try {
				target.postMessage( JSON.stringify( {
					type: 'rltMessage',
					data: {
						event: 'invalidate',
						token: token,
						sourceOrigin: window.location.origin,
					},
				} ), origin );
			} catch ( err ) {
				return;
			}
		}
	}

	/**
	 * PUBLIC METHODS
	 */
	window.rltInvalidateToken = function( token, sourceOrigin ) {
		// invalidate in current context
		if ( token === currentToken ) {
			currentToken = null;
		}

		// remove from localstorage, but only if in a top level window, not iframe
		try {
			if ( window.location === window.parent.location && window.localStorage ) {
				if ( window.localStorage.getItem(RLT_KEY) === token ) {
					window.localStorage.removeItem(RLT_KEY);
				}
			}
		} catch( e ) {
			console.info("localstorage access for invalidate denied - probably blocked third-party access", window.location.href);
		}

		// invalidate in iframes
		var iframes = document.querySelectorAll("iframe");
		for( var i=0; i<iframes.length; i++ ) {
			var iframe = iframes[i];
			var iframeOrigin = getOriginFromUrl( iframe.src );
			if ( iframeOrigin !== sourceOrigin && rltShouldAuthorizeIframe( iframe ) ) {
				rltInvalidateWindowToken( token, iframe.contentWindow, iframeOrigin );
			}
		}

		// invalidate in parent
		if ( parentOrigin && parentOrigin !== sourceOrigin && window.parent ) {
			rltInvalidateWindowToken( token, window.parent, parentOrigin );
		}
	}

	window.rltInjectToken = function( token, target, origin ) {
		if ( target && typeof target.postMessage === 'function' ) {
			try {
				target.postMessage( JSON.stringify( {
					type: 'loginMessage',
					data: {
						event: 'login',
						success: true,
						type: 'rlt',
						token: token,
						sourceOrigin: window.location.origin,
					},
				} ), origin );
			} catch ( err ) {
				return;
			}
		}
	};

	window.rltIsAuthenticated = function() {
		return !! currentToken;
	};

	window.rltGetToken = function() {
		return currentToken;
	};

	window.rltAddInitializationListener = function( listener ) {
		// if RLT is already initialized, call the listener immediately
		if ( hasBeenInitialized ) {
			listener( currentToken );
		} else {
			initializationListeners.push( listener );
		}
	};

	// store the token in localStorage
	window.rltStoreToken = function( token ) {
		currentToken = token;
		try {
			if ( window.location === window.parent.location && window.localStorage ) {
				window.localStorage.setItem( RLT_KEY, token );
			}
		} catch( e ) {
			console.info("localstorage access denied - probably blocked third-party access", window.location.href);
		}
	}

	window.rltInitialize = function( config ) {
		if ( ! config || typeof window.postMessage !== 'function' ) {
			return;
		}

		currentToken  = config.token;
		iframeOrigins = config.iframeOrigins;
		parentOrigin  = config.parentOrigin; // needed?

		// load token from localStorage if possible, but only in top level window
		try {
			if ( ! currentToken && window.location === window.parent.location && window.localStorage ) {
				currentToken = window.localStorage.getItem(RLT_KEY);
			}
		} catch( e ) {
			console.info("localstorage access denied - probably blocked third-party access", window.location.href);
		}

		// listen for RLT events from approved origins
		window.addEventListener( 'message', function( e ) {
			var message = e && e.data;
			if ( typeof message === 'string' ) {
				try {
					message = JSON.parse( message );
				} catch ( err ) {
					return;
				}
			}

			var type = message && message.type;
			var data = message && message.data;

			if ( type !== 'loginMessage' ) {
				return;
			}

			if ( data && data.type === 'rlt' && data.token !== currentToken ) {

				// put into localStorage if running in top-level window (not iframe)
				rltStoreToken( data.token );

				// send to allowlisted iframes
				var iframes = document.querySelectorAll("iframe");
				for( var i=0; i<iframes.length; i++ ) {
					var iframe = iframes[i];
					if ( rltShouldAuthorizeIframe( iframe ) ) {
						rltInjectToken( currentToken, iframe.contentWindow, getOriginFromUrl( iframe.src ) );
					}
				}

				// send to the parent, unless the event was sent _by_ the parent
				if ( parentOrigin && parentOrigin !== data.sourceOrigin && window.parent ) {
					rltInjectToken( currentToken, window.parent, parentOrigin );
				}
			}
		} );

		// listen for RLT events from approved origins
		window.addEventListener( 'message', function( e ) {
			var message = e && e.data;
			if ( typeof message === 'string' ) {
				try {
					message = JSON.parse( message );
				} catch ( err ) {
					return;
				}
			}

			var type = message && message.type;
			var data = message && message.data;

			if ( type !== 'rltMessage' ) {
				return;
			}

			if ( data && data.event === 'invalidate' && data.token === currentToken ) {
				rltInvalidateToken( data.token );
			}
		} );

		if ( iframeOrigins ) {
			if ( document.readyState !== 'loading' ) {
				rltMonitorIframes();
			} else {
				window.addEventListener( 'DOMContentLoaded', rltMonitorIframes );
			}
		}

		initializationListeners.forEach( function( listener ) {
			listener( currentToken );
		} );

		initializationListeners = [];

		hasBeenInitialized = true;
	};
} )();
;
//fgnass.github.com/spin.js#v1.3

/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */
(function(root, factory) {

  /* CommonJS */
  if (typeof exports == 'object')  module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Browser global */
  else root.Spinner = factory()
}
(this, function() {
  "use strict";

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl(tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for(n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins(parent /* child1, child2, ...*/) {
    for (var i=1, n=arguments.length; i<n; i++)
      parent.appendChild(arguments[i])

    return parent
  }

  /**
   * Insert a new stylesheet to hold the @keyframe or VML rules.
   */
  var sheet = (function() {
    var el = createEl('style', {type : 'text/css'})
    ins(document.getElementsByTagName('head')[0], el)
    return el.sheet || el.styleSheet
  }())

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation(alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha*100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor(el, prop) {
    var s = el.style
      , pp
      , i

    if(s[prop] !== undefined) return prop
    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    for(i=0; i<prefixes.length; i++) {
      pp = prefixes[i]+prop
      if(s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css(el, prop) {
    for (var n in prop)
      el.style[vendor(el, n)||n] = prop[n]

    return el
  }

  /**
   * Fills in default values.
   */
  function merge(obj) {
    for (var i=1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def)
        if (obj[n] === undefined) obj[n] = def[n]
    }
    return obj
  }

  /**
   * Returns the absolute page-offset of the given element.
   */
  function pos(el) {
    var o = { x:el.offsetLeft, y:el.offsetTop }
    while((el = el.offsetParent))
      o.x+=el.offsetLeft, o.y+=el.offsetTop

    return o
  }

  // Built-in defaults

  var defaults = {
    lines: 12,            // The number of lines to draw
    length: 7,            // The length of each line
    width: 5,             // The line thickness
    radius: 10,           // The radius of the inner circle
    rotate: 0,            // Rotation offset
    corners: 1,           // Roundness (0..1)
    color: '#000',        // #rgb or #rrggbb
    direction: 1,         // 1: clockwise, -1: counterclockwise
    speed: 1,             // Rounds per second
    trail: 100,           // Afterglow percentage
    opacity: 1/4,         // Opacity of the lines
    fps: 20,              // Frames per second when using setTimeout()
    zIndex: 2e9,          // Use a high z-index by default
    className: 'spinner', // CSS class to assign to the element
    top: 'auto',          // center vertically
    left: 'auto',         // center horizontally
    position: 'relative'  // element position
  }

  /** The constructor */
  function Spinner(o) {
    if (typeof this == 'undefined') return new Spinner(o)
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {

    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function(target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = css(createEl(0, {className: o.className}), {position: o.position, width: 0, zIndex: o.zIndex})
        , mid = o.radius+o.length+o.width
        , ep // element position
        , tp // target position

      if (target) {
        target.insertBefore(el, target.firstChild||null)
        tp = pos(target)
        ep = pos(el)
        css(el, {
          left: (o.left == 'auto' ? tp.x-ep.x + (target.offsetWidth >> 1) : parseInt(o.left, 10) + mid) + 'px',
          top: (o.top == 'auto' ? tp.y-ep.y + (target.offsetHeight >> 1) : parseInt(o.top, 10) + mid)  + 'px'
        })
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps/o.speed
          , ostep = (1-o.opacity) / (f*o.trail / 100)
          , astep = f/o.lines

        ;(function anim() {
          i++;
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000/fps))
        })()
      }
      return self
    },

    /**
     * Stops and removes the Spinner.
     */
    stop: function() {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    },

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
    lines: function(el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill(color, shadow) {
        return css(createEl(), {
          position: 'absolute',
          width: (o.length+o.width) + 'px',
          height: o.width + 'px',
          background: color,
          boxShadow: shadow,
          transformOrigin: 'left',
          transform: 'rotate(' + ~~(360/o.lines*i+o.rotate) + 'deg) translate(' + o.radius+'px' +',0)',
          borderRadius: (o.corners * o.width>>1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute',
          top: 1+~(o.width/2) + 'px',
          transform: o.hwaccel ? 'translate3d(0,0,0)' : '',
          opacity: o.opacity,
          animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1/o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px ' + '#000'), {top: 2+'px'}))

        ins(el, ins(seg, fill(o.color, '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    },

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
    opacity: function(el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML() {

    /* Utility function to create a VML tag */
    function vml(tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function(el, o) {
      var r = o.length+o.width
        , s = 2*r

      function grp() {
        return css(
          vml('group', {
            coordsize: s + ' ' + s,
            coordorigin: -r + ' ' + -r
          }),
          { width: s, height: s }
        )
      }

      var margin = -(o.width+o.length)*2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg(i, dx, filter) {
        ins(g,
          ins(css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx}),
            ins(css(vml('roundrect', {arcsize: o.corners}), {
                width: r,
                height: o.width,
                left: o.radius,
                top: -o.width>>1,
                filter: filter
              }),
              vml('fill', {color: o.color, opacity: o.opacity}),
              vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++)
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function(el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i+o < c.childNodes.length) {
        c = c.childNodes[i+o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

  if (!vendor(probe, 'transform') && probe.adj) initVML()
  else useCssAnimations = vendor(probe, 'animation')

  return Spinner

}));
;
/**
 * Copyright (c) 2011-2013 Felix Gnass
 * Licensed under the MIT license
 */

/*

Basic Usage:
============

$('#el').spin(); // Creates a default Spinner using the text color of #el.
$('#el').spin({ ... }); // Creates a Spinner using the provided options.

$('#el').spin(false); // Stops and removes the spinner.

Using Presets:
==============

$('#el').spin('small'); // Creates a 'small' Spinner using the text color of #el.
$('#el').spin('large', '#fff'); // Creates a 'large' white Spinner.

Adding a custom preset:
=======================

$.fn.spin.presets.flower = {
  lines: 9
  length: 10
  width: 20
  radius: 0
}

$('#el').spin('flower', 'red');

*/

(function(factory) {

  if (typeof exports == 'object') {
    // CommonJS
    factory(require('jquery'), require('spin'))
  }
  else if (typeof define == 'function' && define.amd) {
    // AMD, register as anonymous module
    define(['jquery', 'spin'], factory)
  }
  else {
    // Browser globals
    if (!window.Spinner) throw new Error('Spin.js not present')
    factory(window.jQuery, window.Spinner)
  }

}(function($, Spinner) {

  $.fn.spin = function(opts, color) {

    return this.each(function() {
      var $this = $(this),
        data = $this.data();

      if (data.spinner) {
        data.spinner.stop();
        delete data.spinner;
      }
      if (opts !== false) {
        opts = $.extend(
          { color: color || $this.css('color') },
          $.fn.spin.presets[opts] || opts
        )
        // Begin WordPress Additions
        // To use opts.right, you need to have specified a length, width, and radius.
        if ( typeof opts.right !== 'undefined' && typeof opts.length !== 'undefined'
          && typeof opts.width !== 'undefined' && typeof opts.radius !== 'undefined' ) {
          var pad = $this.css( 'padding-left' );
          pad = ( typeof pad === 'undefined' ) ? 0 : parseInt( pad, 10 );
          opts.left = $this.outerWidth() - ( 2 * ( opts.length + opts.width + opts.radius ) ) - pad - opts.right;
          delete opts.right;
        }
        // End WordPress Additions
        data.spinner = new Spinner(opts).spin(this)
      }
    })
  }

  $.fn.spin.presets = {
    tiny: { lines: 8, length: 2, width: 2, radius: 3 },
    small: { lines: 8, length: 4, width: 3, radius: 5 },
    large: { lines: 10, length: 8, width: 4, radius: 8 }
  }

}));

// Jetpack Presets Overrides:
(function($){
	$.fn.spin.presets.wp = { trail: 60, speed: 1.3 };
	$.fn.spin.presets.small  = $.extend( { lines:  8, length: 2, width: 2, radius: 3 }, $.fn.spin.presets.wp );
	$.fn.spin.presets.medium = $.extend( { lines:  8, length: 4, width: 3, radius: 5 }, $.fn.spin.presets.wp );
	$.fn.spin.presets.large  = $.extend( { lines: 10, length: 6, width: 4, radius: 7 }, $.fn.spin.presets.wp );
	$.fn.spin.presets['small-left']   = $.extend( { left:  5 }, $.fn.spin.presets.small );
	$.fn.spin.presets['small-right']  = $.extend( { right: 5 }, $.fn.spin.presets.small );
	$.fn.spin.presets['medium-left']  = $.extend( { left:  5 }, $.fn.spin.presets.medium );
	$.fn.spin.presets['medium-right'] = $.extend( { right: 5 }, $.fn.spin.presets.medium );
	$.fn.spin.presets['large-left']   = $.extend( { left:  5 }, $.fn.spin.presets.large );
	$.fn.spin.presets['large-right']  = $.extend( { right: 5 }, $.fn.spin.presets.large );
})(jQuery);
;
/*! This file is auto-generated */
!function(n,r){var t,e;"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define("underscore",r):(n="undefined"!=typeof globalThis?globalThis:n||self,t=n._,(e=n._=r()).noConflict=function(){return n._=t,e})}(this,function(){var n="1.13.6",r="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||Function("return this")()||{},e=Array.prototype,F=Object.prototype,V="undefined"!=typeof Symbol?Symbol.prototype:null,P=e.push,f=e.slice,s=F.toString,q=F.hasOwnProperty,t="undefined"!=typeof ArrayBuffer,u="undefined"!=typeof DataView,U=Array.isArray,W=Object.keys,z=Object.create,L=t&&ArrayBuffer.isView,$=isNaN,C=isFinite,K=!{toString:null}.propertyIsEnumerable("toString"),J=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],G=Math.pow(2,53)-1;function l(u,o){return o=null==o?u.length-1:+o,function(){for(var n=Math.max(arguments.length-o,0),r=Array(n),t=0;t<n;t++)r[t]=arguments[t+o];switch(o){case 0:return u.call(this,r);case 1:return u.call(this,arguments[0],r);case 2:return u.call(this,arguments[0],arguments[1],r)}for(var e=Array(o+1),t=0;t<o;t++)e[t]=arguments[t];return e[o]=r,u.apply(this,e)}}function o(n){var r=typeof n;return"function"==r||"object"==r&&!!n}function H(n){return void 0===n}function Q(n){return!0===n||!1===n||"[object Boolean]"===s.call(n)}function i(n){var r="[object "+n+"]";return function(n){return s.call(n)===r}}var X=i("String"),Y=i("Number"),Z=i("Date"),nn=i("RegExp"),rn=i("Error"),tn=i("Symbol"),en=i("ArrayBuffer"),a=i("Function"),r=r.document&&r.document.childNodes,p=a="function"!=typeof/./&&"object"!=typeof Int8Array&&"function"!=typeof r?function(n){return"function"==typeof n||!1}:a,r=i("Object"),un=u&&r(new DataView(new ArrayBuffer(8))),a="undefined"!=typeof Map&&r(new Map),u=i("DataView");var h=un?function(n){return null!=n&&p(n.getInt8)&&en(n.buffer)}:u,v=U||i("Array");function y(n,r){return null!=n&&q.call(n,r)}var on=i("Arguments"),an=(!function(){on(arguments)||(on=function(n){return y(n,"callee")})}(),on);function fn(n){return Y(n)&&$(n)}function cn(n){return function(){return n}}function ln(r){return function(n){n=r(n);return"number"==typeof n&&0<=n&&n<=G}}function sn(r){return function(n){return null==n?void 0:n[r]}}var d=sn("byteLength"),pn=ln(d),hn=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;var vn=t?function(n){return L?L(n)&&!h(n):pn(n)&&hn.test(s.call(n))}:cn(!1),g=sn("length");function yn(n,r){r=function(r){for(var t={},n=r.length,e=0;e<n;++e)t[r[e]]=!0;return{contains:function(n){return!0===t[n]},push:function(n){return t[n]=!0,r.push(n)}}}(r);var t=J.length,e=n.constructor,u=p(e)&&e.prototype||F,o="constructor";for(y(n,o)&&!r.contains(o)&&r.push(o);t--;)(o=J[t])in n&&n[o]!==u[o]&&!r.contains(o)&&r.push(o)}function b(n){if(!o(n))return[];if(W)return W(n);var r,t=[];for(r in n)y(n,r)&&t.push(r);return K&&yn(n,t),t}function dn(n,r){var t=b(r),e=t.length;if(null==n)return!e;for(var u=Object(n),o=0;o<e;o++){var i=t[o];if(r[i]!==u[i]||!(i in u))return!1}return!0}function m(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)}function gn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,d(n))}m.VERSION=n,m.prototype.valueOf=m.prototype.toJSON=m.prototype.value=function(){return this._wrapped},m.prototype.toString=function(){return String(this._wrapped)};var bn="[object DataView]";function mn(n,r,t,e){var u;return n===r?0!==n||1/n==1/r:null!=n&&null!=r&&(n!=n?r!=r:("function"==(u=typeof n)||"object"==u||"object"==typeof r)&&function n(r,t,e,u){r instanceof m&&(r=r._wrapped);t instanceof m&&(t=t._wrapped);var o=s.call(r);if(o!==s.call(t))return!1;if(un&&"[object Object]"==o&&h(r)){if(!h(t))return!1;o=bn}switch(o){case"[object RegExp]":case"[object String]":return""+r==""+t;case"[object Number]":return+r!=+r?+t!=+t:0==+r?1/+r==1/t:+r==+t;case"[object Date]":case"[object Boolean]":return+r==+t;case"[object Symbol]":return V.valueOf.call(r)===V.valueOf.call(t);case"[object ArrayBuffer]":case bn:return n(gn(r),gn(t),e,u)}o="[object Array]"===o;if(!o&&vn(r)){var i=d(r);if(i!==d(t))return!1;if(r.buffer===t.buffer&&r.byteOffset===t.byteOffset)return!0;o=!0}if(!o){if("object"!=typeof r||"object"!=typeof t)return!1;var i=r.constructor,a=t.constructor;if(i!==a&&!(p(i)&&i instanceof i&&p(a)&&a instanceof a)&&"constructor"in r&&"constructor"in t)return!1}e=e||[];u=u||[];var f=e.length;for(;f--;)if(e[f]===r)return u[f]===t;e.push(r);u.push(t);if(o){if((f=r.length)!==t.length)return!1;for(;f--;)if(!mn(r[f],t[f],e,u))return!1}else{var c,l=b(r);if(f=l.length,b(t).length!==f)return!1;for(;f--;)if(c=l[f],!y(t,c)||!mn(r[c],t[c],e,u))return!1}e.pop();u.pop();return!0}(n,r,t,e))}function c(n){if(!o(n))return[];var r,t=[];for(r in n)t.push(r);return K&&yn(n,t),t}function jn(e){var u=g(e);return function(n){if(null==n)return!1;var r=c(n);if(g(r))return!1;for(var t=0;t<u;t++)if(!p(n[e[t]]))return!1;return e!==wn||!p(n[_n])}}var _n="forEach",r=["clear","delete"],u=["get","has","set"],U=r.concat(_n,u),wn=r.concat(u),t=["add"].concat(r,_n,"has"),u=a?jn(U):i("Map"),r=a?jn(wn):i("WeakMap"),U=a?jn(t):i("Set"),a=i("WeakSet");function j(n){for(var r=b(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=n[r[u]];return e}function An(n){for(var r={},t=b(n),e=0,u=t.length;e<u;e++)r[n[t[e]]]=t[e];return r}function xn(n){var r,t=[];for(r in n)p(n[r])&&t.push(r);return t.sort()}function Sn(f,c){return function(n){var r=arguments.length;if(c&&(n=Object(n)),!(r<2||null==n))for(var t=1;t<r;t++)for(var e=arguments[t],u=f(e),o=u.length,i=0;i<o;i++){var a=u[i];c&&void 0!==n[a]||(n[a]=e[a])}return n}}var On=Sn(c),_=Sn(b),Mn=Sn(c,!0);function En(n){var r;return o(n)?z?z(n):((r=function(){}).prototype=n,n=new r,r.prototype=null,n):{}}function Bn(n){return v(n)?n:[n]}function w(n){return m.toPath(n)}function Nn(n,r){for(var t=r.length,e=0;e<t;e++){if(null==n)return;n=n[r[e]]}return t?n:void 0}function In(n,r,t){n=Nn(n,w(r));return H(n)?t:n}function Tn(n){return n}function A(r){return r=_({},r),function(n){return dn(n,r)}}function kn(r){return r=w(r),function(n){return Nn(n,r)}}function x(u,o,n){if(void 0===o)return u;switch(null==n?3:n){case 1:return function(n){return u.call(o,n)};case 3:return function(n,r,t){return u.call(o,n,r,t)};case 4:return function(n,r,t,e){return u.call(o,n,r,t,e)}}return function(){return u.apply(o,arguments)}}function Dn(n,r,t){return null==n?Tn:p(n)?x(n,r,t):(o(n)&&!v(n)?A:kn)(n)}function Rn(n,r){return Dn(n,r,1/0)}function S(n,r,t){return m.iteratee!==Rn?m.iteratee(n,r):Dn(n,r,t)}function Fn(){}function Vn(n,r){return null==r&&(r=n,n=0),n+Math.floor(Math.random()*(r-n+1))}m.toPath=Bn,m.iteratee=Rn;var O=Date.now||function(){return(new Date).getTime()};function Pn(r){function t(n){return r[n]}var n="(?:"+b(r).join("|")+")",e=RegExp(n),u=RegExp(n,"g");return function(n){return e.test(n=null==n?"":""+n)?n.replace(u,t):n}}var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},qn=Pn(t),t=Pn(An(t)),Un=m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g},Wn=/(.)^/,zn={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},Ln=/\\|'|\r|\n|\u2028|\u2029/g;function $n(n){return"\\"+zn[n]}var Cn=/^\s*(\w|\$)+\s*$/;var Kn=0;function Jn(n,r,t,e,u){return e instanceof r?(e=En(n.prototype),o(r=n.apply(e,u))?r:e):n.apply(t,u)}var M=l(function(u,o){function i(){for(var n=0,r=o.length,t=Array(r),e=0;e<r;e++)t[e]=o[e]===a?arguments[n++]:o[e];for(;n<arguments.length;)t.push(arguments[n++]);return Jn(u,i,this,this,t)}var a=M.placeholder;return i}),Gn=(M.placeholder=m,l(function(r,t,e){var u;if(p(r))return u=l(function(n){return Jn(r,u,t,this,e.concat(n))});throw new TypeError("Bind must be called on a function")})),E=ln(g);function B(n,r,t,e){if(e=e||[],r||0===r){if(r<=0)return e.concat(n)}else r=1/0;for(var u=e.length,o=0,i=g(n);o<i;o++){var a=n[o];if(E(a)&&(v(a)||an(a)))if(1<r)B(a,r-1,t,e),u=e.length;else for(var f=0,c=a.length;f<c;)e[u++]=a[f++];else t||(e[u++]=a)}return e}var Hn=l(function(n,r){var t=(r=B(r,!1,!1)).length;if(t<1)throw new Error("bindAll must be passed function names");for(;t--;){var e=r[t];n[e]=Gn(n[e],n)}return n});var Qn=l(function(n,r,t){return setTimeout(function(){return n.apply(null,t)},r)}),Xn=M(Qn,m,1);function Yn(n){return function(){return!n.apply(this,arguments)}}function Zn(n,r){var t;return function(){return 0<--n&&(t=r.apply(this,arguments)),n<=1&&(r=null),t}}var nr=M(Zn,2);function rr(n,r,t){r=S(r,t);for(var e,u=b(n),o=0,i=u.length;o<i;o++)if(r(n[e=u[o]],e,n))return e}function tr(o){return function(n,r,t){r=S(r,t);for(var e=g(n),u=0<o?0:e-1;0<=u&&u<e;u+=o)if(r(n[u],u,n))return u;return-1}}var er=tr(1),ur=tr(-1);function or(n,r,t,e){for(var u=(t=S(t,e,1))(r),o=0,i=g(n);o<i;){var a=Math.floor((o+i)/2);t(n[a])<u?o=a+1:i=a}return o}function ir(o,i,a){return function(n,r,t){var e=0,u=g(n);if("number"==typeof t)0<o?e=0<=t?t:Math.max(t+u,e):u=0<=t?Math.min(t+1,u):t+u+1;else if(a&&t&&u)return n[t=a(n,r)]===r?t:-1;if(r!=r)return 0<=(t=i(f.call(n,e,u),fn))?t+e:-1;for(t=0<o?e:u-1;0<=t&&t<u;t+=o)if(n[t]===r)return t;return-1}}var ar=ir(1,er,or),fr=ir(-1,ur);function cr(n,r,t){r=(E(n)?er:rr)(n,r,t);if(void 0!==r&&-1!==r)return n[r]}function N(n,r,t){if(r=x(r,t),E(n))for(u=0,o=n.length;u<o;u++)r(n[u],u,n);else for(var e=b(n),u=0,o=e.length;u<o;u++)r(n[e[u]],e[u],n);return n}function I(n,r,t){r=S(r,t);for(var e=!E(n)&&b(n),u=(e||n).length,o=Array(u),i=0;i<u;i++){var a=e?e[i]:i;o[i]=r(n[a],a,n)}return o}function lr(p){return function(n,r,t,e){var u=3<=arguments.length,o=n,i=x(r,e,4),a=t,f=!E(o)&&b(o),c=(f||o).length,l=0<p?0:c-1;for(u||(a=o[f?f[l]:l],l+=p);0<=l&&l<c;l+=p){var s=f?f[l]:l;a=i(a,o[s],s,o)}return a}}var sr=lr(1),pr=lr(-1);function T(n,e,r){var u=[];return e=S(e,r),N(n,function(n,r,t){e(n,r,t)&&u.push(n)}),u}function hr(n,r,t){r=S(r,t);for(var e=!E(n)&&b(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(!r(n[i],i,n))return!1}return!0}function vr(n,r,t){r=S(r,t);for(var e=!E(n)&&b(n),u=(e||n).length,o=0;o<u;o++){var i=e?e[o]:o;if(r(n[i],i,n))return!0}return!1}function k(n,r,t,e){return E(n)||(n=j(n)),0<=ar(n,r,t="number"==typeof t&&!e?t:0)}var yr=l(function(n,t,e){var u,o;return p(t)?o=t:(t=w(t),u=t.slice(0,-1),t=t[t.length-1]),I(n,function(n){var r=o;if(!r){if(null==(n=u&&u.length?Nn(n,u):n))return;r=n[t]}return null==r?r:r.apply(n,e)})});function dr(n,r){return I(n,kn(r))}function gr(n,e,r){var t,u,o=-1/0,i=-1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(t=n[a])&&o<t&&(o=t);else e=S(e,r),N(n,function(n,r,t){u=e(n,r,t),(i<u||u===-1/0&&o===-1/0)&&(o=n,i=u)});return o}var br=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function mr(n){return n?v(n)?f.call(n):X(n)?n.match(br):E(n)?I(n,Tn):j(n):[]}function jr(n,r,t){if(null==r||t)return(n=E(n)?n:j(n))[Vn(n.length-1)];for(var e=mr(n),t=g(e),u=(r=Math.max(Math.min(r,t),0),t-1),o=0;o<r;o++){var i=Vn(o,u),a=e[o];e[o]=e[i],e[i]=a}return e.slice(0,r)}function D(o,r){return function(t,e,n){var u=r?[[],[]]:{};return e=S(e,n),N(t,function(n,r){r=e(n,r,t);o(u,n,r)}),u}}var _r=D(function(n,r,t){y(n,t)?n[t].push(r):n[t]=[r]}),wr=D(function(n,r,t){n[t]=r}),Ar=D(function(n,r,t){y(n,t)?n[t]++:n[t]=1}),xr=D(function(n,r,t){n[t?0:1].push(r)},!0);function Sr(n,r,t){return r in t}var Or=l(function(n,r){var t={},e=r[0];if(null!=n){p(e)?(1<r.length&&(e=x(e,r[1])),r=c(n)):(e=Sr,r=B(r,!1,!1),n=Object(n));for(var u=0,o=r.length;u<o;u++){var i=r[u],a=n[i];e(a,i,n)&&(t[i]=a)}}return t}),Mr=l(function(n,t){var r,e=t[0];return p(e)?(e=Yn(e),1<t.length&&(r=t[1])):(t=I(B(t,!1,!1),String),e=function(n,r){return!k(t,r)}),Or(n,e,r)});function Er(n,r,t){return f.call(n,0,Math.max(0,n.length-(null==r||t?1:r)))}function Br(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[0]:Er(n,n.length-r)}function R(n,r,t){return f.call(n,null==r||t?1:r)}var Nr=l(function(n,r){return r=B(r,!0,!0),T(n,function(n){return!k(r,n)})}),Ir=l(function(n,r){return Nr(n,r)});function Tr(n,r,t,e){Q(r)||(e=t,t=r,r=!1),null!=t&&(t=S(t,e));for(var u=[],o=[],i=0,a=g(n);i<a;i++){var f=n[i],c=t?t(f,i,n):f;r&&!t?(i&&o===c||u.push(f),o=c):t?k(o,c)||(o.push(c),u.push(f)):k(u,f)||u.push(f)}return u}var kr=l(function(n){return Tr(B(n,!0,!0))});function Dr(n){for(var r=n&&gr(n,g).length||0,t=Array(r),e=0;e<r;e++)t[e]=dr(n,e);return t}var Rr=l(Dr);function Fr(n,r){return n._chain?m(r).chain():r}function Vr(t){return N(xn(t),function(n){var r=m[n]=t[n];m.prototype[n]=function(){var n=[this._wrapped];return P.apply(n,arguments),Fr(this,r.apply(m,n))}}),m}N(["pop","push","reverse","shift","sort","splice","unshift"],function(r){var t=e[r];m.prototype[r]=function(){var n=this._wrapped;return null!=n&&(t.apply(n,arguments),"shift"!==r&&"splice"!==r||0!==n.length||delete n[0]),Fr(this,n)}}),N(["concat","join","slice"],function(n){var r=e[n];m.prototype[n]=function(){var n=this._wrapped;return Fr(this,n=null!=n?r.apply(n,arguments):n)}});n=Vr({__proto__:null,VERSION:n,restArguments:l,isObject:o,isNull:function(n){return null===n},isUndefined:H,isBoolean:Q,isElement:function(n){return!(!n||1!==n.nodeType)},isString:X,isNumber:Y,isDate:Z,isRegExp:nn,isError:rn,isSymbol:tn,isArrayBuffer:en,isDataView:h,isArray:v,isFunction:p,isArguments:an,isFinite:function(n){return!tn(n)&&C(n)&&!isNaN(parseFloat(n))},isNaN:fn,isTypedArray:vn,isEmpty:function(n){var r;return null==n||("number"==typeof(r=g(n))&&(v(n)||X(n)||an(n))?0===r:0===g(b(n)))},isMatch:dn,isEqual:function(n,r){return mn(n,r)},isMap:u,isWeakMap:r,isSet:U,isWeakSet:a,keys:b,allKeys:c,values:j,pairs:function(n){for(var r=b(n),t=r.length,e=Array(t),u=0;u<t;u++)e[u]=[r[u],n[r[u]]];return e},invert:An,functions:xn,methods:xn,extend:On,extendOwn:_,assign:_,defaults:Mn,create:function(n,r){return n=En(n),r&&_(n,r),n},clone:function(n){return o(n)?v(n)?n.slice():On({},n):n},tap:function(n,r){return r(n),n},get:In,has:function(n,r){for(var t=(r=w(r)).length,e=0;e<t;e++){var u=r[e];if(!y(n,u))return!1;n=n[u]}return!!t},mapObject:function(n,r,t){r=S(r,t);for(var e=b(n),u=e.length,o={},i=0;i<u;i++){var a=e[i];o[a]=r(n[a],a,n)}return o},identity:Tn,constant:cn,noop:Fn,toPath:Bn,property:kn,propertyOf:function(r){return null==r?Fn:function(n){return In(r,n)}},matcher:A,matches:A,times:function(n,r,t){var e=Array(Math.max(0,n));r=x(r,t,1);for(var u=0;u<n;u++)e[u]=r(u);return e},random:Vn,now:O,escape:qn,unescape:t,templateSettings:Un,template:function(o,n,r){n=Mn({},n=!n&&r?r:n,m.templateSettings);var t,r=RegExp([(n.escape||Wn).source,(n.interpolate||Wn).source,(n.evaluate||Wn).source].join("|")+"|$","g"),i=0,a="__p+='";if(o.replace(r,function(n,r,t,e,u){return a+=o.slice(i,u).replace(Ln,$n),i=u+n.length,r?a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":t?a+="'+\n((__t=("+t+"))==null?'':__t)+\n'":e&&(a+="';\n"+e+"\n__p+='"),n}),a+="';\n",r=n.variable){if(!Cn.test(r))throw new Error("variable is not a bare identifier: "+r)}else a="with(obj||{}){\n"+a+"}\n",r="obj";a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{t=new Function(r,"_",a)}catch(n){throw n.source=a,n}function e(n){return t.call(this,n,m)}return e.source="function("+r+"){\n"+a+"}",e},result:function(n,r,t){var e=(r=w(r)).length;if(!e)return p(t)?t.call(n):t;for(var u=0;u<e;u++){var o=null==n?void 0:n[r[u]];void 0===o&&(o=t,u=e),n=p(o)?o.call(n):o}return n},uniqueId:function(n){var r=++Kn+"";return n?n+r:r},chain:function(n){return(n=m(n))._chain=!0,n},iteratee:Rn,partial:M,bind:Gn,bindAll:Hn,memoize:function(e,u){function o(n){var r=o.cache,t=""+(u?u.apply(this,arguments):n);return y(r,t)||(r[t]=e.apply(this,arguments)),r[t]}return o.cache={},o},delay:Qn,defer:Xn,throttle:function(t,e,u){function o(){l=!1===u.leading?0:O(),i=null,c=t.apply(a,f),i||(a=f=null)}function n(){var n=O(),r=(l||!1!==u.leading||(l=n),e-(n-l));return a=this,f=arguments,r<=0||e<r?(i&&(clearTimeout(i),i=null),l=n,c=t.apply(a,f),i||(a=f=null)):i||!1===u.trailing||(i=setTimeout(o,r)),c}var i,a,f,c,l=0;return u=u||{},n.cancel=function(){clearTimeout(i),l=0,i=a=f=null},n},debounce:function(r,t,e){function u(){var n=O()-i;n<t?o=setTimeout(u,t-n):(o=null,e||(f=r.apply(c,a)),o||(a=c=null))}var o,i,a,f,c,n=l(function(n){return c=this,a=n,i=O(),o||(o=setTimeout(u,t),e&&(f=r.apply(c,a))),f});return n.cancel=function(){clearTimeout(o),o=a=c=null},n},wrap:function(n,r){return M(r,n)},negate:Yn,compose:function(){var t=arguments,e=t.length-1;return function(){for(var n=e,r=t[e].apply(this,arguments);n--;)r=t[n].call(this,r);return r}},after:function(n,r){return function(){if(--n<1)return r.apply(this,arguments)}},before:Zn,once:nr,findKey:rr,findIndex:er,findLastIndex:ur,sortedIndex:or,indexOf:ar,lastIndexOf:fr,find:cr,detect:cr,findWhere:function(n,r){return cr(n,A(r))},each:N,forEach:N,map:I,collect:I,reduce:sr,foldl:sr,inject:sr,reduceRight:pr,foldr:pr,filter:T,select:T,reject:function(n,r,t){return T(n,Yn(S(r)),t)},every:hr,all:hr,some:vr,any:vr,contains:k,includes:k,include:k,invoke:yr,pluck:dr,where:function(n,r){return T(n,A(r))},max:gr,min:function(n,e,r){var t,u,o=1/0,i=1/0;if(null==e||"number"==typeof e&&"object"!=typeof n[0]&&null!=n)for(var a=0,f=(n=E(n)?n:j(n)).length;a<f;a++)null!=(t=n[a])&&t<o&&(o=t);else e=S(e,r),N(n,function(n,r,t){((u=e(n,r,t))<i||u===1/0&&o===1/0)&&(o=n,i=u)});return o},shuffle:function(n){return jr(n,1/0)},sample:jr,sortBy:function(n,e,r){var u=0;return e=S(e,r),dr(I(n,function(n,r,t){return{value:n,index:u++,criteria:e(n,r,t)}}).sort(function(n,r){var t=n.criteria,e=r.criteria;if(t!==e){if(e<t||void 0===t)return 1;if(t<e||void 0===e)return-1}return n.index-r.index}),"value")},groupBy:_r,indexBy:wr,countBy:Ar,partition:xr,toArray:mr,size:function(n){return null==n?0:(E(n)?n:b(n)).length},pick:Or,omit:Mr,first:Br,head:Br,take:Br,initial:Er,last:function(n,r,t){return null==n||n.length<1?null==r||t?void 0:[]:null==r||t?n[n.length-1]:R(n,Math.max(0,n.length-r))},rest:R,tail:R,drop:R,compact:function(n){return T(n,Boolean)},flatten:function(n,r){return B(n,r,!1)},without:Ir,uniq:Tr,unique:Tr,union:kr,intersection:function(n){for(var r=[],t=arguments.length,e=0,u=g(n);e<u;e++){var o=n[e];if(!k(r,o)){for(var i=1;i<t&&k(arguments[i],o);i++);i===t&&r.push(o)}}return r},difference:Nr,unzip:Dr,transpose:Dr,zip:Rr,object:function(n,r){for(var t={},e=0,u=g(n);e<u;e++)r?t[n[e]]=r[e]:t[n[e][0]]=n[e][1];return t},range:function(n,r,t){null==r&&(r=n||0,n=0),t=t||(r<n?-1:1);for(var e=Math.max(Math.ceil((r-n)/t),0),u=Array(e),o=0;o<e;o++,n+=t)u[o]=n;return u},chunk:function(n,r){if(null==r||r<1)return[];for(var t=[],e=0,u=n.length;e<u;)t.push(f.call(n,e,e+=r));return t},mixin:Vr,default:m});return n._=n});;
/*! This file is auto-generated */
!function(n){var s="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(t,e,i){s.Backbone=n(s,i,t,e)});else if("undefined"!=typeof exports){var t,e=require("underscore");try{t=require("jquery")}catch(t){}n(s,exports,e,t)}else s.Backbone=n(s,{},s._,s.jQuery||s.Zepto||s.ender||s.$)}(function(t,h,b,e){function a(t,e,i,n,s){var r,o=0;if(i&&"object"==typeof i){void 0!==n&&"context"in s&&void 0===s.context&&(s.context=n);for(r=b.keys(i);o<r.length;o++)e=a(t,e,r[o],i[r[o]],s)}else if(i&&c.test(i))for(r=i.split(c);o<r.length;o++)e=t(e,r[o],n,s);else e=t(e,i,n,s);return e}function x(t,e,i){i=Math.min(Math.max(i,0),t.length);for(var n=Array(t.length-i),s=e.length,r=0;r<n.length;r++)n[r]=t[r+i];for(r=0;r<s;r++)t[r+i]=e[r];for(r=0;r<n.length;r++)t[r+s+i]=n[r]}function s(i,n,t,s){b.each(t,function(t,e){n[e]&&(i.prototype[e]=function(n,t,s,r){switch(t){case 1:return function(){return n[s](this[r])};case 2:return function(t){return n[s](this[r],t)};case 3:return function(t,e){return n[s](this[r],P(t,this),e)};case 4:return function(t,e,i){return n[s](this[r],P(t,this),e,i)};default:return function(){var t=u.call(arguments);return t.unshift(this[r]),n[s].apply(n,t)}}}(n,t,e,s))})}var o,i=t.Backbone,u=Array.prototype.slice,e=(h.VERSION="1.4.1",h.$=e,h.noConflict=function(){return t.Backbone=i,this},h.emulateHTTP=!1,h.emulateJSON=!1,h.Events={}),c=/\s+/,n=(e.on=function(t,e,i){return this._events=a(n,this._events||{},t,e,{context:i,ctx:this,listening:o}),o&&(((this._listeners||(this._listeners={}))[o.id]=o).interop=!1),this},e.listenTo=function(t,e,i){if(t){var n=t._listenId||(t._listenId=b.uniqueId("l")),s=this._listeningTo||(this._listeningTo={}),r=o=s[n],s=(r||(this._listenId||(this._listenId=b.uniqueId("l")),r=o=s[n]=new g(this,t)),l(t,e,i,this));if(o=void 0,s)throw s;r.interop&&r.on(e,i)}return this},function(t,e,i,n){var s,r;return i&&(e=t[e]||(t[e]=[]),s=n.context,r=n.ctx,(n=n.listening)&&n.count++,e.push({callback:i,context:s,ctx:s||r,listening:n})),t}),l=function(t,e,i,n){try{t.on(e,i,n)}catch(t){return t}},r=(e.off=function(t,e,i){return this._events&&(this._events=a(r,this._events,t,e,{context:i,listeners:this._listeners})),this},e.stopListening=function(t,e,i){var n=this._listeningTo;if(n){for(var s=t?[t._listenId]:b.keys(n),r=0;r<s.length;r++){var o=n[s[r]];if(!o)break;o.obj.off(e,i,this),o.interop&&o.off(e,i)}b.isEmpty(n)&&(this._listeningTo=void 0)}return this},function(t,e,i,n){if(t){var s,r=n.context,o=n.listeners,h=0;if(e||r||i){for(s=e?[e]:b.keys(t);h<s.length;h++){var a=t[e=s[h]];if(!a)break;for(var u=[],c=0;c<a.length;c++){var l=a[c];i&&i!==l.callback&&i!==l.callback._callback||r&&r!==l.context?u.push(l):(l=l.listening)&&l.off(e,i)}u.length?t[e]=u:delete t[e]}return t}for(s=b.keys(o);h<s.length;h++)o[s[h]].cleanup()}}),d=(e.once=function(t,e,i){var n=a(d,{},t,e,this.off.bind(this));return this.on(n,e="string"==typeof t&&null==i?void 0:e,i)},e.listenToOnce=function(t,e,i){e=a(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,e)},function(t,e,i,n){var s;return i&&((s=t[e]=b.once(function(){n(e,s),i.apply(this,arguments)}))._callback=i),t}),f=(e.trigger=function(t){if(this._events){for(var e=Math.max(0,arguments.length-1),i=Array(e),n=0;n<e;n++)i[n]=arguments[n+1];a(f,this._events,t,void 0,i)}return this},function(t,e,i,n){var s,r;return t&&(s=t[e],r=t.all,s&&(r=r&&r.slice()),s&&p(s,n),r&&p(r,[e].concat(n))),t}),p=function(t,e){var i,n=-1,s=t.length,r=e[0],o=e[1],h=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,o);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,o,h);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e);return}},g=function(t,e){this.id=t._listenId,this.listener=t,this.obj=e,this.interop=!0,this.count=0,this._events=void 0},v=(g.prototype.on=e.on,g.prototype.off=function(t,e){t=this.interop?(this._events=a(r,this._events,t,e,{context:void 0,listeners:void 0}),!this._events):(this.count--,0===this.count);t&&this.cleanup()},g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId],this.interop||delete this.obj._listeners[this.id]},e.bind=e.on,e.unbind=e.off,b.extend(h,e),h.Model=function(t,e){var i=t||{},n=(e=e||{},this.preinitialize.apply(this,arguments),this.cid=b.uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(i=this.parse(i,e)||{}),b.result(this,"defaults")),i=b.defaults(b.extend({},n,i),n);this.set(i,e),this.changed={},this.initialize.apply(this,arguments)}),m=(b.extend(v.prototype,e,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return b.clone(this.attributes)},sync:function(){return h.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return b.escape(this.get(t))},has:function(t){return null!=this.get(t)},matches:function(t){return!!b.iteratee(t,this)(this.attributes)},set:function(t,e,i){if(null!=t){var n;if("object"==typeof t?(n=t,i=e):(n={})[t]=e,!this._validate(n,i=i||{}))return!1;var s,r,o=i.unset,t=i.silent,h=[],a=this._changing,u=(this._changing=!0,a||(this._previousAttributes=b.clone(this.attributes),this.changed={}),this.attributes),c=this.changed,l=this._previousAttributes;for(s in n)e=n[s],b.isEqual(u[s],e)||h.push(s),b.isEqual(l[s],e)?delete c[s]:c[s]=e,o?delete u[s]:u[s]=e;if(this.idAttribute in n&&(r=this.id,this.id=this.get(this.idAttribute),this.trigger("changeId",this,r,i)),!t){h.length&&(this._pending=i);for(var d=0;d<h.length;d++)this.trigger("change:"+h[d],this,u[h[d]],i)}if(!a){if(!t)for(;this._pending;)i=this._pending,this._pending=!1,this.trigger("change",this,i);this._pending=!1,this._changing=!1}}return this},unset:function(t,e){return this.set(t,void 0,b.extend({},e,{unset:!0}))},clear:function(t){var e,i={};for(e in this.attributes)i[e]=void 0;return this.set(i,b.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!b.isEmpty(this.changed):b.has(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&b.clone(this.changed);var e,i,n=this._changing?this._previousAttributes:this.attributes,s={};for(i in t){var r=t[i];b.isEqual(n[i],r)||(s[i]=r,e=!0)}return!!e&&s},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return b.clone(this._previousAttributes)},fetch:function(i){i=b.extend({parse:!0},i);var n=this,s=i.success;return i.success=function(t){var e=i.parse?n.parse(t,i):t;if(!n.set(e,i))return!1;s&&s.call(i.context,n,t,i),n.trigger("sync",n,t,i)},N(this,i),this.sync("read",this,i)},save:function(t,e,i){null==t||"object"==typeof t?(n=t,i=e):(n={})[t]=e;var n,s=(i=b.extend({validate:!0,parse:!0},i)).wait;if(n&&!s){if(!this.set(n,i))return!1}else if(!this._validate(n,i))return!1;var r=this,o=i.success,h=this.attributes,t=(i.success=function(t){r.attributes=h;var e=i.parse?r.parse(t,i):t;if((e=s?b.extend({},n,e):e)&&!r.set(e,i))return!1;o&&o.call(i.context,r,t,i),r.trigger("sync",r,t,i)},N(this,i),n&&s&&(this.attributes=b.extend({},h,n)),this.isNew()?"create":i.patch?"patch":"update"),e=("patch"!=t||i.attrs||(i.attrs=n),this.sync(t,this,i));return this.attributes=h,e},destroy:function(e){e=e?b.clone(e):{};function i(){n.stopListening(),n.trigger("destroy",n,n.collection,e)}var n=this,s=e.success,r=e.wait,t=!(e.success=function(t){r&&i(),s&&s.call(e.context,n,t,e),n.isNew()||n.trigger("sync",n,t,e)});return this.isNew()?b.defer(e.success):(N(this,e),t=this.sync("delete",this,e)),r||i(),t},url:function(){var t,e=b.result(this,"urlRoot")||b.result(this.collection,"url")||M();return this.isNew()?e:(t=this.get(this.idAttribute),e.replace(/[^\/]$/,"$&/")+encodeURIComponent(t))},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},b.extend({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=b.extend({},this.attributes,t);t=this.validationError=this.validate(t,e)||null;return!t||(this.trigger("invalid",this,t,b.extend(e,{validationError:t})),!1)}}),h.Collection=function(t,e){e=e||{},this.preinitialize.apply(this,arguments),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,b.extend({silent:!0},e))}),w={add:!0,remove:!0,merge:!0},_={add:!0,remove:!1},y=(b.extend(m.prototype,e,{model:v,preinitialize:function(){},initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return h.sync.apply(this,arguments)},add:function(t,e){return this.set(t,b.extend({merge:!1},e,_))},remove:function(t,e){e=b.extend({},e);var i=!b.isArray(t),t=(t=i?[t]:t.slice(),this._removeModels(t,e));return!e.silent&&t.length&&(e.changes={added:[],merged:[],removed:t},this.trigger("update",this,e)),i?t[0]:t},set:function(t,e){if(null!=t){(e=b.extend({},w,e)).parse&&!this._isModel(t)&&(t=this.parse(t,e)||[]);for(var i=!b.isArray(t),n=(t=i?[t]:t.slice(),e.at),s=((n=(n=null!=n?+n:n)>this.length?this.length:n)<0&&(n+=this.length+1),[]),r=[],o=[],h=[],a={},u=e.add,c=e.merge,l=e.remove,d=!1,f=this.comparator&&null==n&&!1!==e.sort,p=b.isString(this.comparator)?this.comparator:null,g=0;g<t.length;g++){var v,m=t[g],_=this.get(m);_?(c&&m!==_&&(v=this._isModel(m)?m.attributes:m,e.parse&&(v=_.parse(v,e)),_.set(v,e),o.push(_),f&&!d&&(d=_.hasChanged(p))),a[_.cid]||(a[_.cid]=!0,s.push(_)),t[g]=_):u&&(m=t[g]=this._prepareModel(m,e))&&(r.push(m),this._addReference(m,e),a[m.cid]=!0,s.push(m))}if(l){for(g=0;g<this.length;g++)a[(m=this.models[g]).cid]||h.push(m);h.length&&this._removeModels(h,e)}var y=!1;if(s.length&&(!f&&u&&l)?(y=this.length!==s.length||b.some(this.models,function(t,e){return t!==s[e]}),this.models.length=0,x(this.models,s,0),this.length=this.models.length):r.length&&(f&&(d=!0),x(this.models,r,null==n?this.length:n),this.length=this.models.length),d&&this.sort({silent:!0}),!e.silent){for(g=0;g<r.length;g++)null!=n&&(e.index=n+g),(m=r[g]).trigger("add",m,this,e);(d||y)&&this.trigger("sort",this,e),(r.length||h.length||o.length)&&(e.changes={added:r,removed:h,merged:o},this.trigger("update",this,e))}return i?t[0]:t}},reset:function(t,e){e=e?b.clone(e):{};for(var i=0;i<this.models.length;i++)this._removeReference(this.models[i],e);return e.previousModels=this.models,this._reset(),t=this.add(t,b.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,b.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,b.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return u.apply(this.models,arguments)},get:function(t){if(null!=t)return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t,t.idAttribute)]||t.cid&&this._byId[t.cid]},has:function(t){return null!=this.get(t)},at:function(t){return t<0&&(t+=this.length),this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,!0)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t=t||{};var i=e.length;return b.isFunction(e)&&(e=e.bind(this)),1===i||b.isString(e)?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return this.map(t+"")},fetch:function(i){var n=(i=b.extend({parse:!0},i)).success,s=this;return i.success=function(t){var e=i.reset?"reset":"set";s[e](t,i),n&&n.call(i.context,s,t,i),s.trigger("sync",s,t,i)},N(this,i),this.sync("read",this,i)},create:function(t,e){var n=(e=e?b.clone(e):{}).wait;if(!(t=this._prepareModel(t,e)))return!1;n||this.add(t,e);var s=this,r=e.success;return e.success=function(t,e,i){n&&s.add(t,i),r&&r.call(i.context,t,e,i)},t.save(null,e),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t,e){return t[e||this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,I)},keys:function(){return new E(this,k)},entries:function(){return new E(this,S)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){return this._isModel(t)?(t.collection||(t.collection=this),t):(t=((e=e?b.clone(e):{}).collection=this).model.prototype?new this.model(t,e):this.model(t,e)).validationError?(this.trigger("invalid",this,t.validationError,e),!1):t},_removeModels:function(t,e){for(var i=[],n=0;n<t.length;n++){var s,r,o=this.get(t[n]);o&&(s=this.indexOf(o),this.models.splice(s,1),this.length--,delete this._byId[o.cid],null!=(r=this.modelId(o.attributes,o.idAttribute))&&delete this._byId[r],e.silent||(e.index=s,o.trigger("remove",o,this,e)),i.push(o),this._removeReference(o,e))}return i},_isModel:function(t){return t instanceof v},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes,t.idAttribute);null!=i&&(this._byId[i]=t),t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes,t.idAttribute);null!=i&&delete this._byId[i],this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if(("add"===t||"remove"===t)&&i!==this)return;var s,r;"destroy"===t&&this.remove(e,n),"changeId"===t&&(s=this.modelId(e.previousAttributes(),e.idAttribute),r=this.modelId(e.attributes,e.idAttribute),null!=s&&delete this._byId[s],null!=r&&(this._byId[r]=e))}this.trigger.apply(this,arguments)}}),"function"==typeof Symbol&&Symbol.iterator),E=(y&&(m.prototype[y]=m.prototype.values),function(t,e){this._collection=t,this._kind=e,this._index=0}),I=1,k=2,S=3,y=(y&&(E.prototype[y]=function(){return this}),E.prototype.next=function(){if(this._collection){var t,e;if(this._index<this._collection.length)return t=this._collection.at(this._index),this._index++,{value:this._kind===I?t:(e=this._collection.modelId(t.attributes,t.idAttribute),this._kind===k?e:[e,t]),done:!1};this._collection=void 0}return{value:void 0,done:!0}},h.View=function(t){this.cid=b.uniqueId("view"),this.preinitialize.apply(this,arguments),b.extend(this,b.pick(t,T)),this._ensureElement(),this.initialize.apply(this,arguments)}),A=/^(\S+)\s*(.*)$/,T=["model","collection","el","id","attributes","className","tagName","events"],P=(b.extend(y.prototype,e,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setElement:function(t){this.$el=t instanceof h.$?t:h.$(t),this.el=this.$el[0]},delegateEvents:function(t){if(t=t||b.result(this,"events"))for(var e in this.undelegateEvents(),t){var i=t[e];(i=b.isFunction(i)?i:this[i])&&(e=e.match(A),this.delegate(e[1],e[2],i.bind(this)))}return this},delegate:function(t,e,i){return this.$el.on(t+".delegateEvents"+this.cid,e,i),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(t,e,i){return this.$el.off(t+".delegateEvents"+this.cid,e,i),this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){var t;this.el?this.setElement(b.result(this,"el")):(t=b.extend({},b.result(this,"attributes")),this.id&&(t.id=b.result(this,"id")),this.className&&(t.class=b.result(this,"className")),this.setElement(this._createElement(b.result(this,"tagName"))),this._setAttributes(t))},_setAttributes:function(t){this.$el.attr(t)}}),function(e,t){var i;return b.isFunction(e)?e:b.isObject(e)&&!t._isModel(e)?(i=b.matches(e),function(t){return i(t.attributes)}):b.isString(e)?function(t){return t.get(e)}:e}),H=(b.each([[m,{forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3},"models"],[v,{keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1},"attributes"]],function(t){var i=t[0],e=t[1],n=t[2];i.mixin=function(t){var e=b.reduce(b.functions(t),function(t,e){return t[e]=0,t},{});s(i,t,e,n)},s(i,b,e,n)}),h.sync=function(t,e,n){var i,s=H[t],r=(b.defaults(n=n||{},{emulateHTTP:h.emulateHTTP,emulateJSON:h.emulateJSON}),{type:s,dataType:"json"}),o=(n.url||(r.url=b.result(e,"url")||M()),null!=n.data||!e||"create"!==t&&"update"!==t&&"patch"!==t||(r.contentType="application/json",r.data=JSON.stringify(n.attrs||e.toJSON(n))),n.emulateJSON&&(r.contentType="application/x-www-form-urlencoded",r.data=r.data?{model:r.data}:{}),!n.emulateHTTP||"PUT"!==s&&"DELETE"!==s&&"PATCH"!==s||(r.type="POST",n.emulateJSON&&(r.data._method=s),i=n.beforeSend,n.beforeSend=function(t){if(t.setRequestHeader("X-HTTP-Method-Override",s),i)return i.apply(this,arguments)}),"GET"===r.type||n.emulateJSON||(r.processData=!1),n.error),t=(n.error=function(t,e,i){n.textStatus=e,n.errorThrown=i,o&&o.call(n.context,t,e,i)},n.xhr=h.ajax(b.extend(r,n)));return e.trigger("request",e,t,n),t},{create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"}),$=(h.ajax=function(){return h.$.ajax.apply(h.$,arguments)},h.Router=function(t){t=t||{},this.preinitialize.apply(this,arguments),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)}),C=/\((.*?)\)/g,j=/(\(\?)?:\w+/g,O=/\*\w+/g,U=/[\-{}\[\]+?.,\\\^$|#\s]/g,R=(b.extend($.prototype,e,{preinitialize:function(){},initialize:function(){},route:function(e,i,n){b.isRegExp(e)||(e=this._routeToRegExp(e)),b.isFunction(i)&&(n=i,i=""),n=n||this[i];var s=this;return h.history.route(e,function(t){t=s._extractParameters(e,t);!1!==s.execute(n,t,i)&&(s.trigger.apply(s,["route:"+i].concat(t)),s.trigger("route",i,t),h.history.trigger("route",s,i,t))}),this},execute:function(t,e,i){t&&t.apply(this,e)},navigate:function(t,e){return h.history.navigate(t,e),this},_bindRoutes:function(){if(this.routes){this.routes=b.result(this,"routes");for(var t,e=b.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(U,"\\$&").replace(C,"(?:$1)?").replace(j,function(t,e){return e?t:"([^/?]+)"}).replace(O,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return b.map(i,function(t,e){return e===i.length-1?t||null:t?decodeURIComponent(t):null})}}),h.History=function(){this.handlers=[],this.checkUrl=this.checkUrl.bind(this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)}),z=/^[#\/]|\s+$/g,q=/^\/+|\/+$/g,F=/#.*$/,M=(R.started=!1,b.extend(R.prototype,e,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()},matchRoot:function(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){t=(t||this).location.href.match(/#(.*)$/);return t?t[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t},getFragment:function(t){return(t=null==t?this._usePushState||!this._wantsHashChange?this.getPath():this.getHash():t).replace(z,"")},start:function(t){if(R.started)throw new Error("Backbone.history has already been started");if(R.started=!0,this.options=b.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||7<document.documentMode),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(q,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return t=this.root.slice(0,-1)||"/",this.location.replace(t+"#"+this.getPath()),!0;this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}this._hasHashChange||!this._wantsHashChange||this._usePushState||(this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1,(t=(t=document.body).insertBefore(this.iframe,t.firstChild).contentWindow).document.open(),t.document.close(),t.location.hash="#"+this.fragment);t=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?t("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),R.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if((e=e===this.fragment&&this.iframe?this.getHash(this.iframe.contentWindow):e)===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()},loadUrl:function(e){return!!this.matchRoot()&&(e=this.fragment=this.getFragment(e),b.some(this.handlers,function(t){if(t.route.test(e))return t.callback(e),!0}))},navigate:function(t,e){if(!R.started)return!1;e&&!0!==e||(e={trigger:!!e}),t=this.getFragment(t||"");var i=this.root,i=(i=""!==t&&"?"!==t.charAt(0)?i:i.slice(0,-1)||"/")+t,n=(t=t.replace(F,""),this.decodeFragment(t));if(this.fragment!==n){if(this.fragment=n,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)&&(n=this.iframe.contentWindow,e.replace||(n.document.open(),n.document.close()),this._updateHash(n.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){i?(i=t.href.replace(/(javascript:|#).*$/,""),t.replace(i+"#"+e)):t.hash="#"+e}}),h.history=new R,v.extend=m.extend=$.extend=y.extend=R.extend=function(t,e){var i=this,n=t&&b.has(t,"constructor")?t.constructor:function(){return i.apply(this,arguments)};return b.extend(n,i,e),n.prototype=b.create(i.prototype,t),(n.prototype.constructor=n).__super__=i.prototype,n},function(){throw new Error('A "url" property or function must be specified')}),N=function(e,i){var n=i.error;i.error=function(t){n&&n.call(i.context,e,t,i),e.trigger("error",e,t,i)}};return h});;
/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */
var Mustache = (typeof module !== "undefined" && module.exports) || {};

(function (exports) {

  exports.name = "mustache.js";
  exports.version = "0.5.0-dev";
  exports.tags = ["{{", "}}"];
  exports.parse = parse;
  exports.compile = compile;
  exports.render = render;
  exports.clearCache = clearCache;

  // This is here for backwards compatibility with 0.4.x.
  exports.to_html = function (template, view, partials, send) {
    var result = render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

  var _toString = Object.prototype.toString;
  var _isArray = Array.isArray;
  var _forEach = Array.prototype.forEach;
  var _trim = String.prototype.trim;

  var isArray;
  if (_isArray) {
    isArray = _isArray;
  } else {
    isArray = function (obj) {
      return _toString.call(obj) === "[object Array]";
    };
  }

  var forEach;
  if (_forEach) {
    forEach = function (obj, callback, scope) {
      return _forEach.call(obj, callback, scope);
    };
  } else {
    forEach = function (obj, callback, scope) {
      for (var i = 0, len = obj.length; i < len; ++i) {
        callback.call(scope, obj[i], i, obj);
      }
    };
  }

  var spaceRe = /^\s*$/;

  function isWhitespace(string) {
    return spaceRe.test(string);
  }

  var trim;
  if (_trim) {
    trim = function (string) {
      return string == null ? "" : _trim.call(string);
    };
  } else {
    var trimLeft, trimRight;

    if (isWhitespace("\xA0")) {
      trimLeft = /^\s+/;
      trimRight = /\s+$/;
    } else {
      trimLeft = /^[\s\xA0]+/;
      trimRight = /[\s\xA0]+$/;
    }

    trim = function (string) {
      return string == null ? "" :
        String(string).replace(trimLeft, "").replace(trimRight, "");
    };
  }

  var escapeMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;'
  };

  function escapeHTML(string) {
    return String(string).replace(/&(?!\w+;)|[<>"']/g, function (s) {
      return escapeMap[s] || s;
    });
  }

  /**
   * Adds the `template`, `line`, and `file` properties to the given error
   * object and alters the message to provide more useful debugging information.
   */
  function debug(e, template, line, file) {
    file = file || "<template>";

    var lines = template.split("\n"),
        start = Math.max(line - 3, 0),
        end = Math.min(lines.length, line + 3),
        context = lines.slice(start, end);

    var c;
    for (var i = 0, len = context.length; i < len; ++i) {
      c = i + start + 1;
      context[i] = (c === line ? " >> " : "    ") + context[i];
    }

    e.template = template;
    e.line = line;
    e.file = file;
    e.message = [file + ":" + line, context.join("\n"), "", e.message].join("\n");

    return e;
  }

  /**
   * Looks up the value of the given `name` in the given context `stack`.
   */
  function lookup(name, stack, defaultValue) {
    if (name === ".") {
      return stack[stack.length - 1];
    }

    var names = name.split(".");
    var lastIndex = names.length - 1;
    var target = names[lastIndex];

    var value, context, i = stack.length, j, localStack;
    while (i) {
      localStack = stack.slice(0);
      context = stack[--i];

      j = 0;
      while (j < lastIndex) {
        context = context[names[j++]];

        if (context == null) {
          break;
        }

        localStack.push(context);
      }

      if (context && typeof context === "object" && target in context) {
        value = context[target];
        break;
      }
    }

    // If the value is a function, call it in the current context.
    if (typeof value === "function") {
      value = value.call(localStack[localStack.length - 1]);
    }

    if (value == null)  {
      return defaultValue;
    }

    return value;
  }

  function renderSection(name, stack, callback, inverted) {
    var buffer = "";
    var value =  lookup(name, stack);

    if (inverted) {
      // From the spec: inverted sections may render text once based on the
      // inverse value of the key. That is, they will be rendered if the key
      // doesn't exist, is false, or is an empty list.
      if (value == null || value === false || (isArray(value) && value.length === 0)) {
        buffer += callback();
      }
    } else if (isArray(value)) {
      forEach(value, function (value) {
        stack.push(value);
        buffer += callback();
        stack.pop();
      });
    } else if (typeof value === "object") {
      stack.push(value);
      buffer += callback();
      stack.pop();
    } else if (typeof value === "function") {
      var scope = stack[stack.length - 1];
      var scopedRender = function (template) {
        return render(template, scope);
      };
      buffer += value.call(scope, callback(), scopedRender) || "";
    } else if (value) {
      buffer += callback();
    }

    return buffer;
  }

  /**
   * Parses the given `template` and returns the source of a function that,
   * with the proper arguments, will render the template. Recognized options
   * include the following:
   *
   *   - file     The name of the file the template comes from (displayed in
   *              error messages)
   *   - tags     An array of open and close tags the `template` uses. Defaults
   *              to the value of Mustache.tags
   *   - debug    Set `true` to log the body of the generated function to the
   *              console
   *   - space    Set `true` to preserve whitespace from lines that otherwise
   *              contain only a {{tag}}. Defaults to `false`
   */
  function parse(template, options) {
    options = options || {};

    var tags = options.tags || exports.tags,
        openTag = tags[0],
        closeTag = tags[tags.length - 1];

    var code = [
      'var buffer = "";', // output buffer
      "\nvar line = 1;", // keep track of source line number
      "\ntry {",
      '\nbuffer += "'
    ];

    var spaces = [],      // indices of whitespace in code on the current line
        hasTag = false,   // is there a {{tag}} on the current line?
        nonSpace = false; // is there a non-space char on the current line?

    // Strips all space characters from the code array for the current line
    // if there was a {{tag}} on it and otherwise only spaces.
    var stripSpace = function () {
      if (hasTag && !nonSpace && !options.space) {
        while (spaces.length) {
          code.splice(spaces.pop(), 1);
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    };

    var sectionStack = [], updateLine, nextOpenTag, nextCloseTag;

    var setTags = function (source) {
      tags = trim(source).split(/\s+/);
      nextOpenTag = tags[0];
      nextCloseTag = tags[tags.length - 1];
    };

    var includePartial = function (source) {
      code.push(
        '";',
        updateLine,
        '\nvar partial = partials["' + trim(source) + '"];',
        '\nif (partial) {',
        '\n  buffer += render(partial,stack[stack.length - 1],partials);',
        '\n}',
        '\nbuffer += "'
      );
    };

    var openSection = function (source, inverted) {
      var name = trim(source);

      if (name === "") {
        throw debug(new Error("Section name may not be empty"), template, line, options.file);
      }

      sectionStack.push({name: name, inverted: inverted});

      code.push(
        '";',
        updateLine,
        '\nvar name = "' + name + '";',
        '\nvar callback = (function () {',
        '\n  return function () {',
        '\n    var buffer = "";',
        '\nbuffer += "'
      );
    };

    var openInvertedSection = function (source) {
      openSection(source, true);
    };

    var closeSection = function (source) {
      var name = trim(source);
      var openName = sectionStack.length != 0 && sectionStack[sectionStack.length - 1].name;

      if (!openName || name != openName) {
        throw debug(new Error('Section named "' + name + '" was never opened'), template, line, options.file);
      }

      var section = sectionStack.pop();

      code.push(
        '";',
        '\n    return buffer;',
        '\n  };',
        '\n})();'
      );

      if (section.inverted) {
        code.push("\nbuffer += renderSection(name,stack,callback,true);");
      } else {
        code.push("\nbuffer += renderSection(name,stack,callback);");
      }

      code.push('\nbuffer += "');
    };

    var sendPlain = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += lookup("' + trim(source) + '",stack,"");',
        '\nbuffer += "'
      );
    };

    var sendEscaped = function (source) {
      code.push(
        '";',
        updateLine,
        '\nbuffer += escapeHTML(lookup("' + trim(source) + '",stack,""));',
        '\nbuffer += "'
      );
    };

    var line = 1, c, callback;
    for (var i = 0, len = template.length; i < len; ++i) {
      if (template.slice(i, i + openTag.length) === openTag) {
        i += openTag.length;
        c = template.substr(i, 1);
        updateLine = '\nline = ' + line + ';';
        nextOpenTag = openTag;
        nextCloseTag = closeTag;
        hasTag = true;

        switch (c) {
        case "!": // comment
          i++;
          callback = null;
          break;
        case "=": // change open/close tags, e.g. {{=<% %>=}}
          i++;
          closeTag = "=" + closeTag;
          callback = setTags;
          break;
        case ">": // include partial
          i++;
          callback = includePartial;
          break;
        case "#": // start section
          i++;
          callback = openSection;
          break;
        case "^": // start inverted section
          i++;
          callback = openInvertedSection;
          break;
        case "/": // end section
          i++;
          callback = closeSection;
          break;
        case "{": // plain variable
          closeTag = "}" + closeTag;
          // fall through
        case "&": // plain variable
          i++;
          nonSpace = true;
          callback = sendPlain;
          break;
        default: // escaped variable
          nonSpace = true;
          callback = sendEscaped;
        }

        var end = template.indexOf(closeTag, i);

        if (end === -1) {
          throw debug(new Error('Tag "' + openTag + '" was not closed properly'), template, line, options.file);
        }

        var source = template.substring(i, end);

        if (callback) {
          callback(source);
        }

        // Maintain line count for \n in source.
        var n = 0;
        while (~(n = source.indexOf("\n", n))) {
          line++;
          n++;
        }

        i = end + closeTag.length - 1;
        openTag = nextOpenTag;
        closeTag = nextCloseTag;
      } else {
        c = template.substr(i, 1);

        switch (c) {
        case '"':
        case "\\":
          nonSpace = true;
          code.push("\\" + c);
          break;
        case "\r":
          // Ignore carriage returns.
          break;
        case "\n":
          spaces.push(code.length);
          code.push("\\n");
          stripSpace(); // Check for whitespace on the current line.
          line++;
          break;
        default:
          if (isWhitespace(c)) {
            spaces.push(code.length);
          } else {
            nonSpace = true;
          }

          code.push(c);
        }
      }
    }

    if (sectionStack.length != 0) {
      throw debug(new Error('Section "' + sectionStack[sectionStack.length - 1].name + '" was not closed properly'), template, line, options.file);
    }

    // Clean up any whitespace from a closing {{tag}} that was at the end
    // of the template without a trailing \n.
    stripSpace();

    code.push(
      '";',
      "\nreturn buffer;",
      "\n} catch (e) { throw {error: e, line: line}; }"
    );

    // Ignore `buffer += "";` statements.
    var body = code.join("").replace(/buffer \+= "";\n/g, "");

    if (options.debug) {
      if (typeof console != "undefined" && console.log) {
        console.log(body);
      } else if (typeof print === "function") {
        print(body);
      }
    }

    return body;
  }

  /**
   * Used by `compile` to generate a reusable function for the given `template`.
   */
  function _compile(template, options) {
    var args = "view,partials,stack,lookup,escapeHTML,renderSection,render";
    var body = parse(template, options);
    var fn = new Function(args, body);

    // This anonymous function wraps the generated function so we can do
    // argument coercion, setup some variables, and handle any errors
    // encountered while executing it.
    return function (view, partials) {
      partials = partials || {};

      var stack = [view]; // context stack

      try {
        return fn(view, partials, stack, lookup, escapeHTML, renderSection, render);
      } catch (e) {
        throw debug(e.error, template, e.line, options.file);
      }
    };
  }

  // Cache of pre-compiled templates.
  var _cache = {};

  /**
   * Clear the cache of compiled templates.
   */
  function clearCache() {
    _cache = {};
  }

  /**
   * Compiles the given `template` into a reusable function using the given
   * `options`. In addition to the options accepted by Mustache.parse,
   * recognized options include the following:
   *
   *   - cache    Set `false` to bypass any pre-compiled version of the given
   *              template. Otherwise, a given `template` string will be cached
   *              the first time it is parsed
   */
  function compile(template, options) {
    options = options || {};

    // Use a pre-compiled version from the cache if we have one.
    if (options.cache !== false) {
      if (!_cache[template]) {
        _cache[template] = _compile(template, options);
      }

      return _cache[template];
    }

    return _compile(template, options);
  }

  /**
   * High-level function that renders the given `template` using the given
   * `view` and `partials`. If you need to use any of the template options (see
   * `compile` above), you must compile in a separate step, and then call that
   * compiled function.
   */
  function render(template, view, partials) {
    return compile(template)(view, partials);
  }

})(Mustache);
;
/* Common front-end code for the Notifications system
 *	- wpNotesCommon wraps all the proxied REST calls
 *	- wpNoteModel & wpNoteList are Backbone.js Model, & Collection implementations
 */

var wpNotesCommon;
var wpNotesCommentModView;
var wpNoteList;
var wpNoteModel;

(function($){
	var cookies = document.cookie.split( /;\s*/ ), cookie = false;
	for ( i = 0; i < cookies.length; i++ ) {
		if ( cookies[i].match( /^wp_api=/ ) ) {
			cookies = cookies[i].split( '=' );
			cookie = cookies[1];
			break;
		}
	}

	wpNotesCommon = {
		jsonAPIbase: 'https://public-api.wordpress.com/rest/v1',
		hasUpgradedProxy: false,

		noteTypes: {
			comment: 'comment',
			follow: 'follow',
			like: [
				'like',
				'like_trap'
			],
			reblog: 'reblog',
			trophy: [
				'best_liked_day_feat',
				'like_milestone_achievement',
				'achieve_automattician_note',
				'achieve_user_anniversary',
				'best_followed_day_feat',
				'followed_milestone_achievement'
			],
			'alert': [
				'expired_domain_alert'
			]
		},

		noteType2Noticon: {
			'like': 'like',
			'follow': 'follow',
			'comment_like': 'like',
			'comment': 'comment',
			'comment_pingback': 'external',
			'reblog': 'reblog',
			'like_milestone_achievement': 'trophy',
			'achieve_followed_milestone_note': 'trophy',
			'achieve_user_anniversary': 'trophy',
			'best_liked_day_feat': 'milestone',
			'best_followed_day_feat': 'milestone',
			'automattician_achievement': 'trophy',
			'expired_domain_alert': 'alert',
			'automattcher': 'atsign'
		},
	
		createNoteContainer: function( note, id_prefix ) {
			var note_container = $('<div/>', {
				id : id_prefix + '-note-' + note.id,
				'class' : 'wpn-note wpn-' + note.type + ' ' + ( ( note.unread > 0 ) ? 'wpn-unread' : 'wpn-read' )
			}).data( {
				id: parseInt( note.id, 10 ),
				type: note.type
			});
			var note_body = $('<div/>', { "class":"wpn-note-body wpn-note-body-empty" } );
			var spinner = $( '<div/>', { style : 'position: absolute; left: 180px; top: 60px;' } );
			note_body.append( spinner );
			spinner.spin( 'medium' );
			note_container.append(
				this.createNoteSubject( note ),
				note_body
			);
	
			return note_container;
		},
	
		createNoteSubject: function( note ) {
			var subj = $('<div/>', { "class":"wpn-note-summary" } ).append(
				$('<span/>', {
					"class" : 'wpn-noticon noticon noticon' + note.noticon
				}),
				$('<span/>', {
					"class" : 'wpn-icon no-grav',
						html : $('<img/>', {
							src : note.subject.icon,
							width : '24px',
							height : '24px',
							style : 'display: inline-block; width: 24px; height: 24px; overflow-x: hidden; overflow-y: hidden;'
						})
				}),
				$('<span/>', {
					"class" : 'wpn-subject',
					html : note.subject.html
				})
			);
			return subj;
		},
	
	
		createNoteBody: function( note_model ) {
			var note_body = $('<div/>', { "class":"wpn-note-body" } );
			var note = note_model.toJSON();
			var class_prefix = 'wpn-' + note.body.template;
			switch( note.body.template ) {
				case 'single-line-list' :
				case 'multi-line-list' :
					note_body.append( 
						$( '<p/>' ).addClass( class_prefix + '-header' ).html( note.body.header )
					);

					for ( var i in note.body.items ) {
						var item = $('<div></div>', { 
							'class' : class_prefix + '-item ' + class_prefix + '-item-' + i + 
								( note.body.items[i].icon ? '' : ' ' + class_prefix + '-item-no-icon' )
						});
						if ( note.body.items[i].icon ) {
							item.append(
								$('<img/>', { 
									"class" : class_prefix + '-item-icon avatar avatar-' + note.body.items[i].icon_width,
									height: note.body.items[i].icon_height,
									width: note.body.items[i].icon_width,
									src: note.body.items[i].icon
							} ) );
						}
						if ( note.body.items[i].header ) {
							item.append(
								$('<div></div>', { 'class' : class_prefix + '-item-header' }
							).html( note.body.items[i].header ) );
						}
						if ( note.body.items[i].action ) {
							switch ( note.body.items[i].action.type ) {
								case 'follow' :
									var button = wpFollowButton.create( note.body.items[i].action );
									item.append( button );
									// Attach action stat tracking for follows
									button.click( function(e) {
										if ( $( this ).children('a').hasClass( 'wpcom-follow-rest' ) )
											wpNotesCommon.bumpStat( 'notes-click-action', 'unfollow' );
										else
											wpNotesCommon.bumpStat( 'notes-click-action', 'follow' );
										return true;
									} );
									break;
								default :
									console.error( "Unsupported " + note.type + " action: " + note.body.items[i].action.type );
									break;
							}
						}
						if ( note.body.items[i].html ) {
							item.append(
								$('<div></div>', { 'class' : class_prefix + '-item-body' }
							).html( note.body.items[i].html ) );
						}
						note_body.append( item );
					}
	
					if ( note.body.actions ) {
						var note_actions = new wpNotesCommentModView( { model: note_model } );
						note_actions.render();
						note_body.append( note_actions.el );
					}
	
					if ( note.body.footer ) {
						note_body.append( 
							$( '<p/>' ).addClass( class_prefix + '-footer' ).html( note.body.footer )
						);
					}
					break;
				case 'big-badge' :
					if ( note.body.header ) {
						note_body.append( 
							$( '<div/>' ).addClass( class_prefix + '-header' ).html( note.body.header )
						);
					}
	
					if ( note.body.badge ) {
						note_body.append( $('<div></div>', { 
							'class' : class_prefix + '-badge ' 
						}).append( note.body.badge ) );
					}
	
					if ( note.body.html !== '' ) {
						note_body.append( 
							$( '<div/>' ).addClass( class_prefix + '-footer' ).html( note.body.html )
						);
					}
	
					break;
				default :
					note_body.text( 'Unsupported note body template!' );
					break;
			}

			note_body.find( 'a[notes-data-click]' ).mousedown( function(e) {
				var type = $(this).attr( 'notes-data-click' );
				wpNotesCommon.bumpStat( 'notes-click-body', type );
				return true;
			} );
	
			return note_body;		
		},
	
		getNoteSubjects: function( query_params, success, fail ) {
			query_params.fields = 'id,type,unread,noticon,timestamp,subject';
			query_params.trap = true;
			return this.getNotes( query_params, success, fail );
		},

		getNotes: function( query_params, success, fail ) {
			return this.ajax({
				type:    'GET',
				path:    '/notifications/',
				data:    query_params,
				success: success,
				error:   fail
			});
		},

		getMentions: function( query_params, success ) {
			return this.ajax({
				type:    'GET',
				path:    '/users/suggest',
				data:    query_params,
				success: success
			});
		},
		
		markNotesSeen: function( timestamp ) {
			return this.ajax({
				type:    'POST',
				path:    '/notifications/seen',
				data:    { time: timestamp }
			});
		},
	
		markNotesRead: function( unread_cnts ) {
			var query_args = {};
			var t = this;

			for ( var id in unread_cnts ) {
				if ( unread_cnts[ id ] > 0 ) {
					query_args['counts[' + id + ']'] = unread_cnts[ id ];
				}
			}

			if ( 0 === query_args.length ) {
				return (new $.Deferred()).resolve( 'no unread notes' );
			}
			
			return this.ajax({
				type : 'POST',
				path : '/notifications/read',
				data : query_args,
				success : function( res ) { },
				error : function( res ) { }
			});
		},

		ajax: function( options ) {
			var t = this;
			var request = {
				path: options.path,
				method: options.type
			};

			if ( options.type.toLowerCase() == 'post' )
				request.body = options.data;
			else
				request.query = options.data;

			return $.Deferred( function( dfd ) {
				var makeProxyCall = function() {
					$.wpcom_proxy_request( request, function( response, statusCode ) { 
						if ( 200 == statusCode ) {
							if ( 'function' == typeof options.success ) {
								options.success( response );
							}
							return dfd.resolve( response );
						}
						if ( 'function' == typeof options.error ) {
							options.error( statusCode );
						}
						else {
							console.error( statusCode );
						}
						return dfd.reject( statusCode );
					});
				};

				if ( t.hasUpgradedProxy ) {
					return makeProxyCall();
				}
				return $.wpcom_proxy_request( { metaAPI: { accessAllUsersBlogs: true } } ).done( function() {
					t.hasUpgradedProxy = true;
					makeProxyCall();
				} );	
			});
		},
	
		bumpStat: function( group, names ) {
			if ( 'undefined' != typeof wpNotesIsJetpackClient && wpNotesIsJetpackClient ) {
				var jpStats = [ 'notes-menu-impressions', 'notes-menu-clicks' ];
				if ( _.contains( jpStats, group ) ) {
					names = names.replace( /(,|$)/g, '-jetpack$1' );
				}
			}
			new Image().src = document.location.protocol + '//pixel.wp.com/g.gif?v=wpcom-no-pv&x_' + group + '=' + names + '&baba=' + Math.random();
		},

		getKeycode: function( key_event ) {
			//determine if we can use this key event to trigger the menu
			key_event = key_event || window.event;
			if ( key_event.target )
				element = key_event.target;
			else if ( key_event.srcElement )
				element = key_event.srcElement;
			if( element.nodeType == 3 ) //text node, check the parent
				element = element.parentNode;
			
			if( key_event.ctrlKey === true || key_event.altKey === true || key_event.metaKey === true )
				return false;
		
			var keyCode = ( key_event.keyCode ) ? key_event.keyCode : key_event.which;

			if ( keyCode && ( element.tagName == 'INPUT' || element.tagName == 'TEXTAREA' || element.tagName == 'SELECT' ) )
				return false;

			if ( keyCode && element.contentEditable == "true" )
				return false;

			return keyCode;
		}
	};

	wpNoteModel = Backbone.Model.extend({
		defaults: {
			summary: "",
			unread: true
		},

		_reloadBlocked: false,

		initialize: function() {			
		},

		markRead: function() {
			var unread_cnt = this.get( 'unread' );
			if ( Boolean( parseInt( unread_cnt, 10 ) ) ) {
				var notes = {};
				notes[ this.id ] = unread_cnt;
				wpNotesCommon.markNotesRead( notes );
				wpNotesCommon.bumpStat( 'notes-read-type', this.get( 'type' ) );
			}
		},
		
		loadBody: function() {
			wpNotesCommon.createNoteBody( this );
		},

		reload: function() {
			var t = this;
			var fields = 'id,type,unread,noticon,subject,body,date,timestamp,status';
			if ( 'comment' == t.get( 'type' ) ) {
				fields += ',approval_status,has_replied';
			}
			if (!force && this.isReloadingBlocked()) {
				return $.Deferred().reject('reloading blocked');
			}
			return wpNotesCommon.getNotes( {
				fields: fields,
				trap: true,
				ids: [ t.get('id') ]
			}, function ( res ) {
				var notes = res.notes;
				if ( typeof notes[0] !== 'undefined' ) {
					t.set( notes[ 0 ] );
				}
			}, function() {
				//ignore failure
			} );
		},

		resize: function() {
			this.trigger( 'resize' );
		},

		/* Block the model from being reloaded for a specified number of seconds
		 * needed b/c in the case of Jetpack, it takes a while for the new status to sync back to wpcom
		 * & this prevents it flashing back and forth
		 */
		
		blockReloading: function(seconds) {
			var _this = this;
			this._reloadBlocked = true;
			clearTimeout(this.reloadBlockerTimeout);
			return this.reloadBlockerTimeout = setTimeout(function() {
				return _this._reloadBlocked = false;
			}, seconds * 1000);
		},

		isReloadingBlocked: function() {
			return this._reloadBlocked;
		}
	});

	wpNoteList = Backbone.Collection.extend({
		model:   wpNoteModel,
		lastMarkedSeenTimestamp : false,
		newNotes: false,
		maxNotes : false,
		loading: false,
		hasLoaded: false,
		allBodiesLoaded: false,

		//always sort by timpstamp
		comparator: function( note ) {
			return -note.get( 'timestamp' );
		},

		addNotes: function( notes ) {
			// Filter out any notes that have no subject
			notes = _.filter( notes, function(note) { return typeof( note.subject ) === "object"; } );
			var models = _.map( notes, function(o) { return new wpNoteModel(o); });
			this.add( models );
			this.sort(); //ensure we maintain sorted order
			if ( this.maxNotes ) {
				while( this.length > this.maxNotes ) {
					this.pop();
				}
			}
			this.trigger( 'loadNotes:change' );
		},

		getMostRecentTimestamp: function() {
			if ( !this.length ) {
				return false;
			}

			//ensure we maintain sorted order see the comparator function
			this.sort();
			return parseInt( this.at(0).get( 'timestamp' ), 10 );
		},

		// load notes from the server
		loadNotes: function( query_args ) {
			var t = this;

			t.loading = true;
			t.trigger( 'loadNotes:beginLoading' );
			
			var fields = query_args.fields;
			var number = parseInt( query_args.number, 10 );
			var before = parseInt( query_args.before, 10 );
			var since = parseInt( query_args.since, 10 );
			var timeout = parseInt( query_args.timeout, 10 ) || 7000;
			var type = 'undefined' == typeof query_args.type ? null : query_args.type;
			var unread = 'undefined' == typeof query_args.unread ? null : query_args.unread;

			query_args = {
				timeout: timeout
			};
			
			if ( ! fields ) {
				fields = 'id,type,unread,noticon,subject,body,date,timestamp,status';
			}
			
			if ( isNaN( number ) ) {
				number = 9;
			}
			
			if ( ! isNaN( before ) ) {
				query_args.before = before;
			}
			if ( ! isNaN( since ) ) {
				query_args.since = since;
			}

			if ( unread !== null ) {
				query_args.unread = unread;
			}

			if ( type !== null && type != "unread" && type != "latest" ) {
				query_args.type = type;
			}
			
			query_args.number = number;
			query_args.fields = fields;
			query_args.trap = true;

			return wpNotesCommon.getNotes( query_args ).done( function ( res ) {
				var qt;
				var notes = res.notes;
				var notes_changed = false;
				if ( !t.lastMarkedSeenTimestamp || ( res.last_seen_time > t.lastMarkedSeenTimestamp ) ) { 
					notes_changed = true; 
					t.lastMarkedSeenTimestamp = parseInt( res.last_seen_time, 10 );
				} 

				for( var idx in notes ) {
					var note_model = t.get( notes[idx].id );
					if ( note_model ) {
						// Remove notes that have no subject
						if ( typeof( notes[idx].subject ) != 'object' ) {
							t.remove( notes[idx].id );
							notes_changed = true;
							continue;
						}
						if ( type ) {
							qt = note_model.get( 'queried_types' ) || {};
							qt[ type ] = true;
							notes[idx].queried_types = qt;
						}
						note_model.set( notes[ idx ] );
					}
					else {
						// Skip notes that have no subject
						if ( typeof( notes[idx].subject ) != 'object' ) {
							continue;
						}
						if ( type ) {
							qt = {};
							qt[ type ] = true;
							notes[idx].queried_types = qt;
						}
						note_model = new wpNoteModel( notes[ idx ] );
						t.add( note_model );
					}
					if ( ! note_model.has('body') )
						t.allBodiesLoaded = false;
					notes_changed = true;
				}

				if ( t.maxNotes ) {
					while( t.length > t.maxNotes ) {
						t.pop();
					}
				}

				if ( notes_changed ) {
					t.sort(); //ensure we maintain sorted order
					t.trigger( 'loadNotes:change' );
				}
				t.loading = false;
				t.hasLoaded = true;
				t.trigger( 'loadNotes:endLoading' );
			}).fail( function( e ) {
				t.loading = false;
				t.trigger( 'loadNotes:failed' );
			});
		},

		loadNoteBodies: function( filter ) {
			var t = this;
			if ( t.allBodiesLoaded ) {
				return (new $.Deferred()).resolve();
			}

			// Only load the note bodies that pass the caller supplied filter.
			// If no filter is supplied, all notes in the collection are fetched.
			var ids = t.getNoteIds( filter );

			if ( 0 == ids.length ) {
				return (new $.Deferred()).reject();
			}

			var doneFunc = function( res ) {
				var notes = res.notes;
				for( var idx in notes ) {
					// Skip notes that have no subject
					if ( typeof( notes[idx].subject ) != 'object' ) {
						continue;
					}
					var note_model = t.get( notes[idx].id );
					if ( note_model ) {
						note_model.set( notes[idx] );
					} else {
						note_model = new wpNoteModel( notes[ idx ] );
						t.add( note_model );
					}
				}
			};

			var failFunc = function ( e ) {
				if ( typeof console != 'undefined' && typeof console.error == 'function' )
					console.error( 'body loading error!' );
			}

			//get each note body as a separate request so we can get them in parallel
			//to speed up loading when there are many new notes
			var deferreds = [];

			//split into 3 requests (3 most recent notes, and then any others into one request)
			var count = 3
			for ( var i=0; i<count; i++ ) {
				if ( typeof ids[i] == 'undefined' )
					break;

				var query_params = {};
				// loads subject & meta data also so all are consistent
				query_params.fields = 'id,type,unread,noticon,timestamp,subject,body,meta,status';
				query_params.trap = true;
				query_params['ids[' + i + ']'] = ids[i];

				deferreds.push( wpNotesCommon.getNotes( query_params )
					.done( doneFunc )
					.fail( failFunc )
				)	;
			}

			if ( ids.length > count ) {
				var query_params = {};
				// loads subject & meta data also so all are consistent
				query_params.fields = 'id,type,unread,noticon,timestamp,subject,body,meta,status';
				query_params.trap = true;

				for ( var i=count; i<ids.length; i++ )
					query_params['ids[' + i + ']'] = ids[i];

				deferreds.push( wpNotesCommon.getNotes( query_params )
					.done( doneFunc )
					.fail( failFunc )
				)	;
			}

			var all_xhr = $.when.apply(null, deferreds);
			all_xhr.done( function() {
				if ( typeof filter != 'function' ) {
					t.allBodiesLoaded = true;
				}
			} );

			return all_xhr;
		},

		markNotesSeen: function() {
			var t = this,
				mostRecentTs = t.getMostRecentTimestamp();

			if ( mostRecentTs > this.lastMarkedSeenTimestamp ) {
				wpNotesCommon.markNotesSeen( mostRecentTs ).done( function() {
					t.lastMarkedSeenTimestamp = false;
				});
			}
		},

		unreadCount: function() {
			return this.reduce( function( num, note ) { return num + ( note.get('unread') ? 1 : 0 ); }, 0 );
		},

		numberNewNotes: function() {
			var t = this;
			if ( ! t.lastMarkedSeenTimestamp )
				return 0;
			return t.getNewNotes().length;
		},

		// return notes in this collection which were generated after we last marked it as seen.
		getNewNotes: function() {
			var t = this;
			return t.filter( function( note ) { 
				return ( note.get('timestamp') > t.lastMarkedSeenTimestamp ); 
			} );
		},

		// get all unread notes in the collection
		getUnreadNotes: function() {
			return this.filter( function( note ){ return Boolean( parseInt( note.get( "unread" ), 10 ) ); } );
		},
		
		// get all notes in the collection of specified type
		getNotesOfType: function( typeName ) {
			var t = this;
			switch( typeName ){
				case 'unread':
					return t.getUnreadNotes();
				case 'latest':
					return t.filter( function( note ) {
						var qt = note.get( 'queried_types' );
						return 'undefined' != typeof qt && 'undefined' != typeof qt.latest && qt.latest;
					});
				default:
					return t.filter( function( note ) {
						var note_type = note.get( "type" );
						if ( "undefined" == typeof wpNotesCommon.noteTypes[ typeName ] ) {
							return false;
						}
						else if ( "string" == typeof wpNotesCommon.noteTypes[ typeName ] ) {
							return typeName == note_type;
						}
						var len = wpNotesCommon.noteTypes[ typeName ].length;
						for ( var i=0; i<len; i++ ){
							if ( wpNotesCommon.noteTypes[ typeName ][i] == note_type ) {
								return true;
							}
						}
						return false;
					} );
			}
		},

		getNoteIds: function(filter) {
			if ( typeof filter != 'function' )
				filter = function(){ return true; };
			return _.pluck( this.filter(filter), 'id' );
		}
	});

	/**
	 * BEWARE: HERE BE DRAGONS
	 *
	 * wpNotesCommentModView is a copy/pasta from NoteCommentModView in widgets.wp.com/notes/notes-widget.test.js
	 *
	 * DO NOT edit this code - instead, fix whatever you need to fix in the-pit-of-despair/notes-widget/NoteCommentModView.coffee,
	 * regenerate notes-widget.test.js, copy/pasta, and continue the cycle of abuse.
	 **/

	wpNotesCommentModView = Backbone.View.extend({
      mode: 'buttons',
      actionsByName: null,
      possibleActions: ['approve-comment', 'replyto-comment', 'like-comment', 'spam-comment', 'trash-comment', 'unapprove-comment', 'unlike-comment', 'unspam-comment', 'untrash-comment'],
      possibleStatuses: ['approved', 'spam', 'trash', 'unapproved'],
      events: {
        'click .wpn-replyto-comment-button-open a': 'openReply',
        'click .wpn-comment-reply-button-close': 'closeReply',
        'click .wpn-comment-reply-button-send': 'sendReply',
        'click .wpn-like-comment-button a': 'clickLikeComment',
        'click .wpn-unlike-comment-button a': 'clickLikeComment',
        'click .wpn-approve-comment-button a': 'clickModComment',
        'click .wpn-unapprove-comment-button a': 'clickModComment',
        'click .wpn-spam-comment-button a': 'clickModComment',
        'click .wpn-unspam-comment-button a': 'clickModComment',
        'click .wpn-trash-comment-button a': 'clickModComment',
        'click .wpn-untrash-comment-button a': 'clickModComment'
      },
      templateActions: '\
			{{#reply}}\
			<span class="{{reply.class}}">\
				<a href="#" title="{{reply.title}}" data-action-type="{{reply.actionType}}">{{reply.text}}</a>\
			</span>\
			{{/reply}}\
			{{#like}}\
			<span class="{{like.class}}">\
				<a href="#" title="{{like.title}}" data-action-type="{{like.actionType}}">{{like.text}}</a>\
			</span>\
			{{/like}}\
			<span class="wpn-more">\
				<a href="#">More</a>\
				<div class="wpn-more-container">\
				{{#spam}}\
				<span class="{{spam.class}}">\
					<a href="#" title="{{spam.title}}" data-action-type="{{spam.actionType}}">{{spam.text}}</a>\
				</span>\
				{{/spam}}\
				{{#trash}}\
				<span class="{{trash.class}}">\
					<a href="#" title="{{trash.title}}" data-action-type="{{trash.actionType}}">{{trash.text}}</a>\
				</span>\
				{{/trash}}\
				</div>\
			</span>\
			{{#approve}}\
			<span class="{{approve.class}}">\
				<a href="#" title="{{approve.title}}" data-action-type="{{approve.actionType}}">{{approve.text}}</a>\
			</span>\
			{{/approve}}\
			<span class="wpn-comment-mod-waiting"></span>',
      templateReply: '\
			<div class="wpn-note-comment-reply">\
				<h5>{{reply_header_text}}</h5>\
				<textarea class="wpn-note-comment-reply-text" rows="5" cols="45" name="wpn-note-comment-reply-text"></textarea>\
				<p class="wpn-comment-submit">\
					<span class="wpn-comment-submit-waiting" style="display: none;"></span>\
				<span class="wpn-comment-submit-error" style="display:none;">Error!</span>\
				<a href="#" class="wpn-comment-reply-button-send alignright">{{submit_button_text}}</a>\
				<a href="#" class="wpn-comment-reply-button-close alignleft">_</a>\
				</p>\
			</div>',
      initialize: function() {
        var _this = this;
        this.setElement($('<div class="wpn-note-comment-actions" />'));
        this.listenTo(this.model, 'change:status', function(model, status) {
          var approvalStatus, prevStatus;
          approvalStatus = status.approval_status;
          prevStatus = model.previous('status') || {};
          if (prevStatus.approval_status && prevStatus.approval_status === approvalStatus) {
            return;
          }
          if (approvalStatus.match(/^trash|spam$/)) {
            return _this.setUndoStatus(prevStatus.approval_status);
          }
        });
        this.listenTo(this.model, 'change', this.render);
        $(document).on('click', '.wpn-more > a', function(ev) {
          var $el;
          ev.preventDefault();
          ev.stopPropagation();
          if (ev.doneMoreToggle) {
            return;
          }
          ev.doneMoreToggle = true;
          $el = $(ev.currentTarget);
          $el.parent().find('.wpn-more-container').toggle();
          return false;
        });
        this;
        $(document).on('click', '.wpn-note-body', function(ev) {
          var $el, $note;
          $el = $(ev.target);
          if (($el.parents('.wpn-more').length)) {
            return;
          }
          $note = $el.closest('.wpn-note-body');
          if ($note.find('.wpn-more-container').is(':visible')) {
            $note.find('.wpn-more-container').toggle();
          }
        });
        this;
        $('.wpn-more-container:not(:has(*))').parents('.wpn-more').hide();
        $(document).on('keydown', function(keyEvent) {
          var keyCode, status, validActions;
          if (_this.$el.is(':hidden')) {
            return;
          }
          if (_this.mode !== 'buttons') {
            return;
          }
          keyCode = wpNotesCommon.getKeycode(keyEvent);
          if (!keyCode) {
            return;
          }
          validActions = _this.getValidActions();
          status = _this.model.get('status') || {};
          if (keyCode === 82) {
            if (_.contains(validActions, 'replyto-comment')) {
              _this.openReply(keyEvent);
            }
          }
          if (keyCode === 65) {
            if (_.contains(validActions, 'approve-comment')) {
              _this.modComment('approve-comment');
            } else if (_.contains(validActions, 'unapprove-comment')) {
              _this.modComment('unapprove-comment');
            }
          }
          if (keyCode === 76) {
            if (_.contains(validActions, 'like-comment')) {
              _this.likeComment('like-comment');
            } else if (_.contains(validActions, 'unlike-comment')) {
              _this.likeComment('unlike-comment');
            }
          }
          if (keyCode === 83) {
            if (_.contains(validActions, 'spam-comment')) {
              _this.modComment('spam-comment');
            } else if (_.contains(validActions, 'unspam-comment')) {
              _this.modComment('unspam-comment');
            }
          }
          if (keyCode === 84) {
            if (_.contains(validActions, 'trash-comment')) {
              _this.modComment('trash-comment');
            } else if (_.contains(validActions, 'untrash-comment')) {
              _this.modComment('untrash-comment');
            }
          }
          return false;
        });
        return this;
      },
      render: function() {
        var body;
        if (this.model._changing && 'reply' === this.mode) {
          return this;
        }
        this.$el.empty();
        body = this.model.get('body');
        if (!body.actions) {
          return this;
        }
        this.updateActionsMap();
        if (this.mode === 'buttons') {
          this.$el.html(this.createActionsHTML());
        } else {
          this.$el.html(this.createReplyBoxHTML());
          this.$('textarea').focus();
        }
        this.delegateEvents();
        return this;
      },
      setUndoStatus: function(status) {
        return this._undoStatus = status;
      },
      getUndoStatus: function() {
        var status;
        if (this._undoStatus) {
          return this._undoStatus;
        }
        status = this.model.get('status');
        if ((status != null) && status.undo_status === '1') {
          return 'approved';
        }
        return 'unapproved';
      },
      getValidActions: function() {
        var actions, status;
        status = this.model.get('status') || {};
        switch (status.approval_status) {
          case 'pending':
          case 'unapproved':
            return ['replyto-comment', 'approve-comment', 'spam-comment', 'trash-comment'];
          case 'approved':
            actions = ['replyto-comment', 'unapprove-comment', 'spam-comment', 'trash-comment'];
            if (status.i_liked) {
              actions.splice(1, 0, 'unlike-comment');
            } else {
              actions.splice(1, 0, 'like-comment');
            }
            return actions;
          case 'trash':
            return ['untrash-comment'];
          case 'spam':
            return ['unspam-comment'];
          default:
            return [];
        }
      },
      getResultantStatus: function(actionType) {
        switch (actionType) {
          case 'approve-comment':
            return 'approved';
          case 'unapprove-comment':
            return 'unapproved';
          case 'spam-comment':
            return 'spam';
          case 'trash-comment':
            return 'trash';
          case 'unspam-comment':
          case 'untrash-comment':
            return this.getUndoStatus();
          default:
            return void 0;
        }
      },
      getStatusParamFromActionType: function(actionType) {
        if (!actionType) {
          return void 0;
        }
        switch (actionType) {
          case 'approve-comment':
            return 'approved';
          case 'unapprove-comment':
            return 'unapproved';
          default:
            return actionType.split('-')[0];
        }
      },
      getComplementaryActionType: function(actionType) {
        switch (actionType) {
          case 'approve-comment':
            return 'unapprove-comment';
          case 'unapprove-comment':
            return 'approve-comment';
          case 'like-comment':
            return 'unlike-comment';
          case 'unlike-comment':
            return 'like-comment';
          case 'spam-comment':
            return 'unspam-comment';
          case 'trash-comment':
            return 'untrash-comment';
          case 'unspam-comment':
            return 'spam-comment';
          case 'untrash-comment':
            return 'trash-comment';
          default:
            return void 0;
        }
      },
      getTranslation: function(string) {
        if (typeof notes_i18n === 'undefined' || !notes_i18n.translate) {
          return string;
        }
        return notes_i18n.translate(string).fetch();
      },
      getTranslationsForActionType: function(actionType) {
        var gt;
        gt = this.getTranslation;
        if (!this._translationsByActionType) {
          this._translationsByActionType = {
            'approve-comment': {
              buttonText: gt('Approve'),
              titleText: gt('Approve this comment.')
            },
            'like-comment': {
              buttonText: gt('Like'),
              titleText: gt('Like this comment.')
            },
            'replyto-comment': {
              buttonText: gt('Reply'),
              titleText: gt('Reply to this comment.')
            },
            'spam-comment': {
              buttonText: gt('Spam'),
              titleText: gt('Mark this comment as spam.')
            },
            'trash-comment': {
              buttonText: gt('Trash'),
              titleText: gt('Move this comment to the trash.')
            },
            'unapprove-comment': {
              buttonText: gt('Unapprove'),
              titleText: gt('Unapprove this comment.')
            },
            'unlike-comment': {
              buttonText: gt('Liked'),
              titleText: gt('Unlike this comment.')
            },
            'unspam-comment': {
              buttonText: gt('Unspam'),
              titleText: gt('Unmark this comment as spam.')
            },
            'untrash-comment': {
              buttonText: gt('Untrash'),
              titleText: gt('Restore this comment from the trash.')
            }
          };
        }
        return this._translationsByActionType[actionType];
      },
      updateActionsMap: function() {
        var action, actionType, actions, body, _fn, _i, _j, _len, _len1, _ref, _results,
          _this = this;
        body = this.model.get('body');
        actions = body.actions || [];
        this.actionsByName = this.actionsByName || {};
        _fn = function(action) {
          if (!action.type || !action.params) {
            return;
          }
          return _this.actionsByName[action.type] = $.extend({}, action.params, {
            actionType: action.type
          });
        };
        for (_i = 0, _len = actions.length; _i < _len; _i++) {
          action = actions[_i];
          _fn(action);
        }
        _ref = this.possibleActions;
        _results = [];
        for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
          actionType = _ref[_j];
          _results.push((function(actionType) {
            var actionObj, complementObj, status, statusParam, submitText, translations;
            actionObj = _this.actionsByName[actionType];
            statusParam = _this.getStatusParamFromActionType(actionType);
            translations = _this.getTranslationsForActionType(actionType);
            if (!actionObj) {
              complementObj = _this.actionsByName[_this.getComplementaryActionType(actionType)];
              if (complementObj) {
                _this.actionsByName[actionType] = $.extend({}, complementObj, {
                  actionType: actionType,
                  ajax_arg: statusParam,
                  rest_body: {
                    status: statusParam
                  },
                  text: translations.buttonText,
                  title_text: translations.titleText
                });
              }
            }
            if (actionType === 'replyto-comment') {
              status = _this.model.get('status' || {});
              submitText = status.approval_status === 'approved' ? _this.getTranslation('Reply') : _this.getTranslation('Approve and Reply');
              return $.extend(_this.actionsByName['replyto-comment'], {
                button_text: translations.buttonText,
                submit_button_text: submitText,
                text: translations.buttonText,
                title_text: translations.titleText
              });
            }
          })(actionType));
        }
        return _results;
      },
      createActionsHTML: function() {
        var actionType, status, templateData, _fn, _i, _len, _ref,
          _this = this;
        status = this.model.get('status').approval_status;
        templateData = {};
        _ref = this.getValidActions();
        _fn = function(actionType) {
          var action, button_data;
          action = _this.actionsByName[actionType];
          if (!action) {
            return;
          }
          button_data = {
            "class": 'wpn-' + actionType + '-button',
            "actionType": actionType,
            "text": action.text || action.button_text
          };
          switch (actionType) {
            case 'replyto-comment':
              return templateData.reply = $.extend({}, button_data, {
                "class": 'wpn-replyto-comment-button-open',
                "title": (action.title_text || action.button_title_text) + ' [r]'
              });
            case 'like-comment':
            case 'unlike-comment':
              return templateData.like = $.extend({}, button_data, {
                "title": (action.title_text || action.button_title_text) + ' [l]'
              });
            case 'approve-comment':
            case 'unapprove-comment':
              if (_.contains(['spam', 'trash'], status)) {
                break;
              }
              return templateData.approve = $.extend({}, button_data, {
                "title": (action.title_text || action.button_title_text) + ' [a]'
              });
            case 'spam-comment':
            case 'unspam-comment':
              if (status === 'trash') {
                break;
              }
              return templateData.spam = $.extend({}, button_data, {
                "title": (action.title_text || action.button_title_text) + ' [s]'
              });
            case 'trash-comment':
            case 'untrash-comment':
              if (status === 'spam') {
                break;
              }
              return templateData.trash = $.extend({}, button_data, {
                "title": (action.title_text || action.button_title_text) + ' [t]'
              });
          }
        };
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          actionType = _ref[_i];
          _fn(actionType);
        }
        return Mustache.render(this.templateActions, templateData);
      },
      createReplyBoxHTML: function() {
        var action, blog_id, comment_id;
        action = this.actionsByName['replyto-comment'];
        if (!action) {
          return;
        }
        blog_id = action.site_id || 0;
        comment_id = this.model.id || 0;
        return Mustache.render(this.templateReply, {
          reply_header_text: action.reply_header_text,
          submit_button_text: action.submit_button_text
        });
      },
      closeReply: function(ev) {
        if (ev) {
          ev.preventDefault();
        }
        this.mode = 'buttons';
        this.model.currentReplyText = this.$el.children('.wpn-note-comment-reply').children('.wpn-note-comment-reply-text').val();
        this.render();
        return this.model.resize();
      },
      openReply: function(ev) {
        var action, gettingMentions, query_args,
          _this = this;
        if (ev) {
          ev.preventDefault();
        }
        this.mode = 'reply';
        this.render();
        this.$el.children('.wpn-note-comment-reply').children('.wpn-note-comment-reply-text').val(this.model.currentReplyText);
        $('.selected .wpn-note-body p.submitconfirm').remove();
        this.model.resize();
        if (!window.mentionDataCache) {
          window.mentionDataCache = [];
        }
        action = this.actionsByName['replyto-comment'];
        if (action.site_id != null) {
          if (window.mentionDataCache[action.site_id] != null) {
            return this.$el.children('.wpn-note-comment-reply').children('.wpn-note-comment-reply-text').mentions(window.mentionDataCache[action.site_id]);
          } else {
            window.mentionDataCache[action.site_id] = [];
            query_args = {
              site_id: action.site_id,
              client: 'notes-widget'
            };
            gettingMentions = wpNotesCommon.getMentions(query_args);
            return gettingMentions.done(function(res) {
              window.mentionDataCache[action.site_id] = res.suggestions;
              return _this.$el.children('.wpn-note-comment-reply').children('.wpn-note-comment-reply-text').mentions(window.mentionDataCache[action.site_id]);
            });
          }
        }
      },
      sendReply: function(ev) {
        var $submitWrap, action, blog_id, comment_id, comment_reply_el, content, doSend,
          _this = this;
        if (ev) {
          ev.preventDefault();
        }
        action = this.actionsByName['replyto-comment'];
        if (!action) {
          return $.Deferred().reject('Invalid replyto-comment action');
        }
        comment_reply_el = this.$el.children('.wpn-note-comment-reply');
        this.model.currentReplyText = comment_reply_el.children('.wpn-note-comment-reply-text').val();
        blog_id = action.site_id || 0;
        comment_id = action.comment_id || 0;
        content = this.model.currentReplyText || 0;
        if (!(blog_id && comment_id && content)) {
          return $.Deferred().reject('Invalid sendReply params');
        }
        $submitWrap = comment_reply_el.children('.wpn-comment-submit');
        $submitWrap.children('.wpn-comment-submit-error').hide();
        $submitWrap.children('.wpn-comment-reply-button-send').hide();
        $submitWrap.children('.wpn-comment-submit-waiting').gifspin('small').show();
        wpNotesCommon.bumpStat('notes-click-action', 'replyto-comment');
        doSend = function() {
          return wpNotesCommon.ajax({
            type: 'POST',
            path: '/sites/' + blog_id + '/comments/' + comment_id + '/replies/new',
            data: {
              content: content
            },
            success: function(r) {
              if (typeof r === 'string') {
                _this.errorReply(r);
                return false;
              }
              _this.closeReply();
              _this.model.currentReplyText = '';
              return _this.model.reload(true).done(function() {
                var tries;
                if (!_this.model.get('status').i_replied) {
                  tries = 0;
                  return _this.replyCommentInterval = setInterval(function() {
                    return _this.model.reload(true).done(function() {
                      if (_this.model.get('status').i_replied || tries++ >= 10) {
                        return clearInterval(_this.replyCommentInterval);
                      }
                    });
                  }, 3000);
                }
              });
            },
            error: function(r) {
              return _this.errorReply(r);
            }
          }).done(function() {
            var commentPermalink, submitConfirm;
            commentPermalink = $('.selected .wpn-comment-date a').attr('href');
            submitConfirm = '<p class="submitconfirm"><strong>';
            submitConfirm += notes_i18n.translate('Reply successful, <a %s>view thread</a>').fetch('target="_blank" href="' + commentPermalink + '"');
            submitConfirm += '</strong></p>';
            return $('.selected .wpn-note-body').append(submitConfirm);
          });
        };
        if (this.model.get('status').approval_status !== 'approved') {
          return this.modComment('approve-comment').done(doSend);
        } else {
          return doSend();
        }
      },
      errorReply: function(r) {
        var comment_reply_el, er, o;
        er = r;
        if (typeof r === 'object') {
          if (r.responseText) {
            o = $.parseJSON(r.responseText);
            er = o.error + ': ' + o.message;
          } else if (r.statusText) {
            er = r.statusText;
          } else {
            er = 'Unknown Error';
          }
        }
        comment_reply_el = this.$el.children('.wpn-note-comment-reply');
        comment_reply_el.children('.wpn-comment-submit').children('.wpn-comment-submit-waiting').hide();
        if (er) {
          return comment_reply_el.children('.wpn-comment-submit').children('.wpn-comment-submit-error').text(er).show();
        }
      },
      clickModComment: function(ev) {
        if (ev) {
          ev.preventDefault();
        } else {
          return $.Deferred.reject('invalid click event');
        }
        return this.modComment($(ev.currentTarget).data('action-type'));
      },
      modComment: function(actionType) {
        var moderating,
          _this = this;
        this.$('.wpn-comment-mod-waiting').show().gifspin('small');
        moderating = $.Deferred().always(function() {
          return _this.$('.wpn-comment-mod-waiting').empty().hide();
        }).fail(function(error, code) {
          if ((typeof console !== "undefined" && console !== null) && typeof console.error === 'function') {
            console.error('Comment moderation error');
            if (error) {
              console.error(error);
            }
          }
          if (!code || code !== 'too_soon') {
            return _this.model.reload();
          }
        });
        if (this.modPromise && typeof this.modPromise.state === 'function' && this.modPromise.state() === 'pending') {
          moderating.always(function() {
            return _this.$('.wpn-comment-mod-waiting').show().gifspin('small');
          });
          return moderating.reject('Moderation already in progress', 'too_soon');
        }
        this.modPromise = moderating.promise();
        if (!actionType || !actionType.length || !_.contains(this.getValidActions(), actionType)) {
          return moderating.reject('Invalid actionType');
        }
        $.Deferred(function() {
          var action, anticipatedNewStatus;
          wpNotesCommon.bumpStat('notes-click-action', actionType);
          action = _this.actionsByName[actionType];
          if (!action) {
            return moderating.reject('Undefined action params for type: ' + actionType);
          }
          anticipatedNewStatus = _this.getResultantStatus(actionType);
          if (anticipatedNewStatus) {
            _this.model.set('status', $.extend({}, _this.model.get('status'), {
              approval_status: anticipatedNewStatus
            }));
            _this.$('.wpn-comment-mod-waiting').show().gifspin('small');
          }
          return wpNotesCommon.ajax({
            type: 'POST',
            path: action.rest_path,
            data: action.rest_body
          }).done(function(r) {
            var rStatus;
            rStatus = (r != null ? r.status : void 0) ? r.status : 'undefined';
            if (_.contains(_this.possibleStatuses, rStatus)) {
              _this.model.set('status', $.extend({}, _this.model.get('status'), {
                approval_status: rStatus
              }));
              _this.model.blockReloading(15);
              return moderating.resolve();
            } else {
              return moderating.reject('Invalid status: "' + rStatus + '" received from moderation POST');
            }
          }).fail(function(error) {
            return moderating.reject(error);
          });
        });
        return this.modPromise;
      },
      clickLikeComment: function(ev) {
        var $button, actionType;
        ev.preventDefault();
        $button = $(ev.currentTarget);
        actionType = $button.data('action-type');
        return this.likeComment(actionType);
      },
      likeComment: function(actionType) {
        var action, i_liked, rest_path,
          _this = this;
        action = this.actionsByName[actionType];
        if ('like-comment' === actionType) {
          i_liked = true;
          rest_path = action.rest_path + 'new/';
        } else {
          i_liked = false;
          rest_path = action.rest_path + 'mine/delete/';
        }
        this.model.set('status', $.extend({}, this.model.get('status'), {
          i_liked: i_liked
        }));
        this.$('.wpn-comment-mod-waiting').show().gifspin('small');
        return wpNotesCommon.ajax({
          type: 'POST',
          path: rest_path
        }).done(function(r) {
          return _this.$('.wpn-comment-mod-waiting').empty().hide();
        });
      }
    });
})(jQuery);

(function() {
  (function(window, $) {
    /*
    	 * Show an animated gif spinner
    	 * Replaces the contents of the selected jQuery elements with the image
    */

    return $.fn.gifspin = function(size) {
      var $el, $spinner, len;
      $el = $(this);
      if (_.isFinite(size) && size > 0) {
        len = Math.min(~~size, 128);
      } else {
        switch (size) {
          case 'tiny':
            len = 8;
            break;
          case 'small':
            len = 16;
            break;
          case 'medium':
            len = 32;
            break;
          case 'large':
            len = 64;
            break;
          default:
            len = 128;
        }
      }
      $spinner = $('<img class="gifspinner" src="//s0.wp.com/wp-content/mu-plugins/notes/images/loading.gif" />');
      $spinner.css({
        height: len,
        width: len
      });
      $el.html($spinner);
      return $el;
    };
  })(typeof exports !== "undefined" && exports !== null ? exports : this, window.jQuery);

}).call(this);
;
if ( 'undefined' == typeof wpcom ) {
	wpcom = {};
}
if ( 'undefined' == typeof wpcom.events ) {
	wpcom.events = _.extend( {}, Backbone.Events );
}
(function($) {
	if ( ! window.wpNotesArgs ) {
		console.warn( 'Missing data from PHP (wpNotesArgs).' )
	}
	var wpNotesArgs = window.wpNotesArgs || {},
		cacheBuster = wpNotesArgs.cacheBuster || 'none', // The main cache buster _should_ always be defined.
		iframeUrl = wpNotesArgs.iframeUrl || 'https://widgets.wp.com/notes/',
		iframeAppend = wpNotesArgs.iframeAppend || '',
		iframeScroll = wpNotesArgs.iframeScroll || "no",
		wideScreen = wpNotesArgs.wide || false,
		hasToggledPanel = false,
		iframePanelId, iframeFrameId;

	var wpntView = Backbone.View.extend({
		el: '#wp-admin-bar-notes',
		hasUnseen: null,
		initialLoad: true,
		count: null,
		iframe: null,
		iframeWindow: null,
		messageQ: [],
		iframeSpinnerShown: false,
		isJetpack: false,
		linkAccountsURL: false,
		currentMasterbarActive: false,

		initialize: function() {
			var t = this;

			// graceful fallback for IE <= 7
			var matches = navigator.appVersion.match( /MSIE (\d+)/ );
			if ( matches && parseInt( matches[1], 10 ) < 8 ) {
				var $panel = t.$( '#'+iframePanelId );
				var $menuItem = t.$( '.ab-empty-item' );
				if ( !$panel.length || !$menuItem.length ) {
					return;
				}
				var offset = t.$el.offset();

				t.$( '.ab-item' ).removeClass( 'ab-item' );
				t.$( '#wpnt-notes-unread-count' ).html( '?' );

				// @todo localize
				$panel.html( ' \
					<div class="wpnt-notes-panel-header"><p>Notifications are not supported in this browser!</p> </div> \
					<img src="http://i2.wp.com/wordpress.com/wp-content/mu-plugins/notes/images/jetpack-notes-2x.png" /> \
					<p class="wpnt-ie-note"> \
					Please <a href="http://browsehappy.com" target="_blank">upgrade your browser</a> to keep using notifications. \
					</p>'
				).addClass( 'browse-happy' );

				t.$el.on( 'mouseenter', function(e) {
					clearTimeout( t.fadeOutTimeout );
					if ( $panel.is( ':visible:animated' ) ) {
						$panel.stop().css( 'opacity', '' );
					}
					$menuItem.css({ 'background-color': '#eee' });
					$panel.show();
				});

				t.$el.on( 'mouseleave', function() {
					t.fadeOutTimeout = setTimeout( function() {
						clearTimeout( t.fadeOutTimeout );
						if ( $panel.is( ':animated' ) ) {
							return;
						}
						$panel.fadeOut( 250, function() {
							$menuItem.css({ 'background-color': 'transparent' });
						});
					}, 350 );
				});

				return;
			}

			// don't break notifications if jquery.spin isn't available
			if ( 'function' != typeof $.fn.spin ) {
				$.fn.spin = function(x){};
			}
			this.isRtl = $('#wpadminbar').hasClass('rtl');
			this.count = $('#wpnt-notes-unread-count');
			this.panel = $( '#'+iframePanelId );
			this.hasUnseen = this.count.hasClass( 'wpn-unread' );
			if ( 'undefined' != typeof wpNotesIsJetpackClient && wpNotesIsJetpackClient )
				t.isJetpack = true;
			if ( t.isJetpack && 'undefined' != typeof wpNotesLinkAccountsURL )
				t.linkAccountsURL = wpNotesLinkAccountsURL;

			this.$el.children('.ab-item').on( 'click touchstart', function(e){
				e.preventDefault();
				t.togglePanel();

				return false;
			} );

			this.preventDefault = function(e) {
				if (e) e.preventDefault();
				return false;
			};

			if ( iframeAppend == '2' ) {
				// Disable scrolling on main page when cursor in notifications
				this.panel.mouseenter( function() {
					document.body.addEventListener( 'mousewheel', t.preventDefault );
				});
				this.panel.mouseleave( function() {
					document.body.removeEventListener( 'mousewheel', t.preventDefault );
				});

				if ( typeof document.hidden !== 'undefined' ) {
					document.addEventListener( 'visibilitychange', function() {
						t.postMessage( { action: "toggleVisibility", hidden: document.hidden } );
					} );
				}
			}

			// Click outside the panel to close the panel.
			$(document).bind( "mousedown focus", function(e) {
				var $clicked;

				// Don't fire if the panel isn't showing
				if ( ! t.showingPanel )
					return true;

				$clicked = $(e.target);

				/**
				 * Don't fire if there's no real click target
				 * Prevents Firefox issue described here: http://datap2.wordpress.com/2013/08/15/running-in-to-some-strange/
				 */
				if ( $clicked.is( document ) )
					return true;

				// Don't fire on clicks in the panel.
				if ( $clicked.closest( '#wp-admin-bar-notes' ).length )
					return true;

				t.hidePanel();
				return false;
			});

			$(document).on( 'keydown.notes', function (e) {
				var keyCode = wpNotesCommon.getKeycode( e );
				if ( !keyCode )
					return;

				if ( ( keyCode == 27 ) ) //ESC close only
					t.hidePanel();
				if ( ( keyCode == 78 ) ) //n open/close
					t.togglePanel();

				//ignore other commands if the iframe hasn't been loaded yet
				if ( this.iframeWindow === null )
					return;

				/**
				 * @TODO these appear to be unnecessary as the iframe doesn't
				 *       listen for these actions and doesn't appear to need
				 *       to. it handles its own keyboard trapping
				 */
				if ( t.showingPanel && ( ( keyCode == 74 ) || ( keyCode == 40  ) ) ) { //j and down arrow
					t.postMessage( { action:"selectNextNote" } );
					return false; //prevent default
				}
				if ( t.showingPanel && ( ( keyCode == 75 ) || ( keyCode == 38  ) ) ) { //k and up arrow
					t.postMessage( { action:"selectPrevNote" } );
					return false; //prevent default
				}

				if ( t.showingPanel && ( ( keyCode == 82 ) || ( keyCode == 65  ) ||
					( keyCode == 83  ) || ( keyCode == 84  ) ) ) { //mod keys (r,a,s,t) to pass to iframe
					t.postMessage( { action:"keyEvent", keyCode: keyCode } );
					return false; //prevent default
				}
				/**
				 * End TODO section
				 */
			});

			if( wpcom.events ){
				wpcom.events.on( 'notes:togglePanel', function() {
					t.togglePanel();
				} );
			}

			if ( t.isJetpack )
				t.loadIframe();
			else {
				setTimeout(function() {
					t.loadIframe();
				}, 3000);
			}

			if ( t.count.hasClass( 'wpn-unread' ) )
				wpNotesCommon.bumpStat( 'notes-menu-impressions', 'non-zero' );
			else
				wpNotesCommon.bumpStat( 'notes-menu-impressions', 'zero' );

			// listen for postMessage events from the iframe
			$(window).on( 'message', function( event ) {
				if ( !event.data && event.originalEvent.data ) {
					event = event.originalEvent;
				}
				if ( event.origin != 'https://widgets.wp.com' ) {
					return;
				}
				try {
					var data = ( 'string' == typeof event.data ) ? JSON.parse( event.data ) : event.data;

					if ( data.type != 'notesIframeMessage' ) {
						return;
					}
					t.handleEvent( data );
				} catch(e){}
			});
		},

		// Done this way, "this" refers to the wpntView object instead of the window.
		handleEvent: function( event ) {

			var inNewdash = ( 'undefined' !== typeof wpcomNewdash && 'undefined' !== typeof wpcomNewdash.router && 'undefined' !== wpcomNewdash.router.setRoute );

			if ( !event || !event.action ) {
				return;
			}
			switch ( event.action ) {
				case "togglePanel":
					this.togglePanel();
					break;
				case "render":
					this.render( event.num_new, event.latest_type );
					break;
				case "renderAllSeen":
					this.renderAllSeen();
					break;
				case "iFrameReady":
					this.iFrameReady(event);
					break;
				/**
				 * @TODO I don't think this action is fired anymore
				 */
				case "goToNotesPage":
					if ( inNewdash ) {
						wpcomNewdash.router.setRoute( '/notifications' );
					} else {
						window.location.href = '//wordpress.com/me/notifications/';
					}
					break;
				/**
				 * End TODO section
				 */
				case "widescreen":
					var iframe = $( '#'+iframeFrameId );
					if ( event.widescreen && ! iframe.hasClass( 'widescreen' ) ) {
						iframe.addClass( 'widescreen' );
					} else if ( ! event.widescreen && iframe.hasClass( 'widescreen' ) ) {
						iframe.removeClass( 'widescreen' );
					}
					break;
			}
		},

		render: function( num_new, latest_type ) {
			var t = this, flash = false;

			if ( ( false === this.hasUnseen ) && ( 0 === num_new ) )
				return;

			//assume the icon is correct on initial load, prevents fading in and out for no reason
			if ( this.initialLoad && this.hasUnseen && ( 0 !== num_new ) ) {
				this.initialLoad = false;
				return;
			}

			if ( ! this.hasUnseen && ( 0 !== num_new ) ) {
				wpNotesCommon.bumpStat( 'notes-menu-impressions', 'non-zero-async' );
			}

			var latest_icon_type = wpNotesCommon.noteType2Noticon[ latest_type ];
			if ( typeof latest_icon_type == 'undefined' )
				latest_icon_type = 'notification';

			var latest_img_el = $('<span/>', {
				'class' : 'noticon noticon-' + latest_icon_type + ''
			});

			var status_img_el = this.getStatusIcon( num_new );

			if ( 0 === num_new || this.showingPanel ) {
				this.hasUnseen = false;
				t.count.fadeOut( 200, function() {
					t.count.empty();
					t.count.removeClass('wpn-unread').addClass('wpn-read');
					t.count.html( status_img_el );
					t.count.fadeIn( 500 );
				} );

				if ( wpcom && wpcom.masterbar ) {
					wpcom.masterbar.hasUnreadNotifications( false );
				}
			} else {
				if ( this.hasUnseen ) {
					// Blink the indicator if it's already on
					t.count.fadeOut( 400, function() {
						t.count.empty();
						t.count.removeClass('wpn-unread' ).addClass('wpn-read');
						t.count.html( latest_img_el );
						t.count.fadeIn( 400 );
					} );
				}
				this.hasUnseen = true;
				t.count.fadeOut( 400, function() {
					t.count.empty();
					t.count.removeClass('wpn-read').addClass('wpn-unread');
					t.count.html( latest_img_el );
					t.count.fadeIn( 400, function() { });
				});

				if ( wpcom && wpcom.masterbar ) {
					wpcom.masterbar.hasUnreadNotifications( true );
				}
			}
		},

		renderAllSeen: function() {
			if ( !this.hasToggledPanel ) {
				return;
			}

			var img_el = this.getStatusIcon(0);
			this.count.removeClass('wpn-unread').addClass('wpn-read');
			this.count.empty();
			this.count.html( img_el );
			this.hasUnseen = false;

			if ( wpcom && wpcom.masterbar ) {
				wpcom.masterbar.hasUnreadNotifications( false );
			}
		},

		getStatusIcon: function( number ) {
			var new_icon = '';
			switch ( number ) {
				case 0:
					new_icon = 'noticon noticon-notification';
					break;
				case 1:
					new_icon = 'noticon noticon-notification';
					break;
				case 2:
					new_icon = 'noticon noticon-notification';
					break;
				default:
					new_icon = 'noticon noticon-notification';
			}

			return $('<span/>', {
				'class' : new_icon
			});
		},

		togglePanel: function() {
			if ( !this.hasToggledPanel ) {
				this.hasToggledPanel = true;
			}
			var t = this;
			this.loadIframe();

			// temp hack until 3.3 merge to highlight toolbar number
			//this.$el.removeClass('wpnt-stayopen');
			this.$el.toggleClass('wpnt-stayopen');
			this.$el.toggleClass('wpnt-show');
			this.showingPanel = this.$el.hasClass('wpnt-show');

			$( '.ab-active' ).removeClass( 'ab-active' );

			if ( this.showingPanel ) {
				var $unread = this.$( '.wpn-unread' );
				if ( $unread.length ) {
					$unread.removeClass( 'wpn-unread' ).addClass( 'wpn-read' );
				}
				this.reportIframeDelay();
				if ( this.hasUnseen )
					wpNotesCommon.bumpStat( 'notes-menu-clicks', 'non-zero' );
				else
					wpNotesCommon.bumpStat( 'notes-menu-clicks', 'zero' );

				this.hasUnseen = false;
			}

			// tell the iframe we are opening it
			this.postMessage( { action:"togglePanel", showing:this.showingPanel } );

			var focusNotesIframe = function( iframe ) {
				if ( null === iframe.contentWindow ) {
					iframe.addEventListener( 'load', function() {
						iframe.contentWindow.focus();
					} );
				} else {
					iframe.contentWindow.focus();
				}
			};

			if ( this.showingPanel ) {
				focusNotesIframe( this.iframe[0] );
			} else {
				window.focus();
			}

			this.setActive( this.showingPanel );
		},

		// Handle juggling the .active state of the masterbar
		setActive: function( active ) {
			if ( active ) {
				this.currentMasterbarActive = $( '.masterbar li.active' );
				this.currentMasterbarActive.removeClass( 'active' );
				this.$el.addClass( 'active' );
			} else {
				this.$el.removeClass( 'active' );
				if ( this.currentMasterbarActive ) {
					this.currentMasterbarActive.addClass( 'active' );
				}
				this.currentMasterbarActive = false;
			}
			this.$el.find( 'a' ).first().blur();
		},

		loadIframe: function() {
			var t = this,
				args = [],
				src,
				lang,
				queries,
				panelRtl;

			if ( t.iframe === null ) {
				// Removed spinner here because it shows up so briefly, and is replaced by the iframe spinner in a different spot
				// t.panel.addClass('loadingIframe').find('.wpnt-notes-panel-header').spin('large');
				t.panel.addClass('loadingIframe');

				if ( t.isJetpack ) {
					args.push( 'jetpack=true' );
					if ( t.linkAccountsURL ) {
						args.push( 'link_accounts_url=' + escape( t.linkAccountsURL ) );
					}
				}

				// Attempt to detect if browser is a touch device, similar code
				// in Calypso. The class adds CSS needed for mobile Safari to allow
				// scrolling of iframe.
				if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
					t.panel.addClass( 'touch' );
				}

				panelRtl = $( '#'+iframePanelId ).attr( 'dir' ) == 'rtl';
				lang = $( '#'+iframePanelId ).attr( 'lang' ) || 'en';
				args.push( 'v=' + cacheBuster );
				args.push( 'locale=' + lang );
				queries = ( args.length ) ? '?' + args.join( '&' ) : '';
				src = iframeUrl;
				if ( iframeAppend == '2' && ( t.isRtl || panelRtl ) && ! /rtl.html$/.test(iframeUrl) ) {
					src = iframeUrl + 'rtl.html';
				}
				src = src + queries + '#' + document.location.toString();
				if ( $( '#'+iframePanelId ).attr( 'dir' ) == 'rtl' ) {
					src += '&rtl=1';
				}
				if ( !lang.match( /^en/ ) ) {
					src += ( '&lang=' + lang );
				}

				// Add the iframe (invisible until iFrameReady)
				t.iframe = $('<iframe style="display:none" id="' +iframeFrameId+ '" frameborder=0 ALLOWTRANSPARENCY="true" scrolling="' +iframeScroll+ '"></iframe>');
				t.iframe.attr( 'src', src );

				if ( wideScreen ) {
					t.panel.addClass( 'wide' );
					t.iframe.addClass( 'wide' );
				}

				// This stops twenty-twenty from wreaking its madness upon the iframe.
				// @see https://opengrok.a8c.com/source/xref/pub/twentytwenty/assets/js/index.js?r=59938#314
				t.iframe.addClass( 'intrinsic-ignore' );
				t.panel.append(t.iframe);
			}
		},

		reportIframeDelay: function() {
			if ( !this.iframeWindow ) {
				if ( !this.iframeSpinnerShown )
					this.iframeSpinnerShown = (new Date()).getTime();
				return;
			}
			if ( this.iframeSpinnerShown !== null ) {
				var delay = 0;
				if ( this.iframeSpinnerShown )
					delay = (new Date()).getTime() - this.iframeSpinnerShown;
				if ( delay === 0 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '0' );
				else if ( delay < 1000 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '0-1' );
				else if ( delay < 2000 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '1-2' );
				else if ( delay < 4000 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '2-4' );
				else if ( delay < 8000 )
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '4-8' );
				else
					wpNotesCommon.bumpStat( 'notes_iframe_perceived_delay', '8-N' );
				this.iframeSpinnerShown = null;
			}
		},

		iFrameReady: function(event) {
			var t = this;
			var url_parser = document.createElement( 'a' );
			url_parser.href = this.iframe.get(0).src;
			this.iframeOrigin = url_parser.protocol + '//' + url_parser.host;
			this.iframeWindow = this.iframe.get(0).contentWindow;

			if ( "num_new" in event )
				this.render( event.num_new, event.latest_type );
			this.panel.removeClass('loadingIframe').find('.wpnt-notes-panel-header').remove();
			this.iframe.show();
			if ( this.showingPanel )
				this.reportIframeDelay();

			// detect user activity and trigger a refresh event in the iframe
			$( window ).on( 'focus keydown mousemove scroll', function() {
				// Throttle postMessages since the overhead is pretty high & these events fire a lot
				var now = ( new Date() ).getTime();
				if ( !t.lastActivityRefresh || t.lastActivityRefresh < now - 5000 ) {
					t.lastActivityRefresh = now;
					t.postMessage( { action: "refreshNotes" } );
				}
			} );

			this.sendQueuedMessages();
		},

		hidePanel: function() {
			if ( this.showingPanel ) {
				this.togglePanel();
			}
		},

		postMessage: function( message ) {
			var t = this;
			try{
				var _msg = ( 'string' == typeof message ) ? JSON.parse( message ) : message;
				if ( !_.isObject( _msg ) ) {
					return;
				}

				_msg = _.extend( { type: 'notesIframeMessage' }, _msg );

				var targetOrigin = this.iframeOrigin;
				if ( this.iframeWindow && this.iframeWindow.postMessage ) {
					this.iframeWindow.postMessage( JSON.stringify( _msg ), targetOrigin );
				} else {
					this.messageQ.push( _msg );
				}
			}
			catch(e){}
		},

		sendQueuedMessages: function() {
			var t = this;
			_.forEach( this.messageQ, function( m ) {
				t.postMessage( m );
			} );
			this.messageQ = [];
		}

	});

	$(function(){
		if ( ( $( '#wpnt-notes-panel' ).length == 0 && $( '#wpnt-notes-panel2' ).length ) &&
			( 'undefined' != typeof wpNotesIsJetpackClientV2 && wpNotesIsJetpackClientV2 ) ) {
			iframeUrl = 'https://widgets.wp.com/notifications/';
			iframeAppend = '2';
			iframeScroll = 'yes';
			wideScreen = true;
		}

		iframePanelId = "wpnt-notes-panel" + iframeAppend;
		iframeFrameId = "wpnt-notes-iframe" + iframeAppend;

		new wpntView();
	});
})(jQuery);
;
