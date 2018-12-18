 <template>
    <div class="subscription">
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt="shelf logo">
        </div>
        <main>
            <div class="inscription">
                <div class="arrow"></div>
                <h3>Inscription</h3>
            </div>

            <form action="submit">
                <div class="names">
                    <input
                        type="text"
                        id="firstName"
                        name="name"
                        required
                        minlength="4"
                        maxlength="28"
                        size="10"
                        placeholder="Prénom"
                        v-model="firstName"
                    >
                    <input
                        type="text"
                        id="lastName"
                        name="name"
                        required
                        minlength="4"
                        maxlength="28"
                        size="10"
                        placeholder="Nom"
                        v-model="lastName"
                    >
                </div>
                <div class="genders">
                    <div class="checkboxContainer">
                        <input type="radio" name="gender" id="man">
                        <label for="man">Homme</label>
                    </div>
                    <div class="checkboxContainer">
                        <input type="radio" name="gender" id="woman">
                        <label for="woman">Femme</label>
                    </div>
                </div>
                <div class="birth">
                    <p>Date de naissance</p>
                    <div class="birthInputs">
                        <input class="birthDate" type="text" maxlength="2" placeholder="JJ" v-model="birth.day">
                        <input class="birthDate" type="text" maxlength="2" placeholder="MM" v-model="birth.month">
                        <input class="birthDate" type="text" maxlength="4" placeholder="AAAA" v-model="birth.year">
                    </div>
                </div>

                <div class="logins">
                    <input type="email" placeholder="E-mail" v-model="mail">
                    <input type="password" placeholder="Mot de passe" v-model="password">
                </div>
                <router-link to="/createProfile" class="nextButton">Suivant</router-link>
            </form>
        </main>
    </div>
</template>

<script>
export default {
    name: 'subscription',
    data () {
        return {
            firstName: '',
            lastName: '',
            isMale: false,
            isFemale: false,
            birth: {
                day: '',
                month: '',
                year: ''
            },
            mail: '',
            password: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.subscription {
    width: 100vw;
    height: 100vh;
}

@media screen and (max-width: 450px) {
    .header {
        height: 15%;
        text-align: center;

        .logo {
            margin-top: 5%;
            width: 50%;
        }
    }

    main {
        width: 90%;
        height: 75%;
        margin: auto;
        color: white;
        position: relative;
    }

    form {
        width: 100%;
    }

    .inscription {
        width: 100%;
        text-align: center;
    }

    ::placeholder {
        color: white;
        opacity: 0.5;
    }

    @mixin flex_style {
        width: 100%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 3%;
    }

    @mixin input_style {
        color: white;
        border: 2px solid white;
        border-width: 0 0 1px 0;
        background: transparent;
        font-size: 1.2em;
    }

    .names {
        @include flex_style;

        input {
            width: 45%;
            @include input_style;
        }
    }

    .genders {
        @include flex_style;

        .checkboxContainer {
            width: 45%;
            margin-top: 5%;
        }
    }

    .birth {
        margin-top: 10%;

        .birthInputs {
            width: 35%;
            display: flex;
            align-items: left;
            justify-content: space-between;
        }

        input {
            width: 28%;
            height: 1.5em;
            border: none;
            border-radius: 0.3em;
            text-align: center;
        }
    }

    .logins {
        width: 100%;

        input {
            @include input_style;
            margin-top: 7%;
        }
    }

    .familyChoice {
        width: 100%;
        height: 10vh;
        margin-top: 8%;

        div {
            width: 70%;
            height: 30%;
            margin-top: 3%;

            span {
                margin-left: 7%;
            }
        }
    }

    .nextButton {
        display: inline-block;
        width: 150px;
        height: 2em;
        
        position: absolute;
        bottom: 2em;
        left: 50%;
        transform: translateX(-50%);

        border: 1px solid white;
        border-radius: 100px;

        text-align: center;
        font-size: 1.5em;
        font-weight: 400;
        line-height: 2em;
    }
}
</style>


