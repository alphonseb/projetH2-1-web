<template>
    <div id="app">
        <profile/>
    </div>
</template>

<script>
import profile from './components/ProfileEdit.vue'

export default {
    name: 'app',
    components: {
        profile,
    }
}
</script>

<style lang="scss">
    body{
        margin: 0
    }
</style>
