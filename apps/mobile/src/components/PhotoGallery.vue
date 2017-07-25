<template>
  <article>
    <heading :text="gallery.title" :level="2" font="oswald" color="white"></heading>
    <div class="info" v-if="gallery.date">
      <span>{{ $t('galleries.credits') }} {{ gallery.author }}</span><br>
      {{ $d(new Date(gallery.date), 'short') }}
    </div>
    <figure v-for="photo of gallery.picture">
      <img :src="photo" :alt="gallery.title">
    </figure>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'photo-gallery',
    data () {
      return {
        gallery: {}
      }
    },
    created () {
      this.$get('galleries', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('gallery', response.data)
        })
        .catch(e => {
          this.$errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  img
    max-width: 100%
    display: block
    background-color: black

  .info
    color: $red
    padding: 0 5px 10px 5px
    background-color: whitesmoke
    text-align: center
    font-family: Abel, sans-serif
    font-size: 1.2em
    border-bottom: solid 2px black

    span
      font-weight: bold
</style>
