<template>
  <article id="album">
    <item-title :title="album.name" :level="2" color="yellow"></item-title>
    <img :src="album.cover" :alt="album.name">
    <section>
      <item-title title="Fiche technique" :level="3" color="silver"></item-title>
      <div class="info">
        <div class="band">
          <span class="bold">Groupe</span>
          <span class="light">{{ album.band }}</span>
        </div>
        <div class="genre">
          <span class="bold">Genre</span>
          <span class="light">{{ album.genre }}</span>
        </div>
        <div class="date">
          <span class="bold">Date</span>
          <span class="light">{{ album.date }}</span>
        </div>
        <div class="label">
          <span class="bold">Label</span>
          <span class="light">{{ album.label }}</span>
        </div>
        <div class="producer">
          <span class="bold">Producer</span>
          <span class="light">{{ album.producer }}</span>
        </div>
        <div class="studio">
          <span class="bold">Studio</span>
          <span class="light">{{ album.studio }}</span>
        </div>
      </div>
    </section>
    <section>
      <item-title title="Morceaux" :level="3" color="silver"></item-title>
      <ol class="info tracklist">
        <li v-for="track of album.tracks">{{ track }}</li>
      </ol>
    </section>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'album',
    data () {
      return {
        ajax: false,
        album: {
          name: 'Paranoid',
          cover: 'http://newnoisemagazine.com/wp-content/uploads/2013/09/Black-Sabbath-Paranoid-cover.jpg',
          band: 'Black Sabbath',
          date: '18/09/1970',
          label: 'Sanctuary Records',
          producer: 'Bain Rodger',
          studio: 'Regent Sound Studios',
          genre: 'Heavy Metal',
          tracks: [
            'War pigs',
            'Paranoid',
            'Planet Caravan',
            'Iron Man',
            'Electric Funeral',
            'Hand of Doom',
            'Rat Salad',
            'Fairies Wear Boots'
          ]
        }
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/releases.php?id=${id}`)
        .then(response => {
          this.album = response.data
          this.ajax = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  img
    width: 100%

  .info
    padding: 10px
    font-family: Oswald, sans-serif
    background-color: whitesmoke

    & > div
      display: flex
      justify-content: space-between

  .tracklist
    padding-left: 25px

  .bold
    font-weight: 500

  .light
    color: gray
</style>
