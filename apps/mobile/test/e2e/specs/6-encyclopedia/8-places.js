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
      .click('a[href$="places"]')
  },
  'Search': browser => {
    browser
      .waitForElementVisible('#places a', TIMEOUT)
      .assert.elementCount('#places a', 10)
      .assert.containsText('h2', 'Lieux')
      .click('#language-switcher')
      .assert.containsText('h2', 'Places')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'cco villeurbanne')
      .pause(TIMEOUT)
      .assert.containsText('#places', 'CCO Villeurbanne')
      .click('#places a:first-child')
  },
  'Details': browser => {
    browser
      .waitForElementVisible('#place', TIMEOUT)
      .assert.visible('h2')
      .assert.visible('figure')
      .assert.containsText('#place > section:first-of-type h3', 'À propos')
      .click('#language-switcher')
      .assert.containsText('#place > section:first-of-type h3', 'About')
      .assert.visible('.info')
      .end()
  }
}
