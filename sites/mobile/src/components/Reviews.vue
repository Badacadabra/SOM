<template>
  <div id="reviews">
    <heading text="Chroniques" :level="2" font="astonished" color="red"></heading>
    <list ref="list" :scroll="true" v-on:update="load" :items="reviews" link="review" :fields="['album', 'band', 'author', 'date']" type="img"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  export default {
    name: 'reviews',
    data () {
      return {
        page: 1,
        reviews: [],
        errors: []
      }
    },
    methods: {
      load () {
        this.$get('reviews', {l: 'fr', p: this.page})
          .then(response => {
            this.$parseList('reviews', response.data, this.page)
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

<style lang="styl" scoped>
  #reviews
    background-color: whitesmoke
</style>
