<template>
    <div id="app">
        <router-view/>
        <navbar v-if="$route.meta.auth" :hasNotifications="showNotifications"/>
    </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
// import { APP_TOKEN_PATH } from '@/../env.json'
import ME from '@/graphql/user.graphql'
import Navbar from '@/components/Navbar'

export default {
    name: 'app',
    data () {
        return {
            showNotifications: false
        }
    },
    computed: {
        ...mapState({
            currentUser: state => state.me
        })
    },
    apollo: {
        me: {
            query: ME,
            async result (res) {

                if (!res.data.me)
                    return

                await this.setMeDatas(res.data.me)

                if (res.data.me.notifications.length > 0) {
                    const hasNotifications = res.data.me.notifications.find(v => !v.isRead)
                    if (hasNotifications)
                        this.showNotifications = true
                }

            }
        }
    },
    components: {
        Navbar
    },
    methods: {
        ...mapActions(['setMeDatas'])
    }
}
</script>

<style lang="scss">
body {
    margin: 0;
    background: linear-gradient(
        180deg,
        #7abed3 2.19%,
        #79bdd2 13.36%,
        #476fb5 100%
    );
    font-family: Roboto;
}
a {
    text-decoration: none;
    color: white;
}
input {
    outline: none;
}
</style>
