<template>
  <div id="events">
    <h2>Événements</h2>
    <nav>
      <a href="#concerts" class="item" @click="navigate('gigs')">
        <icon name="calendar" scale="1.3"></icon>
        <span>Concerts</span>
      </a>
      <a href="#reports" class="item" @click="navigate('reports')">
        <icon name="bullhorn" scale="1.3"></icon>
        <span>Live-reports</span>
      </a>
      <a href="#photos" class="item" @click="navigate('photos')">
        <icon name="photo" scale="1.3"></icon>
        <span>Photos</span>
      </a>
    </nav>
    <section id="gigs" v-if="gigsSelected">
      <article v-for="gig of gigs">
        <a href="#">
          <h3 class="gig">{{ gig.title }}</h3>
          <div class="place">{{ gig.place }}</div>
          <div class="date">{{ new Date(gig.date) | moment('DD/MM/YYYY') }}</div>
        </a>
      </article>
      <infinite-loading :on-infinite="onInfiniteGigs" :distance="30" spinner="waveDots" ref="infiniteLoading"></infinite-loading>
    </section>
    <section id="live-reports" v-else-if="reportsSelected">
      <article v-for="report of reports">
        <a href="#">
          <div class="info">
            <h3 class="gig">{{ report.title }}</h3>
            <div class="place">{{ report.place }}</div>
            <div>
              Le <span class="date">{{ new Date(report.date) | moment('DD/MM/YYYY') }}</span>
              par <span class="author">@{{ report.author }}</span>
            </div>
          </div>
        </a>
      </article>
      <infinite-loading :on-infinite="onInfiniteReports" :distance="30" spinner="waveDots" ref="infiniteLoading"></infinite-loading>
    </section>
    <section id="photo-galleries" v-else>
      <article v-for="gallery of galleries">
        <a href="#">
          <img class="photo" :src="gallery.picture" :alt="gallery.band">
          <div class="info">
            <h3>{{ gallery.title }}</h3>
            <div class="date">{{ new Date(gallery.date) | moment('DD/MM/YYYY') }}</div>
            <div class="author">@{{ gallery.author }}</div>
          </div>
        </a>
      </article>
      <infinite-loading :on-infinite="onInfiniteGalleries" :distance="30" spinner="waveDots" ref="infiniteLoading"></infinite-loading>
    </section>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import 'vue-awesome/icons/calendar'
  import 'vue-awesome/icons/bullhorn'
  import 'vue-awesome/icons/photo'
  import axios from 'axios'

  export default {
    name: 'events',
    data () {
      return {
        gigsSelected: true,
        reportsSelected: false,
        baseUrl: 'http://www.spirit-of-metal.com/API',
        ajax: false,
        gigsPage: 1,
        reportsPage: 1,
        galleriesPage: 1,
        gigs: [],
        reports: [],
        galleries: [],
        errors: []
      }
    },
    methods: {
      navigate (tab) {
        if (tab === 'gigs') {
          this.gigsSelected = true

          axios.get(`${this.baseUrl}/gigs.php?p=${this.gigsPage}`)
            .then(response => {
              for (var i = 0; i < response.data.length; i++) {
                this.gigs.push(response.data[i])
              }
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
              this.ajax = false
              this.gigsPage++
            })
            .catch(e => {
              this.errors.push(e)
            })
        } else if (tab === 'reports') {
          this.gigsSelected = false
          this.reportsSelected = true

          if (this.reportsPage === 1) {
            this.ajax = true
          }

          axios.get(`${this.baseUrl}/live_reports.php?p=${this.reportsPage}`)
            .then(response => {
              for (var i = 0; i < response.data.length; i++) {
                this.reports.push(response.data[i])
              }
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
              this.reportsPage++
              this.ajax = false
            })
            .catch(e => {
              this.errors.push(e)
            })
        } else { // "Photos" tab
          this.gigsSelected = false
          this.reportsSelected = false

          if (this.galleriesPage === 1) {
            this.ajax = true
          }

          axios.get(`${this.baseUrl}/galleries.php?p=${this.galleriesPage}`)
            .then(response => {
              for (var i = 0; i < response.data.length; i++) {
                this.galleries.push(response.data[i])
              }
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
              this.galleriesPage++
              this.ajax = false
            })
            .catch(e => {
              this.errors.push(e)
            })
        }
      },
      onInfiniteGigs () {
        this.navigate('gigs')
      },
      onInfiniteReports () {
        this.navigate('reports')
      },
      onInfiniteGalleries () {
        this.navigate('photos')
      }
    },
    created () {
      // Used to show a big loader on the initial load
      this.ajax = true
    }
  }
</script>

<style lang="styl" scoped>
  @import '../assets/variables.styl'

  #events
    background-color: whitesmoke

  h2
    height: 50px
    line-height: 50px
    color: whitesmoke
    background-color: $red
    text-align: center
    font: 42px Astonished, sans-serif

  h3
    color: $red
    font-weight: 400
    font-size: large

  nav
    background-color: silver
    display: flex
    justify-content: space-between
    align-items: center

    .item
      color: gray
      height: 50px
      flex-grow: 1
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column

      &:focus
        color: black

      &:active
        color: whitesmoke

      span
        font-variant: small-caps

  a
    color: black

    &:hover
      text-decoration: none

    &:focus
      background-color: silver

  article
    color: black
    font-family: Oswald, sans-serif
    border-top: solid 1px gray

  .info
    margin-left: 7px

  img
    max-width: 100%

  #gigs
    a
      display: block
      text-align: center

    .date
      font-weight: 300

  #live-reports
    a
      display: block
      text-align: center

    .info div:last-child
      font-weight: 300

  #photo-galleries
    a
      display: flex
      align-items: center

    .author
      font-weight: 300
</style>
