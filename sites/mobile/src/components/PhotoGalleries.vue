<template>
  <section id="photo-galleries">
    <list ref="list" :scroll="true" v-on:update="load" :items="galleries" link="photoGallery" :fields="['title', 'date', 'author']" type="img"></list>
    <loader v-if="$loading"></loader>
  </section>
</template>

<script>
  export default {
    name: 'photo-galleries',
    data () {
      return {
        page: 1,
        galleries: []
      }
    },
    methods: {
      load () {
        this.$get('galleries', {p: this.page})
          .then(response => {
            this.$parseList('galleries', response.data, this.page)
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }

</script>

<style lang="styl" scoped>
</style>
