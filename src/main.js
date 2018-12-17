import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { createUploadLink } from 'apollo-upload-client'

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    )
                )
            }
            if (networkError) console.log(`[Network error]: ${networkError}`)
        }),
        createUploadLink({
            uri: 'http://julesguesnon.com:4000/graphql',
            headers: { Authorization: window.localStorage.getItem('token') }
        })
    ]),
    cache: new InMemoryCache()
})

Vue.use(VueApollo)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    apolloProvider: new VueApollo({
        defaultClient: client
    }),
    render: h => h(App)
}).$mount('#app')
