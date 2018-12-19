<template>
    <div class="search">
        <input type="text" v-model="search" @focus="showSuggest">
        <ul v-if="showSuggestion">
            <li v-for="(user, i) in searchUser" :key="i" @click="updateUser(user)">
                <img :src="user.profilePicture.src" alt="image de profil">
                <span>{{ user.name }}</span>
            </li>
        </ul>
        <!-- {{ searchUser }} -->
    </div>
</template>

<script>
import SEARCH_USER from '@/graphql/searchUser.graphql'

export default {
    props: ['familyType'],
    data() {
        return {
            search: '',
            showSuggestion: false
        }
    },
    apollo: {
        searchUser: {
            query: SEARCH_USER,
            variables () {
                return { name: this.search }
            }
        }
    },
    methods: {
        updateUser (_user) {
            if (this.familyType === 'fratery' || this.familyType === 'children')
                this.search = ''
            else
                this.search = _user.name

            this.showSuggestion = false
            this.$emit(`${this.familyType}Update`, _user)
        },
        showSuggest () {
            this.showSuggestion = true
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
        padding: 0;
        margin: 0;
        position: absolute;
        top: 100%;
        z-index: 5;

        li {
            height: 25px;
            width: 100%;
            list-style: none;
            background: white;
            border-bottom: 1px solid black;
            display: flex;

            img {
                height: 100%;
                width: auto;
            }

            span {
                display: flex;
                align-items: flex-end;
                font-size: 13px;
                color: black;
                margin-left: 10px;
            }
        }
    }
}
</style>
