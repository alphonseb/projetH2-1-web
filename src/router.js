import Vue from 'vue'
import Router from 'vue-router'
import jwt from 'jsonwebtoken'
import env from '@/../env.json'

import Landing from './views/Landing'
import Signin from './views/Signin'
import Profile from './views/Profile'
import Write from './components/WriteBook'
import WriteEdition from './components/WriteEdition'
import WriteGallery from './components/WriteGallery'
import CreateProfile from './views/CreateProfile'
import NotifCenter from './views/NotifCenter.vue'
import ProfileEdit from './views/ProfileEdit'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
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
            path: '/createProfile',
            name: 'createProfile',
            component: CreateProfile
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/me',
            name: 'me',
            component: Profile,
            meta: {
                auth: true
            }
        },
        {
            path: '/profileEdit',
            name: 'editProfile',
            component: ProfileEdit,
            meta: {
                auth: true
            }
        },
        {
            path: '/book',
            component: Write,
            children: [
                {
                    path: 'edit',
                    component: WriteEdition
                },
                {
                    path: 'galerie',
                    component: WriteGallery
                }
            ]
        }
    ]
})

router.beforeEach(async (_to, _from, _next) => {
    if (!_to.meta.auth) return _next()

    const token = window.localStorage.getItem(env.APP_TOKEN_PATH)
    if (token === 'undefined' || token === 'null' || token === null)
        return _next('/')

    const isVerify = await jwt.verify(token, env.APP_SECRET)

    if (!isVerify) return _next('/')

    _next()
})
export default router
