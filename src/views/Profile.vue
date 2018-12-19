<template>
    <div class="profile">
        <div>
            <Header :profile-img-src="me.profilePicture.src"/>
            <img
                class="mainProfilePic"
                :src="me.profilePicture.src"
                alt="profilePicMain"
            >
            <div class="profileContent">
                <div class="container">
                    <h2>
                        <span class="firstName">{{ me.name.split(' ')[0] }}</span>
                        {{ me.name.split(' ')[1] }},
                        <span
                            class="age"
                        >{{ age(me.birth.date) }}ans</span>
                    </h2>
                    <div class="loc">
                        <img src="../assets/locIcon.png" alt="localisation">
                        <p>{{ me.city }}</p>
                    </div>
                    <div class="phone" v-if="me.phone !== null">
                        <img src="../assets/phoneIcon.png" alt="phone number">
                        <p>{{ me.phone }}</p>
                    </div>
                    <div class="mail">
                        <img src="../assets/mailIcon.png" alt="localisation">
                        <p>{{ me.mail }}</p>
                    </div>
                    <h3>Ma bibiothèque</h3>
                    <h4>Mes livres</h4>
                    <p
                        class="tellStory"
                    >Racontez votre histoire, un événement marquant, un voyage, ou simplement le quotidien...</p>
                    <div class="books">
                        <div class="book" v-for="(book, i) in me.books" :key="i">
                            <img src="../assets/book.png" alt="livre">
                            <span>{{book.title}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from "../components/Header.vue";

export default {
    name: "profile",
    components: {
        Header
    },
    computed: {
        ...mapState({
            me: state => state.me
        })
    },
    methods: {
        age(_date) {
            const diff = Date.now() - new Date(_date);
            const ageDate = new Date(diff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
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
        top: 100px;
        .container {
            margin: 0 5%;
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
                font-family: "Playfair Display", serif;
                color: white;
                font-size: 1.4em;
                margin-top: 60px;
            }
            h4 {
                color: white;
                margin-bottom: 6px;
            }

            .tellStory {
                font-size: 0.6em;
                margin-top: 0;
                color: white;
            }
            .books {
                height: 150px;
                width: 100%;
                display: flex;
                .book {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    height: 100%;
                    img {
                        height: 100%;
                        width: auto;
                    }
                    span {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        color: white;
                    }
                }
            }
        }
    }
}
</style>
