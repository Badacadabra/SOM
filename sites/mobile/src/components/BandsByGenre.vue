<template>
  <section>
    <list :scroll="false" :items="bands" link="band" :fields="['name', 'country']" type="img" class="bands"></list>
    <loader v-if="$loading"></loader>
  </section>
</template>

<script>
  export default {
    name: 'bands-by-genre',
    data () {
      return {
        bands: [],
        errors: []
      }
    },
    created () {
      this.$get('bands', {id_style: this.$route.params.id})
        .then(response => {
          this.$parseList('bands', response.data)
          this.$emit('bands', this.bands[0].style) // necessary to display a title
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
  .bands
    text-align: center
</style>

