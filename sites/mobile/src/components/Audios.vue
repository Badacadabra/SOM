<template>
  <div id="audios">
    <heading text="Audios" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="audios" link="audio" :fields="['title']" type="min"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import Search from './Search'

  export default {
    name: 'audios',
    data () {
      return {
        audios: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        this.$get('audios', {q: e.target.value})
          .then(response => {
            this.$parseList('audios', response.data)
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

