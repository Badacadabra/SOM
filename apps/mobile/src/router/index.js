import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/router-views/Home'

// Webzine
import NewsFeed from '@/components/router-views/webzine/NewsFeed'
import News from '@/components/router-views/webzine/News'
import Reviews from '@/components/router-views/webzine/Reviews'
import Review from '@/components/router-views/webzine/Review'
import Interviews from '@/components/router-views/webzine/Interviews'
import Interview from '@/components/router-views/webzine/Interview'
import Releases from '@/components/router-views/webzine/Releases'
import Events from '@/components/router-views/webzine/Events'
import Gigs from '@/components/router-views/webzine/Gigs'
import Gig from '@/components/router-views/webzine/Gig'
import LiveReports from '@/components/router-views/webzine/LiveReports'
import LiveReport from '@/components/router-views/webzine/LiveReport'
import PhotoGalleries from '@/components/router-views/webzine/PhotoGalleries'
import PhotoGallery from '@/components/router-views/webzine/PhotoGallery'

// Encyclopedia
import Encyclopedia from '@/components/router-views/encyclopedia/Encyclopedia'
import Search from '@/components/router-views/encyclopedia/Search'
import Style from '@/components/router-views/encyclopedia/Style'
import BandsByStyle from '@/components/router-views/encyclopedia/BandsByStyle'
import AlbumsByStyle from '@/components/router-views/encyclopedia/AlbumsByStyle'
import Band from '@/components/router-views/encyclopedia/Band'
import BandAlbums from '@/components/router-views/encyclopedia/BandAlbums'
import Artist from '@/components/router-views/encyclopedia/Artist'
import Album from '@/components/router-views/encyclopedia/Album'
import Audio from '@/components/router-views/encyclopedia/Audio'
import Video from '@/components/router-views/encyclopedia/Video'
import Label from '@/components/router-views/encyclopedia/Label'
import Place from '@/components/router-views/encyclopedia/Place'

Vue.use(Router)

export default new Router({
  /* mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }, */
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'newsfeed',
      component: NewsFeed
    },
    {
      path: '/news/:id',
      name: 'news',
      component: News
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/reviews/:id',
      name: 'review',
      component: Review
    },
    {
      path: '/interviews',
      name: 'interviews',
      component: Interviews
    },
    {
      path: '/interviews/:id',
      name: 'interview',
      component: Interview
    },
    {
      path: '/releases',
      name: 'releases',
      component: Releases
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
      redirect: {name: 'gigs'},
      children: [
        {
          path: 'gigs',
          name: 'gigs',
          component: Gigs
        },
        {
          path: 'live-reports',
          name: 'liveReports',
          component: LiveReports
        },
        {
          path: 'photo-galleries',
          name: 'photoGalleries',
          component: PhotoGalleries
        }
      ]
    },
    {
      path: '/events/gigs/:id',
      name: 'gig',
      component: Gig
    },
    {
      path: '/events/live-reports/:id',
      name: 'liveReport',
      component: LiveReport
    },
    {
      path: '/events/photo-galleries/:id',
      name: 'photoGallery',
      component: PhotoGallery
    },
    {
      path: '/encyclopedia',
      name: 'encyclopedia',
      component: Encyclopedia
    },
    {
      path: '/encyclopedia/styles',
      name: 'styles',
      component: Search,
      props: {type: 'styles', fields: ['title'], firstChar: ''}
    },
    {
      path: '/encyclopedia/styles/:id',
      name: 'style',
      component: Style,
      redirect: {name: 'bandsByStyle'},
      children: [
        {
          path: 'bands',
          name: 'bandsByStyle',
          component: BandsByStyle
        },
        {
          path: 'albums',
          name: 'albumsByStyle',
          component: AlbumsByStyle
        }
      ]
    },
    {
      path: '/encyclopedia/bands',
      name: 'bands',
      component: Search,
      props: {type: 'bands', fields: ['name'], firstChar: ''}
    },
    {
      path: '/encyclopedia/bands/:id',
      name: 'band',
      component: Band,
      redirect: {name: 'fullLength'},
      children: [
        {
          path: 'full-length',
          name: 'fullLength',
          component: BandAlbums,
          props: {type: 'Album'}
        },
        {
          path: 'eps',
          name: 'eps',
          component: BandAlbums,
          props: {type: 'EP'}
        },
        {
          path: 'singles',
          name: 'singles',
          component: BandAlbums,
          props: {type: 'Single'}
        },
        {
          path: 'demos',
          name: 'demos',
          component: BandAlbums,
          props: {type: 'Demo'}
        },
        {
          path: 'compilations',
          name: 'compilations',
          component: BandAlbums,
          props: {type: 'Compilation'}
        },
        {
          path: 'lives',
          name: 'lives',
          component: BandAlbums,
          props: {type: 'Live'}
        },
        {
          path: 'splits',
          name: 'splits',
          component: BandAlbums,
          props: {type: 'Split'}
        },
        {
          path: 'vids',
          name: 'vids',
          component: BandAlbums,
          props: {type: 'Vidéo'}
        },
        {
          path: 'bootlegs',
          name: 'bootlegs',
          component: BandAlbums,
          props: {type: 'Bootleg'}
        },
        {
          path: 'box-sets',
          name: 'boxSets',
          component: BandAlbums,
          props: {type: 'Box Set'}
        },
        {
          path: 'tributes',
          name: 'tributes',
          component: BandAlbums,
          props: {type: 'Tribute'}
        }
      ]
    },
    {
      path: '/encyclopedia/artists',
      name: 'artists',
      component: Search,
      props: {type: 'artists', fields: ['FullName'], firstChar: 'a'}
    },
    {
      path: '/encyclopedia/artists/:id',
      name: 'artist',
      component: Artist
    },
    {
      path: '/encyclopedia/albums',
      name: 'albums',
      component: Search,
      props: {type: 'albums', fields: ['name', 'band'], firstChar: 'a'}
    },
    {
      path: '/encyclopedia/albums/:id',
      name: 'album',
      component: Album
    },
    {
      path: '/encyclopedia/audios',
      name: 'audios',
      component: Search,
      props: {type: 'audios', fields: ['title', 'band'], firstChar: ''}
    },
    {
      path: '/encyclopedia/audios/:id',
      name: 'audio',
      component: Audio
    },
    {
      path: '/encyclopedia/videos',
      name: 'videos',
      component: Search,
      props: {type: 'videos', fields: ['title'], firstChar: 'a'}
    },
    {
      path: '/encyclopedia/videos/:id',
      name: 'video',
      component: Video
    },
    {
      path: '/encyclopedia/labels',
      name: 'labels',
      component: Search,
      props: {type: 'labels', fields: ['name'], firstChar: 'a'}
    },
    {
      path: '/encyclopedia/labels/:id',
      name: 'label',
      component: Label
    },
    {
      path: '/encyclopedia/places',
      name: 'places',
      component: Search,
      props: {type: 'places', fields: ['name'], firstChar: 'a'}
    },
    {
      path: '/encyclopedia/places/:id',
      name: 'place',
      component: Place
    }
  ]
})
