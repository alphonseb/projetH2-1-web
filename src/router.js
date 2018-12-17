import Vue from 'vue'
import Router from 'vue-router'

import Landing from './views/Landing'
import Signin from './views/Signin'
import Profile from './views/Profile'
import { nextTick } from 'q';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'landing',
        component: Landing
    },
    {
        path: '/signin',
        name: 'signin',
        component: Signin
    },
    {
        path: '/me',
        name: 'me',
        component: Profile,
        meta: {
            auth: true
        }
    }
    ]
})

router.beforeEach((_to, _from, _next) => {
    if (!_to.meta.auth)
        return _next()
    
    // _next()
})
export default router
