<template>
    <div class="profile">
        <div>
            <Header :profile-img-src="me.profilePicture.src"/>
            <Menu/>
            <img class="mainProfilePic" :src="user.profilePicture.src" alt="profilePicMain">
            <div class="profileContent">
                <div class="container">
                    <h2>
                        <span class="firstName">{{ user.name.split(' ')[0] }}</span>
                        {{ user.name.split(' ')[1] }},
                        <span
                            class="age"
                        >{{ age(user.birth.date) }}ans</span>
                    </h2>
                    <div class="loc">
                        <img src="../assets/locIcon.png" alt="localisation">
                        <p>{{ user.city }}</p>
                    </div>
                    <div class="phone" v-if="user.phone !== null">
                        <img src="../assets/phoneIcon.png" alt="phone number">
                        <p>{{ user.phone }}</p>
                    </div>
                    <div class="mail">
                        <img src="../assets/mailIcon.png" alt="localisation">
                        <p>{{ user.mail }}</p>
                    </div>
                    <h3 v-if="user.id === me.id">Ma bibiothèque</h3>
                    <h3 v-else>Sa bibliothèque</h3>
                    <h4 v-if="user.id === me.id">Mes livres</h4>
                    <h4 v-else>Ses livres</h4>
                    <p
                        v-if="user.id === me.id"
                        class="tellStory"
                    >Racontez votre histoire, un événement marquant, un voyage, ou simplement le quotidien...</p>
                    <p v-else class="tellStory">
                        Lisez et découvrez l'histoire de
                        <strong>{{user.name}}</strong>, les événements marquants de sa vie, les voyages, ou simplement son quotidien...
                    </p>
                    <div class="shelf">
                        <div v-if="user.id === me.id" class="book0">
                            <router-link to="/write/edit">Ajouter un livre</router-link>
                        </div>
                        <div
                            class="book"
                            v-for="(book, i) in user.books.filter(book => ((book.author.id === user.id) && (book.to.id === user.id)))"
                            :key="i"
                            @click="readBook(book.id)"
                        >
                            <img src="../assets/book.png" alt="livre">
                            <h5>{{book.title}}</h5>
                        </div>
                    </div>
                    <h4>Livres d'or</h4>
                    <p
                        v-if="user.id === me.id"
                        class="tellStory"
                    >Tous les livres écrits sur vous sont ici.</p>
                    <p v-else class="tellStory">
                        Découvrez toutes les histoires de
                        <strong>{{user.name}}</strong> racontées par ses proches. Peut-être souhaitez-vous raconter les votres ?
                    </p>
                    <div class="goldenBook">
                        <div v-if="user.id !== me.id" class="book0">
                            <!-- Il nous faut une police script pour les titres de livres-->
                            <router-link to="write/edit">Ajouter un livre</router-link>
                        </div>
                        <div
                            class="book"
                            v-for="(book, i) in user.books.filter(book => ((book.to.id === user.id) && (book.author.id !== user.id)))"
                            :key="i"
                            @click="readBook(book.id)"
                        >
                            <img src="../assets/greenBook.png" alt="livre">
                            <h5>{{book.title}}</h5>
                        </div>
                    </div>
                    <div class="space"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ME from "@/graphql/user.graphql";
import USER_PROFILE from "@/graphql/userProfile.graphql";

import Header from "../components/Header.vue";
import Menu from "../components/Menu.vue";
import Book from "./ReadBook.vue";

export default {
    name: "profile",
    components: {
        Header,
        Book,
        Menu
    },
    data: () => {
        return {
            menuOpened: false
        };
    },
    apollo: {
        user: {
            query: USER_PROFILE,
            variables () {
                return {
                    user_id: this.$route.params.id
                        ? this.$route.params.id
                        : this.me.id
                };
            }
        }
    },
    computed: {
        ...mapState({
            me: state => state.me
        })
    },
    methods: {
        age (_date) {
            const diff = Date.now() - new Date(_date);
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        readBook (id) {
            this.$router.push(`/book/${ id }`);
        }
    }
};
</script>

<style lang="scss" scoped>
.profile {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    font-family: Roboto;
    box-sizing: border-box;
    .mainProfilePic {
        position: fixed;
        width: 100%;
        z-index: -2;
        top: 0;
    }
    .profileContent {
        background: linear-gradient(
            180deg,
            #7abed300 2.19%,
            #79bdd2 24.36%,
            #476fb5 100%
        );
        width: 100%;
        position: absolute;
        top: 150px;
        .container {
            margin: 0 5%;
            margin-bottom: 50px;
            h2 {
                margin-top: 170px;
                color: white;
                font-weight: 700;
                span.firstName {
                    font-weight: 100;
                }
                span.age {
                    font-weight: 100;
                    font-size: 0.6em;
                }
            }
            .loc,
            .phone,
            .mail {
                display: flex;
                align-items: center;
                img {
                    width: 30px;
                    height: 30px;
                    margin: 5px 10px 5px 0;
                }
                p {
                    color: white;
                    margin: 0px;
                }
            }
            h3 {
                font-family: 'Playfair Display', serif;
                color: white;
                font-size: 1.4em;
                margin-top: 60px;
            }
            h4 {
                color: white;
                margin-bottom: 6px;
            }
            .tellStory {
                font-size: 0.8em;
                margin-top: 0;
                color: white;
            }
            .shelf,
            .goldenBook {
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                .book0 {
                    // background-color: white;
                    height: 140px !important;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 1;
                    border: white dashed 2px;
                    border-radius: 3px;
                    a {
                        color: white;
                        text-decoration: none;
                        font-size: 0.75em;
                        border: solid 1px white;
                        border-radius: 10px;
                        padding: 7px;
                        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
                    }
                }
                div[class^='book'] {
                    position: relative;
                    width: 35%;
                    height: 35%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    h5 {
                        position: absolute;
                        top: 0%;
                        left: 50%;
                        transform: translateX(-40%);
                        width: 60%;
                        color: white;
                        font-family: 'Dancing Script', cursive;
                        font-size: 1.1em;
                    }
                }
            }
            .space {
                width: 100%;
                height: 100px;
            }
        }
    }
}
</style>
