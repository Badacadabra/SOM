<template>
  <article>
    <h2>{{ gig.title }}</h2>
    <div class="content" v-html="gig.content"></div>
    <loader v-if="ajax"></loader>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'gig',
    data () {
      return {
        ajax: false,
        gig: {},
        errors: []
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/gigs.php?id=${id}`)
        .then(response => {
          this.gig = response.data
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
  h2
    min-height: 50px
    color: black
    background-color: silver
    font: 20px Oswald, sans-serif
    display: flex
    align-items: center
    justify-content: center
</style>
