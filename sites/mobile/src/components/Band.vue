<template>
  <article id="band">
    <heading :text="band.name" :level="2" font="oswald" color="yellow" variant="uppercase"></heading>
    <encyclopedia-picture :src="band.picture" :alt="band.name"></encyclopedia-picture>
    <section>
      <heading :text="$t('encyclopedia.sheet')" :level="3" font="oswald" color="black"></heading>
      <div class="info">
        <div class="genre">
          <span class="bold">{{ $t('encyclopedia.genre') }}</span>
          <span class="light">{{ band.style }}</span>
        </div>
        <div class="status">
          <span class="bold">{{ $t('encyclopedia.status') }}</span>
          <span class="light">{{ band.status }}</span>
        </div>
        <div class="creationDate">
          <span class="bold">{{ $t('band.creation') }}</span>
          <span class="light" v-if="band.creationDate !== '0000'">{{ band.creationDate }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="splitDate">
          <span class="bold">{{ $t('band.split') }}</span>
          <span class="light" v-if="band.splitDate !== '0000'">{{ band.splitDate }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="country">
          <span class="bold">{{ $t('encyclopedia.country') }}</span>
          <span class="light">{{ band.country }}</span>
        </div>
        <div class="region">
          <span class="bold">{{ $t('encyclopedia.region') }}</span>
          <span class="light">{{ band.region }}</span>
        </div>
        <div class="city">
          <span class="bold">{{ $t('encyclopedia.city') }}</span>
          <span class="light" v-if="band.city">{{ band.city }}</span>
          <span class="light" v-else>N/A</span>
        </div>
        <div class="popularity">
          <span class="bold">{{ $t('band.popularity') }}</span>
          <span>
            <icon class="light" name="star" scale="1" v-for="star in band.popularity" :key="star"></icon>
          </span>
        </div>
        <div class="nbFans">
          <span class="bold">{{ $t('band.fans') }}</span>
          <span class="light">{{ band.nbFans }}</span>
        </div>
      </div>
    </section>
    <section>
      <heading :text="$t('band.lineup')" :level="3" font="oswald" color="black"></heading>
      <ul class="info lineup">
        <li v-for="member in band.lineup">
          <span class="bold">{{ member.name }}</span>
          <span class="light">{{ member.instruments }}</span>
        </li>
      </ul>
    </section>
    <section v-if="band.formerMembers !== null">
      <heading :text="$t('band.formerMembers')" :level="3" font="oswald" color="black"></heading>
      <ul class="info formerMembers">
        <li v-for="member of band.formerMembers">
          <span class="bold">{{ member.name }}</span>
          <span class="light">{{ member.instruments }}</span>
        </li>
      </ul>
    </section>
    <section>
      <heading :text="$t('band.discography')" :level="3" font="oswald" color="black"></heading>
      <nav>
        <ul>
          <li>Albums</li>
          <li>Vidéo</li>
          <li>Single</li>
          <li>Bootlegs</li>
          <li>Tributes</li>
        </ul>
      </nav>
      <list ref="list" :scroll="true" v-on:update="load" :items="albums" link="album" :fields="['name', 'type', 'date']" type="img"></list>
    </section>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'
  import 'vue-awesome/icons/star'

  export default {
    name: 'band',
    data () {
      return {
        page: 1,
        band: {},
        albums: []
      }
    },
    methods: {
      load () {
        this.$get('albums', {id_groupe: this.$route.params.id, p: this.page})
          .then(response => {
            if (response.data.length === 0) {
              this.$refs.list.complete()
            } else {
              this.$parseList('albums', response.data, this.page)
            }
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.$get('bands', {l: this.$i18n.locale, id: this.$route.params.id})
        .then(response => {
          this.$parseItem('band', response.data)
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

  .lineup
  .formerMembers
    background-color: whitesmoke

  .lineup
  .formerMembers
    padding: 10px

  nav ul
    display: flex
    justify-content: space-between
    color: black
    padding: 5px
    background-color: silver
    list-style-type: none
    font-family: Oswald, sans-serif

  >>> .infinite-loading-container
    background-color: whitesmoke
</style>
