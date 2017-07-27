# Spirit of Metal

> Mobile site (http://mobile.spirit-of-metal.com/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Components

### Authentication

#### Login.vue

**Name:** login

**Introduction:** Login form

**Token:** `<login></login>`

**Description:**

The login form is available in the app menu. With this form, SOM members should be able to connect using their credentials.

#### Signup.vue

**Name:** signup

**Introduction:** Signup form

**Token:** `<signup></signup>`

**Description:**

The signup form is available in the app menu. With this form, users should be able to become SOM members.

### Layout

#### Dimmer.vue

**Name:** dimmer

**Introduction:** Dark dimmer to highlight elements

**Token:** `<dimmer></dimmer>`

**Description:**

The dimmer is used to highlight elements on the foreground. It darkens the background with a 90% transparent pure black and is mostly useful to display a menu or a loader...

#### Disclaimer.vue

**Name:** disclaimer

**Introduction:** Disclaimer for non-mobile devices

**Token:** `<disclaimer></disclaimer>`

**Description:**

This app has been designed for mobile devices only, especially smartphones. This component displays a fullscreen message when the current viewport is too large.

#### Footer.vue

**Name:** app-footer

**Introduction:** Footer of the application

**Token:** `<app-footer></app-footer>`

**Description:**

This component should be visible everywhere at the bottom of the app.
It does not have any prop, but it is useful to display:

- The brand name
- Years of activity

#### Header.vue

**Name:** app-header

**Introduction:** Header of the application

**Token:** `<app-header></app-header>`

**Description:**

This component should be visible everywhere at the top of the app.
It does not have any prop, but it is essential to provide:

- A "back to home" link (clickable name)
- A language switcher to dynamically change the locale (FR/EN)
- A toggleable menu

#### Heading.vue

**Name:** heading

**Introduction:** Configurable heading

**Token: **`<heading text="Foo" :level="2" font="oswald" color="red" variant="uppercase"></heading>`

**Description:**

This component is a heading generator for the entire app. It handles large headings that take full width. HTML and CSS rendering can be configured with props.

**Props:**

- **text** &rarr; Textual content
- **level** &rarr; Heading level: *2* (h2) or *3* (h3)
- **font** &rarr; Font family: *oswald* or *astonished*, in lowercase!
- **color** &rarr; Background color: *red**, **yellow**, **black**, **silver**, **white*
- **variant** &rarr; Case: *uppercase* only

#### LargePicture.vue

**Name:** large-picture

**Introduction:** Large picture for specific items

**Token:** `<large-picture src="../assets/foo.png" alt="Foo"></large-picture>`

**Description:**

This is a simple wrapper around `<img>`. Its template uses a `<figure>` element and it contains some default style rules. It is mainly used in the encyclopedia to display specific items (a band, an album, a label, etc.).

**Props:**

- **src** &rarr; Source of the image
- **alt** &rarr; Alternative text of the image

#### List.vue

**Name:** list

**Introduction:** Configurable list to display items

**Token:** `<list :scroll="false" :items="items" link="item" :fields="['name', 'author', 'date']" type="img"></list>`

**Description:**

This component is a standard way of displaying a list of items, especially arrays of objects that come from Ajax responses. Three main list layouts are available (see `type` prop).

**Props:**

- **items** &rarr; Array of objects
- **link** &rarr; Name of the route for a specific item
- **fields** &rarr; List of object properties that should be displayed (max = 4). *The order matters!*
- **scroll** &rarr; Enable or disable infinite scrolling (see [vue-infinite-loading](https://github.com/PeachScript/vue-infinite-loading))
- **type** &rarr; List layout:
  - *std* (standard) &rarr; Centered list without images
  - *img* (image) &rarr; Left-aligned list with images
  - *min* (minimalist) &rarr; Centered list with a single line

#### Loader.vue

**Name:** loader

**Introduction:** Main Ajax loader

**Token:** `<loader></loader>`

**Description:**

This component is used to display a visual loader for each Ajax call. It is a wrapper around the nice `ScaleLoader` from [vue-spinner](https://github.com/greyby/vue-spinner) which uses a dimmer to make it fullscreen.

#### Menu.vue

**Name:** app-menu

**Introduction:** Menu of the application

**Token:** `<app-menu></app-menu>`

**Description:**

This component should be accessible from anywhere in the app. It is composed of child components that:

- handle login and signup when the user is not connected
- display member options when the user is connected

#### SearchInput.vue

**Name:** search-input

**Introduction:** Search input for autocomplete tasks

**Token:** `<search-input v-on:typing="getData"></search-input>`

**Description:**

This component is fairly simple because its aim is mostly to encapsulate the template and style of a regular search input. However, it also emits a *typing* event when a *keyup* has been triggered internally. Any parent component can then use `v-on:typing` to perform some action (like an Ajax call) at the right time!

### Router views

The following components are views that are displayed by **vue-router** using `<router-view></router-view>`. Some of them are top-level views (injected in `App.vue`). Others are nested views (see `Events.vue` or `Style.vue`).

#### Home.vue

**Name:** home<br>
**URL:** /home<br>
**Introduction:** Home page<br>

#### Encyclopedia

##### AlbumsByStyle.vue

**Name:** albums-by-style<br>
**URL:** /encyclopedia/styles/:id/albums<br>
**Introduction:** List of the most popular albums in a given music style<br>

##### Album.vue

**Name:** album<br>
**URL:** /encyclopedia/albums/:id<br>
**Introduction:** Detailed information about a given album<br>

##### Artist.vue

**Name:** artist<br>
**URL:** /encyclopedia/artists/:id<br>
**Introduction:** Detailed information about a given artist<br>

##### Audio.vue

**Name:** audio<br>
**URL:** /encyclopedia/audios/:id<br>
**Introduction:** Listening path of a given audio<br>

##### BandAlbums.vue

**Name:** band-albums<br>
**URL:** /encyclopedia/bands/:id/:releaseType<br>
**Introduction:** List of albums for a given band (sorted by type: full-length, EP, single, demo, compilation, live, split, video, bootleg, box set, tribute)<br>

##### BandsByStyle.vue

**Name:** bands-by-style<br>
**URL:** /encyclopedia/styles/:id/bands<br>
**Introduction:** List of the most popular bands in a given music style<br>

##### Band.vue

**Name:** band<br>
**URL:** /encyclopedia/bands/:id<br>
**Introduction:** Detailed information about a given band<br>

##### Encyclopedia.vue

**Name:** encyclopedia<br>
**URL:** /encyclopedia<br>
**Introduction:** Encyclopedia main page (navigation + statistics)<br>

##### Label.vue

**Name:** label<br>
**URL:** /encyclopedia/labels/:id<br>
**Introduction:** Detailed information about a given label<br>

##### Place.vue

**Name:** place<br>
**URL:** /encyclopedia/places/:id<br>
**Introduction:** Detailed information about a given place<br>

##### Search.vue

**Name:** search

**URLs:**<br>
- /encyclopedia/styles
- /encyclopedia/bands
- /encyclopedia/artists
- /encyclopedia/albums
- /encyclopedia/audios
- /encyclopedia/videos
- /encyclopedia/labels
- /encyclopedia/places

**Introduction:** Detailed information about a given music style

##### Style.vue

**Name:** style<br>
**URL:** /encyclopedia/styles/:id<br>
**Introduction:** Detailed information about a given music style<br>

##### Video.vue

**Name:** video <br>
**URL:** /encyclopedia/videos/:id <br>
**Introduction:** Viewing path of a given video <br>

#### Webzine

##### Events.vue

**Name:** events<br>
**URL:** /events<br>
**Introduction:** List of the latest/next events<br>

##### Gigs.vue

**Name:** gigs<br>
**URL:** /events/gigs<br>
**Introduction:** List of the next gigs<br>

##### Gig.vue

**Name:** gig<br>
**URL:** /events/gigs/:id<br>
**Introduction:** Detailed information about a given gig<br>

##### Interviews.vue

**Name:** interviews<br>
**URL:** /interviews<br>
**Introduction:** List of the latest interviews<br>

##### Interview.vue

**Name:** interview<br>
**URL:** /interviews/:id<br>
**Introduction:** Displays a given interview<br>

##### LiveReports.vue

**Name:** live-reports<br>
**URL:** /events/live-reports<br>
**Introduction:** List of the latest live reports<br>

##### LiveReport.vue

**Name:** live-report<br>
**URL:** /events/live-reports/:id<br>
**Introduction:** Displays a given live report (with one or several bands)<br>

##### NewsFeed.vue

**Name:** newsfeed<br>
**URL:** /news<br>
**Introduction:** List of the latest news<br>

##### News.vue

**Name:** news<br>
**URL:** /news/:id<br>
**Introduction:** Displays a given news<br>

##### PhotoGalleries.vue

**Name:** photo-galleries<br>
**URL:** /events/photo-galleries<br>
**Introduction:** List of the latest photo galleries<br>

##### PhotoGallery.vue

**Name:** photo-gallery<br>
**URL:** /events/photo-galleries/:id<br>
**Introduction:** Displays all pictures in a given photo gallery<br>

##### Releases.vue

**Name:** releases<br>
**URL:** /releases<br>
**Introduction:** Random list with 10 releases of the month<br>

##### Reviews.vue

**Name:** reviews<br>
**URL:** /reviews<br>
**Introduction:** List of the latest reviews<br>

##### Review.vue

**Name:** review<br>
**URL:** /reviews/:id<br>
**Introduction:** Displays an album review<br>
