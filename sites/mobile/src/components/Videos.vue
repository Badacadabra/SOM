<template>
  <div id="videos">
    <heading :text="$t('encyclopedia.videos')" :level="2" font="astonished" color="yellow"></heading>
    <search v-on:typing="getData"></search>
    <list :scroll="false" :items="videos" link="video" :fields="['title']" type="min"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import Search from './Search'

  export default {
    name: 'videos',
    data () {
      return {
        videos: [],
        errors: []
      }
    },
    methods: {
      getData (e) {
        this.$get('videos', {q: e.target.value})
          .then(response => {
            this.$parseList('videos', response.data)
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

