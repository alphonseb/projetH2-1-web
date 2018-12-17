<template>
    <div class="profileEdit">
        <div class="profileHeader">
            <div class="goBack">
                <div class="arrow"></div>
                <p>Editez votre profil</p>
            </div>
            
            <img class="profilePic" src="../assets/profilePic.jpeg" alt="profilePic">
        </div>
        <div class="profileContent">
            <div class="profileEditable">
                <div class="flexContainer">
                    <p class="customPic"><a href="#">Modifiez la photo</a></p>
                </div>
            <form action="submit">
                    <div class="names">
                        <input type="text" id="name" name="name" required minlength="4" maxlength="28" size="10" placeholder="Prénom">
                        <input type="text" id="name" name="name" required minlength="4" maxlength="28" size="10" placeholder="Nom">
                    </div>
                    <div class="genders">
                        <div class="checkbox_container">
                            <input type="radio" name="gender" id="man">
                            <label for="man">Homme</label> 
                        </div>
                        <div class="checkbox_container">
                            <input type="radio" name="gender" id="woman">
                            <label for="woman">Femme</label> 
                        </div>
                    </div>
                    <div class="birth">
                        <p>Date de naissance</p>
                        <div class="birth_inputs">
                            <input class="birthDate" type="text" maxlength="2" placeholder="JJ">
                            <input class="birthDate" type="text" maxlength="2" placeholder="MM">
                            <input class="birthDate" type="text" maxlength="4" placeholder="AAAA">
                        </div>
                    </div>

                    <div class="informations">
                        <input type="text" placeholder="Votre E-mail">
                    </div>
                    <div class="informations">
                        <input type="text" placeholder="Lieu de naissance">
                    </div>
                    <div class="informations">
                        <input type="text" id="home" placeholder="Où habitez-vous ?">
                    </div>
                    <div class="informations">
                        <input type="text" placeholder="Où étudiez-vous / Travaillez-vous ?">
                    </div>  
                    <div class="informations">
                        <input type="text" placeholder="Vos hobbies">
                    </div>  
                    <div class="informations">
                        <input type="text" placeholder="Quel(s) sport(s) pratiquez vous?">
                    </div>  

                
                    <div class="bottom_button">
                        <span>Enregistrer</span>
                    </div>                 
                </form>
            </div>
            

        </div>
    </div>
</template>

<script>
export default {
    name : 'profileEdit', 
}
</script>

<style lang="scss" scoped>

    .flexContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10%;
    }

    .profileEdit{
        width : 100%;
        height: 170vh;
        overflow: hidden;
        margin : 0;
        font-family: Roboto;
        box-sizing: border-box;
        color: white;

        .profileHeader{
            height: 50vh;
            position: fixed;
            .goBack{
                box-sizing: border-box;
                position: absolute;
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 3% 8%;

                .arrow{
                    width: 15px;
                    height: 15px;
                    border-top: solid white 3px;
                    border-left : solid white 3px;
                    transform: rotate(-45deg);
                }

                p{
                    color : white;
                    margin-left: 6%;
                }
            }

            .profilePic{
                width: 100%;
            }
        }

        .profileContent{
            background: linear-gradient(180deg, #7ABED300 2.19%, #79BDD2 24.36%, #476FB5 100%);
            position: absolute;
            top: 20vh;
            width: 100%;
            height: 115vh;
            z-index: 3;
            padding-top: 30vh;

            .customPic{
                z-index: 2;
                a{
                    color: white;
                    text-decoration: none;
                }
            }

            .profileEditable{
                width: 90%;
                margin: auto;

                form{
                    width: 100%;

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
                        
                        .checkbox_container {
                            width: 45%;
                            margin-top: 5%;
                        }
                    }

                    .birth {
                        margin-top: 10%;

                        .birth_inputs {
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

                    .informations{
                        margin-top: 40px; 

                        input {
                            @include input_style;
                            width: 90%;
                        }                       
                    }

                    

                    .bottom_button {
                        width: 100%;
                        height: 3em;
                        margin-top: 5%;
                        border: 1px solid white;
                        border-radius: 0.8em;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 20%;

                        span {
                            height: 1.5em;
                            font-size: 1.5em;
                            font-weight: 400;
                        }
                    }
                    
                }
            }
        }
    }
</style>

