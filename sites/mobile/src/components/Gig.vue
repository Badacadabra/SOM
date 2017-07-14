<template>
  <article>
    <heading :text="gig.title" :level="2" font="oswald" color="silver"></heading>
    <div class="content" v-html="gig.content"></div>
    <loader v-if="$loading"></loader>
  </article>
</template>

<script>
  export default {
    name: 'gig',
    data () {
      return {
        gig: {},
        errors: []
      }
    },
    created () {
      this.$get('gigs', {id: this.$route.params.id})
        .then(response => {
          this.$parseItem('gig', response.data)
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
</script>

<style lang="styl" scoped>
</style>
