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
body {
    margin: 0;
}
</style>
