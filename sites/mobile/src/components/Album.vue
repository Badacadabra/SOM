<template>
  <article id="album">
    <heading :text="album.name" :level="2" font="oswald" color="yellow"></heading>
    <encyclopedia-picture :src="album.cover" :alt="album.name"></encyclopedia-picture>
    <section>
      <heading text="Fiche technique" :level="3" font="oswald" color="silver"></heading>
      <div class="info">
        <div class="band">
          <span class="bold">Groupe</span>
          <span class="light">{{ album.band }}</span>
        </div>
        <div class="genre">
          <span class="bold">Genre</span>
          <span class="light">{{ album.style }}</span>
        </div>
        <div class="date">
          <span class="bold">Date</span>
          <span class="light">{{ album.date }}</span>
        </div>
        <div class="label">
          <span class="bold">Label</span>
          <span class="light" v-for="label of album.labels">/ {{ label.name }}</span>
        </div>
        <div class="producer">
          <span class="bold">Producteur</span>
          <span class="light" v-if="album.producer">{{ album.producer }}</span>
          <span class="light" v-else>Non renseigné</span>
        </div>
        <div class="studio">
          <span class="bold">Studio</span>
          <span class="light" v-if="album.studio">{{ album.studio }}</span>
          <span class="light" v-else>Non renseigné</span>
        </div>
      </div>
    </section>
    <section>
      <heading text="Morceaux" :level="3" font="oswald" color="silver"></heading>
      <!-- <ol class="info tracklist">
        <li v-for="track of album.tracks">{{ track }}</li>
      </ol> -->
      <div class="tracks" v-html="album.tracks"></div>
    </section>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'
  import axios from 'axios'

  export default {
    name: 'album',
    data () {
      return {
        ajax: false,
        album: {}
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/albums.php?id=${id}`)
        .then(response => {
          this.album = response.data
          this.ajax = false
          console.log(response.data)
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

  >>> .tracks
    padding: 10px
    background-color: whitesmoke
</style>
