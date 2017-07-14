<template>
  <div class="list">
    <router-link v-for="item of items" :key="item.id" :to="{name: link, params: {id: item.id}}">
      <img v-if="item.cover" :src="item.cover" :alt="'Pochette n°'+item.id">
      <img v-if="item.picture" :src="item.picture" :alt="'Image n°'+item.id">
      <div>
        <div v-for="field of fields">{{ item[field] }}</div>
      </div>
    </router-link>
    <infinite-loading v-if="scroll" :on-infinite="onInfinite" :distance="30" spinner="waveDots" ref="infiniteLoading"></infinite-loading>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: ['items', 'link', 'fields', 'scroll'],
    methods: {
      onInfinite () {
        this.$emit('update')
      },
      complete () {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
      },
      loaded () {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }
    }
  }
</script>

<style lang="styl" scoped>
  .list a
    color: black
    background-color: whitesmoke
    display: flex
    align-items: center
    border-bottom: dashed 1px silver
    font-family: Oswald, sans-serif

    img
      width: 100px
      margin-right: 5px

    & > div

      div:first-of-type
        color: $red
        font-weight: 400
        font-size: large

      div:nth-of-type(3)
        font-size: medium
        font-weight: 300

      div:nth-of-type(4)
        font-size: small
        font-weight: 300
</style>
