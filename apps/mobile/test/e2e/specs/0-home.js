// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js

let devServer
const TIMEOUT = 5000 // Can be adjusted depending on the Internet connection...

module.exports = {
  'Main': browser => {
    devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.title('Spirit of Metal')
  },
  'Header': browser => {
    browser
      .assert.visible('header')
      .assert.containsText('h1', 'SPIRIT OF METAL')
      .assert.visible('#language-switcher')
      .assert.visible('#burger')
  },
  'Menu': browser => {
    browser
      .assert.elementNotPresent('#menu')
      .click('#burger')
      .acceptAlert()
      .assert.visible('#cross')
      .assert.visible('#menu')
      .assert.elementCount('section', 2)
      .assert.elementCount('input[type="submit"]', 2)
      .assert.containsText('#login h2', 'CONNEXION')
      .assert.attributeContains('#pseudo', 'placeholder', 'Pseudo')
      .assert.attributeContains('#login-password', 'placeholder', 'Mot de passe')
      .assert.containsText('#signup h2', 'INSCRIPTION')
      .assert.attributeContains('#username', 'placeholder', 'Pseudo')
      .assert.attributeContains('#email', 'placeholder', 'E-mail')
      .assert.attributeContains('#signup-password', 'placeholder', 'Mot de passe')
      .assert.attributeContains('#password-confirm', 'placeholder', 'Confirmation')
      .assert.attributeContains('#location', 'placeholder', 'Pays/Ville')
      .assert.containsText('select#language > option:first-child', 'Langue')
      .assert.attributeContains('#birthday', 'placeholder', 'Date de naissance')
      .click('#language-switcher')
      .assert.containsText('#login h2', 'LOG IN')
      .assert.attributeContains('#pseudo', 'placeholder', 'Username')
      .assert.attributeContains('#login-password', 'placeholder', 'Password')
      .assert.containsText('#signup h2', 'SIGN UP')
      .assert.attributeContains('#username', 'placeholder', 'Username')
      .assert.attributeContains('#email', 'placeholder', 'Email')
      .assert.attributeContains('#signup-password', 'placeholder', 'Password')
      .assert.attributeContains('#password-confirm', 'placeholder', 'Confirmation')
      .assert.attributeContains('#location', 'placeholder', 'Location')
      .assert.containsText('select#language > option:first-child', 'Language')
      .assert.attributeContains('#birthday', 'placeholder', 'Birthday')
      .click('#language-switcher')
      .click('#cross')
  },
  'Navigation': browser => {
    browser
      .assert.visible('nav')
      .assert.elementCount('figure', 7)
      .assert.containsText('#language-switcher', 'FR')
      .assert.containsText('nav a:first-child', 'Actualités')
      .assert.containsText('nav a:nth-child(2)', 'Chroniques')
      .assert.containsText('nav a:nth-child(3)', 'Interviews')
      .assert.containsText('nav a:nth-child(4)', 'À découvrir')
      .assert.containsText('nav a:nth-child(5)', 'Événements')
      .assert.containsText('nav a:nth-child(6)', 'Encyclopédie')
      .assert.containsText('nav a:last-child', 'Forums')
      .click('#language-switcher')
      .assert.containsText('#language-switcher', 'EN')
      .assert.containsText('nav a:first-child', 'News')
      .assert.containsText('nav a:nth-child(2)', 'Reviews')
      .assert.containsText('nav a:nth-child(3)', 'Interviews')
      .assert.containsText('nav a:nth-child(4)', 'Releases')
      .assert.containsText('nav a:nth-child(5)', 'Events')
      .assert.containsText('nav a:nth-child(6)', 'Encyclopedia')
      .assert.containsText('nav a:last-child', 'Forums')
      .click('nav a[href$="news"]')
      .waitForElementVisible('#news', TIMEOUT)
      .back()
      .click('nav a[href$="reviews"]')
      .waitForElementVisible('#reviews', TIMEOUT)
      .back()
      .click('nav a[href$="interviews"]')
      .waitForElementVisible('#interviews', TIMEOUT)
      .back()
      .click('nav a[href$="releases"]')
      .waitForElementVisible('#releases', TIMEOUT)
      .back()
      .click('nav a[href$="events"]')
      .waitForElementVisible('#events', TIMEOUT)
      .back()
      .click('nav a[href$="encyclopedia"]')
      .waitForElementVisible('#encyclopedia', TIMEOUT)
      .back()
      .click('nav a[href*="forum"]')
      .waitForElementPresent('title', TIMEOUT)
      .assert.title('Spirit of Metal forum')
  },
  'Footer': browser => {
    browser
      .assert.visible('footer')
      .assert.containsText('footer', 'Spirit of Metal')
      .assert.containsText('footer', String(new Date().getFullYear()))
      .end()
  }
}
