<template>
  <nav class="home">
    <router-link :to="{name: 'newsfeed'}">
      <figure>
        <img src="../assets/img/jpg/news.jpg" alt="$t('categories.news')">
        <figcaption>{{ $t('categories.news') }}</figcaption>
      </figure>
    </router-link>
    <router-link :to="{name: 'reviews'}">
      <figure>
        <img src="../assets/img/jpg/reviews.jpg" :alt="$t('categories.reviews')">
        <figcaption>{{ $t('categories.reviews') }}</figcaption>
      </figure>
    </router-link>
    <router-link :to="{name: 'interviews'}">
      <figure>
        <img src="../assets/img/jpg/interviews.jpg" :alt="$t('categories.interviews')">
        <figcaption>{{ $t('categories.interviews') }}</figcaption>
      </figure>
    </router-link>
    <router-link :to="{name: 'releases'}">
      <figure>
        <img src="../assets/img/jpg/releases.jpg" :alt="$t('categories.releases')">
        <figcaption>{{ $t('categories.releases') }}</figcaption>
      </figure>
    </router-link>
    <router-link :to="{name: 'events'}">
      <figure>
        <img src="../assets/img/jpg/events.jpg" :alt="$t('categories.events')">
        <figcaption>{{ $t('categories.events') }}</figcaption>
      </figure>
    </router-link>
    <router-link :to="{name: 'encyclopedia'}">
      <figure>
        <img src="../assets/img/jpg/encyclopedia.jpg" :alt="$t('categories.encyclopedia')">
        <figcaption>{{ $t('categories.encyclopedia') }}</figcaption>
      </figure>
    </router-link>
    <a :href="'http://www.spirit-of-metal.com/forum/index.php?l='+this.$i18n.locale" title="Forums">
      <figure>
        <img src="../assets/img/jpg/forums.jpg" :alt="$t('categories.forums')">
        <figcaption>{{ $t('categories.forums') }}</figcaption>
      </figure>
    </a>
  </nav>
</template>

<script>
  export default {
    name: 'home'
  }
</script>

<style lang="styl" scoped>
  nav
    display: flex
    flex-direction: column
    align-items: center
    margin: 0
    padding: 10px 0

  a
    color: whitesmoke
    display: block

    &:active
    &:focus
      color: $yellow

      figure
        border-color: $yellow

  figure
    width: 300px
    height: 300px
    margin: 10px 0
    border: solid 5px whitesmoke

    img
      filter: brightness(0.4)

    figcaption
      font: 80px Astonished, sans-serif
      position: relative
      top: -210px
      text-align: center
</style>
