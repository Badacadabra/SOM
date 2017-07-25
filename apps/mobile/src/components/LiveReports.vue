<template>
  <section id="live-reports">
    <list ref="list" :scroll="true" v-on:update="load" :items="reports" link="liveReport" :fields="['title', 'place', 'date', 'author']" type="std"></list>
    <loader v-if="$loading"></loader>
  </section>
</template>

<script>
  export default {
    name: 'live-reports',
    data () {
      return {
        page: 1,
        reports: []
      }
    },
    methods: {
      load () {
        this.$get('live_reports', {l: this.$i18n.locale, p: this.page})
          .then(response => {
            this.$parseList('reports', response.data, this.page)
            this.$emit('reports')
          })
          .catch(e => {
            this.$errors.push(e)
          })
      }
    }
  }
</script>

<style lang="styl" scoped>
</style>
