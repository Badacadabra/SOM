<template>
  <article id="genre">
    <heading :text="title" :level="2" font="oswald" color="yellow" variant="uppercase"></heading>
    <nav>
      <router-link :to="{name: 'bandsByGenre'}" :class="{selected: bandsSelected}">
        <icon name="group" scale="1.3"></icon>
        <span>{{ $t('genre.bands') }}</span>
      </router-link>
      <router-link :to="{name: 'albumsByGenre'}" :class="{selected: albumsSelected}">
        <icon name="music" scale="1.3"></icon>
        <span>{{ $t('genre.albums') }}</span>
      </router-link>
    </nav>
    <router-view v-on:bands="onBands" v-on:albums="onAlbums"></router-view>
  </article>
</template>

<script>
  import 'vue-awesome/icons/group'
  import 'vue-awesome/icons/music'

  export default {
    name: 'genre',
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

    a
      color: gray
      height: 50px
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      flex-grow: 1
      border: solid 5px white

      span
        font-family: Oswald, sans-serif

    .selected
      color: black
      background-color: $yellow
      border-radius: 7px
</style>
