<template>
  <article id="video">
    <heading :text="video.title" :level="2" font="oswald" color="yellow"></heading>
    <div v-html="video.code"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'

  export default {
    name: 'video',
    data () {
      return {
        video: {},
        errors: []
      }
    },
    created () {
      this.$get('videos', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('video', response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    components: {
      EncyclopediaPicture
    }
  }
</script>

<style lang="styl" scoped>
  >>> iframe
    display: block
    max-width: 100%
    height: auto
</style>
