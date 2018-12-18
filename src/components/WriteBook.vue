<template>
    <div class="editor">
        <header>
            <input type="text" ref="title" placeholder="Titre" class="title"/>
        </header>
        <main class="container">
            <router-view/>
        </main>
        <footer>
            <router-link to="galerie" v-if="$route.path === '/book/edit'">
                <img src="@/assets/addPicture-logo.png" alt="Ajouter une image">
            </router-link>
            <router-link to="edit" v-if="$route.path === '/book/galerie'">
                <img src="@/assets/pen-icon.png" alt="Ajouter une image" >
            </router-link>
            <a href="" title="publish" @click.prevent="publishBook">
                <img src="@/assets/publish-icon.png" alt="Publier le livre" >
            </a>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'WriteBook',
    data () {
        return {
            type: 'create'
        }
    },
    methods: {
        publishBook () {
            console.log('SUCE LA SAUCE')
        }
    }
}
</script>

<style lang="scss" scoped>
    .editor {
        width: 100%;
        height: 100vh;
        border: 1px solid black;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: white;

        header {
            height: 7%;
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;

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
            height: calc(80% - 20px);
            padding: 10px;
            position: relative;

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

        footer {
            width: calc(100% - 20px);
            height: calc(7% - 10px);
            padding: 5px;
            padding-left: 10px;
            padding-right: 10px;
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;

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


