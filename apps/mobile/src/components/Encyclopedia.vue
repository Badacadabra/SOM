<template>
  <div id="encyclopedia">
    <heading :text="$t('categories.encyclopedia')" :level="2" font="astonished" color="red"></heading>
    <nav>
      <router-link :to="{name: 'styles'}" class="item">
        <icon name="hashtag" scale="1.3"></icon>
        {{ $t('encyclopedia.styles') }}
      </router-link>
      <router-link :to="{name: 'bands'}" class="item">
        <icon name="group" scale="1.3"></icon>
        {{ $t('encyclopedia.bands') }}
      </router-link>
      <router-link :to="{name: 'artists'}" class="item">
        <icon name="address-book-o" scale="1.3"></icon>
        {{ $t('encyclopedia.artists') }}
      </router-link>
      <router-link :to="{name: 'albums'}" class="item">
        <icon name="music" scale="1.3"></icon>
        {{ $t('encyclopedia.albums') }}
      </router-link>
      <router-link :to="{name: 'audios'}" class="item">
        <icon name="file-audio-o" scale="1.3"></icon>
        {{ $t('encyclopedia.audios') }}
      </router-link>
      <router-link :to="{name: 'videos'}" class="item">
        <icon name="video-camera" scale="1.3"></icon>
        {{ $t('encyclopedia.videos') }}
      </router-link>
      <router-link :to="{name: 'labels'}" class="item">
        <icon name="tag" scale="1.3"></icon>
        {{ $t('encyclopedia.labels') }}
      </router-link>
      <router-link :to="{name: 'places'}" class="item">
        <icon name="map-marker" scale="1.3"></icon>
        {{ $t('encyclopedia.places') }}
      </router-link>
    </nav>
    <h3>{{ $t('encyclopedia.stats') }}</h3>
    <div class="figures">
      <ul v-if="stats.length > 0">
        <li>
          <span class="num">{{ $n(stats[7].value, 'decimal') }}</span>
          {{ $t('encyclopedia.styles') | lowercase }}
        </li>
        <li>
          <span class="num">{{ $n(stats[0].value, 'decimal') }}</span>
          {{ $t('encyclopedia.bands') | lowercase }}
        </li>
        <li>
          <span class="num">{{ $n(stats[5].value, 'decimal') }}</span>
          {{ $t('encyclopedia.artists') | lowercase }}
        </li>
        <li>
          <span class="num">{{ $n(stats[1].value, 'decimal') }}</span>
          {{ $t('encyclopedia.albums') | lowercase }}
        </li>
        <li>
          <span class="num">{{ $n(stats[8].value, 'decimal') }}</span>
          {{ $t('encyclopedia.audios') | lowercase }}
        </li>
        <li>
          <span class="num">{{ $n(stats[3].value, 'decimal') }}</span>
          {{ $t('encyclopedia.videos') | lowercase }}
        </li>
        <li>
          <span class="num">{{ $n(stats[2].value, 'decimal') }}</span>
          {{ $t('encyclopedia.labels') | lowercase }}
        </li>
        <li>
          <span class="num">{{ $n(stats[6].value, 'decimal') }}</span>
          {{ $t('encyclopedia.places') | lowercase }}
        </li>
      </ul>
    </div>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import 'vue-awesome/icons/hashtag'
  import 'vue-awesome/icons/group'
  import 'vue-awesome/icons/music'
  import 'vue-awesome/icons/file-audio-o'
  import 'vue-awesome/icons/video-camera'
  import 'vue-awesome/icons/address-book-o'
  import 'vue-awesome/icons/tag'
  import 'vue-awesome/icons/map-marker'

  export default {
    name: 'encyclopedia',
    data () {
      return {
        stats: []
      }
    },
    created () {
      this.$get('stats')
        .then(response => {
          this.$parseList('stats', response.data)
        })
        .catch(e => {
          this.$errors.push(e)
        })
    },
    filters: {
      lowercase: (v) => {
        return v.toLowerCase()
      }
    }
  }
</script>

<style lang="styl" scoped>
  h3
    height: 50px
    line-height: 50px
    text-align: center
    color: black
    background-color: $lightgray
    border-top: solid 2px black
    font-family: Oswald, sans-serif
    font-weight: 400

  .figures
    color: black
    background-color: $lightgray
    text-align: center
    padding-bottom: 10px
    font: 300 large Oswald, sans-serif

    .num
      color: $red
      font-weight: 400

  nav
    background-color: whitesmoke
    font: small-caps x-large Oswald, sans-serif

    a.item
      display: block
      color: black
      padding: 10px
      border-top: dashed 1px gray
      text-align: center

      &:first-child
        border-top: 0

      &:active
      &:focus
        background-color: $lightgray
</style>
