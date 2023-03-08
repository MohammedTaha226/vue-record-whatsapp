import vueRecordWhatsapp from '@/components/recorder.vue'

const components = {
  vueRecordWhatsapp,

  install (Vue) {
    if (this.installed) {
      return
    }

    this.installed = true

    Vue.prototype.$eventBus = Vue.prototype.$eventBus || new Vue
    Vue.component('vue-record-whatsapp', vueRecordWhatsapp)
  }
}

export default components

export { vueRecordWhatsapp }
