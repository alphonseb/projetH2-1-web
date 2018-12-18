<template>
    <div class="editContainer">
        <textarea ref="textEdit" @keypress.enter="insertLineBreak" placeholder="Votre histoire débute ici" v-model="$parent.content"></textarea>
    </div>
</template>

<script>
export default {
    name: 'book-editor'
}
</script>

<style lang="scss" scoped>
    .editContainer {
        width: 100%;
        height: 100%;

        textarea {
            width: calc(100% - 20px);
            height: calc(100% - 20px);
            margin: 0;
            padding: 10px;
            border: none;
            resize: none;
        }
    }
</style>


