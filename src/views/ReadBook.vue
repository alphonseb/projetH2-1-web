<template>
    <div class="readBook">
        <div class="readHeader">
            <div class="arrow"></div>
            <div class="imgContainer">
                <img src="../assets/logoIcon.png" alt="">
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
            <div class="border"></div>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quod rem. Fugit voluptate repellendus, totam a unde ab libero laboriosam, maiores possimus alias hic repudiandae obcaecati. Mollitia et error saepe?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quod rem. Fugit voluptate repellendus, totam a unde ab libero laboriosam, maiores possimus alias hic repudiandae obcaecati. Mollitia et error saepe?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quod rem. Fugit voluptate repellendus, totam a unde ab libero laboriosam, maiores possimus alias hic repudiandae obcaecati. Mollitia et error saepe?

            </p>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ReadBook'
}
</script>

<style lang="scss">
.readBook{
    width : 100%;
    height: 100vh;
    overflow: hidden;
    margin : 0;
    font-family: Roboto;
    box-sizing: border-box;
    background: linear-gradient(180deg, #79BDD2 0%, #476FB5 100%);

    .readHeader{
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

    .addText{
        margin: 0 auto;
        width: 88%;
        background: white;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        box-shadow: 0px 5px 5px rgba(0,0,0,0.3);


        .textHeader{
            display: flex;
            
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



        

        .inputTitle{
            margin-top: 10px;
            height: 25px;
            width: 90%;
            font-family: 'Playfair Display', serif;
            border: none;
        }
        
        .inputTitle::placeholder{
            color: black;
            opacity: 0.5;
        }

        .border{
            width: 90%;
            height: 1px;
            background-color: rgba(0,0,0,0.3);
            margin: 15px 0;
        }

        p{
            width: 90%;
            background-color: white;
            border: none;
            height: 62vh;
            margin-bottom: 20px
        }
    }

}
</style>
