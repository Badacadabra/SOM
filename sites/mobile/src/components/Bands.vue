<template>
  <div id="bands">
    <heading text="Groupes" :label="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="bands" link="band" :fields="['name']" type="min"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import Search from './Search'

  export default {
    name: 'bands',
    data () {
      return {
        bands: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        this.$get('bands', {q: e.target.value})
          .then(response => {
            this.$parseList('bands', response.data)
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
