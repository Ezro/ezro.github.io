(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],f=0,d=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var r={},n={app:0},o=[];function s(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=r,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(a,r,function(t){return e[t]}.bind(null,r));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"3ac7":function(e,t,a){},"48b6":function(e,t,a){"use strict";var r=a("3ac7"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("header",[a("div",{staticClass:"one-flex tools-header"},[a("div",{staticClass:"header-item"},[a("span",{on:{click:e.toggleCatalog}},[e._v("Catalog")])]),a("div",{staticClass:"header-item"},[e._v("Image")]),a("div",{staticClass:"header-item"},[e._v("Text")]),a("div",{staticClass:"header-item"},[e._v("Pen")])]),e._m(0)]),a("aside",[e._m(1),e.$store.state.catalog_open?a("span",[a("div",{staticClass:"menu"},[a("Logo",{attrs:{color:"green"}})],1)]):e._e()]),a("main",[a("div",{staticClass:"page"},[a("CatalogItem")],1)]),e._m(2)])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"one-flex controls-header"},[a("div",{staticClass:"header-item"},[e._v("Undo")]),a("div",{staticClass:"header-item"},[e._v("Redo")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"menu-header"},[e._v(" MENU HEADER "),a("br"),e._v("LINE 2 ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("div",{staticClass:"footer"},[e._v("FOOTER")])])}],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{ref:"sheets",staticClass:"draggable",attrs:{xmlns:"http://www.w3.org/2000/svg",baseProfile:"tiny",version:"1.2",viewBox:"0 0 422.1 329.5",width:"50",height:"50"},on:{load:e.makeDraggable}},[a("path",{class:e.color,attrs:{"stroke-width":e.strokeWidth,"stroke-miterlimit":"10",d:"M108.2 262.6L220 39c-44.1 0-84.5 24.9-104.2 64.4L4 327c44.2 0 84.5-24.9 104.2-64.4zM306.2 226.1L418 2.5c-44.1 0-84.5 24.9-104.2 64.4L202 290.5c44.2 0 84.5-24.9 104.2-64.4z"}})])},i=[],c=(a("a9e3"),{name:"Logo",props:{color:{type:String,default:"white",required:!1},strokeWidth:{type:Number,default:5,required:!1}},mounted:function(){this.makeDraggable()},methods:{makeDraggable:function(){var e,t,a,r=this.$refs.sheets;function n(n){if(n.target.classList.contains("draggable")){e=n.target,t=i(n);var o=e.transform.baseVal;if(0===o.length||o.getItem(0).type!==SVGTransform.SVG_TRANSFORM_TRANSLATE){var s=r.createSVGTransform();s.setTranslate(0,0),e.transform.baseVal.insertItemBefore(s,0)}a=o.getItem(0),t.x-=a.matrix.e,t.y-=a.matrix.f}}function o(r){if(e){r.preventDefault();var n=i(r);a.setTranslate(n.x-t.x,n.y-t.y)}}function s(){e=!1}function i(e){var t=r.getScreenCTM();return{x:(e.clientX-t.e)/t.a,y:(e.clientY-t.f)/t.d}}r.addEventListener("mousedown",n),r.addEventListener("mousemove",o),r.addEventListener("mouseup",s),r.addEventListener("mouseleave",s)}}}),l=c,u=(a("48b6"),a("2877")),f=Object(u["a"])(l,s,i,!1,null,"4d6959ea",null),d=f.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{attrs:{width:"100%",height:"100%",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("rect",{staticStyle:{"fill-opacity":"0","stroke-width":"1",stroke:"rgb(0,0,0)"},attrs:{width:"100%",height:"100%"}})])},v=[],g={name:"CatalogItem"},m=g,h=Object(u["a"])(m,p,v,!1,null,"34f1476a",null),_=h.exports,b={name:"App",components:{Logo:d,CatalogItem:_},methods:{toggleCatalog:function(){this.$store.commit("toggle_catalog")}}},w=b,y=(a("703c"),Object(u["a"])(w,n,o,!1,null,"85a3fcb8",null)),x=y.exports,C=a("2f62");r["a"].use(C["a"]);var O=new C["a"].Store({state:{catalog_open:!1},getters:{},mutations:{toggle_catalog:function(e){e.catalog_open=!e.catalog_open}},actions:{}});r["a"].config.productionTip=!1,new r["a"]({store:O,render:function(e){return e(x)}}).$mount("#app")},"69d7":function(e,t,a){},"703c":function(e,t,a){"use strict";var r=a("69d7"),n=a.n(r);n.a}});
//# sourceMappingURL=app.a7ce513f.js.map