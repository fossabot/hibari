import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import User from '@/components/User'
import UserProfile from '@/components/User/Profile'
import UserLibrary from '@/components/User/Library'
import Media from '@/components/Media'
import Explore from '@/components/Explore'
import Bugs from '@/components/Bugs'
import Error404 from '@/components/Errors/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/@:slug',
      component: User,
      children: [
        {
          path: '',
          name: 'Profile',
          component: UserProfile
        },
        {
          path: 'library',
          name: 'Library',
          component: UserLibrary,
          children: [
            {
              path: ':status',
              component: UserLibrary
            }
          ]
        }
      ]
    },
    {
      path: '/anime',
      name: 'Explore Anime',
      component: Explore,
      meta: {
        type: 'anime'
      }
    },
    {
      path: '/anime/:slug',
      name: 'Anime',
      component: Media,
      meta: {
        type: 'anime'
      }
    },
    {
      path: '/drama',
      name: 'Explore Drama',
      component: Explore,
      meta: {
        type: 'drama'
      }
    },
    {
      path: '/drama/:slug',
      name: 'Drama',
      component: Media,
      meta: {
        type: 'drama'
      }
    },
    {
      path: '/manga',
      name: 'Explore Manga',
      component: Explore,
      meta: {
        type: 'manga'
      }
    },
    {
      path: '/manga/:slug',
      name: 'Manga',
      component: Media,
      meta: {
        type: 'manga'
      }
    },
    {
      path: '/bugs',
      name: 'Bugs',
      component: Bugs
    },
    {
      path: '*',
      component: Error404
    }
  ]
})