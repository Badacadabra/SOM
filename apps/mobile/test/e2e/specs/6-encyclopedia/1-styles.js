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
      .click('a[href$="styles"]')
  },
  'Search': browser => {
    browser
      .waitForElementVisible('#styles a', TIMEOUT)
      .assert.elementCount('#styles a', 10)
      .assert.containsText('h2', 'Styles')
      .click('#language-switcher')
      .assert.containsText('h2', 'Styles')
      .click('#language-switcher')
      .assert.visible('.search')
      .assert.containsText('#styles', 'Black')
      .click('#styles a:first-child')
  },
  'Lists': browser => {
    browser
      .waitForElementVisible('#style', TIMEOUT)
      .assert.visible('nav')
      .assert.containsText('nav > a[href$="bands"]', 'Groupes phares')
      .assert.containsText('nav > a[href$="albums"]', 'Albums célèbres')
      .click('#language-switcher')
      .assert.containsText('nav > a[href$="bands"]', 'Famous bands')
      .assert.containsText('nav > a[href$="albums"]', 'Well-known albums')
      .click('#language-switcher')
  },
  'Details': browser => {
    browser
      .waitForElementVisible('.bands a', TIMEOUT)
      .assert.cssClassPresent('.bands', 'std')
      .assert.elementNotPresent('.bands a img')
      .assert.elementCount('.bands a:first-child > div > div', 2)
      .click('.bands a:first-child')
      .waitForElementVisible('#band', TIMEOUT)
      .back()
      .pause(TIMEOUT)
      .click('nav > a[href$="albums"]')
      .waitForElementVisible('.albums a', TIMEOUT)
      .assert.cssClassPresent('.albums', 'img')
      .assert.visible('.albums a img')
      .assert.elementCount('.albums a:first-child > div > div', 3)
      .click('.albums a:first-child')
      .waitForElementVisible('#album', TIMEOUT)
      .end()
  }
}
