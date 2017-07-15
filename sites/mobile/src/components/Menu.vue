<template>
  <div id="menu">
    <section id="login">
      <h2>{{ $t('menu.login') }}</h2>
      <form action="#" method="#">
        <input type="text" class="txt" id="pseudo" name="pseudo" :placeholder="$t('menu.username')" required>
        <input type="password" class="txt" id="login-password" name="login-password" :placeholder="$t('menu.password')" required>
        <input type="submit" value="OK" class="custom-btn">
      </form>
    </section>
    <section id="signup">
      <h2>{{ $t('menu.signup') }}</h2>
      <form action="#" method="#">
        <input type="text" class="txt" id="username" name="username" :placeholder="$t('menu.username')" required>
        <div>
          <input type="password" class="txt" id="signup-password" name="signup-password" :placeholder="$t('menu.password')" required>
          <input type="password" class="txt" id="password-confirm" name="signup-password" :placeholder="$t('menu.confirmation')" required>
        </div>
        <input type="email" class="txt" id="email" name="email" :placeholder="$t('menu.mail')" required>
        <div>
          <input type="text" class="txt" id="location" name="location" :placeholder="$t('menu.location')">
          <select id="language" name="language">
            <option value="english" selected>{{ $t('menu.english') }}</option>
            <option value="french">{{ $t('menu.french') }}</option>
          </select>
        </div>
        <div>
          <input type='text' class="txt" id="birthday" name="birthday" :placeholder="$t('menu.birthday')">
        </div>
        <img id="captcha" src="../assets/img/png/captcha.png" alt="Captcha">
        <div id="newsletter">
          <input type="checkbox" id="newsletter" name="newsletter">
          <label for="newsletter">{{ $t('menu.newsletter') }}</label>
        </div>
        <input type="submit" value="GO" class="custom-btn">
      </form>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'app-menu'
  }
</script>

<style lang="styl" scoped>
  #menu
    width: 300px
    background-color: whitesmoke
    border-right: solid 5px $red
    border-bottom: solid 5px $red
    position: absolute
    top: 50px
    left: 0
    z-index: 100

  h2
    color: whitesmoke
    background-color: $red
    font: 500 25px Oswald, sans-serif
    text-align: center
    margin-top: 0
    margin-bottom: 10px

  .txt
    width: 280px
    height: 25px
    margin: 0 0 10px 8px
    color: gray
    border: solid 1px gray
    background-color: silver
    text-align: center
    font-family: Oswald, sans-serif
    font-weight: 300
    font-style: italic
    font-size: 17px

  .custom-btn
    display: block
    color: whitesmoke
    background-color: black
    width: 280px
    height: 25px
    margin: 0 0 10px 8px
    font-family: Oswald, sans-serif
    font-weight: 400
    font-size: 17px
    text-align: center

    &:hover
      color: $yellow

  #signup-password
  #password-confirm
  #location
  #language
    width: 132px

  select
    width: 132px
    height: 25px
    background-color: gray
    float: right
    margin-right: 10px
    font-family: Oswald, sans-serif
    font-weight: 200
    font-size: 17px

  #datepicker
    margin: 0 10px

  #captcha
    display: block
    margin: auto

  #newsletter
    margin: 5px 0 10px 0
    font-family: Oswald, sans-serif
    font-size: 14px
    padding: 0 10px
</style>
