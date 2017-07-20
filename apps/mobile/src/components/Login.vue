<template>
  <section id="login">
    <heading :text="$t('menu.login')" :level="2" font="oswald" color="red" variant="uppercase"></heading>
    <form @submit.prevent="onSubmit">
      <input type="text" class="txt" id="pseudo" name="pseudo" :placeholder="$t('menu.username')" v-model="pseudo" v-validate.initial="'required'">
      <div v-show="formErrors.has('pseudo')" class="errors">{{ formErrors.first('pseudo') }}</div>
      <input type="password" class="txt" id="login-password" name="login-password" :placeholder="$t('menu.password')" v-model="password" v-validate.initial="'required'">
      <div v-show="formErrors.has('login-password')" class="errors">{{ formErrors.first('login-password') }}</div>
      <input type="submit" :value="$t('menu.ok')" class="custom-btn">
    </form>
  </section>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        pseudo: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        if (this.$i18n.locale === 'en') {
          alert('Coming soon...')
        } else {
          alert('Bientôt...')
        }
      }
    }
  }
</script>

<style lang="styl" scoped>
  #pseudo
    margin-top: 10px

  .errors
    color: $red
    text-align: center
    font-family: Abel, sans-serif
</style>
