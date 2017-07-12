<template>
  <div id="events">
    <h2>Événements</h2>
    <nav>
      <router-link class="item" :to="{name: 'gigs'}">
        <icon name="calendar" scale="1.3"></icon>
        <span>Concerts</span>
      </router-link>
      <router-link class="item" :to="{name: 'liveReports'}">
        <icon name="bullhorn" scale="1.3"></icon>
        <span>Live-reports</span>
      </router-link>
      <router-link class="item" :to="{name: 'photoGalleries'}">
        <icon name="photo" scale="1.3"></icon>
        <span>Photos</span>
      </router-link>
    </nav>
    <router-view v-if="gigsSelected"></router-view>
    <router-view v-else-if="reportsSelected"></router-view>
    <router-view v-else></router-view>
  </div>
</template>

<script>
  import 'vue-awesome/icons/calendar'
  import 'vue-awesome/icons/bullhorn'
  import 'vue-awesome/icons/photo'

  export default {
    name: 'events',
    data () {
      return {
        gigsSelected: true,
        reportsSelected: false,
        errors: []
      }
    }
  }
</script>

<style lang="styl" scoped>
  #events
    background-color: whitesmoke

  h2
    height: 50px
    line-height: 50px
    color: whitesmoke
    background-color: $red
    text-align: center
    font: 42px Astonished, sans-serif

  nav
    background-color: silver
    display: flex
    justify-content: space-between
    align-items: center

    .item
      color: gray
      height: 50px
      flex-grow: 1
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column

      &:focus
        color: black

      &:active
        color: whitesmoke

      span
        font-variant: small-caps
</style>
