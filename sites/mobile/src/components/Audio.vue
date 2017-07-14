<template>
  <article id="audio">
    <heading :text="audio.title" :level="2" font="oswald" color="yellow"></heading>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  import EncyclopediaPicture from './EncyclopediaPicture'

  export default {
    name: 'audio',
    data () {
      return {
        audio: {},
        errors: []
      }
    },
    created () {
      this.$get('audios', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('audio', response.data)
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
  article
    background-color: black

  .info
    padding: 10px
    font-family: Oswald, sans-serif
    background-color: whitesmoke

  .bold
    font-weight: 500

  .light
    color: gray
    margin: 0 0 15px 20px

  .website
    color: black

  a
    white-space: pre-wrap; // CSS 3
    white-space: -moz-pre-wrap; // Mozilla, since 1999
    white-space: -pre-wrap; // Opera 4-6
    white-space: -o-pre-wrap; // Opera 7
    word-wrap: break-word; // Internet Explorer 5.5+
</style>
