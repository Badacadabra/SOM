<template>
  <div :class="type">
    <router-link v-for="item of items" :key="item.id" :to="{name: link, params: {id: item.id}}">
      <img v-if="item.cover && displayImg" v-lazy="item.cover" :alt="'Pochette n°'+item.id">
      <img v-if="item.picture && displayImg" v-lazy="item.picture" :alt="'Image n°'+item.id">
      <div>
        <div v-for="field of fields">
          {{ field === 'date' ? $d(new Date(item[field]), 'long') : item[field] }}
        </div>
      </div>
    </router-link>
    <infinite-loading v-if="scroll" :on-infinite="onInfinite" :distance="30" spinner="waveDots" ref="infiniteLoading">
      <span slot="no-results">{{ $t('loader.none') }}</span>
      <span slot="no-more">{{ $t('loader.end') }}</span>
    </infinite-loading>
  </div>
</template>

<script>
  export default {
    name: 'list',
    props: ['items', 'link', 'fields', 'scroll', 'type'],
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
    },
    computed: {
      displayImg () {
        return this.type === 'img'
      }
    }
  }
</script>

<style lang="styl" scoped>
  // std (standard) - Centered list without images
  // img (image) - Left-aligned list with images
  // min (minimalist) - Centered list with a single line (see encyclopedia)

  a
    color: black
    background-color: whitesmoke
    font-family: Oswald, sans-serif
    border-bottom: solid 2px $lightgray

    &:active
    &:focus
      background-color: $lightgray

  .std a
    display: block
    text-align: center
    padding: 5px

  .img a
    display: flex
    align-items: center
    padding: 10px

    img
      width: 100px
      margin-right: 10px

  .min a
    display: block
    font-size: large
    text-align: center
    padding: 15px 5px

    & > div

      div:first-of-type
        display: inline

      div:nth-of-type(2)
        display: inline
        color: gray
        font-size: small
        margin-left: 5px

  .std a
  .img a
    & > div
      flex: 1

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
