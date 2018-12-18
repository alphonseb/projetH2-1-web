<template>
    <div class="gallery">
        <!-- <div class="picture">
        
        </div> -->
        <transition name="slide">
            <div class="addPicture" v-show="showUpload">
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
            reader: new FileReader(),
            images: []
        }
    },
    methods: {
        addImage () {
            this.images.push(this.$refs.image.files[0])
        },
        updatePreview () {
            this.reader.readAsDataURL(this.$refs.image.files[0])
        }
    },
    mounted () {
        this.reader.addEventListener('load', _e => {
            this.$refs.preview.src = _e.target.result
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

        .addPicture {
            width: 100%;
            height: 100%;
            // background: red;
            text-align: center;

            .preview {
                height: 200px;
                width: 100%;

                img {
                   height: 200px;
                    width: auto;
                }
            }

            label, .validate {
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
                width: calc(100% - 15px);
                padding: 5px;
                height: 150px;
                margin: 0;
                margin-top: 20px; 
                font-size: 1.2rem;
                border: 1px solid black;
            }
        }
    }
</style>
