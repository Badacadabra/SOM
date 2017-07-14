<template>
  <section>
    <list :scroll="false" :items="bands" link="band" :fields="['name', 'country']"></list>
    <loader v-if="ajax"></loader>
  </section>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'bands-by-genre',
    data () {
      return {
        ajax: false,
        bands: [],
        errors: []
      }
    },
    created () {
      this.ajax = true

      const id = this.$route.params.id
      const baseUrl = 'http://www.spirit-of-metal.com/API'

      axios.get(`${baseUrl}/bands.php?id_style=${id}`)
        .then(response => {
          this.bands = response.data
          this.$emit('bands', this.bands[0].style)
          this.ajax = false
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
</style>

