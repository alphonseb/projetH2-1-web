<template>
    <div class="home">
        <img src="../assets/bg-tree.jpg" alt="Image de fond" class="bg-tree">
        <Header/>
        <Tree/>
        <Navbar class="navbar"/>
    </div>
</template>

<script>
import Tree from "../components/Tree.vue";
import Header from "@/components/Header.vue";
import Navbar from "@/components/Navbar.vue";

export default {
    name: "Home",
    components: {
        Tree,
        Header,
        Navbar
    }
};
</script>

<style lang="scss" scoped>
.home {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(
        180deg,
        #7abed3 2.19%,
        #79bdd2 13.36%,
        #476fb5 100%
    );
    .bg-tree {
        position: absolute;
        left: -100px;
        height: 100%;
        opacity: 0.2;
    }
    .navbar {
        position: absolute;
        bottom: 0;
        left: 0;
    }
}
</style>
