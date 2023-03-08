import Vue from 'vue'
import app from './app'

import vueRecordWhatsapp from '@/index'

Vue.use(vueRecordWhatsapp)

new Vue({
  el: '#app',
  render: h => h(app)
})
