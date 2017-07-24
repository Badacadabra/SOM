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
      .url(`${devServer}/#/news`)
      .waitForElementVisible('#news a', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.containsText('h2', 'Actualités')
      .click('#language-switcher')
      .assert.containsText('h2', 'News')
      .click('#news a:first-child')
  },
  'Details': browser => {
    browser
      .waitForElementPresent('article', TIMEOUT)
      .assert.visible('h3')
      .assert.visible('.credits')
      .assert.visible('.content')
      .end()
  }
}

