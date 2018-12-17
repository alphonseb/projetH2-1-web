<template>
    <div class="hello">
        <input type="text" v-model="search">
        {{ searchUser }}
    </div>
</template>

<script>
import SEARCH_USER from '@/graphql/searchUser.graphql'

export default {
    data() {
        return {
            search: ''
        }
    },
    apollo: {
        searchUser: {
            query: SEARCH_USER,
            variables () {
                return { name: this.search }
            }
        }
    }
}
</script>

<style scoped lang="scss">

</style>
