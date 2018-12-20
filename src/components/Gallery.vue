<template>
    <div class="PostitPage">
        <h2 class="pageTitle">Galerie</h2>
        <div class="container">
            <post-picture
                v-for="(media, i) in medias"
                :key="i"
                :name="media.author.name"
                :profilePicture="media.author.profilePicture.src"
                :imageSrc="media.src"
                :description="media.description"
                :date="media.date"
            />
        </div>
        <div class="toggleAddPicture" @click="toggleUpload">
            <span>+</span>
            <br>Partagez une image souvenir
        </div>
        <transition name="slide">
            <div class="addPicture" v-show="showUpload">
                <a href title="retour arrière" class="back" @click.prevent="toggleUpload"><</a>
                <div class="preview">
                    <img src="../assets/fb-logo.png" alt="image à ajouter" ref="preview">
                </div>
                <label for="file">Ajouter un fichier</label>
                <input type="file" ref="image" @change="updatePreview" class="imageInput" id="file">
                <textarea ref="description" placeholder="Description"></textarea>
                <input type="submit" @click.prevent="addImage" class="validate">
            </div>
        </transition>
    </div>
</template>

<script>
import ADD_MEDIA from '@/graphql/addMedia.graphql'

import PostPicture from '@/components/PostPicture'

export default {
    name: 'Gallery',
    props: ['medias'],
    data () {
        return {
            showUpload: false,
            previewReader: new FileReader(),
            addReader: new FileReader()
        }
    },
    methods: {
        async addImage () {
            if (!this.$refs.image.files[0])
                return

            const variables = {
                bookId: this.$parent.book.id,
                file: this.$refs.image.files[0],
                description: this.$refs.description.value
            }

            const { data: { addMedia } } = await this.$apollo.mutate({
                mutation: ADD_MEDIA,
                variables
            })

            this.$parent.book.medias.push(addMedia)
            this.toggleUpload()
        },
        updatePreview () {
            this.previewReader.readAsDataURL(this.$refs.image.files[0])
        },
        toggleUpload () {
            this.showUpload = !this.showUpload
        }
    },
    components: {
        PostPicture
    },
    mounted () {
        this.previewReader.addEventListener('load', _e => {
            this.$refs.preview.src = _e.target.result
        })

        this.addReader.addEventListener('load', _e => {
            this.$parent.imagesSources.push({
                src: _e.target.result,
                description: this.$refs.description.value
            })

            this.$refs.description.value = ''
            this.$refs.image.value = ''
            this.showUpload = false
        })
    }
}
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-enter,
.slide-leave-to {
    transform: translateY(100%);
}

.PostitPage {
    width: 100%;
    height: 100%;
    padding: 4% 0 28% 0;
    margin: 0;
    font-family: Roboto;
    box-sizing: border-box;
    background: white;

    h2.pageTitle {
        font-family: roboto;
        font-size: 1em;
        margin-left: 4%;
    }

    .container {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .toggleAddPicture {
        width: 100%;
        height: 50px;
        background: white;
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 12px;
        text-align: center;

        span {
            font-size: 20px;
        }
    }

    .addPicture {
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 105%;
        text-align: center;
        border-top: 1px solid black;
        background: white;
        z-index: 2;
        overflow: scroll;

        .back {
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 2rem;
            color: black;
        }

        .preview {
            height: 200px;
            width: 100%;

            img {
                height: 200px;
                width: auto;
            }
        }

        label,
        .validate {
            display: inline-block;
            padding: 8px;
            border: 1px solid black;
            border-radius: 100px;
            margin-top: 20px;
            background: white;
            font-size: 0.8rem;
        }

        .imageInput {
            display: none;
        }

        textarea {
            display: block;
            width: calc(100% - 30px);
            padding: 5px;
            height: 60px;
            margin: auto;
            margin-top: 20px;
            font-size: 1.2rem;
            border: 1px solid black;
        }
    }
}
</style>
