<template>
    <div class="home">
        <img src="../assets/bg-tree.jpg" alt="Image de fond" class="bg-tree">
        <Header/>
        <Tree/>
    </div>
</template>

<script>
import Tree from "../components/Tree.vue";
import Header from "@/components/Header.vue";

export default {
    name: "Home",
    components: {
        Tree,
        Header
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
}
</style>
