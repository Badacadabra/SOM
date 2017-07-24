// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js

let devServer
const TIMEOUT = 7000 // Can be adjusted depending on the Internet connection...

module.exports = {
  'Main': browser => {
    devServer = browser.globals.devServerURL;

    browser
      .url(`${devServer}/#/events`)
      .waitForElementVisible('#events a', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.containsText('h2', 'Événements')
      .assert.containsText('nav a:first-child', 'Concerts')
      .assert.containsText('nav a:nth-child(2)', 'Live-reports')
      .assert.containsText('nav a:last-child', 'Photos')
      .click('#language-switcher')
      .assert.containsText('h2', 'Events')
      .assert.containsText('nav a:first-child', 'Gigs')
      .assert.containsText('nav a:nth-child(2)', 'Live reports')
      .assert.containsText('nav a:last-child', 'Photos')
  },
  'Gigs': browser => {
    browser
      .click('#gigs a:nth-child(5)')
      .assert.visible('.content')
      .waitForElementPresent('#map', TIMEOUT)
      .back()
      .pause(TIMEOUT)
  },
  'Live reports': browser => {
    browser
      .click('nav > a[href$="live-reports"]')
      .pause(TIMEOUT)
      .click('#live-reports a:nth-child(6)')
      .waitForElementVisible('.credits', TIMEOUT)
      .assert.visible('.content')
      .back()
      .pause(TIMEOUT)
  },
  'Photo galleries': browser => {
    browser
      .click('a[href$="photo-galleries"]')
      .pause(TIMEOUT)
      .click('#photo-galleries a:nth-child(7)')
      .waitForElementVisible('.info', TIMEOUT)
      .assert.visible('img')
      .end()
  }
}
