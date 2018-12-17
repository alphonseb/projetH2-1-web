<template>
    <div class="familyJoin">
        <div class="header">
            <img class="logo" src="../assets/logo.png" alt="shelf logo">
        </div>
    </div>
</template>


<script>
export default {
    name: 'familyJoin',
}    
</script>

<style lang="scss" scoped>
    .familyJoin {
        width : 100vw;
        height: 100vh;
        overflow: hidden;
        margin : 0;
        background: linear-gradient(180deg, #7ABED3 2.19%, #79BDD2 13.36%, #476FB5 100%);
        font-family: Roboto;

        header {
            height: 10vh;
            width: 100%;

            .logo {
                width: 10%;
                margin: 1%;
            }
        }
    }
</style>