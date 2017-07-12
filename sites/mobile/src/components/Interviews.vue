<template>
  <div id="interviews">
    <heading text="Interviews" :level="2" font="astonished" color="red"></heading>
    <article v-for="interview of interviews">
      <router-link :to="{name: 'interview', params: {id: interview.id}}">
        <img class="photo" :src="interview.picture" :alt="interview.band">
        <div class="info">
          <h3 class="band">{{ interview.band }}</h3>
          <div class="date">{{ new Date(interview.date) | moment('DD/MM/YYYY') }}</div>
          <div class="author">@{{ interview.author }}</div>
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
    name: 'interviews',
    data () {
      return {
        ajax: false,
        page: 1,
        interviews: [],
        errors: []
      }
    },
    methods: {
      onInfinite () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'
        axios.get(`${baseUrl}/interviews.php?l=fr&p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.interviews.push(response.data[i])
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
  #interviews
    background-color: whitesmoke

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
