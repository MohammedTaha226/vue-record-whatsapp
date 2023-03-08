<style lang="scss">
  .toggle {
    cursor: pointer;
    margin: 20px;
  }
</style>

<template>
  <div class="row">
    <button class="toggle" @click="toggle">TOGGLE</button>
    <div class="demoStyle">
    <audio-recorder v-if="showRecorder"
      :time="2"
      :pause-recording="callback"
      :before-recording="beforeRecording"
      :after-recording="record"/>
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
      record (record) {
        console.log(record)
      },
      toggle () {
        this.showRecorder = !this.showRecorder
      },
      beforeRecording() {
        console.log('this method fired before recording..')
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