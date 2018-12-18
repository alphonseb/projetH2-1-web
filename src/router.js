import Vue from 'vue'
import Router from 'vue-router'
import jwt from 'jsonwebtoken'
import env from '@/../env.json'

import Landing from './views/Landing'
import Signin from './views/Signin'
import Profile from './views/Profile'
import CreateProfile from './views/CreateProfile'
import ProfileEdit from './views/ProfileEdit'

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

router.beforeEach(async (_to, _from, _next) => {
    if (!_to.meta.auth)
        return _next()

    const token = window.localStorage.getItem(env.APP_TOKEN_PATH)
    if (token === 'undefined' || token === 'null' || token === null)
        return _next('/')

    const isVerify = await jwt.verify(token, env.APP_SECRET)

    if (!isVerify)
        return _next('/')

    _next()
})
export default router
