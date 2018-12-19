<template>
    <div class="notifCenter">
        <div class="newNotifs">
            <p class="new">Nouveau</p>
            <notif
                v-for="(notification, i) in notifications"
                :key="i"
                v-if="!notification.isRead"
                :from="notification.from.id"
                :profilePicture="notification.from.profilePicture.src"
                :content="notification.content"
                :date="notification.date"
                :type="notification.type"
                :id="notification.id"
            />
        </div>
        <div class="oldNotifs">
            <p class="new">Plus tôt</p>
            <notif
                v-for="(notification, i) in notifications"
                :key="i"
                v-if="notification.isRead"
                :from="notification.from.id"
                :profilePicture="notification.from.profilePicture.src"
                :content="notification.content"
                :date="notification.date"
                :type="notification.type"
                :id="notification.id"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Notif from '@/components/Notifs'
import Header from '@/components/Header'

export default {
    name: "NotifCenter",
    components: {
        Notif,
        Header
    },
    computed: {
        ...mapState({
            notifications: state => state.me.notifications
        })
    }
};
</script>

<style lang="scss" scoped>
.notifCenter {
    width: 100%;
    height: 100vh;
    background: white;
    margin: 0;
    font-family: Roboto;
    box-sizing: border-box;
    overflow: scroll;

    .search {
        display: flex;
        padding-top: 6%;
        width: 100%;
        justify-content: space-around;
        align-items: center;

        .imgContainer {
            width: 60px;
            height: 60px;
            overflow: hidden;
            border-radius: 50%;

            .profilePic {
                width: 100%;
            }
        }
        .searchBar {
            display: inline;
            position: relative;
            border: 1px white solid;
            border-radius: 200px;

            input {
                background: none;
                border: none;
                width: 200px;
                height: 22px;
                color: white;
                padding-left: 5%;
            }

            img {
                position: absolute;
                right: 8px;
                top: 50%;
                width: 17px;
                height: 17px;
                transform: translateY(-50%);
            }
        }
    }

    .newNotifs,
    .oldNotifs {
        display: block;
        margin-top: 10%;
        background-color: white;
        border-bottom: 1px grey solid;
        height: 20vh;

        p.new {
            padding: 15px;
            border-bottom: solid grey 1px;
            margin: 0;
        }
    }
}
</style>
