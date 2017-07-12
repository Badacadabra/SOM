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
    background-color: black

    img
      display: block
      max-width: 100%
      margin: auto
</style>
