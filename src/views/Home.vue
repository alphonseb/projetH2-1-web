<template>
    <div class="home">
        <img src="../assets/bg-tree.jpg" alt="Image de fond" class="bg-tree">
        <Header :profileImgSrc="currentUser.profilePicture.src"/>
        <Menu/>
        <Tree :user="user"/>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ME from "@/graphql/user.graphql";
import USER_FAMILY from "@/graphql/userFamily.graphql";
import Tree from "../components/Tree.vue";
import Header from "@/components/Header.vue";
import Menu from "@/components/Menu.vue";

export default {
    name: "Home",
    components: {
        Tree,
        Header,
        Menu
    },
    data: () => ({
        user_id: null,
        menuOpened: false
    }),
    computed: {
        ...mapState({
            currentUser: state => state.me
        })
    },
    methods: {
        ...mapActions(["setMeDatas"])
    },
    apollo: {
        me: {
            query: ME,
            result(_res) {
                if (!this.currentUser.id) this.setMeDatas(_res);
            }
        },
        user: {
            query: USER_FAMILY,
            variables() {
                return {
                    userId: this.user_id ? this.user_id : this.currentUser.id
                };
            },
            skip() {
                return !this.user_id && !this.currentUser.id;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.home {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(
        180deg,
        #7abed3 2.19%,
        #79bdd2 13.36%,
        #476fb5 100%
    );
    .bg-tree {
        position: absolute;
        left: -100px;
        height: 100%;
        opacity: 0.2;
    }
}
</style>
