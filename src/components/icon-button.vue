<template>
  <div v-html="icons[name]"></div>
</template>

<script>
  export default {
    props: {
      name: { type: String }
    },
    data: function () {
      return {
        icons: {
          mic: '<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" xml:space="preserve"><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>',
          pause:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="iwt3stqw s79hpmcy ksz6vod1" d="M20.65,21.69V10.25H17.31V21.69Zm-9.3-11.44V21.69h3.34V10.25Z" fill="currentColor"></path></svg>',
          stop: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 22" class="i0x3nve6"><path d="M5,0,3,2H0V4H16V2H13L11,0ZM15,5H1V19.5A2.5,2.5,0,0,0,3.5,22h9A2.5,2.5,0,0,0,15,19.5Z" fill="currentColor"></path></svg>',
          send:'<svg xmlns="http://www.w3.org/2000/svg" width="23.997" height="23.999" viewBox="0 0 23.997 23.999"><g id="Group_28" data-name="Group 28" transform="translate(-1817.002 -875)"><path id="fi-rr-paper-plane" d="M23.119.882a2.966,2.966,0,0,0-2.8-.8l-16,3.37a4.995,4.995,0,0,0-2.853,8.481L3.184,13.65a1,1,0,0,1,.293.708v3.168a2.965,2.965,0,0,0,.3,1.285l-.008.007.026.026A3,3,0,0,0,5.157,20.2l.026.026.007-.008a2.965,2.965,0,0,0,1.285.3H9.643a1,1,0,0,1,.707.292l1.717,1.717A4.963,4.963,0,0,0,15.587,24a5.049,5.049,0,0,0,1.6-.264,4.933,4.933,0,0,0,3.344-3.986L23.911,3.715A2.975,2.975,0,0,0,23.119.882ZM4.6,12.238,2.881,10.521a2.94,2.94,0,0,1-.722-3.074,2.978,2.978,0,0,1,2.5-2.026L20.5,2.086,5.475,17.113V14.358A2.978,2.978,0,0,0,4.6,12.238Zm13.971,7.17a3,3,0,0,1-5.089,1.712l-1.72-1.72a2.978,2.978,0,0,0-2.119-.878H6.888L21.915,3.5Z" transform="translate(1816.999 875)" fill="#fff"></path></g></svg>'
        }
      }
    }
  }
</script>

