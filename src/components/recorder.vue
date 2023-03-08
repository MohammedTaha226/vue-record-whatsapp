<template>
  <div class="whatsapp-record" :class="{'show': isRecording}">
    <icon-button
      class="record-icon"
      :name="iconButtonType"
      :class="{
        'record-icon-active': isRecording,
        'record-icon--pause': isRecording && volume > 0.02
      }"
      @click.native="toggleRecorder"/>
      <transition name="slide-fade">
        <icon-button
          v-if="isRecording"
          class="record-icon stop-icon"
          name="stop"
          @click.native="stopRecorder"/>
      </transition>
       <transition name="slide-fade">
        <div class="duration"
          v-if="isRecording">{{recordedTime}}</div>
      </transition>
      <transition name="slide-fade">
        <icon-button
          v-if="isRecording"
          class="record-icon send-icon"
          name="send"
          @click.native="send"/>
      </transition>
  </div>
</template>

<script>
  import IconButton  from './icon-button'
  import Recorder    from '@/lib/recorder'
  import { convertTimeMMSS }  from '@/lib/utils'

  export default {
    props: {
      time     : { type: Number },
      showDownloadButton : { type: Boolean, default: true },
      showUploadButton   : { type: Boolean, default: true },
      beforeRecording  : { type: Function },
      pauseRecording   : { type: Function },
      afterRecording   : { type: Function },
      sendRecord : { type: Function }
    },
    data () {
      return {
        recorder      : this._initRecorder(),
        record    : null,
        selected      : {},
        uploadStatus  : null,
      }
    },
    components: {
      IconButton
      
    },
    mounted () {
      
    },
    beforeDestroy () {
      this.stopRecorder()
    },
    methods: {
      toggleRecorder () {
        if (!this.isRecording || (this.isRecording && this.isPause)) {
          this.recorder.start()
        } else {
          this.recorder.pause()
        }
      },
      stopRecorder () {
        if (!this.isRecording) {
          return
        }
        this.recorder.stop();
      },
      send() {
        if (!this.isRecording) {
          return
        }
        this.recorder.send();
      },
      _initRecorder () {
        return new Recorder({
          beforeRecording : this.beforeRecording,
          afterRecording  : this.afterRecording,
          pauseRecording  : this.pauseRecording,
          sendRecord : this.sendRecord
        })
      }
    },
    computed: {
      iconButtonType () {
        return this.isRecording && this.isPause ? 'mic' : this.isRecording ? 'pause' : 'mic'
      },
      isPause () {
        return this.recorder.isPause
      },
      isRecording () {
        return this.recorder.isRecording
      },
      recordedTime () {
        if (this.time && this.recorder.duration >= this.time * 60) {
          this.stopRecorder()
        }
        return convertTimeMMSS(this.recorder.duration)
      },
      volume () {
        return parseFloat(this.recorder.volume)
      }
    }
  }
</script>

<style lang="scss">
 .whatsapp-record {
    position: static;
    display: flex;
    align-items: flex-end;
    gap:15px;
    width:37px;
    transition:all 0.3s ease
}

.whatsapp-record.show
{
  width:204px;
}

.record-icon
{
    background: none;
    padding: 0;
    border: none;
    height: 37px;
    width: 37px;
    line-height: 52px;
    flex: none;
    color: #919191;
    margin-right: 0;
    border-radius: 50%;
    text-align: left;
    cursor:pointer;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}

.record-icon svg
{
  width:100%;
}

.record-icon svg path
{
  fill: #00C5BB;
}

.record-icon.record-icon-active
{
    text-align: center;
    background-color: #ef5350;
    -webkit-animation: pulse 1.25s cubic-bezier(.66,0,0,1) infinite;
    animation: pulse 1.25s cubic-bezier(.66,0,0,1) infinite;
}

@keyframes pulse{
    to{   
        -webkit-box-shadow:0 0 0 10px rgba(239,83,80,.1);
        box-shadow:0 0 0 10px rgba(239,83,80,.1);background-color:#e53935;
    }
}

.record-icon.record-icon-active svg path
{
  fill: #fff;
}

.stop-icon
{
    text-align: center;
    border: 2px solid #919191;
    border-radius: 50%;
    width: 31px;
    line-height: 40px;
    height: 32px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}

.stop-icon svg
{
  max-width:13px;
}

.stop-icon svg path
{  
  fill:#919191;
}

.send-icon
{
  margin-left:-10px;
}

.duration
{
    text-align: center;
    height: 37px;
    line-height: 43px;
    min-width:40px;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10px);
  opacity: 0;
}

</style>
