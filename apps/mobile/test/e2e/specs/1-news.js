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
      .url(`${devServer}/#/news`)
      .waitForElementVisible('#news a', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.containsText('h2', 'Actualités')
      .click('#language-switcher')
      .assert.containsText('h2', 'News')
      .assert.cssClassPresent('#news > div', 'std')
      .assert.elementNotPresent('#news a img')
      .assert.elementCount('#news a:first-child > div > div', 3)
      .assert.containsText('#news a', String(new Date().getFullYear()))
  },
  'Details': browser => {
    browser
      .getText('#news a:first-child > div > div:first-child', title => {
        browser
          .click('#news a:first-child')
          .pause(TIMEOUT)
          .waitForElementVisible('h2', TIMEOUT)
          .assert.containsText('h2', title.value)
      })
      .assert.visible('.credits')
      .assert.visible('.content')
      .end()
  }
}

