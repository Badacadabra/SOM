<template>
  <div id="labels">
    <heading :text="$t('encyclopedia.labels')" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="labels" link="label" :fields="['name']" type="min"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import Search from './Search'

  export default {
    name: 'labels',
    data () {
      return {
        labels: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        this.$get('labels', {q: e.target.value})
          .then(response => {
            this.$parseList('labels', response.data)
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
