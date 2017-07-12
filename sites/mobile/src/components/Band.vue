<template>
  <article id="band">
    <heading :text="band.name" :level="2" font="oswald" color="yellow"></heading>
    <encyclopedia-picture :src="band.picture" :alt="band.name"></encyclopedia-picture>
    <section>
      <heading text="Fiche technique" :level="3" font="oswald" color="silver"></heading>
      <div class="info">
        <div class="genre">
          <span class="bold">Genre</span>
          <span class="light">{{ band.style }}</span>
        </div>
        <div class="status">
          <span class="bold">Statut</span>
          <span class="light">{{ band.status }}</span>
        </div>
        <div class="creationDate">
          <span class="bold">Date de formation</span>
          <span class="light">{{ band.creationDate }}</span>
        </div>
        <div class="splitDate" v-if="band.splitDate !== '0000'">
          <span class="bold">Date de séparation</span>
          <span class="light">{{ band.splitDate }}</span>
        </div>
        <div class="country">
          <span class="bold">Pays</span>
          <span class="light">{{ band.country }}</span>
        </div>
        <div class="popularity">
          <span class="bold">Popularité</span>
          <span class="light">{{ band.popularity }}</span>
        </div>
        <div class="nbFans">
          <span class="bold">Fans</span>
          <span class="light">{{ band.nbFans }}</span>
        </div>
      </div>
    </section>
    <section>
      <heading text="Line-up" :level="3" font="oswald" color="silver"></heading>
      <ul class="lineup">
        <li v-for="member in band.lineup">
          <span class="bold">{{ member.name }}</span>
          <span class="light">{{ member.role }}</span>
        </li>
      </ul>
    </section>
    <section v-if="band.formerMembers !== null">
      <heading text="Anciens membres" :level="3" font="oswald" color="silver"></heading>
      <ul class="formerMembers">
        <li v-for="member of band.formerMembers">
          <span class="bold">{{ member.name }}</span>
          <span class="light">{{ member.role }}</span>
        </li>
      </ul>
    </section>
    <section>
      <heading text="Discographie" :level="3" font="oswald" color="silver"></heading>
      <router-link v-for="album of band.albums" :to="{name: 'album', params: {id: album.id}}" class="albums">
        <img :src="album.cover" :alt="album.name">
        <div>
          <div class="name">{{ album.name }}</div>
          <div class="type">{{ album.type }}</div>
          <div class="date">{{ new Date(album.date) | moment('YYYY') }}</div>
        </div>
      </router-link>
    </section>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'
  import axios from 'axios'

  export default {
    name: 'band',
    data () {
      return {
        ajax: false,
        band: {}
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/bands.php?id=${id}`)
        .then(response => {
          this.band = response.data
          console.log(response.data)
          return axios.get(`${baseUrl}/albums.php?id_groupe=${id}`)
        })
        .then(response => {
          this.band.albums = response.data
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

  .bold
    font-weight: 500

  .light
    color: gray

  .lineup
  .formerMembers
  .albums
    background-color: whitesmoke
    font-family: Oswald, sans-serif

  .lineup
  .formerMembers
    padding: 10px

  a.albums
    display: flex
    align-items: center
    border-bottom: dashed 1px silver

    img
      width: 100px
      height: 100px

    div
      flex: 1
      padding-left: 5px

    .name
      color: $red

    .type
      color: black

    .date
      color: gray
</style>
