<template>
  <div id="interviews">
    <h2>Interviews</h2>
    <article v-for="interview of interviews">
      <a :href="'/interviews/'+interview.id">
        <img class="photo" :src="interview.picture" :alt="interview.band">
        <div class="info">
          <h3 class="band">{{ interview.band }}</h3>
          <div class="date">{{ new Date(interview.date) | moment('DD/MM/YYYY') }}</div>
          <div class="author">@{{ interview.author }}</div>
        </div>
      </a>
    </article>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'interviews',
    data () {
      return {
        ajax: false,
        interviews: [],
        errors: []
      }
    },
    created () {
      this.ajax = true

      const baseUrl = 'http://www.spirit-of-metal.com/API'
      axios.get(`${baseUrl}/interviews.php?l=fr`)
        .then(response => {
          this.interviews = response.data
          this.ajax = false
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  @import '../assets/variables.styl'

  h2
    height: 50px
    line-height: 50px
    color: whitesmoke
    background-color: $red
    text-align: center
    font: 42px Astonished, sans-serif

  h3
    color: $red
    font-weight: 400
    font-size: large

  a
    color: black
    display: flex
    align-items: center

    &:hover
      text-decoration: none

    &:focus
      background-color: silver

  article
    color: black
    background-color: whitesmoke
    font-family: Oswald, sans-serif
    border-bottom: solid 1px gray

    &:last-of-type
      border-bottom: 0

  .photo
    width: 130px

  .info
    margin-left: 10px

    .author
      font-weight: 300
</style>
