(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-180e2439"],{"013d":function(t,e,a){"use strict";var s=a("53f0"),r=a.n(s);r.a},"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var s=a("ade3"),r=a("5530"),n=(a("4b85"),a("2b0e")),i=a("d9f7"),c=a("80d2"),o=["sm","md","lg","xl"],d=["start","end","center"];function l(t,e){return o.reduce((function(a,s){return a[t+Object(c["B"])(s)]=e(),a}),{})}var u=function(t){return[].concat(d,["baseline","stretch"]).includes(t)},v=l("align",(function(){return{type:String,default:null,validator:u}})),f=function(t){return[].concat(d,["space-between","space-around"]).includes(t)},h=l("justify",(function(){return{type:String,default:null,validator:f}})),g=function(t){return[].concat(d,["space-between","space-around","stretch"]).includes(t)},p=l("alignContent",(function(){return{type:String,default:null,validator:g}})),b={align:Object.keys(v),justify:Object.keys(h),alignContent:Object.keys(p)},m={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,a){var s=m[t];if(null!=a){if(e){var r=e.replace(t,"");s+="-".concat(r)}return s+="-".concat(a),s.toLowerCase()}}var y=new Map;e["a"]=n["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},v,{justify:{type:String,default:null,validator:f}},h,{alignContent:{type:String,default:null,validator:g}},p),render:function(t,e){var a=e.props,r=e.data,n=e.children,c="";for(var o in a)c+=String(a[o]);var d=y.get(c);return d||function(){var t,e;for(e in d=[],b)b[e].forEach((function(t){var s=a[t],r=_(e,t,s);r&&d.push(r)}));d.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(s["a"])(t,"align-".concat(a.align),a.align),Object(s["a"])(t,"justify-".concat(a.justify),a.justify),Object(s["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),y.set(c,d)}(),t(a.tag,Object(i["a"])(r,{staticClass:"row",class:d}),n)}})},"1f4f":function(t,e,a){"use strict";a("a9e3");var s=a("5530"),r=(a("8b37"),a("80d2")),n=a("7560"),i=a("58df");e["a"]=Object(i["a"])(n["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"3cac":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"upgrade",fluid:"",tag:"section"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",md:"12"}},[a("base-material-card",{attrs:{color:"primary"}},[[a("div",{staticClass:"display-2 font-weight-light"},[t._v(" TekTracker - Preços e Planos ")]),a("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Queremos que você escolha o plano apropriado para o seu negócio. ")])],a("v-simple-table",[a("thead",[a("tr",[a("th"),a("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" Free ")]),a("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" TekTracker 100 ")]),a("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" TekTracker 500 ")]),a("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" TekTracker 1000 ")]),a("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" TekTracker 2000 ")])])]),a("tbody",{staticClass:"text-center"},[a("tr",[a("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Número de Pedidos pagos ")]),a("td",[t._v("50")]),a("td",[t._v("100")]),a("td",[t._v("500")]),a("td",[t._v("1000")]),a("td",[t._v("2000+")])]),a("tr",[a("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Integração com Shopify ")]),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1)]),a("tr",[a("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Suporte Premium ")]),a("td",[a("v-icon",{attrs:{color:"error"}},[t._v(" mdi-close ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),a("td",[a("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1)]),a("tr",[a("th"),a("td",[a("b",{staticClass:"subheading"},[t._v("$ 0,00")]),t._v(" USD/mês")]),a("td",[a("b",{staticClass:"subheading"},[t._v("$5 ")]),t._v(" USD/mês")]),a("td",[a("b",{staticClass:"subheading"},[t._v("$19")]),t._v(" USD/mês")]),a("td",[a("b",{staticClass:"subheading"},[t._v("$89")]),t._v(" USD/mês")]),a("td",[a("b",{staticClass:"subheading"},[t._v("$149")]),t._v(" USD/mês")])]),a("tr",[a("th"),a("td",[a("v-btn",{attrs:{color:"grey",disabled:""}},[t._v(" Plano atual ")])],1),a("td",[a("v-btn",{attrs:{color:"success",target:"_blank",href:"https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"}},[t._v(" Compre já ")])],1),a("td",[a("v-btn",{attrs:{color:"success",target:"_blank",href:"https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"}},[t._v(" Compre já ")])],1),a("td",[a("v-btn",{attrs:{color:"success",target:"_blank",href:"https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"}},[t._v(" Compre já ")])],1),a("td",[a("v-btn",{attrs:{color:"success",target:"_blank",href:"https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"}},[t._v(" Compre já ")])],1)])])])],2)],1)],1)],1)},r=[],n={},i=n,c=(a("013d"),a("2877")),o=a("6544"),d=a.n(o),l=a("8336"),u=a("62ad"),v=a("a523"),f=a("132d"),h=a("0fd9"),g=a("1f4f"),p=Object(c["a"])(i,s,r,!1,null,null,null);e["default"]=p.exports;d()(p,{VBtn:l["a"],VCol:u["a"],VContainer:v["a"],VIcon:f["a"],VRow:h["a"],VSimpleTable:g["a"]})},"53f0":function(t,e,a){},"8b37":function(t,e,a){},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var s=a("2b0e");function r(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var s=a.props,r=a.data,n=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var i=r.attrs;if(i){r.attrs={};var c=Object.keys(i).filter((function(t){if("slot"===t)return!1;var e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(r.staticClass+=" ".concat(c.join(" ")))}return s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),e(s.tag,r,n)}})}var n=a("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,s=e.props,r=e.data,i=e.children,c=r.attrs;return c&&(r.attrs={},a=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(r.domProps=r.domProps||{},r.domProps.id=s.id),t(s.tag,Object(n["a"])(r,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(a||[])}),i)}})}}]);
//# sourceMappingURL=chunk-180e2439.dfe60702.js.map