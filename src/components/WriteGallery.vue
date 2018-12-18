<template>
    <div class="gallery">
        <div class="pictures">
            <a class="showAddPicture" href="" title="ajouter une image" @click.prevent="toggleUpload">+</a>
            <div class="picture" v-for="(img, i) in $parent.imagesSources" :key="i">
                <img :src="img.src" alt="image">
                <p>{{ img.description }}</p>
            </div>
        </div>
        <transition name="slide">
            <div class="addPicture" v-show="showUpload">
                <a href="" title="retour arrière" class="back" @click.prevent="toggleUpload"><</a>
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
export default {
    name: 'bookGallery',
    data () {
        return {
            showUpload: false,
            previewReader: new FileReader(),
            addReader: new FileReader()
        }
    },
    methods: {
        addImage () {
            this.$parent.imagesFile.push({
                file: this.$refs.image.files[0],
                description: this.$refs.description.value
            })
            this.addReader.readAsDataURL(this.$refs.image.files[0])
        },
        updatePreview () {
            this.previewReader.readAsDataURL(this.$refs.image.files[0])
        },
        toggleUpload () {
            this.showUpload = !this.showUpload
        }
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
    .slide-enter-active, .slide-leave-active {
        transition: transform .5s;
    }
    .slide-enter, .slide-leave-to {
        transform: translateY(100%);
    }

    .gallery {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .pictures {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            text-align: center;
            overflow: scroll;

            .showAddPicture {
                display: inline-block;
                width: 90%;
                height: auto;
                font-size: 2.5rem;
                margin-top: 20px;
                color: black;
            }

            .picture {
                display: inline-block;
                width: 90%;
                height: 150px;
                margin-top: 20px;

                img {
                    height: 80%;
                    width: auto;
                }
            }
        }

        .addPicture {
            position: absolute;
            top: -2px;
            left: 0;
            width: 100%;
            height: 105%;
            text-align: center;
            border-top: 1px solid black;
            background: white;

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
                font-size: .8rem;
            }

            .imageInput {
                display: none;
            }

            textarea {
                display: block;
                width: calc(100% - 30px);
                padding: 5px;
                height: 150px;
                margin: auto;
                margin-top: 20px;
                font-size: 1.2rem;
                border: 1px solid black;
            }
        }
    }
</style>
