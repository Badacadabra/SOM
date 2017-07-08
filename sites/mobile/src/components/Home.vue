<template>
  <nav class="home">
    <a href="/actualites" title="Actualités">
      <figure>
        <img src="../assets/img/jpg/news.jpg" alt="Actualités">
        <figcaption>Actualités</figcaption>
      </figure>
    </a>
    <a href="/chroniques" title="Chroniques">
      <figure>
        <img src="../assets/img/jpg/reviews.jpg" alt="Chroniques">
        <figcaption>Chroniques</figcaption>
      </figure>
    </a>
    <a href="/interviews" title="Interviews">
      <figure>
        <img src="../assets/img/jpg/interviews.jpg" alt="Interviews">
        <figcaption>Interviews</figcaption>
      </figure>
    </a>
    <a href="/sorties" title="Sorties">
      <figure>
        <img src="../assets/img/jpg/releases.jpg" alt="Sorties">
        <figcaption>Sorties</figcaption>
      </figure>
    </a>
    <a href="/evenements" title="Événements">
      <figure>
        <img src="../assets/img/jpg/events.jpg" alt="Événements">
        <figcaption>Événements</figcaption>
      </figure>
    </a>
    <a href="/encyclopedie" title="Encyclopédie">
      <figure>
        <img src="../assets/img/jpg/encyclopedia.jpg" alt="Encyclopédie">
        <figcaption>Encyclopédie</figcaption>
      </figure>
    </a>
    <a href="http://www.spirit-of-metal.net/forum/index-l-fr.html" title="Forums">
      <figure>
        <img src="../assets/img/jpg/forums.jpg" alt="Forums">
        <figcaption>Forums</figcaption>
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
  @import '../assets/variables.styl'

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
