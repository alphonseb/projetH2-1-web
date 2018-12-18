<template>
    <div class="editBook">
        <div class="editHeader">
            <div class="arrow"></div>
            <div class="settings">
                <span>Sauver</span>
                <span>Publier</span>
            </div>
        </div>
        <div class="addText">
            <input class="inputTitle" type="text" placeholder="Titre du livre">
            <div class="border"></div>
            <textarea name="newBook" id="newBook" cols="30" rows="10" placeholder="Votre histoire"></textarea>
        </div>
    </div>
</template>

<script>
export default {
    name : 'EditBook'
}
</script>

<style lang="scss">
.editBook{
    width : 100%;
    height: 100vh;
    overflow: hidden;
    margin : 0;
    font-family: Roboto;
    box-sizing: border-box;
    background: linear-gradient(180deg, #79BDD2 0%, #476FB5 100%);

    .editHeader{
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

        .settings{
            display: flex;
            justify-content: space-between;
            width: 35%;
            color: white;
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

        textarea{
            width: 90%;
            background-color: white;
            border: none;
            height: 72vh;
            margin-bottom: 20px
        }
    }

}
</style>
