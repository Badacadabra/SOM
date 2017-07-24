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
      .url(`${devServer}/#/interviews`)
      .waitForElementVisible('#interviews a', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.containsText('h2', 'Interviews')
      .click('#language-switcher')
      .assert.containsText('h2', 'Interviews')
      .click('#language-switcher')
      .click('#interviews a:nth-child(3)')
  },
  'Details': browser => {
    browser
      .waitForElementPresent('figure', TIMEOUT)
      .assert.visible('.credits')
      .assert.visible('.content')
      .end()
  }
}
