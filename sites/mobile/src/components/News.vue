<template>
  <div id="news">
    <h2>Actualités</h2>
    <article>
      <a href="#">
        <div class="date">06/07/2017</div>
        <h3>Wintersun sortira Time II en 2042</h3>
      </a>
    </article>
    <article>
      <a href="#">
        <div class="info">
          <div class="date">06/07/2017</div>
          <h3 class="album">Wintersun sortira Time II en 2042</h3>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <div class="info">
          <div class="date">06/07/2017</div>
          <h3 class="album">Wintersun sortira Time II en 2042</h3>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <div class="info">
          <div class="date">06/07/2017</div>
          <h3 class="album">Wintersun sortira Time II en 2042</h3>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <div class="info">
          <div class="date">06/07/2017</div>
          <h3 class="album">Wintersun sortira Time II en 2042</h3>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <div class="info">
          <div class="date">06/07/2017</div>
          <h3 class="album">Wintersun sortira Time II en 2042</h3>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <div class="info">
          <div class="date">06/07/2017</div>
          <h3 class="album">Wintersun sortira Time II en 2042</h3>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <div class="info">
          <div class="date">06/07/2017</div>
          <h3 class="album">Wintersun sortira Time II en 2042</h3>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <div class="info">
          <div class="date">06/07/2017</div>
          <h3 class="album">Wintersun sortira Time II en 2042</h3>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <div class="info">
          <div class="date">06/07/2017</div>
          <h3 class="album">Wintersun sortira Time II en 2042</h3>
        </div>
      </a>
    </article>
  </div>
</template>

<script>
export default {
  name: 'news'
}
</script>

<style lang="styl" scoped>
  h2
    height: 50px
    line-height: 50px
    color: whitesmoke
    background-color: #800000
    text-align: center
    font: 42px Astonished, sans-serif

  h3
    font-weight: 400
    font-size: large

  a
    color: black
    display: block
    min-height: 60px
    line-height: 30px
    text-align: center
    padding: 5px

    &:hover
      text-decoration: none

    &:focus
      background-color: silver

  article
    color: black
    background-color: whitesmoke
    font-family: Oswald, sans-serif
    border-bottom: solid 1px gray

    &:last-of-type
      border-bottom: 0

  .date
    text-align: center
    color: #800000
</style>
