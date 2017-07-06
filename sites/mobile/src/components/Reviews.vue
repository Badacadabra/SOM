<template>
  <div id="reviews">
    <h2>Chroniques</h2>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
    <article>
      <a href="#">
        <img class="cover" src="https://upload.wikimedia.org/wikipedia/fi/6/64/Children_of_Bodom_Something_Wild.jpg" alt="Something Wild">
        <div class="info">
          <h3 class="album">Something Wild</h3>
          <div class="band">Children Of Bodom</div>
          <div class="author">Par BadaOfBodom</div>
        </div>
      </a>
    </article>
  </div>
</template>

<script>
export default {
  name: 'reviews'
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

  a
    color: black
    display: flex
    align-items: center

    &:hover
      text-decoration: none

    &:focus
      background-color: silver

  article
    display: block
    color: black
    background-color: whitesmoke
    font-family: Oswald, sans-serif
    border-bottom: solid 1px gray

    &:last-of-type
      border-bottom: 0

  .cover
    width: 100px

  .info
    margin-left: 7px

    .album
      color: #800000
      font-weight: 400
      font-size: large

    .band
      font-size: medium

    .author
      font-style: italic
      font-size: small
</style>
