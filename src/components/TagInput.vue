<template>
    <div class="tagInput">
        <div class="tags">
            <div class="tag"></div>
        </div>
        <input type="text" v-model="tag" :placeholder="placeholder" @keypress.enter="addTag">
    </div>
</template>

<script>
import SEARCH_USER from '@/graphql/searchUser.graphql'

export default {
    props: ['placeholder'],
    data() {
        return {
            tag: '',
            tags: []
        }
    },
    methods: {
        addTag () {
            this.tags.push(this.tag)
            this.tag = ''
        }
    }
}
</script>

<style scoped lang="scss">
.tagInput {
    position: relative;
    width: 70vw;
    height: 25px;
    border-bottom: 1px solid white;
    margin-bottom: 20px;

    input {
        width: calc(100% - 6px);
        height: calc(100% - 6px);
        padding: 3px;
        border: none;
        background: none;
        font-size: 1.2em;
    }
}
</style>
