<template>
  <article id="label">
    <heading :text="label.name" :level="2" font="oswald" color="yellow"></heading>
    <encyclopedia-picture :src="label.logo" :alt="label.nom_label"></encyclopedia-picture>
    <section>
      <heading text="Fiche technique" :level="3" font="oswald" color="silver"></heading>
      <div class="info">
        <div class="status">
          <span class="bold">Statut</span>
          <span class="light" v-if="label.status">{{ label.status }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="country">
          <span class="bold">Pays</span>
          <span class="light" v-if="label.country">{{ label.country }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="website">
          <span class="bold">Site web</span>
          <span class="light" v-if="label.website">{{ label.website }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="nbAlbums">
          <span class="bold">Nombre d'albums</span>
          <span class="light" v-if="label.nbAlbums">{{ label.nbAlbums }}</span>
          <span class="light" v-else>N/A</span>
        </div>
      </div>
    </section>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'
  import axios from 'axios'

  export default {
    name: 'label',
    data () {
      return {
        ajax: false,
        label: {}
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/labels.php?id=${id}`)
        .then(response => {
          this.label = response.data
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
</style>
