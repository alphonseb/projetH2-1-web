<template>
    <div class="page">
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt="">
        </div>
        <main>
            <img class="background_tree" src="../assets/bg-tree.jpg" alt="">
            <div class="top">
                <img src="#" alt="">
                <div class="top_text">
                    <p class="fisrt_line">Votre famille a une <strong>histoire unique,</strong></p>
                    <p class="second_line">écrivez, consultez, conservez l'histoire de votre famille avec <strong>Shelf</strong></p>
                </div>
            </div>
            <div class="sign">
                <div class="id_field">
                    <input class="sign_email" type="text" placeholder="e-mail">
                    <div class="border_bottom"></div>
                    <input type="text" placeholder="mot de passe">
                </div>
                <div class="sign_buttons">
                    <div><a>Se connecter</a></div>
                    <div class="fb_button">
                        <img src="../assets/fb-logo.png" alt="">
                        <a>S'inscrire avec Facebook</a>
                    </div>
                    <div><a>S'inscrire</a></div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'landing',
    
}    
</script>

<style lang="scss" scoped>
    .page {
        width : 100vw;
        height: 100vh;
        overflow: hidden;
        margin : 0;
        background: linear-gradient(180deg, #7ABED3 2.19%, #79BDD2 13.36%, #476FB5 100%);
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

            .logo{
                margin-top : 5%;
                width : 50%;
            }
        }

        main {
            position: relative;
            color: white;
            height: 80%;

            .background_tree {
                position: absolute;
                top : -15%;
                right: 10%;
                opacity: 0.2;
                transform: scaleX(-1);
            }

            .top {
                width: 100%;
                height : 30%;

                .top_text {
                    width: 100%;
                    height: 100%;
                    position: relative;

                    p {                    
                        width : 35%;
                        height : 100%;
                        margin : 0;
                        margin-left: 60%;
                        font-size : 1em;
                        position : absolute;
                        font-weight: 100;
                    }

                    .fisrt_line {
                        top : -15%;
                        left: -15%; 
                    }

                    .second_line {
                        top : 25%;
                    }
                }
            }

            .sign {
                height : 70%;
                width : 100%;
                position: relative;
                z-index: 1;

                .id_field {
                    width: 90%;
                    height: 20%;
                    margin: auto;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: column;
                    background-color: rgba(255, 255, 255, 0.86);
                    position: relative;
                    

                    input {
                        height : 50%;
                        padding-left: 7%;
                        border : none;
                        display: block;
                        background-color: transparent;         
                    }

                    .border_bottom {
                        position: absolute;
                        width: 90%;
                        height: 1px;
                        bottom: 50%;
                        left: 5%;
                        background: rgba(0, 0, 0, 0.22);
                    }
                }

                .sign_buttons {
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

                    .fb_button {
                        width: 90%;
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        background-color: #4267B2;
                        border-radius: 15px;
                        font-size: 18px;   

                        img {
                            position: absolute;
                            left: 2%;
                            width: 14%;
                        }
                    }

                    .fb_button + div {
                        font-size: 0.8em;
                    }
                                                  
                }

            }
        }
    }

</style>


