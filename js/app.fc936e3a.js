(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("header",[n("div",{staticClass:"one-flex tools-header"},[n("div",{staticClass:"header-item"},[n("span",{on:{click:e.toggleCatalog}},[e._v("Catalog")])]),n("div",{staticClass:"header-item"},[e._v("Image")]),n("div",{staticClass:"header-item"},[e._v("Text")]),n("div",{staticClass:"header-item"},[e._v("Pen")])]),e._m(0)]),n("aside",[e._m(1),e.$store.state.catalog_open?n("span",[n("div",{staticClass:"menu"},[n("Logo",{attrs:{color:"green"}})],1)]):e._e()]),e._m(2),e._m(3)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"one-flex controls-header"},[n("div",{staticClass:"header-item"},[e._v("Undo")]),n("div",{staticClass:"header-item"},[e._v("Redo")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-header"},[e._v(" MENU HEADER "),n("br"),e._v("LINE 2 ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("canvas",{staticStyle:{flex:"auto"},attrs:{id:"pageCanvas"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("div",{staticClass:"footer"},[e._v("FOOTER")])])}],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{ref:"sheets",attrs:{xmlns:"http://www.w3.org/2000/svg",baseProfile:"tiny",version:"1.2",viewBox:"0 0 422.1 329.5",width:"50",height:"50"},on:{click:e.selectSvg}},[n("path",{class:e.color,attrs:{"stroke-width":e.strokeWidth,"stroke-miterlimit":"10",d:"M108.2 262.6L220 39c-44.1 0-84.5 24.9-104.2 64.4L4 327c44.2 0 84.5-24.9 104.2-64.4zM306.2 226.1L418 2.5c-44.1 0-84.5 24.9-104.2 64.4L202 290.5c44.2 0 84.5-24.9 104.2-64.4z"}})])},i=[],c=(n("a9e3"),{name:"Logo",props:{color:{type:String,default:"white",required:!1},strokeWidth:{type:Number,default:5,required:!1}},data:function(){return{pageCanvas:document.getElementById("pageCanvas")}},methods:{selectSvg:function(){console.log(this.$refs);var e=this.$refs.sheets.cloneNode(!0);e.classList.add("draggable"),e.addEventListener("mousedown",this.startDrag),e.addEventListener("mousemove",this.drag),e.addEventListener("mouseup",this.endDrag),e.addEventListener("mouseleave",this.endDrag),console.log(e);var t=this.pageCanvas.getContext("2d");t.fillStyle="green",t.fillRect(10,10,150,100)}}}),l=c,u=(n("d993"),n("2877")),d=Object(u["a"])(l,s,i,!1,null,"3e3abc4c",null),f=d.exports,v={name:"App",components:{Logo:f},methods:{toggleCatalog:function(){this.$store.commit("toggle_catalog")}}},p=v,g=(n("a566"),Object(u["a"])(p,r,o,!1,null,"52430476",null)),h=g.exports,m=n("2f62");a["a"].use(m["a"]);var _=new m["a"].Store({state:{catalog_open:!1},getters:{},mutations:{toggle_catalog:function(e){e.catalog_open=!e.catalog_open}},actions:{}});a["a"].config.productionTip=!1,new a["a"]({store:_,render:function(e){return e(h)}}).$mount("#app")},"980e":function(e,t,n){},a566:function(e,t,n){"use strict";var a=n("e494"),r=n.n(a);r.a},d993:function(e,t,n){"use strict";var a=n("980e"),r=n.n(a);r.a},e494:function(e,t,n){}});
//# sourceMappingURL=app.fc936e3a.js.map