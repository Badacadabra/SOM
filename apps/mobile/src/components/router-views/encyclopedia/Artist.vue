<template>
  <article id="artist">
    <heading :text="artist.FullName" :level="2" font="oswald" color="yellow" variant="uppercase"></heading>
    <large-picture :src="artist.picture" :alt="artist.name"></large-picture>
    <section>
      <heading :text="$t('encyclopedia.info')" :level="3" font="oswald" color="black"></heading>
      <div class="info">
        <div class="birthday">
          <span class="bold">{{ $t('artist.birth') }}</span>
          <span class="light" v-if="artist.birthday !== '0000'">{{ $d(new Date(artist.birthday), 'long') }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="country">
          <span class="bold">{{ $t('encyclopedia.country') }}</span>
          <span class="light" v-if="artist.country">{{ artist.country }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="region">
          <span class="bold">{{ $t('encyclopedia.region') }}</span>
          <span class="light" v-if="artist.region">{{ artist.region }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="city">
          <span class="bold">{{ $t('encyclopedia.city') }}</span>
          <span class="light" v-if="artist.city">{{ artist.city }}</span>
          <span class="light" v-else>N/A</span>
        </div>
      </div>
    </section>
    <section>
      <heading :text="$tc('artist.bands', artist.bands.length)" :level="3" font="oswald" color="black"></heading>
      <router-link v-for="band of artist.bands" :key="band.id" :to="{name: 'band', params: {id: band.id }}" class="info bands">
        {{ band.name }}
      </router-link>
    </section>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  import LargePicture from '../../layout/LargePicture'

  export default {
    name: 'artist',
    data () {
      return {
        artist: {}
      }
    },
    created () {
      this.$get('artists', {l: this.$i18n.locale, id: this.$route.params.id})
        .then(response => {
          this.$parseItem('artist', response.data)
        })
        .catch(e => {
          this.$errors.push(e)
        })
    },
    components: {
      LargePicture
    }
  }
</script>

<style lang="styl" scoped>
  .info
    padding: 10px
    font-family: Abel, sans-serif
    font-size: 1.1em
    background-color: whitesmoke

    & > div
      display: flex
      justify-content: space-between
      border-bottom: dashed 1px silver
      padding-bottom: 5px
      margin-bottom: 10px

  .bold
    font-weight: bold

  .light
    color: gray

  .bands
    color: black

  a
    display: block
    color: gray
    font: large Oswald, sans-serif
    text-align: center
    padding: 15px 5px
    border-bottom: solid 2px #E7E7E7

    &:active
    &:focus
      background-color: silver
</style>
