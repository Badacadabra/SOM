<template>
  <div id="interviews">
    <heading text="Interviews" :level="2" font="astonished" color="red"></heading>
    <list ref="list" :scroll="true" v-on:update="load" :items="interviews" link="interview" :fields="['band', 'date', 'author']" type="img"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  export default {
    name: 'interviews',
    data () {
      return {
        page: 1,
        interviews: [],
        errors: []
      }
    },
    methods: {
      load () {
        this.$get('interviews', {l: 'fr', p: this.page})
          .then(response => {
            this.$parseList('interviews', response.data, this.page)
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
</script>

<style lang="styl" scoped>
  #interviews
    background-color: whitesmoke
</style>
