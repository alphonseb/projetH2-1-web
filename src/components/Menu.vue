<template>
    <div class="menu" :class="{'is-opened': this.$parent.menuOpened}">
        <a href="#" class="close-menu" @click="closeMenu">
            <img src="../assets/close_icon.png" alt="Icone fermer">
        </a>
        <router-link to="/profileEdit" title="Edition du profil" @click.prevent>Editer mon profil</router-link>
        <a href="#" title="Deconnexion" @click="disconnect">Se déconnecter</a>
    </div>
</template>

<script>
export default {
    name: "Menu",
    methods: {
        disconnect() {
            window.localStorage.setItem("@Shelf/token", null);
            location.reload();
        },
        closeMenu() {
            this.$parent.menuOpened = false;
        }
    }
};
</script>

<style lang="scss" scoped>
.menu {
    box-sizing: border-box;
    width: 50vw;
    height: calc(100vh - 45px);
    padding: 20px 15px;
    padding-top: 110px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 205;
    background: rgb(66, 103, 181);
    box-shadow: 5px 0px 5px rgba(66, 103, 181, 0.5);
    transform: translateX(-52vw);
    transition: transform 0.2s ease;
    will-change: transform;
    .close-menu {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 0.8em;
        img {
            width: 15px;
            height: 15px;
        }
    }
    a {
        display: block;
        margin-bottom: 50px;
        text-transform: uppercase;
    }
    &.is-opened {
        transform: translateX(0);
    }
}
</style>


