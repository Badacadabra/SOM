<template>
  <div id="encyclopedia">
    <h2>{{ title }}</h2>
    <nav>
      <a href="/encyclopedie/genres" class="item">
        <icon name="hashtag" scale="1.3"></icon>
        Genres
      </a>
      <a href="/encyclopedie/groupes" class="item">
        <icon name="group" scale="1.3"></icon>
        Groupes
      </a>
      <a href="/encyclopedie/albums" class="item">
        <icon name="music" scale="1.3"></icon>
        Albums
      </a>
      <a href="/encyclopedie/artistes" class="item">
        <icon name="address-book-o" scale="1.3"></icon>
        Artistes
      </a>
      <a href="/encyclopedie/labels" class="item">
        <icon name="tag" scale="1.3"></icon>
        Labels
      </a>
      <a href="/encyclopedie/lieux" class="item">
        <icon name="map-marker" scale="1.3"></icon>
        Lieux
      </a>
    </nav>
    <h3>Quelques chiffres...</h3>
    <div class="figures">
      <ul>
        <li><span class="num">?????</span> genres</li>
        <li><span class="num">94917</span> groupes</li>
        <li><span class="num">?????</span> artistes</li>
        <li><span class="num">298479</span> albums</li>
        <li><span class="num">?????</span> labels</li>
        <li><span class="num">?????</span> lieux</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons/hashtag'
  import 'vue-awesome/icons/group'
  import 'vue-awesome/icons/music'
  import 'vue-awesome/icons/address-book-o'
  import 'vue-awesome/icons/tag'
  import 'vue-awesome/icons/map-marker'

  export default {
    name: 'encyclopedia',
    data () {
      return {
        title: 'Encyclopédie'
      }
    }
  }
</script>

<style lang="styl" scoped>
  @import '../assets/variables.styl'

  h2
  h3
    height: 50px
    line-height: 50px
    text-align: center

  h2
    color: whitesmoke
    background-color: $red
    font: 42px Astonished, sans-serif

  h3
    color: black
    background-color: silver
    border-top: solid 2px black
    font-family: Oswald, sans-serif
    font-weight: 400

  .figures
    color: black
    background-color: silver
    text-align: center
    padding-bottom: 10px
    font: 300 large Oswald, sans-serif

    .num
      color: $red
      font-weight: 400

  nav
    background-color: whitesmoke
    font: small-caps x-large Oswald, sans-serif

    a.item
      display: block
      color: black
      padding: 10px
      border-top: dashed 1px gray
      text-align: center

      &:first-child
        border-top: 0

      &:active
      &:focus
        background-color: silver
</style>
