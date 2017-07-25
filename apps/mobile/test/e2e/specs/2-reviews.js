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
      .url(`${devServer}/#/reviews`)
      .waitForElementVisible('#reviews a', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.containsText('h2', 'Chroniques')
      .click('#language-switcher')
      .assert.containsText('h2', 'Reviews')
      .assert.cssClassPresent('#reviews > div', 'img')
      .assert.visible('#reviews a img')
      .assert.elementCount('#reviews a:first-child > div > div', 4)
      .assert.containsText('#reviews a', String(new Date().getFullYear()))
  },
  'Details': browser => {
    browser
      .getText('#reviews a:nth-child(2) > div > div:first-child', title => {
        browser
          .click('#reviews a:nth-child(2)')
          .pause(TIMEOUT)
          .waitForElementVisible('h2', TIMEOUT)
          .assert.containsText('h2', title.value.toUpperCase())
      })
      .assert.visible('figure')
      .assert.visible('figcaption')
      .assert.visible('.credits')
      .assert.visible('.content')
      .end()
  }
}
