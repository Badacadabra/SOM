<template>
  <div id="releases">
    <heading text="Sorties du mois" :level="2" font="astonished" color="red"></heading>
    <list ref="list" :scroll="false" :items="releases" link="album" :fields="['album', 'band', 'type', 'date']" type="img"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  export default {
    name: 'releases',
    data () {
      return {
        releases: [],
        errors: []
      }
    },
    created () {
      this.ajax = true

      this.$get('releases')
        .then(response => {
          this.$parseList('releases', response.data)
          console.log(response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
</style>

