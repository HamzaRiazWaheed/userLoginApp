import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import './styles/app.scss';

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")