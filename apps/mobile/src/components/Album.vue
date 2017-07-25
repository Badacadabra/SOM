<template>
  <article id="album">
    <heading :text="album.name" :level="2" font="oswald" color="yellow" variant="uppercase"></heading>
    <encyclopedia-picture :src="album.cover" :alt="album.name"></encyclopedia-picture>
    <section>
      <heading :text="$t('encyclopedia.sheet')" :level="3" font="oswald" color="black"></heading>
      <div class="info">
        <router-link v-if="album.id_groupe" :to="{name: 'band', params: {id: album.id_groupe}}" class="band">
          <span class="bold">{{ $t('encyclopedia.band') }}</span>
          <span class="light">{{ album.band }}</span>
        </router-link>
        <div class="style">
          <span class="bold">{{ $t('encyclopedia.style') }}</span>
          <span class="light" v-if="album.style">{{ album.style }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="type">
          <span class="bold">{{ $t('album.type') }}</span>
          <span class="light" v-if="album.type">{{ album.type }}</span>
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
    <section v-if="audios && audios.length > 0">
      <heading :text="$tc('album.audio', audios.length)" :level="3" font="oswald" color="black"></heading>
      <list :scroll="false" :items="audios" link="audio" :fields="['title', 'album', 'band']" type="img"></list>
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
        album: {},
        audios: [],
        bandcampLogo: '/static/img/bandcamp.png',
        soundcloudLogo: '/static/img/soundcloud.png',
        defaultLogo: '/static/img/no-image.png'
      }
    },
    methods: {
      bandcampOrSoundcloud () {
        for (const audio of this.audios) {
          if (/bandcamp/.test(audio.link)) {
            audio.picture = this.bandcampLogo
          } else if (/soundcloud/.test(audio.link)) {
            audio.picture = this.soundcloudLogo
          } else {
            audio.picture = this.defaultLogo
          }
        }
      }
    },
    created () {
      this.$get('albums', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('album', response.data)
          return this.$get('audios', {id_album: this.$route.params.id})
        })
        .then(response => {
          this.$parseList('audios', response.data)
          this.bandcampOrSoundcloud()
        })
        .catch(e => {
          this.$errors.push(e)
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

    & > a
    & > div
      color: black
      display: flex
      justify-content: space-between
      border-bottom: dashed 1px silver
      padding-bottom: 5px
      margin-bottom: 10px

    & > a:active
    & > a:focus
      border-bottom: dashed 1px $yellow

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
