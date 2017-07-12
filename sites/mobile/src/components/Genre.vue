<template>
  <article id="genre">
    <heading :text="genre.name" :level="2" font="oswald" color="yellow"></heading>
    <div class="description">{{ genre.description }}</div>
    <section>
      <heading text="Les groupes phares" :level="3" font="oswald" color="silver"></heading>
      <figure class="bands" v-for="band of genre.bands">
        <img :src="band.photo" :alt="band.name">
        <figcaption>{{ band.name }}</figcaption>
      </figure>
    </section>
    <section>
      <heading text="Les albums cultes" :level="3" font="oswald" color="silver"></heading>
      <figure class="albums" v-for="album of genre.albums">
        <img :src="album.cover" :alt="album.name">
        <figcaption>{{ album.name }}</figcaption>
      </figure>
    </section>
  </article>
</template>

<script>
  // import axios from 'axios'

  export default {
    name: 'genre',
    data () {
      return {
        ajax: false,
        genre: {
          name: 'Black Metal',
          description: 'Lorem ipsum dolor sit amet',
          bands: [
            {name: 'Immortal', photo: 'http://www.immortalofficial.com/wp-content-npt/uploads/2015/12/Immortal-pressphoto-2016b-front.jpg'},
            {name: 'Immortal', photo: 'http://www.immortalofficial.com/wp-content-npt/uploads/2015/12/Immortal-pressphoto-2016b-front.jpg'},
            {name: 'Immortal', photo: 'http://www.immortalofficial.com/wp-content-npt/uploads/2015/12/Immortal-pressphoto-2016b-front.jpg'}
          ],
          albums: [
            {name: 'Battles In The North', cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Battles_In_The_North.jpg/220px-Battles_In_The_North.jpg'},
            {name: 'Battles In The North', cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Battles_In_The_North.jpg/220px-Battles_In_The_North.jpg'},
            {name: 'Battles In The North', cover: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Battles_In_The_North.jpg/220px-Battles_In_The_North.jpg'}
          ]
        }
      }
    }
    /* created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/genres.php?id=${id}`)
        .then(response => {
          this.genre = response.data
          this.ajax = false
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    } */
  }
</script>

<style lang="styl" scoped>
  article
    background-color: whitesmoke

  .description
    padding: 15px

  .bands
  .albums
    display: flex
    align-items: center
    border-bottom: dashed 1px silver

  img
    width: 100px

  figcaption
    flex: 1
</style>
