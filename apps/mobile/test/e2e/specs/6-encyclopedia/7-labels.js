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
      .click('a[href$="labels"]')
  },
  'Search': browser => {
    browser
      .waitForElementVisible('#labels a', TIMEOUT)
      .assert.elementCount('#labels a', 10)
      .assert.containsText('h2', 'Labels')
      .click('#language-switcher')
      .assert.containsText('h2', 'Labels')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'nuclear blast')
      .pause(TIMEOUT)
      .assert.containsText('#labels', 'Nuclear Blast')
      .click('#labels a:first-child')
  },
  'Details': browser => {
    browser
      .waitForElementVisible('#label', TIMEOUT)
      .assert.visible('h2')
      .assert.visible('figure')
      .assert.containsText('#label > section:first-of-type h3', 'À propos')
      .click('#language-switcher')
      .assert.containsText('#label > section:first-of-type h3', 'About')
      .assert.visible('.info')
      .end()
  }
}
