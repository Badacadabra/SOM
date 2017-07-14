<template>
  <section id="photo-galleries">
    <list ref="list" :scroll="true" v-on:update="load" :items="galleries" link="photoGallery" :fields="['title', 'date', 'author']" type="img"></list>
    <loader v-if="ajax"></loader>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'photo-galleries',
    data () {
      return {
        ajax: false,
        page: 1,
        galleries: []
      }
    },
    methods: {
      load () {
        const baseUrl = 'http://www.spirit-of-metal.com/API'

        axios.get(`${baseUrl}/galleries.php?p=${this.page}`)
          .then(response => {
            for (var i = 0; i < response.data.length; i++) {
              this.galleries.push(response.data[i])
            }
            this.$refs.list.loaded()
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
</style>
