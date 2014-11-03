// Bobril.min.js
Array.prototype.map||(Array.prototype.map=function(e,t){var n,r,i;if(null==this)throw new TypeError("this==null");var l=Object(this),o=l.length>>>0;if("function"!=typeof e)throw new TypeError(e+" isn't func");for(arguments.length>1&&(n=t),r=Array(o),i=0;o>i;){var a,f;i in l&&(a=l[i],f=e.call(n,a,i,l),r[i]=f),i++}return r}),Object.create||(Object.create=function(e){function t(){}return t.prototype=e,new t}),b=function(e,t,n){function r(e,t,r,i){if(!r)return n;for(var l in r){var o=r[l],a=i[l];if(a===n||a!==o)if(i[l]=o,"style"===l){var f;if(a){for(f in o){var u=o[f];a[f]!==u&&(t.style[f]=u)}for(f in a)f in o||(t.style[f]="")}else for(f in o)t.style[f]=o[f]}else if(O)"href"===l?t.setAttributeNS("http://www.w3.org/1999/xlink","href",o):"className"===l?t.setAttribute("class",o):t.setAttribute(l,o);else if("value"===l&&l in t){var c=t[l];a===n&&(e.ctx.b$value=o),o!==c&&(a===n||c===a?t[l]=o:b("input",null,t,e))}else l in t&&"list"!==l&&"form"!==l?t[l]=o:t.setAttribute(l,o)}return i}function i(e){var n=e,i=O,l=D,a=n.component;return a&&(n.ctx={data:n.data||{}},a.init&&a.init(n.ctx,e)),""===e.tag?(n.element=t.createTextNode(""+n.content),n):"/"===e.tag?n:(D||"svg"===e.tag?(n.element=t.createElementNS("http://www.w3.org/2000/svg",e.tag),O=!0,D=!0):n.element=t.createElement(e.tag),o(n),n.attrs=r(n,n.element,n.attrs,{}),O=i,D=l,u(n),n)}function l(e){var t=typeof e;return"string"==t||"number"==t?{tag:"",content:e}:"boolean"==t?null:e}function o(e){var t=e.children;if(t){T(t)||(t=[t]);for(var n=0,r=t.length;r>n;){var o=t[n];if(T(o))t.splice.apply(t,[n,1].concat(o)),r=t.length;else if(o=l(o),null!=o){var a=t[n]=i(o);if("/"===a.tag){var f=e.element.lastChild;for(e.element.insertAdjacentHTML("beforeend",a.content),a.element=[],f=f?f.nextSibling:e.element.firstChild;f;)f[E]=a,a.element.push(f),f=f.nextSibling}else e.element.appendChild(a.element);n++}else t.splice(n,1),r--}e.children=t}}function a(e){var t=e.children;if(t)for(var n=0,r=t.length;r>n;n++)a(t[n]);var i=e.component;if(i&&i.destroy&&i.destroy(e.ctx,e,e.element),""!==e.tag){var l=e.element;if(T(l))for(var o=0;o<l.length;o++)l[o][E]=null;else l[E]=null}}function f(e){a(e);var t=e.element;if(T(t)){var n=t[0].parentNode;if(n)for(var r=0;r<t.length;r++)n.removeChild(t[r])}else{var i=t.parentNode;i&&i.removeChild(t)}}function u(e){e.element[E]=e;var t=e.component;t&&t.postInitDom&&(L.push(!1),H.push(e))}function c(e){var t=e.component;t&&t.postUpdateDom&&(L.push(!0),H.push(e))}function s(e){return e[E]}function p(e,n){var l=e.component,o=O,a=D;if(l){if(l.shouldChange&&!l.shouldChange(n.ctx,e,n))return n;n.ctx.data=e.data||{},n.component=l,l.init&&l.init(n.ctx,e,n)}if("/"===e.tag){var u=n.element;T(u)&&(u=u[0]);var s=u.previousSibling,p=!1,v=u.parentNode;u.insertAdjacentHTML||(u=v.insertBefore(t.createElement("i"),u),p=!0),u.insertAdjacentHTML("beforebegin",e.content),s=s?s.nextSibling:v.firstChild;for(var d=[];s!==u;)s[E]=e,d.push(s),s=s.nextSibling;return e.element=d,p&&v.removeChild(u),f(n),e}if(e.tag===n.tag&&(D||!O))if(""===e.tag){if(n.content===e.content)return n;if(n.content=e.content,"textContent"in n.element)return n.element.textContent=""+n.content,n}else{if("svg"===e.tag&&(O=!0,D=!0),!e.attrs&&!n.attrs||e.attrs&&n.attrs&&B(e.attrs).join()===B(n.attrs).join()&&e.attrs.id===n.attrs.id)return m(e,n),n.attrs&&(n.attrs=r(n,n.element,e.attrs,n.attrs)),O=o,D=a,c(n),n;D=a,O=o}var h=i(e),y=n.element.parentNode;return y&&y.insertBefore(h.element,n.element),f(n),h}function v(){for(var e=H.length,t=0;e>t;t++){var n;L[t]?(n=H[t],n.component.postUpdateDom(n.ctx,n,n.element)):(n=H[t],n.component.postInitDom(n.ctx,n,n.element))}L=[],H=[]}function m(e,t){t.children=d(t.element,e.children,t.children)}function d(e,t,r){t=t||[],T(t)||(t=[t]),r=r||[];for(var o=t.length,a=r.length,u=0;o>u;){var c=t[u];T(c)?(t.splice.apply(t,[u,1].concat(c)),o=t.length):(c=l(c),null!=c?(t[u]=c,u++):t.splice(u,1))}var s=a>o?o:a;for(u=0;s>u&&t[u].key===r[u].key;u++)r[u]=p(t[u],r[u]);if(u===s){for(;o>u;)r.push(i(t[u])),e.appendChild(r[u].element),u++;for(;a>u;)a--,f(r[a]),r.pop()}else{var v,m,d,h={},y={},g=u,b=0;for(v=g;a>v;v++)d=r[v],m=d.key,null!=m?h[m]=v:b--;for(;o>u;u++)d=t[u],m=d.key,null!=m?y[m]=u:b++;var k=0;u=g,v=g;for(var w;a>v&&o>u;)if(null!==r[v])if(w=r[v].key,null!=w){if(m=t[u].key,null==m){for(u++;o>u&&(m=t[u].key,null==m);)u++;if(null==m)break}var x=h[m];x!==n?w in y?v===x+k?(r[v]=p(t[u],r[v]),u++,v++):(r.splice(v,0,r[x+k]),k++,r[x+k]=null,e.insertBefore(r[v].element,r[v+1].element),r[v]=p(t[u],r[v]),v++,a++,u++):(f(r[v]),r.splice(v,1),k--,a--):(r.splice(v,0,i(t[u])),e.insertBefore(r[v].element,r[v+1].element),k++,u++,v++,a++)}else v++;else r.splice(v,1),a--,k--;for(;a>v;)null!==r[v]?null==r[v].key?v++:(f(r[v]),r.splice(v,1),a--):(r.splice(v,1),a--);for(;o>u;)m=t[u].key,null!=m&&(r.push(i(t[u])),e.insertBefore(r[v].element,v==a?null:r[v+1].element),k++,v++,a++),u++;for(u=v=g;o>u;)if(a>v&&(w=r[v].key,null!=w))v++;else if(m=t[u].key,a>u&&m===r[u].key){if(null!=m){u++;continue}r[u]=p(t[u],r[u]),u++,u>v&&(v=u)}else if(null==m)if(a>v){if(r.splice(u,0,r[v]),r.splice(v+1,1),null!=m){for(u++;o>u&&(m=t[u].key,null!=m););if(null!=m)break}r[v]=p(t[u],r[v]),u++,v++}else r.splice(u,0,i(t[u])),e.insertBefore(r[u].element,u==a?null:r[u+1].element),u++,v++,a++;else{if(o-u-b==a-v){for(;;)if(f(r[v]),r.splice(v,1),a--,b++,null!=r[v].key)break;continue}for(;null==r[v].key;)v++;r.splice(u,0,r[v]),r.splice(v+1,1),e.insertBefore(r[u].element,r[u+1].element),u++,v=u}for(;a>u;)a--,f(r[a]),r.pop()}return r}function h(t){if(M)P(t);else{var n=50/3+z-q();0>n&&(n=0),e.setTimeout(function(){z=q(),t(z-F)},n)}}function y(){J||(J=!0,h(A))}function g(e,t,n){var r=$[e]||[];r.push({priority:t,callback:n}),$[e]=r}function b(e,t,n,r){var i=U[e];if(i)for(var l=0;l<i.length&&!i[l](t,n,r);l++);}function k(t,n){function r(t){t=t||e.event;var r=t.target||t.srcElement,i=s(r);b(n,t,r,i)}t.addEventListener?t.addEventListener(n,r):t.attachEvent("on"+n,r)}function w(){if(!K){K=!0;for(var e=B($),n=0;n<e.length;n++){var r=e[n],i=$[r];i=i.sort(function(e,t){return e.priority-t.priority}),U[r]=i.map(function(e){return e.callback})}$=null;for(var l=t.body,o=0;o<e.length;o++)k(l,e[o])}}function x(e){I=e,y()}function A(e){w(),Q=e,J=!1;var n=I();G=d(t.body,n,G),v()}function C(e,t,n){for(;e;){var r=e.component;if(r){var i=r[t];if(i&&i.call(r,e.ctx,n))return!0}var l=e.element.parentNode;e=l?s(l):null}return!1}function N(e,t){var n=this;return function(){var r=e.apply(n,arguments);return r===!0?r:t.apply(n,arguments)}}function j(e,t){var n=e.component;if(!n)return e.component=t,e;var r,i=t.id;if(i&&(i="b$a"+i,r=n[i]))return e.component=r,e;r=Object.create(n);for(var l in t)if(t.hasOwnProperty(l)&&"id"!==l){var o=t[l],a=n[l];r[l]="function"==typeof o&&a?N(a,o):o}return i&&(n[i]=r),e.component=r,e}var E="data-bobril",S={}.toString,T=Array.isArray||function(e){return"[object Array]"===S.call(e)},B=Object.keys||function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);return t},O=!1,D=!1,L=[],H=[],M=!1,P=e.requestAnimationFrame;P&&P(function(e){e===+e&&(M=!0)});var I,U,$,q=Date.now||function(){return(new Date).getTime()},F=q(),z=0,G=[],J=!1;U={},$={};var K=!1,Q=0;return{createNode:i,updateNode:p,updateChildren:d,callPostCallbacks:v,init:x,isArray:T,uptime:function(){return Q},now:q,invalidate:y,vmlNode:function(){return O=!0},deref:s,addEvent:g,bubble:C,postEnhance:j}}(window,document);

