<template>
  <div id="artistes">
    <heading :text="$t('encyclopedia.artists')" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="artists" link="artist" :fields="['FullName']" type="min"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import Search from './Search'

  export default {
    name: 'artists',
    data () {
      return {
        artists: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        this.$get('artists', {q: e.target.value})
          .then(response => {
            this.$parseList('artists', response.data)
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
