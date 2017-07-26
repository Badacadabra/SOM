<template>
  <div id="app">
    <!-- Disclaimer for tablets and desktops (screen width > 640px) -->
    <disclaimer></disclaimer>
    <!-- Mobile app for smartphones (screen width < 640px) -->
    <app-header v-on:menu="toggleMenu"></app-header>
    <dimmer v-if="menuEnabled"></dimmer>
    <transition name="slide">
      <app-menu v-if="menuEnabled"></app-menu>
    </transition>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from './components/layout/Header'
  import appMenu from './components/layout/Menu'
  import appFooter from './components/layout/Footer'

  export default {
    name: 'app',
    data () {
      return {
        menuEnabled: false
      }
    },
    methods: {
      toggleMenu () {
        // regular code
        this.menuEnabled = !this.menuEnabled
        document.body.scrollTop = 0

        // alpha version
        if (this.menuEnabled && this.$i18n.locale === 'en') {
          alert('Member accounts are not available in this alpha version. You can play with forms, but you will not be able to log in or sign up.')
        }
        if (this.menuEnabled && this.$i18n.locale === 'fr') {
          alert('L\'espace membre n\'est pas disponible dans cette version alpha. Vous pouvez jouer avec les formulaires, mais vous ne pourrez pas vous connecter ni vous inscrire.')
        }
      }
    },
    components: {
      appHeader,
      appMenu,
      appFooter
    }
  }
</script>

<style lang="styl">
  .slide-enter-active
  .slide-leave-active
    transition: transform .5s

  .slide-enter
  .slide-leave-to
    transform: translateX(-300px)

  #app
    padding-top: 50px // due to fixed header
</style>
