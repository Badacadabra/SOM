<template>
  <div id="encyclopedia">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'encyclopedia',
    data () {
      return {
        title: 'Encyclopédie'
      }
    }
  }
</script>

<style lang="styl" scoped>
  h2
    color: green
</style>
