<template>
  <article>
    <heading :text="report.title" :level="2" font="oswald" color="silver"></heading>
    <div class="content" v-html="report.content"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'live-report',
    data () {
      return {
        report: {},
        errors: []
      }
    },
    created () {
      this.$get('live_reports', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('report', response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
</style>
