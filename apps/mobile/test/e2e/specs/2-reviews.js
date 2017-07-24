// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js

let devServer
const TIMEOUT = 5000 // Can be adjusted depending on the Internet connection...

module.exports = {
  'List': browser => {
    devServer = browser.globals.devServerURL;

    browser
      .url(`${devServer}/#/reviews`)
      .waitForElementVisible('#reviews a', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.containsText('h2', 'Chroniques')
      .click('#language-switcher')
      .assert.containsText('h2', 'Reviews')
      .click('#language-switcher')
      .click('#reviews a:nth-child(2)')
  },
  'Details': browser => {
    browser
      .waitForElementPresent('figure', TIMEOUT)
      .assert.visible('figcaption')
      .assert.visible('.credits')
      .assert.visible('.content')
      .end()
  }
}
