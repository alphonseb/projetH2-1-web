<template>
    <main>
        <div class="editor">
            <input type="text" ref>
            <textarea ref="textEdit" @keypress.enter="insertLineBreak"></textarea>
        </div>
    </main>
</template>

<script>
export default {
    name: 'WriteBook',
    methods: {
        insertLineBreak () {
            console.log(this.$refs.textEdit.value)
        }
    }
}
</script>

<style lang="scss" scoped>
    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        textarea {
            width: 95vw;
            height: 95vh;
            border: 1px solid black;
        }
    }
</style>


