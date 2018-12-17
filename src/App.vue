<template>
    <div id="app">
        <profileEdit/>
    </div>
</template>

<script>
import profileEdit from './components/ProfileEdit.vue'

export default {
    name: 'app',
    components: {
        profileEdit,
    }
}
</script>

<style lang="scss">
    body{
        margin: 0
    }
</style>
