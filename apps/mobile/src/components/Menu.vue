<template>
  <div id="menu">
    <login></login>
    <signup></signup>
  </div>
</template>

<script>
  import Login from './Login'
  import Signup from './Signup'

  export default {
    name: 'app-menu',
    components: {
      Login,
      Signup
    }
  }
</script>

<style lang="styl" scoped>
  #menu
    width: 300px
    background-color: $lightgray
    border-right: solid 5px $red
    border-bottom: solid 5px $red
    position: absolute
    top: 50px
    left: 0
    z-index: 50

  >>> .txt
    width: 280px
    height: 30px
    margin: 10px 0 0 8px
    color: gray
    border: solid 1px silver
    background-color: white
    text-align: center
    font: 1.1em Abel, sans-serif

  >>> .custom-btn
    display: block
    width: 280px
    height: 35px
    margin: 10px 0 10px 8px
    text-align: center
    color: white
    background-color: black
    border-radius: 3px
    font: 400 17px Oswald, sans-serif

  >>> #signup-password
  >>> #password-confirm
  >>> #location
  >>> #language
    width: 132px
</style>
