<template>
    <div class="editor">
        <header>
            <input type="text" v-model="title" placeholder="Titre" class="title">
        </header>
        <main class="container">
            <router-view/>
        </main>
        <footer>
            <router-link to="gallery" v-if="$route.path === '/write/edit'">
                <img src="@/assets/addPicture-logo.png" alt="Ajouter une image">
            </router-link>
            <router-link to="edit" v-if="$route.path === '/write/gallery'">
                <img src="@/assets/pen-icon.png" alt="Ajouter une image">
            </router-link>
            <a href title="publish" @click.prevent="publishBook">
                <img src="@/assets/publish-icon.png" alt="Publier le livre">
            </a>
        </footer>
        <div style="height: 1px; width: 100%; margin-top: 50px;"></div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import CREATE_BOOK from '@/graphql/createBook.graphql'
import ADD_MEDIA from '@/graphql/addMedia.graphql'

export default {
    name: 'WriteBook',
    data () {
        return {
            type: 'create',
            imagesFile: [],
            imagesSources: [],
            title: '',
            content: ''
        }
    },
    computed: {
        ...mapState({
            to: state => state.to
        })
    },
    methods: {
        async publishBook () {
            if (this.title === '' || this.content === '')
                return
            const { data: { createBook: { id } } } = await this.$apollo.mutate({
                mutation: CREATE_BOOK,
                variables: {
                    title: this.title,
                    content: this.content,
                    id: this.to
                }
            })

            await this.imagesFile.forEach(_img => {
                this.$apollo.mutate({
                    mutation: ADD_MEDIA,
                    variables: {
                        bookId: id,
                        file: _img.file,
                        description: _img.description
                    }
                })
            })

            this.$router.push({ name: 'user', params: { id: this.to } }, () => { location.reload() })
        }
    }
}
</script>

<style lang="scss" scoped>
.editor {
    width: 100%;
    height: 90vh;
    border: 1px solid black;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: white;
    position: relative;

    header {
        height: 7%;
        width: 100%;
        display: flex;
        justify-content: center;
        position: relative;
        z-index: 20;

        input {
            height: calc(100% - 10px);
            border: none;
            padding: 5px;
            font-size: 1.3rem;
            width: 95%;
        }

        &::after {
            content: '';
            display: block;
            width: 95%;
            height: 1px;
            background: black;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    .container {
        width: calc(100% - 20px);
        height: calc(85% - 20px);
        padding: 10px;
        position: relative;
    }

    footer {
        width: calc(100% - 20px);
        height: calc(7% - 10px);
        padding: 5px;
        padding-left: 10px;
        padding-right: 10px;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        position: absolute;
        bottom: 0;

        &::before {
            content: '';
            display: block;
            width: 95%;
            height: 1px;
            background: black;
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
        }

        a {
            width: 60px;
            text-align: center;
            display: inline-block;

            img {
                height: 100%;
                width: auto;
            }
        }
    }
}
</style>


