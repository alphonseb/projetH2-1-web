<template>
        <div class="notif">
            <div class="notifContent">
                <div class="profileInfos">
                    <img class="icon" src="../assets/flagIcon.png" alt="Nouvelle notification !">
                    <div class="imgContainer">
                        <img class="profilePic" :src="profilePicture" alt="nom de la personne en question">
                    </div>
                </div>
                <div class="pattern">
                    <p>{{name}} {{content}}.</p>
                    <span>{{date}}</span>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Notifs',
    props: ['name', 'profilePicture', 'content', 'date']
}
</script>

<style lang="scss" scoped>

    .notif{
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 60%;
        background-color: white;
        padding: 8px 0;

        .notifContent{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 89%;
            height: 85%;

            .profileInfos{
                position: relative;
                margin-right: 7%;

                .icon{
                position: absolute;
                bottom: 0;
                right: -4%;
                width: 20px;
                height: 20px;
                }

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
                width: 90%;
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

</style>
