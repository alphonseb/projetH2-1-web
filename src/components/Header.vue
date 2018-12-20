<template>
    <div class="profileHeader">
        <div class="profilePic" @click="openMenu">
            <img class="profilePic" :src="profileImgSrc" alt="profile pic">
        </div>
        <div class="searchBar">
            <input type="text">
            <img src="../assets/search.svg" alt="search">
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        profileImgSrc: String
    },
    methods: {
        openMenu() {
            this.$parent.menuOpened = true;
        }
    }
};
</script>

<style lang="scss" scoped>
.profileHeader {
    display: flex;
    position: absolute;
    z-index: 200;
    top: 2%;
    width: 100%;
    justify-content: space-around;
    align-items: center;

    .profilePic {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            object-fit: cover;
        }
    }

    .searchBar {
        display: inline;
        position: relative;
        border: 1px white solid;
        border-radius: 200px;

        input {
            background: none;
            border: none;
            width: 200px;
            height: 22px;
            color: white;
            padding-left: 5%;
        }

        img {
            position: absolute;
            right: 8px;
            top: 50%;
            width: 17px;
            height: 17px;
            transform: translateY(-50%);
        }
    }
}
</style>

