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
import Release from '@/components/Release'

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

import Bands from '@/components/Bands'
import Band from '@/components/Band'

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
      path: '/actualites',
      name: 'newsfeed',
      component: NewsFeed
    },
    {
      path: '/actualites/:id',
      name: 'news',
      component: News
    },
    {
      path: '/chroniques',
      name: 'reviews',
      component: Reviews
    },
    {
      path: '/chroniques/:id',
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
      path: '/sorties',
      name: 'releases',
      component: Releases
    },
    {
      path: '/sorties/:id',
      name: 'release',
      component: Release
    },
    {
      path: '/evenements',
      name: 'events',
      component: Events,
      redirect: {name: 'gigs'},
      children: [
        {
          path: 'concerts',
          name: 'gigs',
          component: Gigs
        },
        {
          path: 'live-reports',
          name: 'liveReports',
          component: LiveReports
        },
        {
          path: 'galeries-photo',
          name: 'photoGalleries',
          component: PhotoGalleries
        }
      ]
    },
    {
      path: '/evenements/gigs/:id',
      name: 'gig',
      component: Gig
    },
    {
      path: '/evenements/live-reports/:id',
      name: 'live-report',
      component: LiveReport
    },
    {
      path: '/evenements/galeries-photo/:id',
      name: 'photo-gallery',
      component: PhotoGallery
    },
    {
      path: '/encyclopedie',
      name: 'encyclopedia',
      component: Encyclopedia
    },
    {
      path: '/encyclopedie/genres',
      name: 'genres',
      component: Genres
    },
    {
      path: '/encyclopedie/genres/:id',
      name: 'genre',
      component: Genre
    },
    {
      path: '/encyclopedie/groupes',
      name: 'bands',
      component: Bands
    },
    {
      path: '/encyclopedie/groupes/:id',
      name: 'band',
      component: Band
    },
    {
      path: '/encyclopedie/artistes',
      name: 'artists',
      component: Artists
    },
    {
      path: '/encyclopedie/artistes/:id',
      name: 'artist',
      component: Artist
    },
    {
      path: '/encyclopedie/albums',
      name: 'albums',
      component: Albums
    },
    {
      path: '/encyclopedie/albums/:id',
      name: 'album',
      component: Album
    },
    {
      path: '/encyclopedie/audios',
      name: 'audios',
      component: Audios
    },
    {
      path: '/encyclopedie/audios/:id',
      name: 'audio',
      component: Audio
    },
    {
      path: '/encyclopedie/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/encyclopedie/videos/:id',
      name: 'video',
      component: Video
    },
    {
      path: '/encyclopedie/labels',
      name: 'labels',
      component: Labels
    },
    {
      path: '/encyclopedie/labels/:id',
      name: 'label',
      component: Label
    },
    {
      path: '/encyclopedie/lieux',
      name: 'places',
      component: Places
    },
    {
      path: '/encyclopedie/lieux/:id',
      name: 'place',
      component: Place
    }
  ]
})
