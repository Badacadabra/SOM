<template>
  <h2 :class="color" v-if="level === 2">{{ title }}</h2>
  <h3 :class="color" v-else>{{ title }}</h3>
</template>

<script>
  export default {
    name: 'item-title',
    props: ['title', 'level', 'color']
  }
</script>

<style lang="styl" scoped>
  h2
  h3
    min-height: 50px
    color: black
    font: 20px Oswald, sans-serif
    display: flex
    align-items: center
    justify-content: center

  .silver
    background-color: silver

  .red
    background-color: $red

  .yellow
    background-color: $yellow
</style>

