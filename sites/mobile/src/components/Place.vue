<template>
  <article id="place">
    <item-title :title="place.name" :level="2" color="yellow"></item-title>
    <img :src="place.photo" :alt="place.name">
    <section>
      <item-title title="Fiche technique" :level="3" color="silver"></item-title>
      <div class="info">
        <div class="description">
          <div class="bold">Description</div>
          <div class="light">{{ place.description }}</div>
        </div>
        <div class="address">
          <div class="bold">Adresse</div>
          <div class="light">{{ place.address }}</div>
        </div>
        <a :href="place.website" class="website">
          <div class="bold">Website</div>
          <div class="light">{{ place.website }}</div>
        </a>
      </div>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'place',
    data () {
      return {
        place: {
          name: '013',
          photo: 'https://i1.thrillcall.com/venue/111699/7662/1487100018/013-tilburg-nl-mobile.jpg',
          description: 'Salle de concerts',
          address: 'Veemarktstraat 44 Tilburg, Brabant Septentrional, Pays-Bas',
          website: 'http://www.013.nl'
        },
        errors: []
      }
    }
  }
</script>

<style lang="styl" scoped>
  img
    max-width: 100%

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
</style>
