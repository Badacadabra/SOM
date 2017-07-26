<template>
  <article id="label">
    <heading :text="label.name" :level="2" font="oswald" color="yellow" variant="uppercase"></heading>
    <large-picture :src="label.logo" :alt="label.nom_label"></large-picture>
    <section>
      <heading :text="$t('encyclopedia.info')" :level="3" font="oswald" color="black"></heading>
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
          <span class="light" v-if="label.website">{{ getDomain(label.website) }}</span>
          <span class="light" v-else>N/A</span>
        </div>
      </div>
    </section>
    <section class="albums">
      <heading :text="$tc('label.releases', albums.length)" :level="3" font="oswald" color="black" v-if="albums.length > 0"></heading>
      <list ref="list" :scroll="false" :items="albums" link="album" :fields="['name', 'band', 'type', 'date']" type="img"></list>
    </section>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  import LargePicture from '../../layout/LargePicture'

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
          this.$errors.push(e)
        })
    },
    methods: {
      getDomain (url) {
        return url.split('/')[2]
      }
    },
    components: {
      LargePicture
    }
  }
</script>

<style lang="styl" scoped>
  .info
    padding: 10px
    font-family: Abel, sans-serif
    font-size: 1.1em
    background-color: whitesmoke

    & > div
      display: flex
      justify-content: space-between
      border-bottom: dashed 1px silver
      padding-bottom: 5px
      margin-bottom: 10px

  .bold
    font-weight: bold

  .light
    color: gray
</style>
