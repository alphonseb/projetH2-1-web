<template>
    <div id="app">
        <Tree/>
    </div>
</template>

<script>
import Tree from "./components/Tree.vue";

export default {
    name: "app",
    components: {
        Tree
    }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
