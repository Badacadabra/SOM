<template>
  <article id="band">
    <item-title :title="band.name" :level="2" color="yellow"></item-title>
    <img :src="band.logo" :alt="'Logo de ' + band.name">
    <!-- <img :src="band.photo" :alt="band.name"> -->
    <item-title title="Fiche technique" :level="3" color="silver"></item-title>
    <div class="info">
      <div class="genre">
        <span class="bold">Genre</span>
        <span class="light">{{ band.genre }}</span>
      </div>
      <div class="status">
        <span class="bold">Statut</span>
        <span class="light">{{ band.status }}</span>
      </div>
      <div class="creationDate">
        <span class="bold">Date de formation</span>
        <span class="light">{{ band.creationDate }}</span>
      </div>
      <div class="splitDate">
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
    <item-title title="Line-up" :level="3" color="silver"></item-title>
    <ul class="lineup">
      <li v-for="member in band.lineup">
        <span class="bold">{{ member.name }}</span>
        <span class="light">{{ member.role }}</span>
      </li>
    </ul>
    <item-title title="Anciens membres" :level="3" color="silver"></item-title>
    <ul class="formerMembers">
      <li v-for="member of band.formerMembers">
        <span class="bold">{{ member.name }}</span>
        <span class="light">{{ member.role }}</span>
      </li>
    </ul>
    <item-title title="Discographie" :level="3" color="silver"></item-title>
    <ul class="albums">
      <li v-for="album of band.albums">
        <span class="bold">{{ album.name }}</span>
        <span class="light">{{ album.year }}</span>
      </li>
    </ul>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  // import axios from 'axios'

  export default {
    name: 'band',
    data () {
      return {
        ajax: false,
        band: {
          name: 'Black Sabbath',
          logo: 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/01/black-sabbath-3.jpg',
          photo: 'http://anotherwhiskyformisterbukowski.com/wp-content/uploads/2016/01/black-sabbath.jpg',
          genre: 'Heavy Metal',
          status: 'Split-up',
          creationDate: '1969',
          splitDate: '2017',
          country: 'Royaume-Uni',
          popularity: '5/5',
          nbFans: '4575',
          lineup: [
            {name: 'Terence Michael Joseph "Geezer" Butler', role: 'basse'},
            {name: 'Tony Iommi', role: 'guitare'},
            {name: 'John Michael "Ozzy" Osbourne', role: 'chant'},
            {name: 'Brad Wilk', role: 'batterie'}
          ],
          formerMembers: [
            {name: 'Ian Gillan', role: 'chant'},
            {name: 'Robert Rondinelli', role: 'batterie'},
            {name: 'Jo Burt', role: 'basse'}
          ],
          albums: [
            {name: 'Black Sabbath', year: '1970'},
            {name: 'Paranoid', year: '1970'},
            {name: 'Master of Reality', year: '1971'}
          ]
        }
      }
    }
    /* created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/bands.php?id=${id}`)
        .then(response => {
          this.band = response.data
          this.ajax = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    } */
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

  .bold
    font-weight: 500

  .light
    color: gray

  ul.lineup
  ul.formerMembers
  ul.albums
    padding: 10px
    background-color: whitesmoke
    font-family: Oswald, sans-serif
</style>
