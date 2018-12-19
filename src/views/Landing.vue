<template>
    <div class="landing">
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt="shelf logo">
        </div>
        <main>
            <img class="backgroundTree" src="../assets/bg-tree.jpg" alt>
            <div class="top">
                <img src="#" alt>
                <div class="topText">
                    <p class="firstLine">
                        Votre famille a une
                        <strong>histoire unique,</strong>
                    </p>
                    <p class="secondLine">
                        écrivez, consultez, conservez l'histoire de votre famille avec
                        <strong>Shelf</strong>
                    </p>
                </div>
            </div>
            <div class="sign">
                <p class="error" v-show="error">Votre email ou mot de passe est incorrect</p>
                <div class="idField">
                    <input type="email" placeholder="e-mail" ref="mail" @keypress.enter="login">
                    <div class="borderBottom"></div>
                    <input
                        type="password"
                        placeholder="mot de passe"
                        ref="password"
                        @keypress.enter="login"
                    >
                </div>
                <div class="signButtons">
                    <div>
                        <a @click="login" href="#" title="Se connecter" class="connect">Se connecter</a>
                    </div>
                    <div>
                        <router-link to="/signin" title="S'inscrire" class="subscription">S'inscrire</router-link>
                    </div>
                </div>
            </div>
        </main>
        <img class="treeMap" src="../assets/tree.png" alt="arbre">
    </div>
</template>

<script>
import jwt from 'jsonwebtoken'
import env from '@/../env.json'
import LOGIN from '@/graphql/login.graphql'

export default {
    name: 'landing',
    data () {
        return {
            error: false
        }
    },
    methods: {
        async login () {
            if (this.$refs.mail.value === '' || this.$refs.password.value === '')
                return

            this.$apollo.mutate({
                mutation: LOGIN,
                variables: {
                    mail: this.$refs.mail.value,
                    password: this.$refs.password.value
                }
            }).then(async ({ data }) => {
                if (!data.login) {
                    this.error = true
                    return
                }

                await window.localStorage.setItem(env.APP_TOKEN_PATH, data.login.token)
                this.$router.push('/home')
            }).catch(err => this.error = true)
        }
    },
    async mounted () {
        const token = window.localStorage.getItem(env.APP_TOKEN_PATH)

        if (token === 'undefined' || token === 'null' || token === null)
            return
        const isVerify = await jwt.verify(token, env.APP_SECRET)
        if (!isVerify)
            return

        this.$router.push('/home')
    }
}    
</script>

<style lang="scss" scoped>
.landing {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    background: linear-gradient(
        180deg,
        #7abed3 2.19%,
        #79bdd2 13.36%,
        #476fb5 100%
    );
    font-family: Roboto;
}

.header {
    height: 10vh;

    .logo {
        width: 10%;
        margin: 1%;
    }
}

@media screen and (max-width: 450px) {
    .header {
        height: 20%;
        text-align: center;

        .logo {
            margin-top: 5%;
            width: 50%;
        }
    }

    main {
        position: relative;
        color: white;
        height: 80%;

        .backgroundTree {
            position: absolute;
            top: -15%;
            right: 10%;
            opacity: 0.2;
            transform: scaleX(-1);
        }

        .top {
            width: 100%;
            height: 30%;

            .topText {
                width: 100%;
                height: 100%;
                position: relative;

                p {
                    width: 35%;
                    height: 100%;
                    margin: 0;
                    margin-left: 60%;
                    font-size: 1em;
                    position: absolute;
                    font-weight: 100;
                }

                .firstLine {
                    top: -15%;
                    left: -15%;
                }

                .secondLine {
                    top: 25%;
                }
            }
        }

        .sign {
            height: 70%;
            width: 100%;
            position: relative;
            z-index: 1;

            .error {
                color: red;
                font-size: 0.8rem;
                position: absolute;
                top: 0;
                left: 35px;
                transform: translateY(-225%);
            }
            .idField {
                width: 90%;
                height: 20%;
                margin: auto;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                background-color: rgba(255, 255, 255, 0.86);
                position: relative;

                input {
                    height: 50%;
                    padding-left: 7%;
                    border: none;
                    display: block;
                    background-color: transparent;
                }

                .borderBottom {
                    position: absolute;
                    width: 90%;
                    height: 1px;
                    bottom: 50%;
                    left: 5%;
                    background: rgba(0, 0, 0, 0.22);
                }
            }

            .signButtons {
                width: 100%;
                height: 80%;
                margin: auto;
                color: white;
                font-size: 1.5em;
                display: flex;
                flex-direction: column;
                align-content: space-around;
                align-items: center;
                z-index: 1000;

                

                div {
                    height: 20%;
                    display: flex;
                    align-items: center;
                    margin-top: 5%;
                }

                .facebookButton {
                    width: 90%;
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background-color: #4267b2;
                    border-radius: 15px;
                    font-size: 18px;

                    img {
                        position: absolute;
                        left: 2%;
                        width: 14%;
                    }
                }

                .facebookButton + div {
                    font-size: 0.8em;
                }
            }
        }
    }
}

@media screen and (min-width: 450px){
    .header {
        height: 20%;
        text-align: center;

        .logo {
            z-index: 5;
            position: absolute;
            top: 5%;
            left: 5%;
            width: 400px;
        }
    }

    main {
        position: relative;
        color: white;
        height: 80%;

        .backgroundTree {
            position: absolute;
            top: -15%;
            right: 7%;
            opacity: 0.2;
            transform: scale(1.5);
        }

        .top {
            width: 100%;
            height: 250px;

            .topText {
                margin-top: 5%;

                p {
                    width: 90%;
                    margin: 16px auto;
                    font-size: 1.5em;
                    font-weight: 100;
                }
            }
        }

        .sign {
            height: 70%;
            width: 100%;
            position: relative;
            z-index: 1;

            .error {
                color: red;
                font-size: 0.8rem;
                position: absolute;
                top: 0;
                left: 35px;
                transform: translateY(-225%);
            }
            .idField {
                width: 25%;
                height: 20%;
                margin: auto 5%;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                background-color: rgba(255, 255, 255, 0.86);
                position: relative;
                display: none;

                input {
                    height: 50%;
                    padding-left: 7%;
                    border: none;
                    display: none;
                    background-color: transparent;
                }

                .borderBottom {
                    position: absolute;
                    width: 90%;
                    height: 1px;
                    bottom: 50%;
                    left: 5%;
                    background: rgba(0, 0, 0, 0.22);
                }
            }

            .signButtons {
                width: 45%;
                color: white;
                font-size: 1.5em;
                display: flex;
                flex-direction: column;
                align-content: space-around;
                align-items: center;
                z-index: 1000;

                div {
                    height: 20%;
                    display: flex;
                    align-items: center;
                    margin-top: 3.5%;

                    .connect{
                        font-weight: 100;
                        display: none;
                    }

                    .subscription{
                        padding: 10px 20px;
                        border: solid white 1px;
                        border-radius: 50px;
                        font-family: 'Playfair Display', serif;
                        font-weight: 900;
                    }
                }

                .facebookButton {
                    width: 90%;
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background-color: #4267b2;
                    border-radius: 15px;
                    font-size: 18px;

                    img {
                        position: absolute;
                        left: 2%;
                        width: 14%;
                    }
                }

                .facebookButton + div {
                    font-size: 0.8em;
                }
            }
        }
    }
    .treeMap{
        position: absolute;
        margin-bottom: 50px;
        bottom: 0;
        right: 0;
        width: 50%;

    }
}


</style>
