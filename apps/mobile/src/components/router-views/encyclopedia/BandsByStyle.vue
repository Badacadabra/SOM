<template>
  <section>
    <list ref="list" :scroll="true" v-on:update="load" :items="bands" link="band" :fields="['name', 'country']" type="std" class="bands"></list>
    <loader v-if="$loading"></loader>
  </section>
</template>

<script>
  export default {
    name: 'bands-by-style',
    data () {
      return {
        page: 1,
        bands: []
      }
    },
    methods: {
      load () {
        this.$get('bands', {l: this.$i18n.locale, id_style: this.$route.params.id, p: this.page})
          .then(response => {
            this.$parseList('bands', response.data, this.page)
            this.$emit('bands', this.bands[0].style) // necessary to display a title
          })
          .catch(e => {
            this.$errors.push(e)
          })
      }
    }
  }
</script>

<style lang="styl" scoped>
  section
    background-color: whitesmoke

  .bands
    text-align: center
</style>

