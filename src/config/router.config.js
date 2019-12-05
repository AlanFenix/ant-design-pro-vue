// eslint-disable-next-line
import BasicLayout from '../layouts/BasicLayout.vue'

const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'menu.home' },
    redirect: '/dashboard/analysis',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { keepAlive: true, title: 'menu.dashboard.default', icon: 'dashboard' },
        redirect: '/dashboard/analysis',
        component: { render: (h) => h('router-view') },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: {
              keepAlive: true,
              title: 'menu.dashboard.analysis'
            },
            component: () => import(/* webpackChunkName: "about" */ '../views/BlockPage')
          },
          {
            path: '/dashboard/workplace/:id?',
            name: 'workplace',
            meta: {
              global: true,
              keepAlive: true,
              title: 'menu.dashboard.workplace'
            },
            component: () => import(/* webpackChunkName: "about" */ '../views/TestPage')
          }
        ]
      },
      {
        path: '/page2',
        name: 'page2',
        meta: {
          keepAlive: true,
          title: 'menu.nav2',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      },
      {
        path: '/page3',
        name: 'page3',
        meta: {
          keepAlive: true,
          title: 'menu.nav2',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      },
      {
        path: '/page4',
        name: 'page4',
        meta: {
          keepAlive: true,
          title: 'menu.nav2',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      },
      {
        path: '/page5',
        name: 'page5',
        meta: {
          keepAlive: true,
          title: 'menu.nav2',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      },
      {
        path: '/page6',
        name: 'page6',
        meta: {
          keepAlive: true,
          title: 'menu.nav2',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      },

      {
        path: '/page7',
        name: 'page7',
        meta: {
          keepAlive: true,
          title: 'menu.nav2',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      },

      {
        path: '/page8',
        name: 'page8',
        meta: {
          keepAlive: true,
          title: 'menu.nav2',
          icon: 'video-camera'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/TestPage2')
      }
    ]
  }
]

export { asyncRouterMap }
