<template>
  <section id="gigs">
    <article v-for="gig of gigs">
      <router-link :to="{name: 'gig', params: {id: gig.id}}">
        <h3 class="gig">{{ gig.title }}</h3>
        <div class="place">{{ gig.place }}</div>
        <div class="date">{{ new Date(gig.date) | moment('DD/MM/YYYY') }}</div>
      </router-link>
    </article>
    <infinite-loading :on-infinite="onInfinite" :distance="30" spinner="waveDots" ref="infiniteLoading"></infinite-loading>
    <loader v-if="ajax"></loader>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'gigs',
    data () {
      return {
        ajax: false,
        page: 1,
        gigs: []
      }
    },
    methods: {
      onInfinite () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/gigs.php?p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.gigs.push(response.data[i])
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
  @import '../assets/variables.styl'

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

  .date
    font-weight: 300
</style>
