<template>
    <div class="familyJoin">
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt="">
            <div class="goBack">
                <div class="arrow"></div>
                <p>Je rejoinds une famille</p>
            </div>
        </div>
        <main>
            <p class="fillFieldsLine">Veuillez remplir au moins un champs :</p>
            <div class="familyRelation">
                <div>
                    <p>Je suis l'enfant de :</p>
                    <select name="" id=""></select>
                </div>
                <div>
                    <p>Je suis le parent de :</p>
                    <select name="" id=""></select>
                </div>
                <div>
                    <p>Je suis le/la frère/soeur de :</p>
                    <select name="" id=""></select>
                </div>
                <div>
                    <p>Je suis le/la conjoint(e) de :</p>
                    <select name="" id=""></select>
                </div>            
            </div>
            <div class="profilCreation">
                <h3>Créer mon profil</h3>
                <div class="addPhoto">
                    <span>ajouter une photo</span>
                    <div class="plusVert"></div>
                    <div></div>
                </div>

                <input class="infoInputs" type="text" placeholder="Numero de téléphone">
                <input class="infoInputs" type="text" placeholder="Lieu de naissance">
                <input class="infoInputs" type="text" placeholder="Où habitez vous ?">
                <input class="infoInputs" type="text" placeholder="Où étudiez/travaillez vous?">

                <div class="partnerChoice">
                    <p>Je suis le/la conjoint(e) de :</p>
                    <select name="" id=""></select>
                </div> 

                <input class="infoInputs" type="text" placeholder="Vos hobbies">
                <input class="infoInputs" type="text" placeholder="Quel(s) sport(s) pratiquez vous ?">

                <div class="bottomButton">
                    <span>Enregistrer</span>
                </div>
            </div>
        </main>
    </div>
</template>


<script>
export default {
    name: 'familyJoin',
}    
</script>

<style lang="scss" scoped>
.familyJoin {
    width: 100vw;
    height: 200vh;
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
.header {
    height: 10vh;
    .logo {
        width: 10%;
        margin: 1%;
    }
}

@mixin input_style {
    color: white;
    border: 2px solid white;
    border-width: 0 0 1px 0;
    background: transparent;
    font-size: 1.2em;
}


@media screen and (max-width: 450px) {
    @mixin listMenuStyle(){
        width: 50%;
        height: 1.5em;
        font-size: 1.2em;
        border-radius:10px;
        background: white;
        border: none;
    }

    .header {
        height: 15%;
        text-align: center;
        .logo {
            margin-top: 5%;
            width: 50%;
        }

        .goBack {
            box-sizing: border-box;
            width: 80%;
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

            p {
                color: white;
                margin-left: 6%;
                font-size: 1.5em;
            }
        }
    }

    main{
        width: 90%;
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
            font-size: 1.2em;
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

        .profilCreation{
            width: 90vw;
            margin-top: 50px;

            h3 {
                text-align: center;
                font-size: 1.4em;
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
                    width: 18vw;
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
                    width: 80%;
                    height: 3em;
                    border: 1px solid white;
                    border-radius: 0.8em;
                    margin: auto;
                    margin-top: 10%;
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
    }
}
</style>