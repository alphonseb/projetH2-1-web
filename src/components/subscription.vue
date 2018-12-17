<template>
    <div class="page">
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt="">
        </div>
        <main>
            <div class="inscription">
                <div class="arrow"></div>
                <h3>Inscription</h3>
            </div>
            <div class="name">
                <input type="text" placeholder="Prénom">
                <input type="text" placeholder="Nom de famille">
            </div>
            <div class="gender">
                <div class="checkbox_container">
                    <div class="checkbox"></div>
                    <span>Femme</span>
                </div>
                <div class="checkbox_container">
                    <div class="checkbox"></div>
                    <span>Homme</span>
                </div>
            </div>
            <div class="birth">
                <p>Date de naissance</p>
                <div class="birth_inputs">
                    <input type="text">
                    <input type="text">
                    <input type="text">
                </div>
            </div>
            
            <div>
                
            </div>
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

        .inscription {
            width: 100%;
            text-align: center;

        }

        ::placeholder {
            color: white;
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

        .name {
            @include flex_style;

            input {
                width: 45%;
                @include input_style

            }
        }

        .gender {
            @include flex_style; 
            
            .checkbox_container {
                width: 45%;
                margin-top: 5%;
            }
            .checkbox {
                display: inline-block;
                margin-right: 5%;
                width: 0.6em;
                height: 0.6em;
                border: 1px solid white;
                border-radius: 2em;
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
        
    }

</style>


