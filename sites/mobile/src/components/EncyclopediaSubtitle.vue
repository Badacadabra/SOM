<template>
  <h2>{{ title }}</h2>
</template>

<script>
  export default {
    name: 'encyclopedia-subtitle',
    props: ['title']
  }
</script>

<style lang="styl" scoped>
  h2
    min-height: 50px
    color: black
    background-color: $yellow
    font: 42px Astonished, sans-serif
    display: flex
    align-items: center
    justify-content: center
</style>
