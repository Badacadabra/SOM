<template>
  <div id="loader">
    <scale-loader class="loader" :loading="loading" :color="color" :width="width" :height="height"></scale-loader>
    <dimmer v-if="loading"></dimmer>
  </div>
</template>

<script>
  import ScaleLoader from 'vue-spinner/src/ScaleLoader'

  export default {
    name: 'loader',
    data () {
      return {
        loading: true,
        color: 'whitesmoke',
        width: '20px',
        height: '80px'
      }
    },
    components: {
      ScaleLoader
    }
  }
</script>

<style lang="styl" scoped>
  .loader
    position: absolute
    z-index: 50
    top: 50%
    left: 50%
    transform: translate(-50%)
</style>
