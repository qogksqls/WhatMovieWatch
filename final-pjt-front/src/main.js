import Vue from 'vue'
import VueCookies from 'vue-cookies'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import axios from "axios"
let url = "http://127.0.0.1:8000/";
axios.get(url)
  .then(function(response){ console.log(response); })
  .catch(function(response){ console.log(response); })
