<template>
  <article id="artist">
    <item-title :title="artist.fullname" :level="2" color="yellow"></item-title>
    <img :src="artist.photo" :alt="artist.name">
    <section>
      <item-title title="Fiche technique" :level="3" color="silver"></item-title>
      <div class="info">
        <div class="birthday">
          <span class="bold">Naissance</span>
          <span class="light">{{ artist.birthday }}</span>
        </div>
        <div class="country">
          <span class="bold">Pays</span>
          <span class="light">{{ artist.country }}</span>
        </div>
      </div>
    </section>
    <section>
      <item-title title="Groupes" :level="3" color="silver"></item-title>
      <ul class="info bands">
        <li v-for="band of artist.bands">{{ band }}</li>
      </ul>
    </section>
  </article>
</template>

<script>
  export default {
    name: 'artist',
    data () {
      return {
        artist: {
          fullname: 'Liimatainen Jani',
          photo: 'https://www.metal-archives.com/images/4/1/1/0/4110_artist.jpg?4052',
          birthday: '09/09/1980',
          country: 'Finlande',
          bands: [
            'Sonata Arctica',
            'Altaria',
            'Graveyard Shift',
            'Cain\'s Offering',
            'Kotipelto And Liimatainen'
          ]
        }
      }
    }
  }
</script>

<style lang="styl" scoped>
  img
    max-width: 100%

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
