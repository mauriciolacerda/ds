(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c058794"],{"013d":function(t,a,e){"use strict";var s=e("53f0"),n=e.n(s);n.a},"0fd9":function(t,a,e){"use strict";e("99af"),e("4160"),e("caad"),e("13d5"),e("4ec9"),e("b64b"),e("d3b7"),e("ac1f"),e("2532"),e("3ca3"),e("5319"),e("159b"),e("ddb0");var s=e("ade3"),n=e("5530"),i=(e("4b85"),e("2b0e")),r=e("d9f7"),o=e("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function d(t,a){return c.reduce((function(e,s){return e[t+Object(o["B"])(s)]=a(),e}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:u}})),v=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},h=d("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},b=d("alignContent",(function(){return{type:String,default:null,validator:p}})),g={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(b)},m={align:"align",justify:"justify",alignContent:"align-content"};function _(t,a,e){var s=m[t];if(null!=e){if(a){var n=a.replace(t,"");s+="-".concat(n)}return s+="-".concat(e),s.toLowerCase()}}var y=new Map;a["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(n["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},f,{justify:{type:String,default:null,validator:v}},h,{alignContent:{type:String,default:null,validator:p}},b),render:function(t,a){var e=a.props,n=a.data,i=a.children,o="";for(var c in e)o+=String(e[c]);var l=y.get(o);return l||function(){var t,a;for(a in l=[],g)g[a].forEach((function(t){var s=e[t],n=_(a,t,s);n&&l.push(n)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(s["a"])(t,"align-".concat(e.align),e.align),Object(s["a"])(t,"justify-".concat(e.justify),e.justify),Object(s["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),y.set(o,l)}(),t(e.tag,Object(r["a"])(n,{staticClass:"row",class:l}),i)}})},"1f4f":function(t,a,e){"use strict";e("a9e3");var s=e("5530"),n=(e("8b37"),e("80d2")),i=e("7560"),r=e("58df");a["a"]=Object(r["a"])(i["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(s["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"3cac":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-container",{attrs:{id:"upgrade",fluid:"",tag:"section"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("base-material-card",{attrs:{color:"dark"}},[e("v-card-text",{staticClass:"text-center"},[e("h6",{staticClass:"display-1 mb-1 grey--text"},[t._v(" Plataforma DropStation ")]),e("h4",{staticClass:"display-2 font-weight-light mb-3 black--text"},[t._v(" Seja Bem Vindo ")]),e("h6",{staticClass:"display-1 mb-1 grey--text"},[t._v(" Escolha o plano mais apropriado para seu negócio. E lembre-se, nos planos pagos, você somente será cobrado após realizar a integração com a sua loja Shopify ")])]),e("v-simple-table",[e("thead",[e("tr",[e("th"),e("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" Free ")]),e("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" Dropstation 100 ")]),e("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" Dropstation 500 ")]),e("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" Dropstation 1000 ")]),e("th",{staticClass:"subheading font-weight-light text-center"},[t._v(" Dropstation 2000 ")])])]),e("tbody",{staticClass:"text-center"},[e("tr",[e("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Número de Pedidos pagos ")]),e("td",[t._v("50")]),e("td",[t._v("100")]),e("td",[t._v("500")]),e("td",[t._v("1000")]),e("td",[t._v("2000+")])]),e("tr",[e("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Integração com Shopify ")]),e("td",[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),e("td",[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),e("td",[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),e("td",[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),e("td",[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1)]),e("tr",[e("th",{staticClass:"text-left font-weight-light subtitle-1"},[t._v(" Suporte Premium ")]),e("td",[e("v-icon",{attrs:{color:"error"}},[t._v(" mdi-close ")])],1),e("td",[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),e("td",[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),e("td",[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1),e("td",[e("v-icon",{attrs:{color:"success"}},[t._v(" mdi-check ")])],1)]),e("tr",[e("th"),e("td",[e("b",{staticClass:"subheading"},[t._v("$ 0,00")]),t._v(" USD/mês")]),e("td",[e("b",{staticClass:"subheading"},[t._v("$5 ")]),t._v(" USD/mês")]),e("td",[e("b",{staticClass:"subheading"},[t._v("$19")]),t._v(" USD/mês")]),e("td",[e("b",{staticClass:"subheading"},[t._v("$89")]),t._v(" USD/mês")]),e("td",[e("b",{staticClass:"subheading"},[t._v("$149")]),t._v(" USD/mês")])]),e("tr",[e("th"),e("td",[e("v-btn",{attrs:{disabled:t.btn1,color:"success",to:"register/1"}},[t._v(" "+t._s(t.txt1)+" ")])],1),e("td",[e("v-btn",{attrs:{disabled:t.btn2,color:"success",to:"register/2"}},[t._v(" "+t._s(t.txt2)+" ")])],1),e("td",[e("v-btn",{attrs:{disabled:t.btn3,color:"success",to:"register/3"}},[t._v(" "+t._s(t.txt3)+" ")])],1),e("td",[e("v-btn",{attrs:{disabled:t.btn4,color:"success",to:"register/4"}},[t._v(" "+t._s(t.txt4)+" ")])],1),e("td",[e("v-btn",{attrs:{disabled:t.btn5,color:"success",to:"register/5"}},[t._v(" "+t._s(t.txt5)+" ")])],1)])])])],1)],1)],1)],1)],1)},n=[],i=e("04e1"),r=e.n(i),o={data:function(){return{btn1:!1,btn2:!1,btn3:!1,btn4:!1,btn5:!1,txt1:"Alterar plano",txt2:"Alterar plano",txt3:"Alterar plano",txt4:"Alterar plano",txt5:"Alterar plano"}},mounted:function(){var t=localStorage.getItem("auth"),a=r()(t),e=a.idplans;1===e&&(this.btn1=!0,this.txt1="Plano Contratado"),2===e&&(this.btn2=!0,this.txt2="Plano Contratado"),3===e&&(this.btn3=!0,this.txt3="Plano Contratado"),4===e&&(this.btn4=!0,this.txt4="Plano Contratado"),5===e&&(this.btn5=!0,this.txt5="Plano Contratado")}},c=o,l=(e("013d"),e("2877")),d=e("6544"),u=e.n(d),f=e("7496"),v=e("8336"),h=e("99d9"),p=e("62ad"),b=e("a523"),g=e("132d"),m=e("0fd9"),_=e("1f4f"),y=Object(l["a"])(c,s,n,!1,null,null,null);a["default"]=y.exports;u()(y,{VApp:f["a"],VBtn:v["a"],VCardText:h["b"],VCol:p["a"],VContainer:b["a"],VIcon:g["a"],VRow:m["a"],VSimpleTable:_["a"]})},"53f0":function(t,a,e){},7496:function(t,a,e){"use strict";var s=e("5530"),n=(e("df86"),e("7560")),i=e("58df");a["a"]=Object(i["a"])(n["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var a=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(s["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[a])}})},"8b37":function(t,a,e){},a523:function(t,a,e){"use strict";e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("20f6"),e("4b85"),e("a15b"),e("498a");var s=e("2b0e");function n(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var s=e.props,n=e.data,i=e.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var o=Object.keys(r).filter((function(t){if("slot"===t)return!1;var a=r[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(n.staticClass+=" ".concat(o.join(" ")))}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),a(s.tag,n,i)}})}var i=e("d9f7");a["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,s=a.props,n=a.data,r=a.children,o=n.attrs;return o&&(n.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(n.attrs[t]=a,!1):a||"string"===typeof a}))),s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),t(s.tag,Object(i["a"])(n,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(e||[])}),r)}})},df86:function(t,a,e){}}]);
//# sourceMappingURL=chunk-1c058794.4bd569cf.js.map