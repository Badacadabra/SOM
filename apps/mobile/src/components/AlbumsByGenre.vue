<template>
  <section>
    <list ref="list" :scroll="true" v-on:update="load" :items="albums" link="album" :fields="['name', 'band', 'date']" type="img" class="albums"></list>
    <loader v-if="$loading"></loader>
  </section>
</template>

<script>
  export default {
    name: 'albums-by-genre',
    data () {
      return {
        page: 1,
        albums: [],
        errors: []
      }
    },
    methods: {
      load () {
        this.$get('albums', {id_style: this.$route.params.id, p: this.page})
          .then(response => {
            this.$parseList('albums', response.data, this.page)
            this.$emit('albums')
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

<style lang="styl" scoped>
  section
    background-color: whitesmoke
</style>
