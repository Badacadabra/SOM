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
          <div class="date">{{ gig.date }}</div>
        </a>
      </article>
    </section>
    <section id="live-reports" v-else-if="reportsSelected">
      <article v-for="report of reports">
        <a href="#">
          <h3 class="gig">{{ report.title }}</h3>
          <div class="place">{{ report.place }}</div>
          <div class="date">{{ report.date }}</div>
          <div class="author">@{{ report.author }}</div>
        </a>
      </article>
    </section>
    <section id="photo-galleries" v-else>
      <article v-for="photo of photos">
        <a href="#">
          <figure>
            <img class="photo" :src="photo.picture" :alt="photo.band">
            <figcaption>{{ photo.title }}</figcaption>
          </figure>
        </a>
      </article>
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
        gigs: [],
        reports: [],
        photos: [],
        errors: []
      }
    },
    methods: {
      navigate (tab) {
        if (tab === 'gigs') {
          this.gigsSelected = true
        } else if (tab === 'reports') {
          this.gigsSelected = false
          this.reportsSelected = true

          if (this.reports.length === 0) {
            this.ajax = true
            axios.get(`${this.baseUrl}/live_reports.php`)
              .then(response => {
                this.reports = response.data
                this.ajax = false
              })
              .catch(e => {
                this.errors.push(e)
              })
          }
        } else { // "Photos" tab
          this.gigsSelected = false
          this.reportsSelected = false

          if (this.photos.length === 0) {
            this.ajax = true
            axios.get(`${this.baseUrl}/galleries.php`)
              .then(response => {
                this.photos = response.data
                this.ajax = false
              })
              .catch(e => {
                this.errors.push(e)
              })
          }
        }
      }
    },
    created () {
      this.ajax = true
      axios.get(`${this.baseUrl}/gigs.php`)
        .then(response => {
          this.gigs = response.data
          this.ajax = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  @import '../assets/variables.styl'

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
      text-align: center
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

  article
    color: black
    background-color: whitesmoke
    font-family: Oswald, sans-serif
    border-top: solid 1px gray

    a
      color: black
      display: block
      min-height: 60px
      line-height: 30px
      text-align: center
      padding: 5px

      &:hover
        text-decoration: none

      &:focus
        background-color: silver

    .author
      font-style: italic

  img
    max-width: 100%

  #photo-galleries

    article a:focus
      color: $yellow
      background-color: black

    .photo
      width: 100%
</style>
