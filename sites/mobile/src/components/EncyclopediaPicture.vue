<template>
  <figure>
    <img :src="src" :alt="alt">
  </figure>
</template>

<script>
  export default {
    name: 'encyclopedia-picture',
    props: ['src', 'alt']
  }
</script>

<style lang="styl" scoped>
  figure
    padding: 20px 0

    img
      display: block
      max-width: 90%
      margin: auto
      box-shadow: 0 0 15px black
</style>
