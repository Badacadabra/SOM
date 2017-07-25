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
      .click('a[href$="videos"]')
  },
  'Search': browser => {
    browser
      .waitForElementVisible('#videos a', TIMEOUT)
      .assert.elementCount('#videos a', 10)
      .assert.containsText('h2', 'Vidéos')
      .click('#language-switcher')
      .assert.containsText('h2', 'Videos')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'black sabbath')
      .pause(TIMEOUT)
      .assert.containsText('#videos', 'Black Sabbath')
      .click('#videos a:first-child')
  },
  'Details': browser => {
    browser
      .waitForElementVisible('#video', TIMEOUT)
      .assert.visible('h2')
      .waitForElementVisible('iframe', TIMEOUT)
      .end()
  }
}
