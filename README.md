# vue-record-whatsapp

> Vue recorder whatsapp for Vue.js. It allows to create, send on a server.

#### [Live demo](https://codepen.io/MohammedTaha/pen/poOWQpr)

![](https://github.com/MohammedTaha226/vue-record-whatsapp/blob/main/screenshot.png)

### Features

- Beautiful clean UI
- Time limit
- MP3/WAV support

### Tested in (desktop)

- Chrome
- Firefox
- Safari

## Installation

```
npm i vue-record-whatsapp --save
```
## vueRecordWhatsapp props
| Prop                  | Type     | Description                                                   |
| --------------------- | -------- | ------------------------------------------------------------- |
| time                  | Number   |    Time limit for the record (minutes)                        |
| pause-recording       | Method   |    Callback fires after pause recording                       |
| before-recording      | Method   |    Callback fires before recording                            |
| after-recording       | Method   |    Callback fires after recording                             |
| send-record           | Method   |    Callback fires after recording                             |

## Usage

```js
    import vueRecordWhatsapp from 'vue-record-whatsapp'

    Vue.use(vueRecordWhatsapp)
```

```js
    methods: {
      callback (data) {
        console.log(data)
      }
    }
```

```html
    <vue-record-whatsapp v-if="showRecorder"
      :time="2"
      :pause-recording="pauseRecording"
      :before-recording="beforeRecording"
      :after-recording="afterRecording"
      :send-record="sendRecord"/>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## TODO
- Responsive design
