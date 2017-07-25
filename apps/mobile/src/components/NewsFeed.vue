<template>
  <div id="news">
    <heading :text="$t('categories.news')" :level="2" font="astonished" color="red"></heading>
    <list ref="list" :scroll="true" v-on:update="load" :items="news" link="news" :fields="['title', 'date', 'author']" type="std"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  export default {
    name: 'newsfeed',
    data () {
      return {
        page: 1,
        news: []
      }
    },
    methods: {
      load () {
        this.$get('news', {l: this.$i18n.locale, p: this.page})
          .then(response => {
            this.$parseList('news', response.data, this.page)
          })
          .catch(e => {
            this.$errors.push(e)
          })
      }
    }
  }
</script>

<style lang="styl" scoped>
  #news
    background-color: whitesmoke
</style>
