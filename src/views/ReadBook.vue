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
                    <img src="../assets/testImages/user_relative.jpg" alt="">
                </div>
                <div class="mainInfos">
                    <h2>Titre du livre</h2>
                    <div class="date">1 janviers 2019</div>
                </div>
            </div>

            <book :content="book.content" :currentPage="currentPage"/>

            <div class="bottomBar">
                <div class="arrowRight" @click="previousPage"></div>
                <a href="#"><img class="addImage" src="../assets/addImage.png" alt="Ajoutez une image"></a><!-- Ajouter une image -->
                <span>{{ currentPage + 1 }}/{{ $children[0].pages.length }}</span>
                <a href="#"><img class="addNote" src="../assets/addNote.png" alt="Ajoutez un post-it"></a><!-- Ajouter un commentaire -->
                <div class="arrowLeft" @click="nextPage"></div>
            </div>
        </div>
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
            currentPage: 0
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
        }
    }
}
</script>

<style lang="scss" scoped>
.readBook {
    width: 100%;
    height: 100vh;
    overflow: hidden;
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
        margin-bottom: 2%;
        position: relative;

        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            position: absolute;
            top: -5px;
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
