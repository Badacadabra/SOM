<template>
  <article id="genre">
    <item-title :title="genre.name" :level="2" color="yellow"></item-title>
    <div class="info">
      <div class="description">{{ genre.description }}</div>
      <item-title title="Les groupes phares" :level="3" color="silver"></item-title>
      <figure class="bands" v-for="band of genre.bands">
        <img :src="band.photo" :alt="band.name">
        <figcaption>{{ band.name }}</figcaption>
      </figure>
      <item-title title="Les albums cultes" :level="3" color="silver"></item-title>
      <figure class="albums" v-for="album of genre.albums">
        <img :src="album.cover" :alt="album.name">
        <figcaption>{{ album.name }}</figcaption>
      </figure>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'genre',
    data () {
      return {
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
  }
</script>

<style lang="styl" scoped>
  .info
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
