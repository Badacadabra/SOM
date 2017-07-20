<template>
  <article>
    <heading :text="$t('gigs.title')" :level="2" font="oswald" color="silver"></heading>
    <div class="content">
      <div>
        <div class="bold">{{ $t('gigs.what') }}</div>
        <div class="light">{{ gig.title }}</div>
      </div>
      <div>
        <div class="bold">{{ $t('gigs.where') }}</div>
        <div class="light">{{ gig.place }}</div>
      </div>
      <div v-if="gig.date">
        <div class="bold">{{ $t('gigs.when') }}</div>
        <div class="light">{{ $d(new Date(gig.date), 'long') }}</div>
      </div>
      <div v-if="gig.bands">
        <div class="bold">{{ $t('gigs.who') }}</div>
        <ul class="light">
          <li v-for="band of gig.bands">{{ band.band }} <span v-if="band.style">({{ band.style }})</span></li>
        </ul>
      </div>
      <div v-if="gig.price">
        <div class="bold">{{ $t('gigs.price') }}</div>
        <div class="light">{{ gig.price }}</div>
      </div>
    </div>
    <div id="map"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'gig',
    data () {
      return {
        gig: {},
        errors: [],
        coordinates: {}
      }
    },
    methods: {
      getLocation (place) {
        let geocoder = new google.maps.Geocoder()
        geocoder.geocode({
          'address': place
        }, (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            this.coordinates['lat'] = results[0].geometry.location.lat()
            this.coordinates['lng'] = results[0].geometry.location.lng()
            this.drawMap()
          } else {
            this.errors.push(status)
          }
        })
      },
      drawMap () {
        let map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: this.coordinates
        })

        let marker = new google.maps.Marker({
          position: this.coordinates,
          map: map
        })

        marker.setMap(map)
      }
    },
    created () {
      this.$get('gigs', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('gig', response.data)
          this.getLocation(response.data.place)
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
    font-family: Abel, sans-serif
    font-size: 1.2em

  .content
    padding: 10px

    & > div
      margin-bottom: 10px

  .bold
    font-weight: bold

  .light
    color: gray

  #map
    width: 100%
    height: 200px
</style>
