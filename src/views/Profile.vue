<template>
    <div class="profile">
        <ApolloQuery :query="require('@/graphql/user.graphql')">
            <template slot-scope="{ result: { data, loading }}">
                <div v-if="loading" >WTF LES AMIS</div>
                <div v-else>
                    <div class="profileHeader">
                        <div class="profilePic">
                            <img class="profilePic" :src="data.me.profilePicture.src" alt="profile pic">
                        </div>
                        <div class="searchBar">
                            <input type="text">
                            <img src="../assets/search.svg" alt="search">
                        </div>
                    </div>
                    <img class="mainProfilePic" :src="data.me.profilePicture.src" alt="profilePicMain">
                    <div class="profileContent">
                        <div class="container">
                            <h2><span class="firstName">{{ data.me.name.split(' ')[0] }}</span> {{ data.me.name.split(' ')[1] }}, <span class="age">{{ age(data.me.birth.date) }}ans</span> </h2>
                            <div class="loc">
                                <img src="../assets/locIcon.png" alt="localisation">
                                <p>{{ 'city' }}</p>
                            </div>
                            <div class="phone" v-if="data.me.phone !== null">
                                <img src="../assets/phoneIcon.png" alt="phone number">
                                <p>{{ data.me.phone }}</p>
                            </div>
                            <div class="mail">
                                <img src="../assets/mailIcon.png" alt="localisation">
                                <p>{{ data.me.mail }}</p>
                            </div>
                            <h3>Ma bibiothèque</h3>
                            <h4>Mes livres</h4>
                            <p class="tellStory">Racontez votre histoire, un événement marquant, un voyage, ou simplement le quotidien...</p>
                        </div>
                    </div>
                </div>
            </template>
        </ApolloQuery>
    </div>
</template>

<script>
export default {
    name: 'profile',
    methods: {
        age (_date) {
            const diff = Date.now() - new Date(_date)
            const ageDate = new Date(diff)
            return Math.abs(ageDate.getUTCFullYear() - 1970)
        }
    }
}
</script>

<style lang="scss" scoped>
.profile{
    width : 100%;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    font-family: Roboto;
    box-sizing: border-box;

    .profileHeader {
        display: flex;
        position: absolute;
        top: 2%;
        width: 100%;
        justify-content: space-around;
        align-items: center;

        .profilePic{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                height: auto;

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
    .mainProfilePic{
            position: fixed;
            width: 100%;
            z-index: -2;
            top:0
        }
    .profileContent{
        background: linear-gradient(180deg, #7ABED300 2.19%, #79BDD2 24.36%, #476FB5 100%);
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
            .shelf, .goldenBook{
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;

                .book0{
                    // background-color: white;
                    height:140px!important;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 1;
                    border: white dashed 2px;
                    border-radius: 3px;

                    a{
                        color: white;
                        text-decoration: none;
                        font-size: 0.65em;
                    }
                }

                div[class*="book"]{
                    position: relative;
                    width: 35%;
                    height: 35%;

                    img{
                        width: 100%;
                        height: 100%;
                    }
                    h5{
                        position: absolute;
                        top: 0%;
                        left: 50%;
                        transform: translateX(-40%);
                        width: 60%;
                        color: white;
                        font-family: 'Dancing Script', cursive;
                        font-size: 1em;
                    }
                }
            }
        }    
    }
}
</style>
