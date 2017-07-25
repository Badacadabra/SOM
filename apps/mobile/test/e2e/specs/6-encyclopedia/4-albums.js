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
      .click('a[href$="albums"]')
  },
  'Search': browser => {
    browser
      .waitForElementVisible('#albums a', TIMEOUT)
      .assert.elementCount('#albums a', 10)
      .assert.containsText('h2', 'Albums')
      .click('#language-switcher')
      .assert.containsText('h2', 'Albums')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'la iglesia del odio')
      .pause(TIMEOUT)
      .assert.containsText('#albums', 'La Iglesia del Odio')
      .click('#albums a:first-child')
  },
  'Details': browser => {
    browser
      .waitForElementVisible('#album', TIMEOUT)
      .assert.visible('h2')
      .assert.visible('figure')
      .assert.containsText('#album > section:first-of-type h3', 'Fiche descriptive')
      .assert.containsText('#album > section:nth-of-type(2) h3', 'Liste des morceaux')
      .click('#language-switcher')
      .assert.containsText('#album > section:first-of-type h3', 'Description sheet')
      .assert.containsText('#album > section:nth-of-type(2) h3', 'Tracklist')
      .assert.visible('.info')
      .assert.visible('.tracks')
      .end()
  }
}
