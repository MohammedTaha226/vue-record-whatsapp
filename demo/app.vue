<template>
  <div class="row">
    <button class="toggle" @click="toggle">TOGGLE</button>
    <div class="demoStyle">
    <vue-record-whatsapp v-if="showRecorder"
      :time="2"
      :pause-recording="pauseRecording"
      :before-recording="beforeRecording"
      :after-recording="afterRecording"
      :send-record="sendRecord"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        showRecorder: true
      }
    },
    methods: {
      toggle () {
        this.showRecorder = !this.showRecorder
      },
      beforeRecording() {
        console.log('this method fired before recording')
      },
      pauseRecording() {
        console.log('this method fired when record is pause')
      },
      afterRecording (record) {
        console.log('this method fired when record is finished or removed')
      },
      sendRecord(record) {
        console.log(record)
      }
    }
  }
</script>
<style scoped>
.demoStyle
{
  border-radius:10px;
  background-color:#f9f9f9;
  padding:20px;
  margin:30px auto 20px;
  max-width:500px;
  display: flex;
  justify-content: center;
}

.toggle
{
  border-radius:30px;
  border:none;
  background-color:#f5f5f5;
  font-weight:700;
  width:200px;
  height:50px;
  margin:50px auto 0;
  display:block;
}

</style>