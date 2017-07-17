<template>
  <article id="album">
    <heading :text="album.name" :level="2" font="oswald" color="yellow" variant="uppercase"></heading>
    <encyclopedia-picture :src="album.cover" :alt="album.name"></encyclopedia-picture>
    <section>
      <heading :text="$t('encyclopedia.sheet')" :level="3" font="oswald" color="black"></heading>
      <div class="info">
        <div class="band">
          <span class="bold">{{ $t('encyclopedia.band') }}</span>
          <span class="light">{{ album.band }}</span>
        </div>
        <div class="genre">
          <span class="bold">{{ $t('encyclopedia.genre') }}</span>
          <span class="light" v-if="album.style">{{ album.style }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="date">
          <span class="bold">{{ $t('encyclopedia.date') }}</span>
          <span class="light" v-if="album.date">{{ $d(new Date(album.date), 'short') }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="studio">
          <span class="bold">{{ $t('album.studio') }}</span>
          <span class="light" v-if="album.studio">{{ album.studio }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="producer">
          <span class="bold">{{ $t('album.producer') }}</span>
          <span class="light" v-if="album.producer">{{ album.producer }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="label">
          <span class="bold">{{ $tc('album.label', album.labels && album.labels.length) }}</span>
          <ul class="light" v-if="album.labels && album.labels.length !== 0">
            <li v-for="label of album.labels">{{ label.name }}</li>
          </ul>
          <span class="light" v-else>N/A</span>
        </div>
      </div>
    </section>
    <section>
      <heading :text="$t('album.tracklist')" :level="3" font="oswald" color="black"></heading>
      <div class="tracks" v-html="album.tracks"></div>
    </section>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'

  export default {
    name: 'album',
    data () {
      return {
        album: {}
      }
    },
    created () {
      this.$get('albums', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('album', response.data)
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

  .label ul
    list-style-type: none
    text-align: right

  >>> .tracks
    padding: 10px
    font-family: Abel, sans-serif
    font-size: 1.1em
    background-color: whitesmoke
</style>
