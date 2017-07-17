<template>
  <div id="events">
    <heading :text="$t('categories.events')" :level="2" font="astonished" color="red"></heading>
    <nav>
      <router-link class="item" :to="{name: 'gigs'}" :class="{selected: gigsSelected}">
        <icon name="calendar" scale="1.3"></icon>
        <span>{{ $t('events.gigs') }}</span>
      </router-link>
      <router-link class="item" :to="{name: 'liveReports'}" :class="{selected: reportsSelected}">
        <icon name="bullhorn" scale="1.3"></icon>
        <span>{{ $t('events.liveReports') }}</span>
      </router-link>
      <router-link class="item" :to="{name: 'photoGalleries'}" :class="{selected: galleriesSelected}">
        <icon name="photo" scale="1.3"></icon>
        <span>{{ $t('events.photos') }}</span>
      </router-link>
    </nav>
    <router-view v-on:gigs="onGigs" v-on:reports="onReports" v-on:galleries="onGalleries"></router-view>
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
        galleriesSelected: false,
        errors: []
      }
    },
    methods: {
      onGigs () {
        this.gigsSelected = true
        this.reportsSelected = false
        this.galleriesSelected = false
      },
      onReports () {
        this.gigsSelected = false
        this.reportsSelected = true
        this.galleriesSelected = false
      },
      onGalleries () {
        this.gigsSelected = false
        this.reportsSelected = false
        this.galleriesSelected = true
      }
    }
  }
</script>

<style lang="styl" scoped>
  #events
    background-color: whitesmoke

  nav
    font-family: Oswald, sans-serif
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

    .selected
      color: black
</style>
