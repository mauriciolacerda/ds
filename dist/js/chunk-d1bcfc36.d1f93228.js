(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1bcfc36"],{"0fd9":function(t,a,e){"use strict";e("99af"),e("4160"),e("caad"),e("13d5"),e("4ec9"),e("b64b"),e("d3b7"),e("ac1f"),e("2532"),e("3ca3"),e("5319"),e("159b"),e("ddb0");var n=e("ade3"),r=e("5530"),i=(e("4b85"),e("2b0e")),s=e("d9f7"),o=e("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,a){return c.reduce((function(e,n){return e[t+Object(o["B"])(n)]=a(),e}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},h=u("justify",(function(){return{type:String,default:null,validator:p}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},m=u("alignContent",(function(){return{type:String,default:null,validator:v}})),g={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(m)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,a,e){var n=b[t];if(null!=e){if(a){var r=a.replace(t,"");n+="-".concat(r)}return n+="-".concat(e),n.toLowerCase()}}var w=new Map;a["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f,{justify:{type:String,default:null,validator:p}},h,{alignContent:{type:String,default:null,validator:v}},m),render:function(t,a){var e=a.props,r=a.data,i=a.children,o="";for(var c in e)o+=String(e[c]);var l=w.get(o);return l||function(){var t,a;for(a in l=[],g)g[a].forEach((function(t){var n=e[t],r=y(a,t,n);r&&l.push(r)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(n["a"])(t,"align-".concat(e.align),e.align),Object(n["a"])(t,"justify-".concat(e.justify),e.justify),Object(n["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),w.set(o,l)}(),t(e.tag,Object(s["a"])(r,{staticClass:"row",class:l}),i)}})},"4bd4":function(t,a,e){"use strict";e("4de4"),e("7db0"),e("4160"),e("caad"),e("07ac"),e("2532"),e("159b");var n=e("5530"),r=e("58df"),i=e("7e2b"),s=e("3206");a["a"]=Object(r["a"])(i["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},n={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=t.$watch("shouldValidate",(function(r){r&&(a.errorBag.hasOwnProperty(t._uid)||(n.valid=e(t)))})):n.valid=e(t),n},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:Object(n["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},"78a0":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{id:"user-profile",fluid:"",tag:"section"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"8"}},[e("base-material-card",{scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"display-2 font-weight-light"},[t._v(" Editar Perfil ")]),e("div",{staticClass:"subtitle-1 font-weight-light"},[t._v(" Mantenha seus dados atualizados ")])]},proxy:!0}])},[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-container",{staticClass:"py-0"},[e("v-row",[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-text-field",{staticClass:"purple-input",attrs:{label:"Nome completo",rules:[t.rules.required]},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}})],1),e("v-col",{attrs:{cols:"12"}},[e("v-text-field",{staticClass:"purple-input",attrs:{label:"E-mail",rules:[t.rules.required]},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"(##) #####.####",expression:"'(##) #####.####'"}],staticClass:"purple-input",attrs:{label:"Celular",rules:[t.rules.required]},model:{value:t.phone,callback:function(a){t.phone=a},expression:"phone"}})],1),e("v-col",{staticClass:"text-right",attrs:{cols:"12"}},[e("v-btn",{staticClass:"mr-0",attrs:{color:"success"},on:{click:t.updateUser}},[t._v(" Alterar ")])],1)],1)],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:"4"}},[e("base-material-card",{staticClass:"v-card-profile",attrs:{avatar:"https://ser-tel.com.br/wp-content/uploads/2016/10/2016-10-25-miniatura-a-evolucao-da-seguranca-eletronica.jpg"}},[e("v-card-text",{staticClass:"text-center"},[e("h6",{staticClass:"display-1 mb-1 grey--text"},[t._v(" Atualmente você é assinante do plano ")]),e("h4",{staticClass:"display-2 font-weight-light mb-3 black--text"},[t._v(" "+t._s(t.name)+" ")]),e("p",{staticClass:"font-weight-light grey--text"},[t._v(" Este plano permite que você monitore até "+t._s(t.limit)+" vendas por mês ")]),e("p",{staticClass:"font-weight-light grey--text"},[t._v(" O custo atual do plano é "),e("b",[t._v("USD "+t._s(t.price))])]),e("v-btn",{staticClass:"mr-0",attrs:{color:"secondary",rounded:"",to:"/plans"}},[t._v(" Cancelar assinatura ")]),e("v-snackbar",{model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[t._v(" "+t._s(t.message)+" "),e("v-btn",{attrs:{color:"green",text:""},on:{click:function(a){t.snackbar=!1}}},[t._v(" Fechar ")])],1)],1)],1)],1)],1)],1)},r=[],i=(e("b0c0"),e("04e1")),s=e.n(i),o=e("bc3a"),c=e.n(o),l={data:function(){var t=this;return{snackbar:!1,message:"",janela:!1,username:"",email:"",password:"",phone:"",show1:!1,show2:!1,name:"",price:"",limit:"",repsw:"",valid:!0,rules:{required:function(t){return!!t||"Obrigatório."},min:function(t){return t.length>=8||"Minimo 8 caracteres"},passMatch:function(){return t.repsw===t.password||"Sua senha não é igual a confirmação de senha"}}}},mounted:function(){var t=this,a=localStorage.getItem("auth"),e=s()(a),n=e.idplans;c.a.get("http://localhost:5000/plans/id?id="+n).then((function(a){t.name=a.data[0].name,t.price=a.data[0].price,t.limit=a.data[0].limit})),c.a.get("http://localhost:5000/users/userById?token="+a).then((function(a){t.username=a.data.name,t.email=a.data.email,t.phone=a.data.phone}))},methods:{updateUser:function(){var t=this,a=localStorage.getItem("auth");this.$refs.form.validate()&&c.a.post("http://localhost:5000/users/updateUser",{token:a,name:this.username,email:this.email,phone:this.phone}).then((function(a){!1===a.data.success||(t.snackbar=!0,t.message="Dados atualizados com sucesso")}))}}},u=l,d=e("2877"),f=e("6544"),p=e.n(f),h=e("8336"),v=e("99d9"),m=e("62ad"),g=e("a523"),b=e("4bd4"),y=e("0fd9"),w=e("2db4"),C=e("8654"),_=Object(d["a"])(u,n,r,!1,null,null,null);a["default"]=_.exports;p()(_,{VBtn:h["a"],VCardText:v["b"],VCol:m["a"],VContainer:g["a"],VForm:b["a"],VRow:y["a"],VSnackbar:w["a"],VTextField:C["a"]})},a523:function(t,a,e){"use strict";e("99af"),e("4de4"),e("b64b"),e("2ca0"),e("20f6"),e("4b85"),e("a15b"),e("498a");var n=e("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(a,e){var n=e.props,r=e.data,i=e.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var a=s[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),a(n.tag,r,i)}})}var i=e("d9f7");a["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,a){var e,n=a.props,r=a.data,s=a.children,o=r.attrs;return o&&(r.attrs={},e=Object.keys(o).filter((function(t){if("slot"===t)return!1;var a=o[t];return t.startsWith("data-")?(r.attrs[t]=a,!1):a||"string"===typeof a}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(e||[])}),s)}})}}]);
//# sourceMappingURL=chunk-d1bcfc36.d1f93228.js.map