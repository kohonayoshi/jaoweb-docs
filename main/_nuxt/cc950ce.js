(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{300:function(t,e,r){var content=r(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("aa039bce",content,!0,{sourceMap:!1})},301:function(t,e,r){"use strict";var n=r(2),o=r(5),c=r(32),l=r(28),f=r(17),d=r(119),m=r(193),h=r(6),_=r(16),v=r(85),y=r(12),x=r(8),w=r(25),S=r(30),O=r(81),j=r(45),C=r(86),k=r(62),z=r(115),A=r(318),P=r(118),E=r(44),T=r(24),N=r(80),$=r(26),I=r(21),J=r(116),M=r(82),F=r(83),D=r(117),Q=r(4),W=r(302),B=r(319),G=r(48),H=r(31),K=r(33).forEach,L=M("hidden"),R=Q("toPrimitive"),U=H.set,V=H.getterFor("Symbol"),X=Object.prototype,Y=o.Symbol,Z=c("JSON","stringify"),tt=E.f,et=T.f,it=A.f,nt=N.f,at=J("symbols"),ot=J("op-symbols"),ct=J("string-to-symbol-registry"),st=J("symbol-to-string-registry"),lt=J("wks"),pt=o.QObject,ut=!pt||!pt.prototype||!pt.prototype.findChild,ft=f&&h((function(){return 7!=C(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=tt(X,e);n&&delete X[e],et(t,e,r),n&&t!==X&&et(X,e,n)}:et,mt=function(t,e){var symbol=at[t]=C(Y.prototype);return U(symbol,{type:"Symbol",tag:t,description:e}),f||(symbol.description=e),symbol},ht=m?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},bt=function(t,e,r){t===X&&bt(ot,e,r),x(t);var n=O(e,!0);return x(r),_(at,n)?(r.enumerable?(_(t,L)&&t[L][n]&&(t[L][n]=!1),r=C(r,{enumerable:j(0,!1)})):(_(t,L)||et(t,L,j(1,{})),t[L][n]=!0),ft(t,n,r)):et(t,n,r)},_t=function(t,e){x(t);var r=S(e),n=k(r).concat(xt(r));return K(n,(function(e){f&&!gt.call(r,e)||bt(t,e,r[e])})),t},gt=function(t){var e=O(t,!0),r=nt.call(this,e);return!(this===X&&_(at,e)&&!_(ot,e))&&(!(r||!_(this,e)||!_(at,e)||_(this,L)&&this[L][e])||r)},vt=function(t,e){var r=S(t),n=O(e,!0);if(r!==X||!_(at,n)||_(ot,n)){var o=tt(r,n);return!o||!_(at,n)||_(r,L)&&r[L][n]||(o.enumerable=!0),o}},yt=function(t){var e=it(S(t)),r=[];return K(e,(function(t){_(at,t)||_(F,t)||r.push(t)})),r},xt=function(t){var e=t===X,r=it(e?ot:S(t)),n=[];return K(r,(function(t){!_(at,t)||e&&!_(X,t)||n.push(at[t])})),n};(d||(I((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),r=function(t){this===X&&r.call(ot,t),_(this,L)&&_(this[L],e)&&(this[L][e]=!1),ft(this,e,j(1,t))};return f&&ut&&ft(X,e,{configurable:!0,set:r}),mt(e,t)}).prototype,"toString",(function(){return V(this).tag})),I(Y,"withoutSetter",(function(t){return mt(D(t),t)})),N.f=gt,T.f=bt,E.f=vt,z.f=A.f=yt,P.f=xt,W.f=function(t){return mt(Q(t),t)},f&&(et(Y.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),l||I(X,"propertyIsEnumerable",gt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Y}),K(k(lt),(function(t){B(t)})),n({target:"Symbol",stat:!0,forced:!d},{for:function(t){var e=String(t);if(_(ct,e))return ct[e];var symbol=Y(e);return ct[e]=symbol,st[symbol]=e,symbol},keyFor:function(t){if(!ht(t))throw TypeError(t+" is not a symbol");if(_(st,t))return st[t]},useSetter:function(){ut=!0},useSimple:function(){ut=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!f},{create:function(t,e){return void 0===e?C(t):_t(C(t),e)},defineProperty:bt,defineProperties:_t,getOwnPropertyDescriptor:vt}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:yt,getOwnPropertySymbols:xt}),n({target:"Object",stat:!0,forced:h((function(){P.f(1)}))},{getOwnPropertySymbols:function(t){return P.f(w(t))}}),Z)&&n({target:"JSON",stat:!0,forced:!d||h((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,r){for(var n,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(n=e,(y(e)||void 0!==t)&&!ht(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ht(e))return e}),o[1]=e,Z.apply(null,o)}});Y.prototype[R]||$(Y.prototype,R,Y.prototype.valueOf),G(Y,"Symbol"),F[L]=!0},302:function(t,e,r){var n=r(4);e.f=n},303:function(t,e,r){"use strict";var n=r(2),o=r(17),c=r(5),l=r(16),f=r(12),d=r(24).f,m=r(191),h=c.Symbol;if(o&&"function"==typeof h&&(!("description"in h.prototype)||void 0!==h().description)){var _={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof v?new h(t):void 0===t?h():h(t);return""===t&&(_[e]=!0),e};m(v,h);var y=v.prototype=h.prototype;y.constructor=v;var x=y.toString,w="Symbol(test)"==String(h("test")),S=/^Symbol\((.*)\)[^)]+$/;d(y,"description",{configurable:!0,get:function(){var symbol=f(this)?this.valueOf():this,t=x.call(symbol);if(l(_,symbol))return"";var desc=w?t.slice(7,-1):t.replace(S,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:v})}},304:function(t,e,r){var content=r(321);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("1923f1e7",content,!0,{sourceMap:!1})},305:function(t,e,r){var content=r(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("761fee10",content,!0,{sourceMap:!1})},311:function(t,e,r){"use strict";r.r(e);r(29);var n={props:{items:{default:function(){return[]},type:Array}},computed:{_items:function(){var t=this.items;return t.map((function(t){return{disabled:t.disabled,href:t.href?t.href:"",to:t.to?t.to:"",text:t.text?t.text:""}})),t}}},o=(r(316),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-breadcrumbs"},[r("ol",{staticClass:"app-breadcrumbs__list"},[t._l(t._items,(function(e){return[r("li",{key:e.id,staticClass:"app-breadcrumbs__item"},[r("app-icon",{staticClass:"app-breadcrumbs__chevron",attrs:{icon:"chevron-right"}}),t._v(" "),r(e.disabled?"span":e.to?"nuxt-link":"a",{tag:"component",class:{"app-breadcrumbs__link":!e.disabled,"app-breadcrumbs__label":e.disabled},attrs:{href:e.href,to:e.to}},[r("span",{staticClass:"app-breadcrumbs__text"},[t._v(t._s(e.text))])])],1)]}))],2)])}),[],!1,null,"881de476",null);e.default=component.exports;installComponents(component,{AppIcon:r(35).default})},312:function(t,e,r){"use strict";r.r(e);r(301),r(303),r(29);var n={props:{title:{default:"",required:!0,type:String},description:{default:"",type:String},image:{default:"",type:String},meta:{default:function(){return[]},type:Array}},computed:{_meta:function(){return this.meta.map((function(t,e){return t.id=e+1,t}))},_description:function(){var t=this.description;return(this.meta.length||this.image)&&(t=""),t}}},o=(r(320),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"article-header"},[r("h1",{staticClass:"article-header__title"},[t._v(t._s(t.title))]),t._v(" "),t.meta.length?r("div",{staticClass:"article-header__meta"},[t._l(t._meta,(function(t){return[r("article-meta-item",{key:t.id,attrs:{icon:t.icon,image:t.image,text:t.text,to:t.to,href:t.href}})]}))],2):t._e(),t._v(" "),t.image?r("div",{staticClass:"article-header__eyecatch"},[r("img",{attrs:{src:t.image,alt:t.title,loading:"lazy"}})]):t._e(),t._v(" "),t._description?r("p",{staticClass:"article-header__description"},[t._v("\n    "+t._s(t._description)+"\n  ")]):t._e()])}),[],!1,null,"b150fe00",null);e.default=component.exports;installComponents(component,{ArticleMetaItem:r(313).default})},313:function(t,e,r){"use strict";r.r(e);var n={components:{AppIcon:r(35).default},props:{text:{default:"",required:!0,type:String},icon:{default:"",type:String},image:{default:"",type:String},href:{default:"",type:String},to:{default:"",type:String}},computed:{iconTag:function(){return this.icon?"app-icon":"img"},iconAttributes:function(){var t={},e=this.icon,image=this.image;return e&&(t.icon=e),image&&(t.src=image,t.alt="icon",t.loading="lazy"),t},textTag:function(){return this.href?"a":this.to?"nuxt-link":"span"},textAttributes:function(){var t={},e=this.href,r=this.to;return e&&(t.href=e),r&&(t.to=r),t}}},o=(r(322),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-meta-item"},[r(t.iconTag,t._b({tag:"component",staticClass:"article-meta-item__icon"},"component",t.iconAttributes,!1)),t._v(" "),r(t.textTag,t._b({tag:"component",staticClass:"article-meta-item__text"},"component",t.textAttributes,!1),[t._v("\n    "+t._s(t.text)+"\n  ")])],1)}),[],!1,null,"a1f07494",null);e.default=component.exports},316:function(t,e,r){"use strict";r(300)},317:function(t,e,r){(e=r(9)(!1)).push([t.i,".app-breadcrumbs[data-v-881de476]{width:100%}.app-breadcrumbs__list[data-v-881de476]{display:inline-flex;flex-wrap:wrap;font-size:11px;list-style:none}@media screen and (min-width:768px){.app-breadcrumbs__list[data-v-881de476]{font-size:13px}}.app-breadcrumbs__chevron[data-v-881de476]{display:none;line-height:1}.app-breadcrumbs__item[data-v-881de476]{display:inline-flex;align-items:baseline;margin-right:4px}.app-breadcrumbs__item[data-v-881de476]:last-child{font-weight:700}.app-breadcrumbs__item~.app-breadcrumbs__item .app-breadcrumbs__chevron[data-v-881de476]{display:block;margin-right:4px;font-size:14px}.app-breadcrumbs__link[data-v-881de476]{color:#3c3c3c;text-decoration:underline}.app-breadcrumbs__link[data-v-881de476]:hover{text-decoration:none}",""]),t.exports=e},318:function(t,e,r){var n=r(30),o=r(115).f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return l&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return l.slice()}}(t):o(n(t))}},319:function(t,e,r){var path=r(192),n=r(16),o=r(302),c=r(24).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||c(e,t,{value:o.f(t)})}},320:function(t,e,r){"use strict";r(304)},321:function(t,e,r){(e=r(9)(!1)).push([t.i,'.article-header__title[data-v-b150fe00]{font-size:32px;line-height:1.25}@media screen and (min-width:768px){.article-header__title[data-v-b150fe00]{font-size:48px}}.article-header__meta[data-v-b150fe00]{display:flex;flex-wrap:wrap;align-items:center;margin-top:8px}.article-header__meta>*[data-v-b150fe00]{margin:8px 12px 0 0}@media screen and (min-width:768px){.article-header__meta>*[data-v-b150fe00]{margin-right:16px}}.article-header__eyecatch[data-v-b150fe00]{position:relative;margin-top:16px;background-color:#f0f0f0;border-top:4px solid #bdbdbd}@media screen and (min-width:768px){.article-header__eyecatch[data-v-b150fe00]{margin-top:32px}}.article-header__eyecatch[data-v-b150fe00]:before{display:block;width:100%;padding-top:52.5%;content:""}.article-header__eyecatch img[data-v-b150fe00]{position:absolute;bottom:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.article-header__description[data-v-b150fe00]{margin-top:16px;font-size:13px}',""]),t.exports=e},322:function(t,e,r){"use strict";r(305)},323:function(t,e,r){(e=r(9)(!1)).push([t.i,".article-meta-item[data-v-a1f07494]{display:grid;grid-template-rows:16px;grid-template-columns:16px 1fr;grid-gap:8px;gap:8px;align-items:center}.article-meta-item__icon[data-v-a1f07494]{width:100%;height:100%;font-size:18px;line-height:16px}.article-meta-item__text[data-v-a1f07494]{font-size:12px;line-height:1;color:inherit}@media screen and (min-width:768px){.article-meta-item__text[data-v-a1f07494]{font-size:13px}}.article-meta-item__text[data-v-a1f07494]:hover{text-decoration:none}",""]),t.exports=e}}]);