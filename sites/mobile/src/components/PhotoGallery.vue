<template>
  <article>
    <heading :text="gallery.title" :level="2" font="oswald" color="silver"></heading>
    <div class="content" v-html="gallery.content"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'photo-gallery',
    data () {
      return {
        gallery: {},
        errors: []
      }
    },
    created () {
      this.$get('galleries', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('gallery', response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
</style>
