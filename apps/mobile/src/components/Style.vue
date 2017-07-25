<template>
  <article id="style">
    <heading :text="title" :level="2" font="oswald" color="yellow" variant="uppercase"></heading>
    <nav>
      <router-link :to="{name: 'bandsByStyle'}" :class="{selected: bandsSelected}">
        <icon name="group" scale="1.3"></icon>
        <span>{{ $t('style.bands') }}</span>
      </router-link>
      <router-link :to="{name: 'albumsByStyle'}" :class="{selected: albumsSelected}">
        <icon name="music" scale="1.3"></icon>
        <span>{{ $t('style.albums') }}</span>
      </router-link>
    </nav>
    <router-view v-on:bands="onBands" v-on:albums="onAlbums"></router-view>
  </article>
</template>

<script>
  import 'vue-awesome/icons/group'
  import 'vue-awesome/icons/music'

  export default {
    name: 'style',
    data () {
      return {
        bandsSelected: true,
        albumsSelected: false,
        title: 'Chargement...'
      }
    },
    methods: {
      onBands (data) {
        this.title = data
        this.bandsSelected = true
        this.albumsSelected = false
      },
      onAlbums () {
        this.albumsSelected = true
        this.bandsSelected = false
      }
    }
  }
</script>

<style lang="styl" scoped>
  nav
    display: flex
    justify-content: space-between
    align-items: center
    background-color: whitesmoke
    border-bottom: solid 2px black

    a
      color: gray
      height: 50px
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      flex-grow: 1

      span
        font-family: Oswald, sans-serif

    .selected
      color: black
      background-color: $lightgray
</style>
