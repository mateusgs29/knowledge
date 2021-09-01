import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik1hdGV1cyBHb21lcyIsImVtYWlsIjoibWF0QHRlc3RlLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MzA0NTMzMDQsImV4cCI6MTYzMDcxMjUwNH0.HivKzGPsPLe9NGTdDUUZFzlMoWRxAtaIjeWHL-nbrbU'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')