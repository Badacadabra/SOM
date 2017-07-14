<template>
  <section>
    <router-link v-for="item of items" :key="item.id" :to="{name: link, params: {id: item.id}}">
      {{ item[prop] }}
      <span class="subprop">{{ item[subprop] }}</span>
    </router-link>
  </section>
</template>

<script>
  export default {
    name: 'encylopedia-list',
    props: ['items', 'link', 'prop', 'subprop']
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

  .subprop
    color: gray
    font-size: small
</style>

