<template>
    <div class="search">
        <input type="text" v-model="search">
        <ul>
            <li></li>
        </ul>
        <!-- {{ searchUser }} -->
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
.search {
    position: relative;
    width: 150px;
    height: 21px;

    input {
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        padding: 3px;
        border: none;
    }

    ul {
        width: 100%;
        height: 30px;
        background: red;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 100%;

        li {
            list-style: none;
        }
    }
}
</style>
