// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js

let devServer
const TIMEOUT = 10000 // Can be adjusted depending on the Internet connection...

module.exports = {
  'Main': browser => {
    devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/#/encyclopedia`)
      .waitForElementVisible('#encyclopedia nav', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .click('a[href$="artists"]')
  },
  'Search': browser => {
    browser
      .waitForElementVisible('#artists a', TIMEOUT)
      .assert.elementCount('#artists a', 10)
      .assert.containsText('h2', 'Artistes')
      .click('#language-switcher')
      .assert.containsText('h2', 'Artists')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'angela gossow')
      .pause(TIMEOUT)
      .assert.containsText('#artists', 'Angela Gossow')
      .click('#artists a:first-child')
  },
  'Details': browser => {
    browser
      .waitForElementVisible('#artist', TIMEOUT)
      .assert.visible('h2')
      .assert.visible('figure')
      .assert.containsText('#artist > section:first-of-type h3', 'À propos')
      .assert.containsText('#artist > section:last-of-type h3', 'Groupe')
      .click('#language-switcher')
      .assert.containsText('#artist > section:first-of-type h3', 'About')
      .assert.containsText('#artist > section:last-of-type h3', 'band')
      .assert.visible('.info')
      .assert.visible('#artist > section:last-child a')
      .end()
  }
}
