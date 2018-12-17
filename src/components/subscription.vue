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

        .inscription {
            width: 100%;
            text-align: center;

        }

        ::placeholder {
            color: white;
        }

        @mixin perso{
            width: 90%;
            height: 10%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            margin-top: 3%;
        }

        .name {
            @include perso;

            input {
                width: 30%;
                color: white;
                border: 2px solid white;
                border-width: 0 0 1px 0;
                background: transparent;
                font-size: 0.9em;

            }
        }

        .gender {
            @include perso; 
        }
    }

</style>


