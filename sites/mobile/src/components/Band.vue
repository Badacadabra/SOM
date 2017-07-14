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
          <span class="light" v-if="band.creationDate !== '0000'">{{ band.creationDate }}</span>
          <span class="light" v-else>Inconnue</span>
        </div>
        <div class="splitDate">
          <span class="bold">Date de séparation</span>
          <span class="light" v-if="band.splitDate !== '0000'">{{ band.splitDate }}</span>
          <span class="light" v-else>Inconnue</span>
        </div>
        <div class="country">
          <span class="bold">Pays</span>
          <span class="light">{{ band.country }}</span>
        </div>
        <div class="popularity">
          <span class="bold">Popularité</span>
          <span>
            <icon class="light" name="star" scale="1" v-for="star in band.popularity" :key="star"></icon>
          </span>
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
          <span class="light">{{ member.instruments }}</span>
        </li>
      </ul>
    </section>
    <section v-if="band.formerMembers !== null">
      <heading text="Anciens membres" :level="3" font="oswald" color="silver"></heading>
      <ul class="formerMembers">
        <li v-for="member of band.formerMembers">
          <span class="bold">{{ member.name }}</span>
          <span class="light">{{ member.instruments }}</span>
        </li>
      </ul>
    </section>
    <section>
      <heading text="Discographie" :level="3" font="oswald" color="silver"></heading>
      <nav>
        <ul>
          <li>Albums</li>
          <li>Vidéo</li>
          <li>Single</li>
          <li>Bootlegs</li>
          <li>Tributes</li>
        </ul>
      </nav>
      <list :scroll="true" v-on:update="scroll" ref="list" :items="albums" link="album" :fields="['name', 'type', 'date']"></list>
    </section>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'
  import 'vue-awesome/icons/star'
  import axios from 'axios'

  export default {
    name: 'band',
    data () {
      return {
        ajax: false,
        page: 1,
        band: {},
        albums: []
      }
    },
    methods: {
      scroll () {
        const id = this.$route.params.id
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/albums.php?id_groupe=${id}&p=${this.page}`)
          .then(response => {
            if (response.data.length === 0) {
              this.$refs.list.complete()
            } else {
              for (let i = 0; i < response.data.length; i++) {
                this.albums.push(response.data[i])
              }
              this.$refs.list.loaded()
              this.page++
            }
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
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
    },
    components: {
      EncyclopediaPicture
    }
  }
</script>

<style lang="styl" scoped>
  article
    background-color: whitesmoke

  .info
    padding: 10px
    font-family: Oswald, sans-serif

    & > div
      display: flex
      justify-content: space-between

  .bold
    font-weight: 500

  .light
    color: gray

  .lineup
  .formerMembers
    background-color: whitesmoke
    font-family: Oswald, sans-serif

  .lineup
  .formerMembers
    padding: 10px

  nav ul
    display: flex
    justify-content: space-between
    color: whitesmoke
    padding: 5px
    background-color: black
    list-style-type: none
    font-family: Oswald, sans-serif
</style>
