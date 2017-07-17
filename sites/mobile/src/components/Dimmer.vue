<template>
  <div id="dimmer"></div>
</template>

<script>
  export default {
    name: 'dimmer'
  }
</script>

<style lang="styl" scoped>
  #dimmer
    position: fixed
    top: 50px
    left: 0
    z-index: 10
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.9)
</style>
