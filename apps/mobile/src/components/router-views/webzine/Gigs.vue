<template>
  <section id="gigs">
    <list ref="list" :scroll="true" v-on:update="load" :items="gigs" link="gig" :fields="['title', 'place', 'date']" type="std"></list>
    <loader v-if="$loading"></loader>
  </section>
</template>

<script>
  export default {
    name: 'gigs',
    data () {
      return {
        page: 1,
        gigs: []
      }
    },
    methods: {
      load () {
        this.$get('gigs', {p: this.page})
          .then(response => {
            this.$parseList('gigs', response.data, this.page)
            this.$emit('gigs')
          })
          .catch(e => {
            this.$errors.push(e)
          })
      }
    }
  }
</script>

<style lang="styl" scoped>
</style>
