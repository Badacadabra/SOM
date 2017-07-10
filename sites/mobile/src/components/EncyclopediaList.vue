<template>
  <section>
    <a href="#" v-for="item of items">{{ item }}</a>
  </section>
</template>

<script>
  export default {
    name: 'encylopedia-list',
    props: ['items']
  }
</script>

<style lang="styl" scoped>
  a
    display: block
    color: black
    font: large Oswald, sans-serif
    background-color: whitesmoke
    text-align: center
    padding: 15px 5px
    border-bottom: dashed 1px silver

    &:active
    &:focus
      background-color: silver
</style>

