<template>
  <footer>
    Spirit of Metal © 2003 - 2017
  </footer>
</template>

<script>
  export default {
    name: 'appFooter'
  }
</script>

<style lang="styl" scoped>
  footer
    height: 50px
    text-align: center
    font: 300 15px Oswald, sans-serif
    border-top: solid 5px black
    border-image: url('../assets/img/png/border.png') 30
    color: whitesmoke
    background-color: rgba(0, 0, 0, 0.6)
    display: flex
    align-items: center
    justify-content: center
</style>
