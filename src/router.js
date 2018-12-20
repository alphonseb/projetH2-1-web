import Vue from 'vue'
import Router from 'vue-router'
import jwt from 'jsonwebtoken'
import { APP_SECRET, APP_TOKEN_PATH } from '@/../env.json'
// import store from './store'

// Components
import Landing from './views/Landing'
import Signin from './views/Signin'
import CreateProfile from './views/CreateProfile'
import Home from './views/Home.vue'
import Profile from './views/Profile'
import ProfileEdit from './views/ProfileEdit'
import Write from './components/WriteBook'
import WriteEdition from './components/WriteEdition'
import WriteGallery from './components/WriteGallery'
import ReadBook from './views/ReadBook'

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
            component: Home,
            meta: {
                auth: true
            }
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
            path: '/user',
            name: 'user',
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
            path: '/book/:id',
            component: ReadBook,
            meta: {
                auth: true
            }
        },
        {
            path: '/write',
            component: Write,
            meta: {
                auth: true
            },
            children: [
                {
                    path: 'edit',
                    component: WriteEdition,
                    name: 'editBook',
                    meta: {
                        auth: true
                    }
                },
                {
                    path: 'gallery',
                    component: WriteGallery,
                    meta: {
                        auth: true
                    }
                }
            ]
        }
    ]
})

router.beforeEach(async (_to, _from, _next) => {
    if (!_to.meta.auth) return _next()

    const token = window.localStorage.getItem(APP_TOKEN_PATH)
    if (token === 'undefined' || token === 'null' || token === null)
        return _next('/')

    const isVerify = await jwt.verify(token, APP_SECRET)

    if (!isVerify) {
        window.localStorage.setItem(APP_TOKEN_PATH, null)
        return _next('/')
    }

    _next()
})
export default router
