<template>
    <div class="createProfile">
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt="">
            <div class="goBack">
                <div class="arrow"></div>
                <span>Retour</span>
            </div>
            <h2>Créer mon profil</h2>
        </div>
        <main>            
            <div class="profilCreation">
                <div class="addPhoto">
                    <span>ajouter une photo</span>
                    <div class="plusVert"></div>
                    <div></div>
                </div>

                <p class="fillFieldsLine">Veuillez remplir au moins un champs :</p>
                <div class="familyRelation">
                    <div>
                        <p>Je suis l'enfant de :</p>
                        <search/>
                    </div>
                    <div>
                        <p>Je suis le parent de :</p>
                        <search/>
                    </div>
                    <div>
                        <p>Je suis le/la frère/soeur de :</p>
                        <search/>
                    </div>
                    <div>
                        <p>Je suis le/la conjoint(e) de :</p>
                        <search/>
                    </div>
                </div>

                <input class="infoInputs" type="text" placeholder="Numero de téléphone">
                <input class="infoInputs" type="text" placeholder="Lieu de naissance">
                <input class="infoInputs" type="text" placeholder="Où habitez vous ?">
                <input class="infoInputs" type="text" placeholder="Où étudiez/travaillez vous?">


                <input class="infoInputs" type="text" placeholder="Vos hobbies">
                <input class="infoInputs" type="text" placeholder="Quel(s) sport(s) pratiquez vous ?">

                <router-link to="/me" class="bottomButton">Enregistrer</router-link>
            </div>
        </main>
    </div>
</template>


<script>
import Search from '@/components/search'
export default {
    name: 'createProfile',
    data () {
        return {

        }
    },
    components: {
        Search
    }
}    
</script>

<style lang="scss" scoped>
.createProfile {
    width: 100vw;
    height: 170vh;
    overflow: hidden;
    margin: 0;
    background: linear-gradient(
        180deg,
        #7abed3 2.19%,
        #79bdd2 13.36%,
        #476fb5 100%
    );
    font-family: Roboto;
    color: white;
}

@mixin input_style {
    color: white;
    border: 2px solid white;
    border-width: 0 0 1px 0;
    background: transparent;
    font-size: 1.2em;
}

@mixin listMenuStyle{
    width: 50%;
    height: 1.5em;
    font-size: 1.2em;
    border-radius:10px;
    background: white;
    border: none;
}


@media screen and (max-width: 450px) {

    .header {
        height: 30vh;
        text-align: center;
        .logo {
            margin-top: 15%;
            width: 50%;
        }

        .goBack {
            box-sizing: border-box;
            position: absolute;
            top: 5%;
            left: 5%;
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin: auto;
            margin-top: 3%;

            .arrow {
                width: 15px;
                height: 15px;
                border-top: solid white 3px;
                border-left: solid white 3px;
                transform: rotate(-45deg);
            }
        }

        h2 {
            margin-top: 7%;
            text-align: center;
            font-size: 2em;
            font-weight: bold;
        }
    }

    .profilCreation{
        width: 90vw;
        height: 200vh;
        margin: auto;

        ::placeholder {
            color: white;
            opacity: 0.5;
        }

        .infoInputs{
            @include input_style;
            margin-bottom: 7%;
            width: 70vw;
        }

        .fillFieldsLine {
            width: 90%;
            margin: auto;
            margin-top: 5%;
            margin-bottom: 5%;
            font-size: 1.1em;
            font-weight: bold;
        }

        .familyRelation {
            width: 100%;
            height: 25%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: 10%;

            p {
                font-size: 1.2em;
            }

            select {
                @include listMenuStyle;
            }
        }

        .addPhoto {
            position: relative;
            width: 25vw;
            height: 25vw;
            border-radius: 50vw;
            background-color: #fff;
            margin: auto;
            margin-top: 5%;
            margin-bottom: 15%;
            color: black;

            span {
                position: absolute;
                transform-origin: center;
                top: 25%;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.6em;
                text-align: center;
                width: 20vw;
            }

            div{
                position: absolute;
                width: 15%;
                border: solid black 2px;
                border: 0 0 2px 0;
                transform-origin: center;
                top: 50%;
                left: 40%;
            }

            .plusVert {
                transform: rotate(90deg);
            }
        }

        .partnerChoice {
            margin: 5% 0 10% 0;

            select{
                @include listMenuStyle;
            }
        }

        .bottomButton {
            display: block;
            width: 150px;
            height: 2em;
            
            margin: auto;
            margin-top: 20px;

            border: 1px solid white;
            border-radius: 100px;

            text-align: center;
            font-size: 1.5em;
            font-weight: 400;
            line-height: 2em;
        }
    }
}
</style>