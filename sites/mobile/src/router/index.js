import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NewsFeed from '@/components/NewsFeed'
import News from '@/components/News'
import Reviews from '@/components/Reviews'
import Interviews from '@/components/Interviews'
import Releases from '@/components/Releases'
import Events from '@/components/Events'

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
      path: '/interviews',
      name: 'interviews',
      component: Interviews
    },
    {
      path: '/sorties',
      name: 'releases',
      component: Releases
    },
    {
      path: '/evenements',
      name: 'events',
      component: Events
    }
  ]
})
