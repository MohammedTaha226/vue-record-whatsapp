import Vue from 'vue'
import app from './app'

import AudioRecorder from '@/index'

Vue.use(AudioRecorder)

new Vue({
  el: '#app',
  render: h => h(app)
})
