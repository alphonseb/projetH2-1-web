<template>
    <div class="profile">
        <div class="profileHeader">
            <div class="goBack">
                <div class="arrow"></div>
                <p>Editez votre profil</p>
            </div>
            
            <img class="profilePic" src="../assets/profilePic.jpeg" alt="profilePic">
        </div>
        <div class="profileContent">
            <div class="gradient"></div>
            <div class="profileEditable">
                <div class="flexContainer">
                    <p class="customPic"><a href="#">Modifiez la photo</a></p>
                </div>
                <form action="submit">
                    <div class="names">
                        <div class="firstName">
                            <input type="text" id="name" name="name" required minlength="4" maxlength="28" size="10" placeholder="Prénom">
                        </div>
                        <div class="lastName">
                            <input type="text" id="name" name="name" required minlength="4" maxlength="28" size="10" placeholder="Nom">
                        </div>
                    </div>
                    <div class="genders">
                        <input type="radio" name="gender" id="man">      
                        <label for="man">Homme</label>                  
                        <input type="radio" name="gender" id="woman">
                        <label for="woman">Femme</label>
                    </div>
                    <div class="birth">
                        <p>Date de naissance</p>
                        <input class="birthDate" type="text" maxlength="2" placeholder="JJ">
                        <input class="birthDate" type="text" maxlength="2" placeholder="MM">
                        <input class="birthDate" type="text" maxlength="4" placeholder="AAAA">
                    </div>
                    <div class="informations">
                        <input type="text" id="emailInput" placeholder="Votre E-mail">
                    </div>
                    <div class="informations">
                        <input type="text" id="birthPlace" placeholder="Lieu de naissance">
                    </div>
                    <div class="informations">
                        <input type="text" id="home" placeholder="Où habitez-vous ?">
                    </div>
                    <div class="informations">
                        <input type="text" id="working" placeholder="Où étudiez-vous / Travaillez-vous ?">
                    </div>                    
                </form>
            </div>
            

        </div>
    </div>
</template>

<script>
export default {
    name : 'profile', 
}
</script>

<style lang="scss">

    .flexContainer{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .profile{
        width : 100%;
        height: 100vh;
        overflow: hidden;
        margin : 0;
        font-family: Roboto;
        box-sizing: border-box;

        .profileHeader{
            overflow: hidden;
            height: 50vh;
            .goBack{
                box-sizing: border-box;
                position: absolute;
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 10px 20px;

                .arrow{
                    width: 15px;
                    height: 15px;
                    border-top: solid white 3px;
                    border-left : solid white 3px;
                    transform: rotate(-45deg);
                }

                p{
                    color : white;
                    margin-left: 20px;
                }
            }

            .profilePic{
                margin-bottom: 30px;
                width: 100%;
                z-index: -2;
            }
        }

        .profileContent{
            background: linear-gradient(180deg, #7ABED300 2.19%, #79BDD2 24.36%, #476FB5 100%);
            position: absolute;
            top: 140px;
            width: 100%;
            height: 790px;
            z-index: 0;

            .customPic{
                z-index: 2;
                a{
                    color: white;
                    text-decoration: none;
                }
            }

            .profileEditable{
                margin-top: 60px;
                form{
                    margin: 90px 60px;
                    justify-content: space-between;

                    div{
                        margin: 17px 0;
                    }

                    input{
                        background: rgba(0,0,0,0);
                        border: none;
                        border-bottom: white solid 1px;
                        color: white;
                    }
                    input::placeholder{
                        color: white;
                        opacity: 0.5;
                    }

                    .names, .genders{
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                        color: white;
                    }

                    .names{
                        height: 60px;
                    }

                    .firstName input, .lastName input{
                        width: 120px;
                    }

                    p{
                        margin: 4px 0;
                        color: white;
                    }

                    .birth input.birthDate{
                        background:white;
                        border-radius: 2px;
                        width: 35px;
                        margin: 0 6px 0 0;
                        color: #b4b4b4;
                    }

                    .informations{
                        margin-top: 40px;
                        width: 100%;
                    }

                    #emailInput, #birthPlace, #home, #working{
                        width: 100%;
                    }
                    
                }
            }
        }
    }
</style>

