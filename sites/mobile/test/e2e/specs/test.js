// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js
let devServer;

module.exports = {
  'Home': function (browser) {
    devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 3000)
      .assert.title('Spirit of Metal')
      .assert.visible('header')
      .assert.visible('nav')
      .assert.visible('footer')
      .assert.containsText('h1', 'SPIRIT OF METAL')
      .assert.elementCount('figure', 6)
      .assert.elementNotPresent('#menu')
      .assert.visible('#burger')
      // TO DO: Test click on burger menu
  },
  'News': function (browser) {
    browser
      .url(devServer + '/actualites')
      .waitForElementVisible('#app', 3000)
      .assert.visible('#news')
      .assert.containsText('h2', 'Actualités')
      .assert.elementCount('article', 10)
      .assert.elementPresent('.date')
  },
  'Reviews': function (browser) {
    browser
      .url(devServer + '/chroniques')
      .waitForElementVisible('#app', 3000)
      .assert.visible('#reviews')
      .assert.containsText('h2', 'Chroniques')
      .assert.elementCount('article', 10)
      .assert.elementPresent('.cover')
      .assert.elementPresent('.info')
  },
  'Interviews': function (browser) {
    browser
      .url(devServer + '/interviews')
      .waitForElementVisible('#app', 3000)
      .assert.visible('#interviews')
      .assert.containsText('h2', 'Interviews')
      .assert.elementCount('article', 10)
      .assert.elementPresent('.photo')
      .assert.elementPresent('.info')
  },
  'Releases': function (browser) {
    browser
      .url(devServer + '/sorties')
      .waitForElementVisible('#app', 3000)
      .assert.visible('#releases')
      .assert.containsText('h2', 'Sorties')
      .assert.elementCount('article', 10)
      .assert.elementPresent('.cover')
      .assert.elementPresent('.info')
  },
  'Events': function (browser) {
    browser
      .url(devServer + '/evenements')
      .waitForElementVisible('#app', 3000)
      .assert.visible('#events')
      .assert.containsText('h2', 'Événements')
      .assert.elementPresent('#gigs')
      // TO DO: Test clicks on submenu
      .end()
  }
}
