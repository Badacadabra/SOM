<template>
  <div id="genres">
    <heading text="Genres" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="genres" link="genre" :fields="['title']" type="min"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import Search from './Search'

  export default {
    name: 'genres',
    data () {
      return {
        genres: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        this.$get('styles', {q: e.target.value})
          .then(response => {
            this.$parseList('genres', response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.getData({
        target: {
          value: ''
        }
      })
    },
    components: {
      Search
    }
  }
</script>

<style lang="styl" scoped>
</style>
