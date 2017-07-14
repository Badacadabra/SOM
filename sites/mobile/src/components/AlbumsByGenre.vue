<template>
  <section>
    <list :scroll="false" :items="albums" link="album" :fields="['name', 'band', 'date']" type="img"></list>
    <loader v-if="$loading"></loader>
  </section>
</template>

<script>
  export default {
    name: 'albums-by-genre',
    data () {
      return {
        albums: [],
        errors: []
      }
    },
    created () {
      this.$get('albums', {id_style: this.$route.params.id})
        .then(response => {
          this.$parseList('albums', response.data)
          this.$emit('albums')
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
</style>
