<template>
        <div class="fullPostit">
            <div class="postit">
                <div class="postitContent">
                    <div class="profileInfos">
                        <div class="imgContainer">
                            <img class="profilePic" :src="profilePicture" alt="nom de la personne en question">
                        </div>
                    </div>
                    <div class="pattern">
                        <p>{{ name }}</p>
                        <span>{{ formatDate }}</span>
                    </div>
                </div>
            </div>
            <div class="postitTxt">
                <div class="imgContainer">
                    <img :src="imageSrc" alt="image">
                </div>
                <p>
                    {{ description }}
                </p>
            </div>
        </div>
</template>


<script>
export default {
    name: 'PostPicture',
    props: ['name', 'profilePicture', 'imageSrc', 'description', 'date'],
    computed: {
        formatDate () {
            const date = this.date ? this.date.substr(0, 10) : '2018-12-20'
            const splittedDate = date.split('-')
            const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
            return `${splittedDate[2]} ${month[splittedDate[1] - 1]} ${splittedDate[0]}`
        }
    }
}
</script>

<style lang="scss" scoped>

.fullPostit{
    height: 100%;
    width: 100%;
    margin-bottom: 10%;
}

    .postit{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60%;
        background-color: white;
        padding: 8px 0;
        font-family: roboto;

        .postitContent{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 89%;
            height: 85%;

            .profileInfos{
                position: relative;
                margin-right: 7%;

                .imgContainer{
                    width: 60px;
                    height: 60px;
                    overflow: hidden;
                    border-radius: 50%;
                    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);

                    .profilePic{
                        width: 100%;
                    }
                }
            }
            p{
                color: black;
                font-size: 0.85em;
                margin: 5% 0 3.5% 0;
                font-weight: 700;
            }

            span{
                color: black;
                width: 90%;
                font-size: 0.7em;
                font-weight: 100;
            }
        }
    }
    .postitTxt{
        font-family: roboto;
        position: relative;

        .imgContainer{
            width: 100%;
            height: 100%;
            overflow: hidden;

            img{
                padding-left: 20px;
                width: 78%;
                margin-left: 2%;

            }
        }

            p{
                padding: 20px;
                font-size: 0.8em;
                width: 78%;
                margin-left: 2%;
                border-radius: 2px;
            }
        }

</style>
