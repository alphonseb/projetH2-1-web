import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import env from '@/../env.json'

import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { createUploadLink } from 'apollo-upload-client'

console.log(process.env)

const link = ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            )

        if (networkError) console.log(`[Network error]: ${networkError}`)
    }),
    createUploadLink({
        uri: process.env.API_URL,
        headers: {
            authorization: window.localStorage.getItem(
                process.env.APP_TOKEN_PATH
            )
        },
        async fetch (input, init) {
            init.headers.authorization = await window.localStorage.getItem(
                process.env.APP_TOKEN_PATH
            )
            const res = await fetch(input, init)
            return res
        }
    })
])

const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

Vue.use(VueApollo)
Vue.config.productionTip = false

new Vue({
    router,
    apolloProvider: new VueApollo({
        defaultClient: client
    }),
    store,
    render: h => h(App)
}).$mount('#app')
