<template>
  <article>
    <heading :text="report.title" :level="2" font="oswald" color="silver"></heading>
    <div class="credits" v-if="report.date">
      <span>{{ $t('liveReports.credits') }} {{ report.author }}</span><br>
      {{ $d(new Date(report.date), 'short') }}
    </div>
    <div class="content" v-for="txt of report.content">
      <h3>{{ txt.band }}</h3>
      <div v-html="txt.report"></div>
    </div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'live-report',
    data () {
      return {
        report: {}
      }
    },
    created () {
      this.$get('live_reports', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('report', response.data)
        })
        .catch(e => {
          this.$errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  article
    background-color: whitesmoke
    font-family: Abel, sans-serif
    font-size: 1.2em

    &:first-of-type
      margin-top: 0

  .credits
    color: $red
    text-align: center
    padding: 15px 0

    span
      font-weight: bold

  >>> .content
    div
      padding: 10px

    h2
      font-size: 1.1em

    h3
      text-align: center
      padding: 10px 0 5px 0
      border-bottom: solid 1px black

    img
      max-width: 100%
      display: block
      margin: auto
      padding: 10px 0
      height: auto !important
</style>
