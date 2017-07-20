<template>
  <header>
    <h1><router-link :to="{name: 'home'}">SPIRIT OF <span>METAL</span><sup>alpha</sup></router-link></h1>
    <div id="language-switcher" @click="switchLanguage">
      <span>&bull;</span> {{ this.$i18n.locale }} <span>&bull;</span>
    </div>
    <img v-if="menuIsHidden" @click="toggleMenu" id="burger" src="../assets/img/png/burger.png" alt="Ouvrir le menu">
    <img v-else @click="toggleMenu" id="cross" src="../assets/img/png/cross.png" alt="Fermer le menu">
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
      switchLanguage () {
        this.$i18n.locale === 'en' ? this.$i18n.locale = 'fr' : this.$i18n.locale = 'en'
        this.$validator.setLocale(this.$i18n.locale) // vee-validate
      },
      toggleMenu () {
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
    z-index: 100
    top: 0

    h1
      font: 400 25px Oswald, sans-serif
      padding-left: 10px

      a
        color: whitesmoke

        &:active
        span
          color: $yellow

      sup
        font-size: small
        margin-left: 3px

  #language-switcher
    color: gray
    text-transform: uppercase

    span
      color: whitesmoke

  #burger
  #cross
    cursor: pointer
    padding-right: 10px
</style>
