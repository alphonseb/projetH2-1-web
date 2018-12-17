<template>
    <div id="app">
        <subscription/>
    </div>
</template>

<script>
import subscription from './components/subscription.vue'

export default {
    name: 'app',
    components: {
        subscription,
    }
}
</script>

<style lang="scss">
    body {
        margin: 0;
    }
</style>
