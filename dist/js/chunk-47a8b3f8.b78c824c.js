(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47a8b3f8"],{"145b":function(t,e,i){"use strict";var o=i("b297"),a=i.n(o);a.a},1859:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{id:"dashboard-core-footer"}},[i("v-container",[i("v-row",{attrs:{align:"center","no-gutters":""}},[t._l(t.links,(function(e,o){return i("v-col",{key:o,staticClass:"text-center mb-sm-0 mb-5",attrs:{cols:"auto"}},[i("a",{staticClass:"mr-0 grey--text text--darken-3",attrs:{href:e.href,rel:"noopener",target:"_blank"},domProps:{textContent:t._s(e.text)}})])})),i("v-spacer",{staticClass:"hidden-sm-and-down"}),i("v-col",{attrs:{cols:"12",md:"auto"}},[i("div",{staticClass:"body-1 font-weight-light pt-6 pt-md-0 text-center"},[t._v(" © 2020, feito com "),i("v-icon",{attrs:{size:"18"}},[t._v(" mdi-heart ")]),t._v(" por brasileiros para brasileiros. ")],1)])],2)],1)],1)},a=[],s={name:"DashboardCoreFooter",data:function(){return{links:[{href:"https://www.dropstation.com.br",text:"DropStation"},{href:"https://www.dropstation.com.br/about",text:"Sobre nós"},{href:"/plans",text:"Preços e Planos"}]}}},n=s,r=(i("145b"),i("2877")),c=i("6544"),p=i.n(c),l=i("62ad"),u=i("a523"),h=(i("a9e3"),i("c7cd"),i("5530")),d=(i("b5b6"),i("3a66")),f=i("8dd9"),b=i("d10f"),v=i("58df"),m=i("80d2"),g=Object(v["a"])(f["a"],Object(d["a"])("footer",["height","inset"]),b["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tile:{type:Boolean,default:!0}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(h["a"])({},f["a"].options.computed.classes.call(this),{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(h["a"])({},f["a"].options.computed.styles.call(this),{height:isNaN(t)?t:Object(m["g"])(t),left:Object(m["g"])(this.computedLeft),right:Object(m["g"])(this.computedRight),bottom:Object(m["g"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t("footer",e,this.$slots.default)}}),y=i("132d"),w=i("0fd9"),x=i("2fa4"),P=Object(r["a"])(n,o,a,!1,null,null,null);e["default"]=P.exports;p()(P,{VCol:l["a"],VContainer:u["a"],VFooter:g,VIcon:y["a"],VRow:w["a"],VSpacer:x["a"]})},"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var o=i("fe6c"),a=i("58df");function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},b297:function(t,e,i){},b5b6:function(t,e,i){}}]);
//# sourceMappingURL=chunk-47a8b3f8.b78c824c.js.map