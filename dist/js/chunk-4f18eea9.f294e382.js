(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f18eea9"],{"0281":function(t,a,e){},"0fd9":function(t,a,e){"use strict";e("99af"),e("4160"),e("caad"),e("13d5"),e("4ec9"),e("b64b"),e("d3b7"),e("ac1f"),e("2532"),e("3ca3"),e("5319"),e("159b"),e("ddb0");var n=e("ade3"),i=e("5530"),r=(e("4b85"),e("2b0e")),s=e("d9f7"),o=e("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,a){return c.reduce((function(e,n){return e[t+Object(o["B"])(n)]=a(),e}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},h=l("justify",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:v}})),b={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(g)},m={align:"align",justify:"justify",alignContent:"align-content"};function y(t,a,e){var n=m[t];if(null!=e){if(a){var i=a.replace(t,"");n+="-".concat(i)}return n+="-".concat(e),n.toLowerCase()}}var C=new Map;a["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f,{justify:{type:String,default:null,validator:p}},h,{alignContent:{type:String,default:null,validator:v}},g),render:function(t,a){var e=a.props,i=a.data,r=a.children,o="";for(var c in e)o+=String(e[c]);var u=C.get(o);return u||function(){var t,a;for(a in u=[],b)b[a].forEach((function(t){var n=e[t],i=y(a,t,n);i&&u.push(i)}));u.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(n["a"])(t,"align-".concat(e.align),e.align),Object(n["a"])(t,"justify-".concat(e.justify),e.justify),Object(n["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),C.set(o,u)}(),t(e.tag,Object(s["a"])(i,{staticClass:"row",class:u}),r)}})},"4bd4":function(t,a,e){"use strict";e("4de4"),e("7db0"),e("4160"),e("caad"),e("07ac"),e("2532"),e("159b");var n=e("5530"),i=e("58df"),r=e("7e2b"),s=e("3206");a["a"]=Object(i["a"])(r["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(a.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"58a0":function(t,a,e){"use strict";var n=e("0281"),i=e.n(n);i.a},7496:function(t,a,e){"use strict";var n=e("5530"),i=(e("df86"),e("7560")),r=e("58df");a["a"]=Object(r["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var a=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(n["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[a])}})},"96e5":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-content",[e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"4"}},[e("base-material-card",{staticClass:"v-card-profile",attrs:{avatar:"https://s2.glbimg.com/r5Hmg-CQXECXlxAnXrZA7eDUF5g=/0x0:1600x1061/1000x0/smart/filters:strip_icc()/s.glbimg.com/po/tt2/f/original/2018/12/18/1812-senhas-home.jpeg","min-height":"360"}},[e("v-card-text",{staticClass:"text-center"},[e("h6",{staticClass:"display-1 mb-1 grey--text"},[t._v(" Plataforma DropStation ")]),e("h4",{staticClass:"display-2 font-weight-light mb-3 black--text"},[t._v(" Esqueceu sua senha? ")]),e("p",[t._v(" Insira seu e-mail no campo abaixo que receberá, por e-mail, um link para redefinição da sua senha. ")]),e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-container",{staticClass:"py-0"},[e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{staticClass:"purple-input",attrs:{label:"E-mail",rules:[t.rules.required]},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1)],1)],1),e("v-btn",{staticClass:"mr-0",attrs:{color:"success"},on:{click:t.passforgot}},[t._v(" Redefinir Senha ")])],1)],1)],1)],1)],1)],1)],1),e("v-snackbar",{model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" "+t._s(t.message)+" "),e("v-btn",{attrs:{color:"green",text:""},on:{click:function(a){t.snackbar=!1}}},[t._v(" Fechar ")])],1),e("dashboard-core-footer")],1)},i=[],r=(e("d3b7"),e("bc3a")),s=e.n(r),o={components:{DashboardCoreFooter:function(){return e.e("chunk-47a8b3f8").then(e.bind(null,"1859"))}},data:function(){return{snackbar:!1,message:"",repsw:"",valid:!0,email:"",rules:{required:function(t){return!!t||"Obrigatório."}}}},methods:{passforgot:function(){var t=this;this.$refs.form.validate()&&s.a.post("http://localhost:5000/users/passforgot",{email:this.email}).then((function(a){!1===a.data.success?(t.snackbar=!0,t.message=a.data.message):(t.snackbar=!0,t.message=a.data.message,t.$router.push("/login/"))}))}}},c=o,u=(e("58a0"),e("2877")),l=e("6544"),d=e.n(l),f=e("7496"),p=e("8336"),h=e("99d9"),v=e("62ad"),g=e("a523"),b=e("a75b"),m=e("4bd4"),y=e("0fd9"),C=e("2db4"),w=e("8654"),j=Object(u["a"])(c,n,i,!1,null,null,null);a["default"]=j.exports;d()(j,{VApp:f["a"],VBtn:p["a"],VCardText:h["b"],VCol:v["a"],VContainer:g["a"],VContent:b["a"],VForm:m["a"],VRow:y["a"],VSnackbar:C["a"],VTextField:w["a"]})},a523:function(t,a,e){"use strict";e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("20f6"),e("4b85"),e("a15b"),e("498a");var n=e("2b0e");function i(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var n=e.props,i=e.data,r=e.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var s=i.attrs;if(s){i.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var a=s[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(i.staticClass+=" ".concat(o.join(" ")))}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),a(n.tag,i,r)}})}var r=e("d9f7");a["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,n=a.props,i=a.data,s=a.children,o=i.attrs;return o&&(i.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(i.attrs[t]=a,!1):a||"string"===typeof a}))),n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),s)}})},a75b:function(t,a,e){"use strict";e("daaf");var n=e("d10f");a["a"]=n["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,a=t.bar,e=t.top,n=t.right,i=t.footer,r=t.insetFooter,s=t.bottom,o=t.left;return{paddingTop:"".concat(e+a,"px"),paddingRight:"".concat(n,"px"),paddingBottom:"".concat(i+r+s,"px"),paddingLeft:"".concat(o,"px")}}},render:function(t){var a={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,a,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}})},daaf:function(t,a,e){},df86:function(t,a,e){}}]);
//# sourceMappingURL=chunk-4f18eea9.f294e382.js.map