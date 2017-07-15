<template>
  <article id="label">
    <heading :text="label.name" :level="2" font="oswald" color="yellow"></heading>
    <encyclopedia-picture :src="label.logo" :alt="label.nom_label"></encyclopedia-picture>
    <section>
      <heading :text="$t('encyclopedia.info')" :level="3" font="oswald" color="silver"></heading>
      <div class="info">
        <div class="status">
          <span class="bold">{{ $t('encyclopedia.status')}}</span>
          <span class="light" v-if="label.status">{{ label.status }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="country">
          <span class="bold">{{ $t('encyclopedia.country') }}</span>
          <span class="light" v-if="label.country">{{ label.country }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="nbAlbums">
          <span class="bold">{{ $t('encyclopedia.albums') }}</span>
          <span class="light" v-if="label.nbAlbums">{{ label.nbAlbums }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="website">
          <span class="bold">{{ $t('encyclopedia.website') }}</span>
          <span class="light" v-if="label.website">{{ label.website }}</span>
          <span class="light" v-else>N/A</span>
        </div>
      </div>
    </section>
    <section>
      <heading :text="$t('label.releases')" :level="3" font="oswald" color="silver"></heading>
      <list ref="list" :scroll="false" :items="albums" link="album" :fields="['name', 'band', 'type', 'date']" type="img"></list>
    </section>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'

  export default {
    name: 'label',
    data () {
      return {
        label: {},
        albums: []
      }
    },
    created () {
      this.$get('labels', {l: this.$i18n.locale, id: this.$route.params.id})
        .then(response => {
          this.label = response.data
          return this.$get('albums', {id_label: this.$route.params.id})
        })
        .then(response => {
          this.$parseItem('albums', response.data)
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
