import Vue from 'vue'
import Router from 'vue-router'
import { isSignedIn, isIntegrated } from './auth'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/public/login'),
      beforeEnter (_, __, next) {
        if (!isSignedIn()) {
          next()
          return
        }
        next('/')
      },
    },
    {
      path: '/plans',
      component: () => import('@/views/public/plans'),
    },
    {
      path: '/register/:plan',
      component: () => import('@/views/public/register'),
      props: true,
    },
    {
      path: '/mailvalidate/:email',
      component: () => import('@/views/public/mailvalidate'),
      props: true,
    },
    {
      path: '/passchange/:hash/:email',
      component: () => import('@/views/public/passchange'),
      props: true,
    },
    {
      path: '/passforgot',
      component: () => import('@/views/public/passforgot'),
    },
    {
      path: '/tracking',
      component: () => import('@/views/public/tracking'),
      props: true,
    },
    {
      path: '/viewemail',
      component: () => import('@/views/public/viewemail'),
      props: true,
    },
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      beforeEnter (to, from, next) {
        if (isSignedIn()) {
            next()
            return
        }
        next('/login')
      },
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
          beforeEnter: (to, from, next) => {
            if (isIntegrated()) {
              next()
              return
            }
            next('/integration')
          },
        },
        {
          name: 'Integrações',
          path: 'integration',
          component: () => import('@/views/dashboard/settings/integration'),
        },
        {
          name: 'Pacotes',
          path: 'packages',
          component: () => import('@/views/dashboard/packages/packages'),
          beforeEnter: (to, from, next) => {
            if (isIntegrated()) {
              next()
              return
            }
            next('/integration')
          },
        },
        {
          name: 'Configurações',
          path: 'settings',
          component: () => import('@/views/dashboard/settings/settings'),
          beforeEnter: (to, from, next) => {
            if (isIntegrated()) {
              next()
              return
            }
            next('/integration')
          },
        },
        {
          name: 'Callback',
          path: 'callback',
          component: () => import('@/views/dashboard/settings/callback'),
        },
        {
          name: 'Preços e Planos',
          path: 'upgrade',
          component: () => import('@/views/dashboard/Upgrade'),
        },
        {
          name: 'Editar Perfil',
          path: 'userprofile',
          component: () => import('@/views/dashboard/pages/UserProfile'),
        },
      ],
    },
  ],
})
