<template>
  <article>
    <h2>{{ report.title }}</h2>
    <div class="content" v-html="report.content"></div>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'live-report',
    data () {
      return {
        ajax: false,
        report: {},
        errors: []
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/live_reports.php?id=${id}`)
        .then(response => {
          this.report = response.data
          this.ajax = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  h2
    min-height: 50px
    color: black
    background-color: silver
    font: 20px Oswald, sans-serif
    display: flex
    align-items: center
    justify-content: center
</style>
