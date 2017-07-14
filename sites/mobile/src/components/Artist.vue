<template>
  <article id="artist">
    <heading :text="artist.FullName" :level="2" font="oswald" color="yellow"></heading>
    <encyclopedia-picture :src="artist.picture" :alt="artist.name"></encyclopedia-picture>
    <section>
      <heading text="Fiche technique" :level="3" font="oswald" color="silver"></heading>
      <div class="info">
        <div class="birthday">
          <span class="bold">Naissance</span>
          <span class="light">{{ artist.birthday | moment('DD/MM/YYYY') }}</span>
        </div>
        <div class="country">
          <span class="bold">Pays</span>
          <span class="light">{{ artist.country }}</span>
        </div>
      </div>
    </section>
    <section>
      <heading text="Groupes associés" :level="3" font="oswald" color="silver"></heading>
      <router-link v-for="band of artist.bands" :key="band.id" :to="{name: 'band', params: {id: band.id }}" class="info bands">
        {{ band.name }}
      </router-link>
    </section>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'
  import axios from 'axios'

  export default {
    name: 'artist',
    data () {
      return {
        ajax: false,
        artist: {}
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/artists.php?id=${id}`)
        .then(response => {
          this.artist = response.data
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

  a
    display: block
    color: gray
    font: large Oswald, sans-serif
    background-color: whitesmoke
    text-align: center
    padding: 15px 5px
    border-bottom: dashed 1px silver

    &:active
    &:focus
      background-color: silver
</style>
