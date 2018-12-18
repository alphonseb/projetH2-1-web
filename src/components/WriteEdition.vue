<template>
    <textarea ref="textEdit" @keypress.enter="insertLineBreak" placeholder="Votre histoire débute ici"></textarea>
</template>

<script>
export default {
    name: 'book-editor'
}
</script>

<style lang="scss" scoped>
    textarea {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        margin: 0;
        padding: 10px;
        border: none;
    }
</style>


