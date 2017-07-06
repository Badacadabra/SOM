<template>
  <div id="events">
    <h2>Événements</h2>
    <nav>
      <a href="#concerts" class="item" @click="navigate('gigs')">
        <icon name="calendar" scale="1.3"></icon>
        <span>Concerts</span>
      </a>
      <a href="#reports" class="item" @click="navigate('reports')">
        <icon name="bullhorn" scale="1.3"></icon>
        <span>Live-reports</span>
      </a>
      <a href="#photos" class="item" @click="navigate('photos')">
        <icon name="photo" scale="1.3"></icon>
        <span>Photos</span>
      </a>
    </nav>
    <section id="gigs" v-if="gigsSelected">
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Hellfest</h3>
          <div class="place">Clisson</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
    </section>
    <section id="live-reports" v-else-if="reportsSelected">
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
      <article>
        <a href="#">
          <h3 class="gig">Descending + Carach Angren + Fleshgod Apocalypse + Septicflesh</h3>
          <div class="place">CCO Villeurbanne</div>
          <div class="date">06/07/2017</div>
          <div class="author">@BadaOfBodom</div>
        </a>
      </article>
    </section>
    <section id="photo-galleries" v-else>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
      <article>
        <a href="#">
          <figure>
            <img class="photo" src="https://i.ytimg.com/vi/bf9QqGlF0Yo/hqdefault.jpg" alt="Children Of Bodom">
            <figcaption>Children Of Bodom (Live in Barcelona)</figcaption>
          </figure>
        </a>
      </article>
    </section>
  </div>
</template>

<script>
  import 'vue-awesome/icons/calendar'
  import 'vue-awesome/icons/bullhorn'
  import 'vue-awesome/icons/photo'

  export default {
    name: 'events',
    data () {
      return {
        gigsSelected: true,
        reportsSelected: false
      }
    },
    methods: {
      navigate (tab) {
        if (tab === 'gigs') {
          this.gigsSelected = true
        } else if (tab === 'reports') {
          this.gigsSelected = false
          this.reportsSelected = true
        } else {
          this.gigsSelected = false
          this.reportsSelected = false
        }
      }
    }
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
    color: #800000
    font-weight: 400
    font-size: large

  nav
    background-color: silver
    display: flex
    justify-content: space-between
    align-items: center

    .item
      color: gray
      height: 50px
      text-align: center
      flex-grow: 1
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column

      &:focus
        color: black

      &:active
        color: whitesmoke

      span
        font-variant: small-caps

  article
    color: black
    background-color: whitesmoke
    font-family: Oswald, sans-serif
    border-top: solid 1px gray

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

    .author
      font-style: italic

  img
    max-width: 100%

  #photo-galleries

    article a:focus
      color: #F4BF31
      background-color: black

    .photo
      width: 100%
</style>
