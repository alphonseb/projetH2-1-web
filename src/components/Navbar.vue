<template>
    <div class="navbar">
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
                    >
                        <img src="../assets/bell.png" alt="Icone">
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    props: {
        hasNotifications: Boolean
    }
};
</script>

<style lang="scss" scoped>
.navbar {
    width: 100vw;
    padding: 20px 0;
    background: rgba(255, 255, 255, 0.72);
    nav ul {
        width: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        justify-content: space-evenly;
        li {
            width: 20%;
            list-style: none;
            a {
                display: block;
                width: 100%;
                text-align: center;
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
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
}
</style>


