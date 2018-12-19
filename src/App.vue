<template>
    <div id="app">
        <router-view/>
        <navbar v-if="$route.meta.auth"/>
    </div>
</template>
<script>
import ME from '@/graphql/user.graphql'
import { mapActions, mapState } from 'vuex'
import Navbar from '@/components/Navbar'

export default {
    name: 'app',
    computed: {
        ...mapState({
            currentUser: state => state.me
        })
    },
    apollo: {
        me: {
            query: ME,
            async result (res) {
                await this.setMeDatas(res.data.me)
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
