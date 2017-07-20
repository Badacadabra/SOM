<template>
  <transition name="fade">
    <div id="dimmer"></div>
  </transition>
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
    z-index: 20
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.9)

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-to {
    opacity: 0
  }
</style>
