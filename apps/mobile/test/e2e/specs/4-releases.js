// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js

let devServer
const TIMEOUT = 5000 // Can be adjusted depending on the Internet connection...

module.exports = {
  'List': browser => {
    devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/#/releases`)
      .waitForElementVisible('#releases a', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.containsText('h2', 'À découvrir')
      .click('#language-switcher')
      .assert.containsText('h2', 'Releases')
      .assert.cssClassPresent('#releases > div', 'img')
      .assert.visible('#releases a img')
      .assert.elementCount('#releases a:first-child > div > div', 4)
      .assert.containsText('#releases a', String(new Date().getFullYear()))
  },
  'Details': browser => {
    browser
      .getText('#releases a:nth-child(4) > div > div:first-child', title => {
        browser
          .click('#releases a:nth-child(4)')
          .pause(TIMEOUT)
          .waitForElementPresent('h2', TIMEOUT)
          .assert.containsText('h2', title.value.toUpperCase())
      })
      .assert.visible('#album')
      // Albums are tested later (see encyclopedia)
      .end()
  }
}
