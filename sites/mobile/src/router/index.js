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
    }
  ]
})
