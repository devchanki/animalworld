<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    window.addEventListener('resize', this.changeMeta)
    if (window.outerWidth <= 640) {
      document.getElementsByTagName('meta')[1].setAttribute('content','width=640px,max-scale=1.0,user-scalable=no')
    } else {
      document.getElementsByTagName('meta')[1].setAttribute('content','width=device-width,initial-scale=1.0,user-scalable=no')
    }
  },
  methods: {
    changeMeta: function () {
      if (window.outerWidth <= 640) {
        document.getElementsByTagName('meta')[1].setAttribute('content','width=640px,max-scale=1.0,user-scalable=no')
      } else {
        document.getElementsByTagName('meta')[1].setAttribute('content','width=device-width,initial-scale=1.0,user-scalable=no')
      }
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    background-color: rgb(8,0,40);
  }
  @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
  * {
    font-family: "Noto Sans KR", sans-serif;
  }
  span {
    background-color: white !important;
  }
</style>
