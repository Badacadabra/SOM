<template>
  <div id="disclaimer">Veuillez consulter ce site sur smartphone.</div>
</template>

<script>
  export default {
    name: 'disclaimer'
  }
</script>

<style lang="styl" scoped>
  #disclaimer
    display: none

  @media screen and (min-width: 641px)
    #disclaimer
      position: fixed
      top: 0
      right: 0
      bottom: 0
      left: 0
      z-index: 999
      font: xx-large Oswald, sans-serif
      color: whitesmoke
      background-color: black
      display: flex
      align-items: center
      justify-content: center
</style>
