<template>
  <div id="genres">
    <heading text="Lieux" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="places" link="place" :fields="['name']" type="min"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import Search from './Search'

  export default {
    name: 'places',
    data () {
      return {
        places: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        this.$get('places', {q: e.target.value})
          .then(response => {
            this.$parseList('places', response.data)
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
