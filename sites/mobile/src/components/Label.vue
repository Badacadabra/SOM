<template>
  <article id="label">
    <item-title :title="label.name" :level="2" color="yellow"></item-title>
    <img :src="label.logo" :alt="label.name">
    <section>
      <item-title title="Fiche technique" :level="3" color="silver"></item-title>
      <div class="info">
        <div class="status">
          <span class="bold">Statut</span>
          <span class="light">{{ label.status }}</span>
        </div>
        <div class="country">
          <span class="bold">Pays</span>
          <span class="light">{{ label.country }}</span>
        </div>
        <div class="website">
          <span class="bold">Site web</span>
          <span class="light">{{ label.website }}</span>
        </div>
        <div class="nbAlbums">
          <span class="bold">Nombre d'albums</span>
          <span class="light">{{ label.nbAlbums }}</span>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'label',
    data () {
      return {
        label: {
          name: 'Nuclear Blast',
          logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/1/14/Nuclear_Blast.jpg/1200px-Nuclear_Blast.jpg',
          status: 'Actif',
          country: 'Allemagne',
          website: 'http://www.nuclearblast.de',
          nbAlbums: '1643'
        }
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

    & > div
      display: flex
      justify-content: space-between

  .bold
    font-weight: 500

  .light
    color: gray
</style>
