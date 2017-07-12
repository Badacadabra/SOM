<template>
  <h2 :class="[font, color]" v-if="level === 2">{{ text }}</h2>
  <h3 :class="[font, color]" v-else>{{ text }}</h3>
</template>

<script>
  export default {
    name: 'heading',
    props: ['text', 'level', 'font', 'color']
  }
</script>

<style lang="styl" scoped>
  h2
  h3
    min-height: 50px
    color: black
    display: flex
    align-items: center
    justify-content: center

  .oswald
    font: 20px Oswald, sans-serif

  .astonished
    font: 42px Astonished, sans-serif

  .silver
    background-color: silver

  .red
    color: whitesmoke
    background-color: $red

  .yellow
    background-color: $yellow
</style>

