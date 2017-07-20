<template>
  <div class="search">
    <input type="text" :placeholder="$t('encyclopedia.search')" @keyup="autocomplete">
    <icon class="icon" name="search" scale="1.3"></icon>
  </div>
</template>

<script>
  import 'vue-awesome/icons/search'

  export default {
    name: 'search',
    methods: {
      autocomplete (event) {
        this.$emit('typing', event)
      }
    }
  }
</script>

<style lang="styl" scoped>
  .search
    display: flex
    align-items: center
    border-bottom: solid 2px black

    input
      width: 100%
      height: 50px
      padding-left: 10px
      font: 300 large Oswald, sans-serif
      outline: 0

    .icon
      height: 50px
      background-color: white
      padding: 0 10px
</style>
