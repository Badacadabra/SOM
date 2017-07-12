<template>
  <section id="photo-galleries">
    <article v-for="gallery of galleries">
      <router-link :to="{name: 'photo-gallery', params: {id: gallery.id}}">
        <img class="photo" :src="gallery.picture" :alt="gallery.band">
        <div class="info">
          <h3>{{ gallery.title }}</h3>
          <div class="date">{{ new Date(gallery.date) | moment('DD/MM/YYYY') }}</div>
          <div class="author">@{{ gallery.author }}</div>
        </div>
      </router-link>
    </article>
    <infinite-loading :on-infinite="onInfinite" :distance="30" spinner="waveDots" ref="infiniteLoading"></infinite-loading>
    <loader v-if="ajax"></loader>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'photo-galleries',
    data () {
      return {
        ajax: false,
        page: 1,
        galleries: []
      }
    },
    methods: {
      onInfinite () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/galleries.php?p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.galleries.push(response.data[i])
            }
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
            this.ajax = false
            this.page++
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.ajax = true
    }
  }

</script>

<style lang="styl" scoped>
  article
    color: black
    font-family: Oswald, sans-serif
    border-top: solid 1px gray

  h3
    color: $red
    font-weight: 400
    font-size: large

  .info
    margin-left: 7px

  a
    color: black
    display: flex
    align-items: center

    &:hover
      text-decoration: none

    &:focus
      background-color: silver

  .author
    font-weight: 300

  img
    max-width: 100%
</style>
