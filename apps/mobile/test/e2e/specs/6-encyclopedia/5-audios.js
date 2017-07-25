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
      .click('a[href$="audios"]')
  },
  'Search': browser => {
    browser
      .waitForElementVisible('#audios a', TIMEOUT)
      .assert.elementCount('#audios a', 10)
      .assert.containsText('h2', 'Audios')
      .click('#language-switcher')
      .assert.containsText('h2', 'Audios')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'deceiver of the gods')
      .pause(TIMEOUT)
      .assert.containsText('#audios', 'Deceiver of the Gods')
      .click('#audios a:first-child')
  },
  'Details': browser => {
    browser
      .waitForElementVisible('#audio', TIMEOUT)
      .assert.visible('h2')
      .assert.visible('figure')
      .waitForElementVisible('iframe', TIMEOUT)
      .end()
  }
}
