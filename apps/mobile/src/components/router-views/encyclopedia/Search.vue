<template>
  <div :id="type">
    <heading :text="$t('encyclopedia.'+type)" :level="2" font="astonished" color="yellow"></heading>
    <search-input v-on:typing="getData"></search-input>
    <list :scroll="false" :items="items" :link="routeName" :fields="fields" type="min"></list>
    <loader v-if="$loading"></loader>
  </div>
</template>

<script>
  import SearchInput from '../../layout/SearchInput'

  export default {
    name: 'search',
    props: ['type', 'fields', 'firstChar'],
    data () {
      return {
        items: []
      }
    },
    methods: {
      getData (e) {
        this.$get(this.type, {q: e.target.value, l: this.$i18n.locale})
          .then(response => {
            this.$parseList('items', response.data)
          })
          .catch(e => {
            this.$errors.push(e)
          })
      }
    },
    computed: {
      // Types are plural with a final "s", whereas route names with an id are singular...
      routeName () {
        return this.type.slice(0, -1)
      }
    },
    created () {
      this.getData({
        target: {
          value: this.firstChar
        }
      })
    },
    components: {
      SearchInput
    }
  }
</script>

<style lang="styl" scoped>
</style>
