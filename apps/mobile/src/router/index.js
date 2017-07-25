import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

import NewsFeed from '@/components/NewsFeed'
import News from '@/components/News'

import Reviews from '@/components/Reviews'
import Review from '@/components/Review'

import Interviews from '@/components/Interviews'
import Interview from '@/components/Interview'

import Releases from '@/components/Releases'

import Events from '@/components/Events'

import Gigs from '@/components/Gigs'
import Gig from '@/components/Gig'

import LiveReports from '@/components/LiveReports'
import LiveReport from '@/components/LiveReport'

import PhotoGalleries from '@/components/PhotoGalleries'
import PhotoGallery from '@/components/PhotoGallery'

import Encyclopedia from '@/components/Encyclopedia'
import EncyclopediaSearch from '@/components/EncyclopediaSearch'

import Style from '@/components/Style'
import BandsByStyle from '@/components/BandsByStyle'
import AlbumsByStyle from '@/components/AlbumsByStyle'
import Band from '@/components/Band'
import BandAlbums from '@/components/BandAlbums'
import Artist from '@/components/Artist'
import Album from '@/components/Album'
import Audio from '@/components/Audio'
import Video from '@/components/Video'
import Label from '@/components/Label'
import Place from '@/components/Place'

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
      component: EncyclopediaSearch,
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
      component: EncyclopediaSearch,
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
      component: EncyclopediaSearch,
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
      component: EncyclopediaSearch,
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
      component: EncyclopediaSearch,
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
      component: EncyclopediaSearch,
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
      component: EncyclopediaSearch,
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
      component: EncyclopediaSearch,
      props: {type: 'places', fields: ['name'], firstChar: 'a'}
    },
    {
      path: '/encyclopedia/places/:id',
      name: 'place',
      component: Place
    }
  ]
})
