<template>
  <div id="albums">
    <heading text="Albums" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="albums" link="album" :fields="['name', 'band']" type="min"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import Search from './Search'

  export default {
    name: 'albums',
    data () {
      return {
        albums: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        this.$get('albums', {q: e.target.value})
          .then(response => {
            this.$parseList('albums', response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.getData({
        target: {
          value: 'a'
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

