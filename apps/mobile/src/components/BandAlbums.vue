<template>
  <section>
    <list ref="list" :scroll="true" v-on:update="getData" :items="albums" link="album" :fields="['name', 'band', 'date']" type="img"></list>
    <loader v-if="$loading"></loader>
  </section>
</template>

<script>
  /*
    A "band album" can be of type:
      - 'Album' (full-length)
      - 'EP'
      - 'Single',
      - 'Demo',
      - 'Compilation'
      - 'Live'
      - 'Split'
      - 'Vidéo'
      - 'Bootleg'
      - 'Box set'
      - 'Tribute'
  */

  export default {
    name: 'band-albums',
    props: ['type'],
    data () {
      return {
        page: 1,
        albums: [],
        errors: []
      }
    },
    methods: {
      getData (reset = false) {
        if (reset) {
          this.page = 1
          this.albums = []
        }

        this.$get('albums', {id_groupe: this.$route.params.id, type: this.type, p: this.page})
          .then(response => {
            if (response.data.length === 0) {
              this.$refs.list.complete()
            } else {
              this.$parseList('albums', response.data, this.page)
            }
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    },
    created () {
      this.$loading = false // to avoid double loader...
    },
    watch: {
      $route () {
        this.$loading = true
        this.getData(true)
      }
    }
  }
</script>

<style lang="styl" scoped>
</style>

