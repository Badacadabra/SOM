// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js

let devServer
const TIMEOUT = 5000 // Can be adjusted depending on the Internet connection...

module.exports = {
  'French': browser => {
    devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/#/`)
      .waitForElementVisible('nav > a:last-child', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .click('nav > a:last-child')
      .assert.title('Spirit of Metal forum')
      .assert.urlContains('l=fr')
  },
  'English': browser => {
    browser
      .url(`${devServer}/#/`)
      .waitForElementVisible('nav > a:last-child', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .click('#language-switcher')
      .click('nav > a:last-child')
      .assert.title('Spirit of Metal forum')
      .assert.urlContains('l=en')
      .end()
  }
}
