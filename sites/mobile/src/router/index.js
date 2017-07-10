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

import Encyclopedia from '@/components/Encyclopedia'
import Genres from '@/components/Genres'
import Bands from '@/components/Bands'
import Albums from '@/components/Albums'
import Artists from '@/components/Artists'
import Labels from '@/components/Labels'
import Places from '@/components/Places'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      component: Events
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
      path: '/encyclopedie/groupes',
      name: 'bands',
      component: Bands
    },
    {
      path: '/encyclopedie/albums',
      name: 'albums',
      component: Albums
    },
    {
      path: '/encyclopedie/artistes',
      name: 'artists',
      component: Artists
    },
    {
      path: '/encyclopedie/labels',
      name: 'labels',
      component: Labels
    },
    {
      path: '/encyclopedie/lieux',
      name: 'places',
      component: Places
    }
  ]
})
