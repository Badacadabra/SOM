// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js

let devServer
const TIMEOUT = 30000 // Can be adjusted depending on the Internet connection...

module.exports = {
  'Main': browser => {
    devServer = browser.globals.devServerURL

    browser
      .url(`${devServer}/#/encyclopedia`)
      .waitForElementVisible('.figures', TIMEOUT)
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.containsText('h2', 'Encyclopédie')
      .assert.containsText('h3', 'Statistiques')
      .assert.visible('nav')
      .assert.elementCount('nav > a', 8)
      .assert.containsText('nav > a:first-child', 'Styles')
      .assert.containsText('nav > a:nth-child(2)', 'Groupes')
      .assert.containsText('nav > a:nth-child(3)', 'Artistes')
      .assert.containsText('nav > a:nth-child(4)', 'Albums')
      .assert.containsText('nav > a:nth-child(5)', 'Audios')
      .assert.containsText('nav > a:nth-child(6)', 'Vidéos')
      .assert.containsText('nav > a:nth-child(7)', 'Labels')
      .assert.containsText('nav > a:last-child', 'Lieux')
      .click('#language-switcher')
      .assert.containsText('h2', 'Encyclopedia')
      .assert.containsText('h3', 'Statistics')
      .assert.containsText('nav > a:first-child', 'Styles')
      .assert.containsText('nav > a:nth-child(2)', 'Bands')
      .assert.containsText('nav > a:nth-child(3)', 'Artists')
      .assert.containsText('nav > a:nth-child(4)', 'Albums')
      .assert.containsText('nav > a:nth-child(5)', 'Audios')
      .assert.containsText('nav > a:nth-child(6)', 'Videos')
      .assert.containsText('nav > a:nth-child(7)', 'Labels')
      .assert.containsText('nav > a:last-child', 'Places')
      .click('#language-switcher')
      .assert.elementCount('.figures > ul > li', 8)
      .end()
  }
}
