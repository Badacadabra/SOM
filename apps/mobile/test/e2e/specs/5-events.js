// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js

let devServer
const TIMEOUT = 7000 // Can be adjusted depending on the Internet connection...

module.exports = {
  'Main': browser => {
    devServer = browser.globals.devServerURL

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
      .assert.cssClassPresent('#gigs > div', 'std')
      .assert.elementNotPresent('#gigs a img')
      .assert.elementCount('#gigs a:first-child > div > div', 3)
      .assert.containsText('#gigs a', String(new Date().getFullYear()))
      .click('#gigs a:nth-child(5)')
      .assert.containsText('h2', 'Upcoming event')
      .click('#language-switcher')
      .assert.containsText('h2', 'Événement prochain')
      .assert.visible('.content')
      .waitForElementPresent('#map', TIMEOUT)
      .back()
      .pause(TIMEOUT)
  },
  'Live reports': browser => {
    browser
      .click('nav > a[href$="live-reports"]')
      .pause(TIMEOUT)
      .assert.cssClassPresent('#live-reports > div', 'std')
      .assert.elementNotPresent('#live-reports a img')
      .assert.elementCount('#live-reports a:first-child > div > div', 4)
      .assert.containsText('#live-reports a', String(new Date().getFullYear()))
      .getText('#live-reports a:nth-child(6) > div > div:first-child', title => {
        browser
          .click('#live-reports a:nth-child(6)')
          .pause(TIMEOUT)
          .waitForElementPresent('h2', TIMEOUT)
          .assert.containsText('h2', title.value)
      })
      .assert.visible('.credits')
      .assert.visible('.content')
      .back()
      .pause(TIMEOUT)
  },
  'Photo galleries': browser => {
    browser
      .click('nav > a[href$="photo-galleries"]')
      .pause(TIMEOUT)
      .assert.cssClassPresent('#photo-galleries > div', 'img')
      .assert.visible('#photo-galleries a img')
      .assert.elementCount('#photo-galleries a:first-child > div > div', 3)
      .assert.containsText('#photo-galleries a', String(new Date().getFullYear()))
      .getText('#photo-galleries a:nth-child(7) > div > div:first-child', title => {
        browser
          .click('#photo-galleries a:nth-child(7)')
          .pause(TIMEOUT)
          .waitForElementPresent('h2', TIMEOUT)
          .assert.containsText('h2', title.value)
      })
      .assert.visible('.info')
      .assert.visible('img')
      .end()
  }
}
