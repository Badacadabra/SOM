<template>
  <section id="live-reports">
    <article v-for="report of reports">
      <router-link :to="{name: 'live-report', params: {id: report.id}}">
        <div class="info">
          <h3 class="gig">{{ report.title }}</h3>
          <div class="place">{{ report.place }}</div>
          <div>
            Le <span class="date">{{ new Date(report.date) | moment('DD/MM/YYYY') }}</span>
            par <span class="author">@{{ report.author }}</span>
          </div>
        </div>
      </router-link>
    </article>
    <infinite-loading :on-infinite="onInfinite" :distance="30" spinner="waveDots" ref="infiniteLoading"></infinite-loading>
    <loader v-if="ajax"></loader>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'live-reports',
    data () {
      return {
        ajax: false,
        page: 1,
        reports: []
      }
    },
    methods: {
      onInfinite () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/live_reports.php?p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.reports.push(response.data[i])
            }
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
            this.ajax = false
            this.page++
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.ajax = true
    }

  }
</script>

<style lang="styl" scoped>
  article
    color: black
    font-family: Oswald, sans-serif
    border-top: solid 1px gray

  h3
    color: $red
    font-weight: 400
    font-size: large

  a
    color: black
    display: block
    text-align: center

    &:hover
      text-decoration: none

    &:focus
      background-color: silver

  .info
    margin-left: 7px

  .info div:last-child
    font-weight: 300
</style>
