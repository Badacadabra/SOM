<template>
  <article id="place">
    <heading :text="place.name" :level="2" font="oswald" color="yellow" variant="uppercase"></heading>
    <encyclopedia-picture :src="place.picture" :alt="place.name"></encyclopedia-picture>
    <section>
      <heading :text="$t('encyclopedia.info')" :level="3" font="oswald" color="black"></heading>
      <div class="info">
        <div class="description">
          <div class="bold">{{ $t('place.description') }}</div>
          <div class="light" v-if="place.description">{{ place.description }}</div>
          <div class="light" v-else>N/A</div>
        </div>
        <div class="address">
          <div class="bold">{{ $t('place.address') }}</div>
          <div class="light" v-if="place.address">{{ place.address }}</div>
          <div class="light" v-else>N/A</div>
        </div>
        <div class="website">
          <div class="bold">{{ $t('encyclopedia.website') }}</div>
          <a :href="place.website" class="light" v-if="place.website">{{ getDomain(place.website) }}</a>
          <div class="light" v-else>N/A</div>
        </div>
      </div>
    </section>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'

  export default {
    name: 'place',
    data () {
      return {
        place: {}
      }
    },
    created () {
      this.$get('places', {l: this.$i18n.locale, id: this.$route.params.id})
        .then(response => {
          this.$parseItem('place', response.data)
        })
        .catch(e => {
          this.$errors.push(e)
        })
    },
    methods: {
      getDomain (url) {
        return url.split('/')[2]
      }
    },
    components: {
      EncyclopediaPicture
    }
  }
</script>

<style lang="styl" scoped>
  .info
    padding: 10px
    font-family: Abel, sans-serif
    font-size: 1.1em
    background-color: whitesmoke

  .bold
    font-weight: bold

  .light
    color: gray
    margin: 0 0 15px 20px

  .website
    color: black

  a
    white-space: pre-wrap; // CSS 3
    white-space: -moz-pre-wrap; // Mozilla, since 1999
    white-space: -pre-wrap; // Opera 4-6
    white-space: -o-pre-wrap; // Opera 7
    word-wrap: break-word; // Internet Explorer 5.5+
</style>
