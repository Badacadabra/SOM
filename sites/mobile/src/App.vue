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
  import appHeader from './components/Header'
  import appMenu from './components/Menu'
  import appFooter from './components/Footer'

  export default {
    name: 'app',
    data () {
      return {
        menuEnabled: false
      }
    },
    methods: {
      toggleMenu () {
        this.menuEnabled = !this.menuEnabled
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
</style>
