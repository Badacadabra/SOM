// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

// automatically uses dev Server port from /config.index.js
// default: http://localhost:8080
// see nightwatch.conf.js
let devServer
const TIMEOUT = 5000 // Can be adjusted depending on the Internet connection...

module.exports = {
  'Home': browser => {
    devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', TIMEOUT)
      .assert.title('Spirit of Metal')
      .execute((() => document.getElementById('disclaimer').style.display = 'none'), [])
      .assert.visible('header')
      .assert.visible('nav')
      .assert.visible('footer')
      .assert.containsText('h1', 'SPIRIT OF METAL')
      .assert.containsText('footer', 'Spirit of Metal')
      .assert.containsText('footer', String(new Date().getFullYear()))
      .assert.elementCount('figure', 7)
      .assert.elementNotPresent('#menu')
      .assert.visible('#burger')
      .assert.visible('#language-switcher')
      .assert.containsText('#language-switcher', 'FR')
      .assert.containsText('nav a:first-child', 'Actualités')
      .assert.containsText('nav a:nth-child(2)', 'Chroniques')
      .assert.containsText('nav a:nth-child(3)', 'Interviews')
      .assert.containsText('nav a:nth-child(4)', 'À découvrir')
      .assert.containsText('nav a:nth-child(5)', 'Événements')
      .assert.containsText('nav a:nth-child(6)', 'Encyclopédie')
      .assert.containsText('nav a:last-child', 'Forums')
      .click('#language-switcher')
      .assert.containsText('#language-switcher', 'EN')
      .assert.containsText('nav a:first-child', 'News')
      .assert.containsText('nav a:nth-child(2)', 'Reviews')
      .assert.containsText('nav a:nth-child(3)', 'Interviews')
      .assert.containsText('nav a:nth-child(4)', 'Releases')
      .assert.containsText('nav a:nth-child(5)', 'Events')
      .assert.containsText('nav a:nth-child(6)', 'Encyclopedia')
      .assert.containsText('nav a:last-child', 'Forums')
      .click('#language-switcher')

      // Next
      .click('a[href$="news"]')
  },
  'News': browser => {
    browser

      // List
      .waitForElementVisible('#news a', TIMEOUT)
      .assert.containsText('h2', 'Actualités')
      .click('#language-switcher')
      .assert.containsText('h2', 'News')
      .click('#language-switcher')
      .click('#news a:first-child')

      // Details
      .waitForElementPresent('article', TIMEOUT)
      .assert.visible('h3')
      .assert.visible('.credits')
      .assert.visible('.content')

      // Next
      .click('h1')
      .click('a[href$="reviews"]')
  },
  'Reviews': browser => {
    browser

      // List
      .waitForElementVisible('#reviews a', TIMEOUT)
      .assert.containsText('h2', 'Chroniques')
      .click('#language-switcher')
      .pause(TIMEOUT)
      .assert.containsText('h2', 'Reviews')
      .click('#language-switcher')
      .click('#reviews a:nth-child(2)')

      // Details
      .waitForElementVisible('article', TIMEOUT)
      .waitForElementVisible('figure', TIMEOUT)
      .waitForElementVisible('figcaption', TIMEOUT)
      .waitForElementVisible('.credits', TIMEOUT)
      .waitForElementVisible('.content', TIMEOUT)

      // Next
      .click('h1')
      .click('a[href$="interviews"]')
  },
  'Interviews': browser => {
    browser

      // List
      .waitForElementVisible('#interviews a', TIMEOUT)
      .assert.containsText('h2', 'Interviews')
      .click('#language-switcher')
      .assert.containsText('h2', 'Interviews')
      .click('#language-switcher')
      .click('#interviews a:nth-child(3)')

      // Details
      .waitForElementVisible('article', TIMEOUT)
      .waitForElementVisible('figure', TIMEOUT)
      .waitForElementVisible('.credits', TIMEOUT)
      .waitForElementVisible('.content', TIMEOUT)

      // Next
      .click('h1')
      .click('a[href$="releases"]')
  },
  'Releases': browser => {
    browser

      // List
      .waitForElementVisible('#releases a', TIMEOUT)
      .assert.containsText('h2', 'À découvrir')
      .click('#language-switcher')
      .assert.containsText('h2', 'Releases')
      .click('#language-switcher')
      .click('#releases a:nth-child(4)')

      // Details
      .waitForElementVisible('#album', TIMEOUT)

      // Next
      .click('h1')
      .click('a[href$="events"]')
  },
  'Events': browser => {
    browser

      // Lists
      .waitForElementVisible('#events a', TIMEOUT)
      .assert.containsText('h2', 'Événements')
      .assert.containsText('nav a:first-child', 'Concerts')
      .assert.containsText('nav a:nth-child(2)', 'Live-reports')
      .assert.containsText('nav a:last-child', 'Photos')
      .click('#language-switcher')
      .assert.containsText('h2', 'Events')
      .assert.containsText('nav a:first-child', 'Gigs')
      .assert.containsText('nav a:nth-child(2)', 'Live reports')
      .assert.containsText('nav a:last-child', 'Photos')
      .click('#language-switcher')
      .click('#events a:nth-child(5)')

      // Details
      .waitForElementVisible('.content', TIMEOUT)
      .waitForElementPresent('#map', TIMEOUT)

      // Next
      .click('h1')
      .click('a[href$="encyclopedia"]')
  },
  'Encyclopedia': browser => {
    browser

      // Home
      .waitForElementVisible('#encyclopedia', TIMEOUT)
      .assert.containsText('h2', 'Encyclopédie')
      .assert.containsText('h3', 'Statistiques')
      .assert.visible('nav')
      .assert.elementCount('nav > a', 8)
      .assert.containsText('nav > a:first-child', 'Genres')
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
      .assert.containsText('nav > a:first-child', 'Genres')
      .assert.containsText('nav > a:nth-child(2)', 'Bands')
      .assert.containsText('nav > a:nth-child(3)', 'Artists')
      .assert.containsText('nav > a:nth-child(4)', 'Albums')
      .assert.containsText('nav > a:nth-child(5)', 'Audios')
      .assert.containsText('nav > a:nth-child(6)', 'Videos')
      .assert.containsText('nav > a:nth-child(7)', 'Labels')
      .assert.containsText('nav > a:last-child', 'Places')
      .click('#language-switcher')
      // .assert.elementCount('.figures > ul > li', 8)

      // Genres
      .click('a[href$="genres"]')
      .assert.containsText('h2', 'Genres')
      .click('#language-switcher')
      .assert.containsText('h2', 'Genres')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'Black S')
      // .assert.containsText('#genres a:first-child', 'Black Symphonique')
      .click('#genres a:first-child')
      .assert.visible('h2')
      .assert.visible('nav')
      .assert.containsText('nav > a[href$="bands"]', 'Groupes phares')
      .assert.containsText('nav > a[href$="albums"]', 'Albums célèbres')
      .click('#language-switcher')
      .assert.containsText('nav > a[href$="bands"]', 'Famous bands')
      .assert.containsText('nav > a[href$="bands"]', 'Well-known albums')
      .click('#language-switcher')
      .click('.bands a:first-child')
      .waitForElementVisible('#band', TIMEOUT)
      .click('h1')
      .click('a[href$="encyclopedia"]')

      // Bands
      .click('a[href$="bands"]')
      .assert.containsText('h2', 'Groupes')
      .click('#language-switcher')
      .assert.containsText('h2', 'Bands')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'children of bodom')
      // .assert.containsText('#bands a:first-child', 'Children Of Bodom')
      .click('#bands a:first-child')
      .assert.visible('h2')
      .assert.visible('figure')
      .click('h1')
      .click('a[href$="encyclopedia"]')

      // Artists
      .click('a[href$="artists"]')
      .assert.containsText('h2', 'Artistes')
      .click('#language-switcher')
      .assert.containsText('h2', 'Artists')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'angela gossow')
      // .assert.containsText('#artists a:first-child', 'Angela Gossow')
      .click('#artists a:first-child')
      .assert.visible('h2')
      .assert.visible('figure')
      .click('h1')
      .click('a[href$="encyclopedia"]')

      // Albums
      .click('a[href$="albums"]')
      .assert.containsText('h2', 'Albums')
      .click('#language-switcher')
      .assert.containsText('h2', 'Albums')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'wintersun')
      // .assert.containsText('#albums a:first-child', 'Wintersun')
      .click('#albums a:first-child')
      .assert.visible('h2')
      .assert.visible('figure')
      .click('h1')
      .click('a[href$="encyclopedia"]')

      // Audios
      .click('a[href$="audios"]')
      .assert.containsText('h2', 'Audios')
      .click('#language-switcher')
      .assert.containsText('h2', 'Audios')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'deceiver of the gods')
      // .assert.containsText('#audios a:first-child', 'Deceiver of the Gods')
      .click('#audios a:first-child')
      .assert.visible('h2')
      .assert.visible('figure')
      .click('h1')
      .click('a[href$="encyclopedia"]')

      // Videos
      .click('a[href$="videos"]')
      .assert.containsText('h2', 'Vidéos')
      .click('#language-switcher')
      .assert.containsText('h2', 'Videos')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'deep purple')
      // .assert.containsText('#videos a:first-child', 'Deep Purple')
      .click('#videos a:first-child')
      .assert.visible('h2')
      .assert.visible('figure')
      .click('h1')
      .click('a[href$="encyclopedia"]')

      // Labels
      .click('a[href$="labels"]')
      .assert.containsText('h2', 'Labels')
      .click('#language-switcher')
      .assert.containsText('h2', 'Labels')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'nuclear blast')
      // .assert.containsText('#labels a:first-child', 'Nuclear Blast')
      .click('#labels a:first-child')
      .assert.visible('h2')
      .assert.visible('figure')
      .click('h1')
      .click('a[href$="encyclopedia"]')

      // Places
      .click('a[href$="places"]')
      .assert.containsText('h2', 'Places')
      .click('#language-switcher')
      .assert.containsText('h2', 'Places')
      .click('#language-switcher')
      .assert.visible('.search')
      .setValue('.search input', 'cco')
      // .assert.containsText('#places a:first-child', 'CCO Villeurbanne')
      .click('#places a:first-child')
      .assert.visible('h2')
      .assert.visible('figure')

      // Next
      .click('h1')
      .click('a[href$="forums"]')
  },
  'Forums': browser => {
    browser
      .waitForElementVisible('nav > a:last-child', TIMEOUT)
      .click('nav > a:last-child')
      .assert.title('Spirit of Metal forum')
      .assert.urlContains('l=fr')
      .back()
      .click('#language-switcher')
      .click('nav > a:last-child')
      .assert.title('Spirit of Metal forum')
      .assert.urlContains('l=en')
      .end()
  }
}
