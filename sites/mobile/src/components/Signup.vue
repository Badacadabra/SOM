<template>
  <section id="signup">
    <heading :text="$t('menu.signup')" :level="2" font="oswald" color="red" variant="uppercase"></heading>
    <form @submit.prevent="onSubmit">
      <input type="text" class="txt" id="username" name="username" :placeholder="$t('menu.username')" v-model="username" v-validate.initial="'required'">
      <div v-show="formErrors.has('username')" class="errors">{{ formErrors.first('username') }}</div>
      <input type="email" class="txt" id="email" name="email" :placeholder="$t('menu.mail')" v-model="email" v-validate.initial="'required|email'">
      <div v-show="formErrors.has('email')" class="errors">{{ formErrors.first('email') }}</div>
      <div>
        <input type="password" class="txt" id="signup-password" name="signup-password" :placeholder="$t('menu.password')" v-model="password" v-validate.initial="'required|confirmed:password-confirm'">
        <input type="password" class="txt" id="password-confirm" name="password-confirm" :placeholder="$t('menu.confirmation')">
        <div v-show="formErrors.has('signup-password')" class="errors">
          {{ formErrors.first('signup-password') }}
        </div>
      </div>
      <div>
        <input type="text" class="txt" id="location" name="location" :placeholder="$t('menu.location')" v-model="location" v-validate.initial="'alpha_spaces'" @keyup="getLocations" @blur="hideAutocomplete">
        <ul id="autocomplete" v-if="locations.length > 0">
          <li v-for="location of locations">{{ location.name }}</li>
        </ul>
        <select id="language" v-model="language">
          <option disabled hidden value="">{{ $t('menu.language') }}</option>
          <option value="english">{{ $t('menu.english') }}</option>
          <option value="french">{{ $t('menu.french') }}</option>
        </select>
      </div>
      <div>
        <datepicker input-class="txt" id="birthday" name="birthday" :placeholder="$t('menu.birthday')" :language="$i18n.locale" :full-month-name="true" v-model="birthday"></datepicker>
      </div>
      <input type="submit" :value="$t('menu.validate')" class="custom-btn">
    </form>
  </section>
</template>

<script>
  import Datepicker from 'vuejs-datepicker'

  export default {
    name: 'signup',
    data () {
      return {
        username: '',
        password: '',
        email: '',
        location: '',
        language: '',
        birthday: '',
        locations: []
      }
    },
    methods: {
      getLocations (e) {
        this.$get('places', {q: e.target.value})
          .then(response => {
            this.$parseList('locations', response.data)
          })
          .catch(e => {
            this.errors.push(e)
          })
      },
      hideAutocomplete () {
        this.locations = []
      },
      onSubmit () {
        console.log(this.username, this.password, this.confirmation, this.email, this.location, this.language, this.birthday)
      }
    },
    components: {
      Datepicker
    }
  }
</script>

<style lang="styl" scoped>
  #username
    margin-top: 10px

  select
    color: gray
    height: 30px
    float: right
    margin: 10px 10px 0 0
    font-family: Abel, sans-serif
    font-size: 1.1em
    border: solid 1px silver
    background-color: white

  .errors
    color: $red
    text-align: center
    font-family: Abel, sans-serif

  ul#autocomplete
    position: absolute
    z-index: 70
    width: 270px
    margin: auto
    margin-top: 5px
    margin-left: 7px
    background-color: white
    font-family: Abel, sans-serif
    border: solid 2px $lightgray

    li
      padding: 10px
      border-bottom: dashed 1px $lightgray
</style>
