import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import VueTheMask from 'vue-the-mask'
import VuetifyDialog from 'vuetify-dialog'
import VueFilterDateParse from 'vue-filter-date-parse'
Vue.use(VueFilterDateParse)
Vue.use(VuetifyDialog)

Vue.use(VueTheMask)

Vue.config.productionTip = false
Vue.use(VueCookies)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
