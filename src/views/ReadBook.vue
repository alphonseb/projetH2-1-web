<template>
    <div class="readBook">
        <div class="readHeader">
            <a href="#" @click.prevent="$router.back()">
                <div class="arrow"></div>
            </a> <!-- retour en arrière -->
            <div class="imgContainer">
                <img src="../assets/logoIcon.png" alt="Icone votre profil">
            </div>
        </div>
        <div class="addText">
            <div class="textHeader">
                <div class="imgContainer">
                    <img :src="book.author.profilePicture.src" alt="auteur">
                </div>
                <div class="mainInfos">
                    <h2>{{ book.title }}</h2>
                    <div class="date">{{ formatDate }}</div>
                </div>
            </div>
            <div class="container">
                <book :content="book.content" :currentPage="currentPage"/>
                <transition name="slide">
                    <comments class="comments" v-show="hasComments" :comments="book.comments"/>
                </transition>
                <transition name="slide">
                    <gallery class="gallery" v-show="hasGallery"/>
                </transition>
            </div>
            <div class="bottomBar">
                <div class="arrowRight" @click="previousPage"></div>
                <a href="" title="affcher la gallerie" @click.prevent="toggleGallery"><img class="addImage" src="../assets/addImage.png" alt="Ajoutez une image"></a><!-- Ajouter une image -->
                <span>{{ currentPage + 1 }}/{{ pagesLength }}</span>
                <a href=""  title="afficher les commentaires" @click.prevent="toggleComments"><img class="addNote" src="../assets/addNote.png" alt="Ajoutez un post-it"></a><!-- Ajouter un commentaire -->
                <div class="arrowLeft" @click="nextPage"></div>
            </div>
        </div>
        <div style="width:100%;height:1px;margin-top: 50px;"></div>
    </div>
</template>

<script>
import BOOK from '@/graphql/book.graphql'

import Book from '@/components/Book'
import Comments from '@/components/Comments'
import Gallery from '@/components/Gallery'

export default {
    name : 'ReadBook',
    data () {
        return {
            currentPage: 0,
            pagesLength: '00',
            hasComments: false,
            hasGallery: false
        }
    },
    components: {
        Book,
        Comments,
        Gallery
    },
    apollo: {
        book: {
            query: BOOK,
            variables () { 
                return { id: this.$route.params.id }
            }
        }
    },
    methods: {
        nextPage () {
            if (this.currentPage <= this.$children[0].pages.length - 2)
                this.currentPage++
        },
        previousPage () {
            if (this.currentPage - 1 >= 0)
                this.currentPage--
        },
        toggleGallery () {
            this.hasGallery = !this.hasGallery
            if (this.hasComments)
                this.hasComments = false
        },
        toggleComments () {
            this.hasComments = !this.hasComments
            if (this.hasGallery)
                this.hasGallery = false
        }
    },
    updated () {
        if (this.$children[0])
            this.pagesLength = this.$children[0].pages.length
    },
    computed: {
        formatDate () {
            const date = this.book.createdAt.substr(0, 10)
            const splittedDate = date.split('-')
            const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
            return `${splittedDate[2]} ${month[splittedDate[1] - 1]} ${splittedDate[0]}`
        }
    }
}
</script>

<style lang="scss" scoped>
.slide-enter-active, .slide-leave-active {
    transition: transform .5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.slide-enter, .slide-leave-to {
    transform: translateY(100%);
}

.container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
 
    .gallery, .comments {
       position: absolute;
        bottom: 0;
    }
}

.readBook {
    width: 100%;
    height: 100vh;
    margin: 0;
    font-family: Roboto;
    box-sizing: border-box;
    background: linear-gradient(180deg, #79BDD2 0%, #476FB5 100%);

    .readHeader {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 20px;

        .arrow {
            width: 15px;
            height: 15px;
            border-top: solid white 3px;
            border-left: solid white 3px;
            transform: rotate(-45deg);
        }

        .imgContainer {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }

    .addText {
        position: relative;
        margin: 0 auto;
        width: 88%;
        background: white;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.3);

        .textHeader {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 85%;
            margin-top: 2%;
            position: relative;
            
            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 1px;
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                background: black;
            }

            .imgContainer {
                width: 35px;
                height: 35px;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                }
            }

            .mainInfos {
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                margin-left: 30px;

                h2 {
                    margin: 3px 0;
                }
            }

        }
    }

    .borderBottom {
        position: absolute;
        bottom: 8%;
    }

    .bottomBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 50px;
        position: relative;
        background: white;

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            top: 0px;
            left: 50%;
            transform: translateX(-50%);
            background: black;
        }

        .addImage,
        .addNote {
            position: relative;
            width: 30px;
        }

        .arrowLeft {
            width: 6px;
            height: 6px;
            border-top: solid black 3px;
            border-left: solid black 3px;
            transform: rotate(135deg);
        }

        .arrowRight {
            width: 6px;
            height: 6px;
            border-top: solid black 3px;
            border-left: solid black 3px;
            transform: rotate(-45deg);
        }

        span {
            font-size: 0.8em;
        }

    }



}
</style>
