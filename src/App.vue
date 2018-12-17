<template>
    <div id="app">
        <familyJoin/>
    </div>
</template>

<script>
import familyJoin from './components/FamilyJoin.vue'

export default {
    name: 'app',
    components: {
        familyJoin,
    }
}
</script>

<style lang="scss">
    body{
        margin: 0
    }
</style>
