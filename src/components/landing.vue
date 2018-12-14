<template>
    <div class="landing_page">
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt="">
        </div>
        <main>
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
    .landing_page {
        width : 100vw;
        height: 100vh;
        overflow: hidden;
        margin : 0;
        background: linear-gradient(180deg, #7ABED3 2.19%, #79BDD2 13.36%, #476FB5 100%);
        font-family: Roboto;
    }

    @media screen and (max-width: 380px) {
        .header {
            height: 20%;
            text-align: center;

            .logo{
                margin-top : 5%;
                width : 50%;
            }
        }

        main {
            color: white;
            height: 80%;

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
                        font-size : 14px;
                        position : absolute;
                    }

                    .fisrt_line {
                        left: -10%; 
                    }

                    .second_line {
                        top : 30%;
                    }
                }
            }

            .sign {
                height : 70%;
                width : 100%;
                .id_field {
                    width: 100%;
                    height: 20%;
                    display: flex;
                    flex-direction: column;
                    opacity: 0.86;
                    position: relative;
                    

                    input {
                        height : 50%;
                        padding-left: 7%;
                        border : none;
                        display: block;

                        
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

            }
        }
    }

</style>


