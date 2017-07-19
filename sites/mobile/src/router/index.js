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

import Genres from '@/components/Genres'
import Genre from '@/components/Genre'
import BandsByGenre from '@/components/BandsByGenre'
import AlbumsByGenre from '@/components/AlbumsByGenre'

import Bands from '@/components/Bands'
import Band from '@/components/Band'
import BandAlbums from '@/components/BandAlbums'

import Artists from '@/components/Artists'
import Artist from '@/components/Artist'

import Albums from '@/components/Albums'
import Album from '@/components/Album'

import Audios from '@/components/Audios'
import Audio from '@/components/Audio'

import Videos from '@/components/Videos'
import Video from '@/components/Video'

import Labels from '@/components/Labels'
import Label from '@/components/Label'

import Places from '@/components/Places'
import Place from '@/components/Place'

Vue.use(Router)

export default new Router({
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
      path: '/encyclopedia/genres',
      name: 'genres',
      component: Genres
    },
    {
      path: '/encyclopedia/genres/:id',
      name: 'genre',
      component: Genre,
      redirect: {name: 'bandsByGenre'},
      children: [
        {
          path: 'bands',
          name: 'bandsByGenre',
          component: BandsByGenre
        },
        {
          path: 'albums',
          name: 'albumsByGenre',
          component: AlbumsByGenre
        }
      ]
    },
    {
      path: '/encyclopedia/bands',
      name: 'bands',
      component: Bands
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
      component: Artists
    },
    {
      path: '/encyclopedia/artists/:id',
      name: 'artist',
      component: Artist
    },
    {
      path: '/encyclopedia/albums',
      name: 'albums',
      component: Albums
    },
    {
      path: '/encyclopedia/albums/:id',
      name: 'album',
      component: Album
    },
    {
      path: '/encyclopedia/audios',
      name: 'audios',
      component: Audios
    },
    {
      path: '/encyclopedia/audios/:id',
      name: 'audio',
      component: Audio
    },
    {
      path: '/encyclopedia/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/encyclopedia/videos/:id',
      name: 'video',
      component: Video
    },
    {
      path: '/encyclopedia/labels',
      name: 'labels',
      component: Labels
    },
    {
      path: '/encyclopedia/labels/:id',
      name: 'label',
      component: Label
    },
    {
      path: '/encyclopedia/places',
      name: 'places',
      component: Places
    },
    {
      path: '/encyclopedia/places/:id',
      name: 'place',
      component: Place
    }
  ]
})
