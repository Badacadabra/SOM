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
      .click('a[href$="bands"]')
  },
  'Search': browser => {
    browser
      .waitForElementVisible('#bands a', TIMEOUT)
      .assert.elementCount('#bands a', 10)
      .assert.containsText('h2', 'Groupes')
      .click('#language-switcher')
      .assert.containsText('h2', 'Bands')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'children of bodom')
      .pause(TIMEOUT)
      .assert.containsText('#bands', 'Children Of Bodom')
      .click('#bands a:first-child')
  },
  'Details': browser => {
    browser
      .waitForElementVisible('#band', TIMEOUT)
      .assert.visible('h2')
      .assert.visible('figure')
      .assert.containsText('#band > section:first-of-type h3', 'Fiche descriptive')
      .assert.containsText('#band > section:nth-of-type(2) h3', 'Line-up')
      .assert.containsText('#band > section:last-of-type h3', 'Discographie')
      .click('#language-switcher')
      .assert.containsText('#band > section:first-of-type h3', 'Description sheet')
      .assert.containsText('#band > section:nth-of-type(2) h3', 'Line-up')
      .assert.containsText('#band > section:last-of-type h3', 'Discography')
      .assert.visible('.info')
      .assert.visible('.lineup')
      .assert.visible('#band > section:last-of-type nav')
      .end()
  }
}
