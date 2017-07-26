<template>
  <article id="video">
    <heading :text="video.title" :level="2" font="oswald" color="yellow" variant="uppercase"></heading>
    <div v-html="video.code"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'video',
    data () {
      return {
        video: {}
      }
    },
    created () {
      this.$get('videos', {l: this.$i18n.locale, id: this.$route.params.id})
        .then(response => {
          this.$parseItem('video', response.data)
        })
        .catch(e => {
          this.$errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  article
    background-color: black

  >>> iframe
    display: block
    max-width: 100%
    height: auto
</style>
