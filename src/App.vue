<template>
    <div id="app">
        <Landing/>
    </div>
</template>

<script>
import Landing from './components/landing.vue'

export default {
    name: 'app',
    components: {
        Landing
    }
}
</script>

<style lang="scss">
    body {
        margin: 0;
    }
</style>