// Node {
//   int key;
//   bool dirty;
//   List<Node> children;
// }
//
// When Node doesn't have any children, it should be rendered
// as a LeafComponent, otherwise it should be rendered as a
// NodeComponent.

var Node = require('../init').Node;

var LeafComponent = {
  shouldChange: function(ctx, me, oldMe) {
    return me.data.dirty === true;
  },

  init: function(ctx, me) {
    me.tag="span";
	me.children=ctx.data.key;
  }
};

var NodeComponent = {
  shouldChange: function(ctx, me, oldMe) {
    return me.data.dirty === true;
  },

  init: function(ctx, me) {
    me.tag="div";
    var result = [];
    var node = ctx.data;
    var children = node.children;
    if (children !== null) {
      for (var i = 0; i < children.length; i++) {
        var c = children[i];
        if (c.children === null) {
          result.push({ component: LeafComponent, key: c.key, data: c });
        } else {
          result.push({ component: NodeComponent, key: c.key, data: c });
        }
      }
    }
	me.children=result;
  }
};

function Benchmark(a, b, container) {
  this._a = a;
  this._b = b;
  this._container = container;
  this._cache = null;
}

Benchmark.prototype.setUp = function() {
};

Benchmark.prototype.tearDown = function() {
 this._cache=b.updateNode({tag:"", content:""}, this._cache);
 this._container.removeChild(this._cache.element);
};

Benchmark.prototype.render = function() {
  this._cache=b.createNode({component: NodeComponent, data: new Node(0, false, this._a)});
  this._container.appendChild(this._cache.element);
};

Benchmark.prototype.update = function() {
  this._cache=b.updateNode({component: NodeComponent, data: new Node(0, true, this._b)}, this._cache);
};

module.exports = Benchmark;