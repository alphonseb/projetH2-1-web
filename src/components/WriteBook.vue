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
        </footer>
    </div>
</template>

<script>
export default {
    name: 'WriteBook',
    methods: {
        insertLineBreak () {
            console.log(this.$refs.textEdit.value)
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
            height: calc(77% - 20px);
            padding: 10px;
        }

        footer {
            width: calc(100% - 10px);
            height: calc(10% - 10px);
            padding: 5px;
            display: flex;
            flex-direction: row-reverse;
            background: red;

            a {
                width: 60px;
                display: inline-block;

                img {
                   height: 100%;
                    width: auto;
                }
            }
        }
    }
</style>


