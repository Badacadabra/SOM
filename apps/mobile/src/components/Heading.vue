<template>
  <h2 :class="[font, color, variant]" v-if="level === 2">{{ text }}</h2>
  <h3 :class="[font, color, variant]" v-else>{{ text }}</h3>
</template>

<script>
  export default {
    name: 'heading',
    props: ['text', 'level', 'font', 'color', 'variant']
  }
</script>

<style lang="styl" scoped>
  h2
  h3
    min-height: 50px
    color: black
    display: flex
    text-align: center
    align-items: center
    justify-content: center
    padding: 0 5px

  // Fonts

  .oswald
    font: 20px Oswald, sans-serif

  .astonished
    font: 42px Astonished, sans-serif

  // Colors

  .red
    color: whitesmoke
    background-color: $red

  .yellow
    background-color: $yellow

  .black
    color: whitesmoke
    background-color: black

  .silver
    background-color: silver

  .white
    background-color: whitesmoke

  // Variants

  .uppercase
    text-transform: uppercase
    font-weight: 500
</style>

