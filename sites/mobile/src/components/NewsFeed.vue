<template>
  <div id="news">
    <h2>Actualités</h2>
    <article v-for="n of news">
      <a :href="'/actualites/'+n.id">
        <div class="info">
          <h3>{{ n.title }}</h3>
          <div>
            Le <span class="date">{{ n.date }}</span>
            par <span class="author">@{{ n.author }}</span>
          </div>
        </div>
      </a>
    </article>
    <loader v-if="ajax"></loader>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'newsfeed',
    data () {
      return {
        ajax: false,
        news: [],
        errors: []
      }
    },
    created () {
      this.ajax = true
      const baseUrl = 'http://www.spirit-of-metal.com/API'
      axios.get(`${baseUrl}/news.php?l=fr`)
        .then(response => {
          this.news = response.data
          this.ajax = false
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
    display: block
    min-height: 60px
    line-height: 30px
    text-align: center
    padding: 5px

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

  .info > div
    text-align: center
</style>
