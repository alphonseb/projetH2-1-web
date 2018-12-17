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
                        <input type="text" id="name" name="name" required minlength="4" maxlength="28" size="10" placeholder="Prénom">
                        <input type="text" id="name" name="name" required minlength="4" maxlength="28" size="10" placeholder="Nom">
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
                            <input class="birthDate" type="text" maxlength="2" placeholder="JJ">
                            <input class="birthDate" type="text" maxlength="2" placeholder="MM">
                            <input class="birthDate" type="text" maxlength="4" placeholder="AAAA">
                        </div>
                    </div>

                    <div class="logins">
                        <input type="text" placeholder="E-mail">
                        <input type="text" placeholder="Mot de passe">
                    </div>

                    <div class="familyChoice">
                        <div>
                            <input type="radio" name="" id="">
                            <span>Je rejoins une famille</span>
                        </div>
                        <div>
                            <input type="radio" name="" id="">
                            <span>Je créé ma famille</span>
                        </div>
                    </div>

                    <div class="nextButton">
                        <span>Suivant</span>
                    </div>                 
                </form>
        </main>
    </div>
</template>

<script>
export default {
    name: 'subscription',
}    
</script>

<style lang="scss" scoped>
    .page {
        width : 100vw;
        height: 100vh;
        margin : 0;
        background: linear-gradient(180deg, #7ABED3 2.19%, #79BDD2 13.36%, #476FB5 100%);
        font-family: Roboto;
        color: white;
    }
    

    @media screen and (max-width: 450px) {
        .header {
            height: 15%;
            text-align: center;

            .logo{
                margin-top : 5%;
                width : 50%;
            }
        }

        main {
            width: 90%;
            margin: auto;
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

        @mixin flex_style{
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
                @include input_style

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
            width: 100%;
            height: 3em;
            margin-top: 5%;
            border: 1px solid white;
            border-radius: 0.8em;
            display: flex;
            align-items: center;
            justify-content: center;

            span {
                height: 1.5em;
                font-size: 1.5em;
                font-weight: 400;
            }
        }

    }

</style>


