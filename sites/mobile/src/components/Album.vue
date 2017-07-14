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
          <span class="light" v-if="album.style">{{ album.style }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="date">
          <span class="bold">Date</span>
          <span class="light" v-if="album.date">{{ album.date }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="studio">
          <span class="bold">Studio</span>
          <span class="light" v-if="album.studio">{{ album.studio }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="producer">
          <span class="bold">Producteur</span>
          <span class="light" v-if="album.producer">{{ album.producer }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="label">
          <span class="bold">Label(s)</span>
          <ul class="light" v-if="album.labels.length !== 0">
            <li v-for="label of album.labels">{{ label.name }}</li>
          </ul>
          <span class="light" v-else>N/A</span>
        </div>
      </div>
    </section>
    <section>
      <heading text="Tracklist" :level="3" font="oswald" color="silver"></heading>
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

  .label ul
    list-style-type: none
    text-align: right

  >>> .tracks
    padding: 10px
    background-color: whitesmoke
    font-family: Oswald, sans-serif
</style>
