<template>
    <div class="PostitPage">
        <div class="postitMenu">
            <a href="#"><div class="arrow"></div></a> <!-- retour en arrière -->
            <div class="imgContainer">
                <img src="../assets/logoIcon.png" alt="Icone votre profil">
            </div>
        </div>
        <div class="postitList">
            <div class="textHeader">
            <div class="imgContainer">
                <img src="../assets/testImages/user_relative.jpg" alt="">
            </div>
            <div class="mainInfos">
                <h2>Titre du livre</h2>
                <div class="date">1 janviers 2019</div>
            </div>
            
            </div>
            <div class="border"></div>
            <postit name="Jérome Dubois" profilePicture="../assets/testImages/user_relative.jpg" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sed inventore. Fugit quia ratione exercitationem suscipit veniam mollitia pariatur provident ut autem earum, aliquam labore dolor nihil incidunt consequatur assumenda." date="09/11/2001" />
            <postit name="Jérome Dubois" profilePicture="../assets/testImages/user_relative.jpg" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sed inventore. Fugit quia ratione exercitationem suscipit veniam mollitia pariatur provident ut autem earum, aliquam labore dolor nihil incidunt consequatur assumenda." date="09/11/2001" />
            <postit name="Jérome Dubois" profilePicture="../assets/testImages/user_relative.jpg" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sed inventore. Fugit quia ratione exercitationem suscipit veniam mollitia pariatur provident ut autem earum, aliquam labore dolor nihil incidunt consequatur assumenda." date="09/11/2001" />
            <postit name="Jérome Dubois" profilePicture="../assets/testImages/user_relative.jpg" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, sed inventore. Fugit quia ratione exercitationem suscipit veniam mollitia pariatur provident ut autem earum, aliquam labore dolor nihil incidunt consequatur assumenda." date="09/11/2001" />
            <div class="bottomBar">
                <div class="arrowRight"></div>
                <a href="#"><img class="addImage" src="../assets/addImage.png" alt="Ajoutez une image"></a><!-- Ajouter une image -->
                <span>16/16</span>
                <a href="#"><img class="addNote" src="../assets/addNote.png" alt="Ajoutez un post-it"></a><!-- Ajouter un commentaire -->
                <div class="arrowLeft"></div>
            </div>
            
        </div>
    </div>
</template>

<script>
import Postit from '@/components/Postit'

export default {
    name: 'AllPostit',
    components: {
        Postit
    }
}
</script>

<style lang="scss" scoped>
.PostitPage{
    width : 100%;
    padding: 4% 0 28% 0;
    margin : 0;
    font-family: Roboto;
    box-sizing: border-box;
    background: linear-gradient(180deg, #79BDD2 0%, #476FB5 100%);

    .postitMenu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 20px;

        .arrow{
            width: 15px;
            height: 15px;
            border-top: solid white 3px;
            border-left : solid white 3px;
            transform: rotate(-45deg);
        }

        .imgContainer{
            width: 35px;
            height: 35px;
            border-radius: 50%;
            overflow: hidden;

            img{
                width: 100%;
            }
        }
    }

    .postitList{
        position: relative;
        margin: 0 auto;
        width: 88%;
        background: white;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        box-shadow: 0px 5px 20px rgba(0,0,0,0.3);


        .textHeader{
            display: flex;
            margin-top: 2%;
            align-items: center;
            justify-content: space-between;
            width: 85%;
            .imgContainer{
                width: 35px;
                height: 35px;
                border-radius: 50%;
                overflow: hidden;

                img{
                    width: 100%;
                }
            }
            .mainInfos{
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: center;
                margin-left: 30px;

                h2{
                    margin: 3px 0;
                }
            }
            
        }

        .border{
            width: 90%;
            height: 1px;
            background-color: rgba(0,0,0,0.3);
            margin: 2% 0;
        }

        p{
            width: 90%;
            background-color: white;
            border: none;
            height: 60vh;
            margin-bottom: 2%
        }
    }

    .bottomBar{
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 20px;

        .addImage, .addNote{
            position: relative;
            width: 30px;
        }

        .arrowLeft{
            width: 6px;
            height: 6px;
            border-top: solid black 3px;
            border-left : solid black 3px;
            transform: rotate(135deg);
        }
        
        .arrowRight{
            width: 6px;
            height: 6px;
            border-top: solid black 3px;
            border-left : solid black 3px;
            transform: rotate(-45deg);
        }

        span{
            font-size: 0.8em;
        }

    }

    

}
</style>
