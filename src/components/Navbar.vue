<template>
    <div class="navbar">
        <transition name="slide">
            <notifications class="notifications" v-show="showNotifications"/>
        </transition>
        <nav>
            <ul>
                <li>
                    <router-link to="#" title="Ajouter un utilisateur">
                        <img src="../assets/add_user.png" alt="Icone">
                    </router-link>
                </li>
                <li>
                    <router-link to="/me" title="Ma bibliothèque">
                        <img src="../assets/nav_book.png" alt="Icone">
                    </router-link>
                </li>
                <li>
                    <router-link to="/home" title="Mon arbre">
                        <img src="../assets/logoIconBlack.png" alt="Icone">
                    </router-link>
                </li>
                <li>
                    <a
                        href="#"
                        title="Notifications"
                        :class="{'has-notifications': hasNotifications}"
                        @click.prevent="toggleNotifications"
                    >
                        <img src="../assets/bell.png" alt="Icone">
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import Notifications from '@/views/NotifCenter'
export default {
    name: "Navbar",
    props: {
        hasNotifications: Boolean
    },
    data () {
        return {
            showNotifications: false
        }
    },
    components: {
        Notifications
    },
    methods: {
        toggleNotifications () {
            this.showNotifications = !this.showNotifications

            if (this.hasNotifications) {
                this.hasNotifications = false
                this.$children[0].$children.forEach(_notif => {
                    _notif.readNotification()
                })
            }
        }
    }
};
</script>

<style lang="scss" scoped>
    .slide-enter-active, .slide-leave-active {
        transition: transform .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    .slide-enter, .slide-leave-to {
        transform: translateY(100%);
    }

.navbar {
    width: 100vw;
    height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;

    .notifications {
        position: absolute;
        bottom: 0px;
        z-index: 500;
        will-change: transform;
    }

    nav {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.72);

        ul {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            justify-content: space-evenly;
            li {
                width: 20%;
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
    
                a {
                    display: block;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
    
                    &.has-notifications {
                        position: relative;
                        &::after {
                            content: "";
                            position: absolute;
                            top: 0;
                            left: 52%;
                            width: 12px;
                            height: 12px;
                            background: #cf0000;
                            border-radius: 100%;
                        }
                    }
                    img {
                        height: 30px;
                        width: auto;
                    }
                }
            }
        }
    }
    
}
</style>


