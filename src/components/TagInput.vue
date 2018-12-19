<template>
    <div class="tagInput">
        <div class="tags">
            <div class="tag" v-for="(tag, i) in tags" :key="i" @click="deleteTag(tag)"> <span>{{ tag }}</span> <span class="delete">X</span></div>
        </div>
        <input type="text" v-model="tag" :placeholder="getPlaceholder" @keypress.enter="addTag" @keydown.delete="deleteLastTag">
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
            if (this.tag === '')
                return

            this.tags.push(this.tag)
            this.tag = ''
        },
        deleteTag (_tag) {
            this.tags = this.tags.filter(t => t !== _tag)
        },
        deleteLastTag () {
            if (this.tag !== '' || this.tags.length === 0)
                return

            this.tags.splice(this.tags.length - 1, 1)
        }
    },
    computed: {
        getPlaceholder () {
            return this.tags.length > 0 ? '': this.placeholder
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
    display: flex;

    .tags {
        width: auto;
        height: 100%;
        display: flex;

        .tag {
            position: relative;
            background: white;
            color: black;
            border-radius: 100px;
            padding: 5px 15px 5px 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 5px;

            .delete {
                position: absolute;
                right: 3px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 13px;
            }
        }
    }
    input {
        height: calc(100% - 6px);
        padding: 3px;
        border: none;
        background: none;
        font-size: 1.2em;
        color: white;

        &:focus {
            outline-width: 0;
        }
    }
}
</style>
