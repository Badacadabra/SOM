<template>
  <article id="place">
    <heading :text="place.name" :level="2" font="oswald" color="yellow"></heading>
    <encyclopedia-picture :src="place.picture" :alt="place.name"></encyclopedia-picture>
    <section>
      <heading text="Fiche technique" :level="3" font="oswald" color="silver"></heading>
      <div class="info">
        <div class="description">
          <div class="bold">Description</div>
          <div class="light" v-if="place.description">{{ place.description }}</div>
          <div class="light" v-else>N/A</div>
        </div>
        <div class="address">
          <div class="bold">Adresse</div>
          <div class="light" v-if="place.address">{{ place.address }}</div>
          <div class="light" v-else>N/A</div>
        </div>
        <div class="website">
          <div class="bold">Website</div>
          <a :href="place.website" class="light" v-if="place.website">{{ place.website }}</a>
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
        place: {},
        errors: []
      }
    },
    created () {
      this.$get('places', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('place', response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    components: {
      EncyclopediaPicture
    }
  }
</script>

<style lang="styl" scoped>
  article
    background-color: black

  .info
    padding: 10px
    font-family: Oswald, sans-serif
    background-color: whitesmoke

  .bold
    font-weight: 500

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
