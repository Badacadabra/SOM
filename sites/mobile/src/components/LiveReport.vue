<template>
  <article>
    <heading :text="report.title" :level="2" font="oswald" color="red"></heading>
    <div class="content" v-for="txt of report.content">
      <heading :text="txt.band" :level="3" font="oswald" color="silver"></heading>
      <div v-html="txt.report"></div>
    </div>
    <div class="credits">
      {{ report.author }} - {{ $d(new Date(report.date), 'short') }}
    </div>
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
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  article
    background-color: whitesmoke

  h3
    margin: 10px 0

    &:first-of-type
      margin-top: 0

  .content div
    padding: 5px

  .credits
    color: $red
    text-align: center
    font: large Oswald, sans-serif
    border-top: dashed 1px gray
    padding: 15px 0
</style>
