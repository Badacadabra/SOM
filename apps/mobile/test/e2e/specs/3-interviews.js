// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js

let devServer
const TIMEOUT = 5000 // Can be adjusted depending on the Internet connection...

module.exports = {
  '@disabled': true,
  'List': browser => {
    devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/#/interviews`)
      .waitForElementVisible('#interviews a', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.containsText('h2', 'Interviews')
      .click('#language-switcher')
      .assert.containsText('h2', 'Interviews')
      .assert.cssClassPresent('#interviews > div', 'img')
      .assert.visible('#interviews a img')
      .assert.elementCount('#interviews a:first-child > div > div', 3)
      .assert.containsText('#interviews a', String(new Date().getFullYear()))
  },
  'Details': browser => {
    browser
      .getText('#interviews a:nth-child(3) > div > div:first-child', title => {
        browser
          .click('#interviews a:nth-child(3)')
          .pause(TIMEOUT)
          .waitForElementPresent('h2', TIMEOUT)
          .assert.containsText('h2', title.value.toUpperCase())
      })
      .assert.visible('figure')
      .assert.visible('.credits')
      .assert.visible('.content')
      .end()
  }
}
