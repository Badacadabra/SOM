<template>
  <div id="news">
    <h2>Actualités</h2>
    <article v-for="n of news">
      <router-link :to="{name: 'news', params: {id: n.id}}">
        <div class="info">
          <h3>{{ n.title }}</h3>
          <div>
            Le <span class="date">{{ new Date(n.date) | moment('DD/MM/YYYY') }}</span>
            par <span class="author">@{{ n.author }}</span>
          </div>
        </div>
      </router-link>
    </article>
    <infinite-loading :on-infinite="onInfinite" :distance="30" spinner="waveDots" ref="infiniteLoading"></infinite-loading>
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
        page: 1,
        news: [],
        errors: []
      }
    },
    methods: {
      onInfinite () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'
        axios.get(`${baseUrl}/news.php?l=fr&p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.news.push(response.data[i])
            }
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
            this.ajax = false
            this.page++
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.ajax = true
    }
  }
</script>

<style lang="styl" scoped>
  #news
    background-color: whitesmoke

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
    font-family: Oswald, sans-serif
    border-bottom: solid 1px gray

    &:last-of-type
      border-bottom: 0

  .info > div
    text-align: center
    font-weight: 300

  .date
  .author
    font-weight: 400
</style>
