<template>
  <header>
    <h1><router-link :to="{name: 'home'}">SPIRIT OF <span class="yellow">METAL</span></router-link></h1>
    <img v-if="menuIsHidden" @click="toggle" id="burger" src="../assets/img/png/burger.png" alt="Ouvrir le menu">
    <img v-else @click="toggle" id="cross" src="../assets/img/png/cross.png" alt="Fermer le menu">
  </header>
</template>

<script>
  export default {
    name: 'appHeader',
    data () {
      return {
        menuIsHidden: true
      }
    },
    methods: {
      toggle () {
        this.menuIsHidden = !this.menuIsHidden
        this.$emit('menu')
      }
    }
  }
</script>

<style lang="styl" scoped>
  header
    width: 100%
    height: 50px
    background-color: black
    display: flex
    justify-content: space-between
    align-items: center
    position: fixed
    z-index: 50
    top: 0

    h1
      font: 400 25px Oswald, sans-serif
      padding-left: 10px

      a
        color: whitesmoke

        &:active
          color: $yellow

  #burger
  #cross
    cursor: pointer
    padding-right: 10px
</style>
