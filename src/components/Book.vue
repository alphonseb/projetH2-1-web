<template>
    <div style="position:relative;">
        <p ref="a">
            {{ pages[currentPage] }}
        </p>
        <p class="hidden" ref="hidden">

        </p>
    </div>
</template>

<script>
export default {
    name: 'book',
    props: ['content', 'currentPage'],
    data () {
        return {
            pages: []
        }
    },
    methods: {
        duplicateValue (_value) {
            return JSON.parse(JSON.stringify(_value))
        }
    },
    mounted () {
        const splittedContent = this.content.split(' ')
        const splittedContentCopy = this.duplicateValue(splittedContent)

        let page = ''
        do {
            for (let i = 0; i < splittedContent.length; i++) {
                this.$refs.hidden.textContent += `${splittedContent[i]} `
                page += `${splittedContent[i]} `

                splittedContentCopy.splice(0, 1)
                if (this.$refs.hidden.scrollHeight > this.$refs.hidden.offsetHeight) {
                    this.pages.push(page)
                    page = ''
                    this.$refs.hidden.textContent = ''
                }
                    
            }
        } while (splittedContentCopy.length !== 0)

        if (this.content.length < 1000)
            this.pages.push(this.content)
    }
}
</script>

<style lang="scss" scoped>

p{
    width: 90%;
    height: 60vh;
    border: none;
    margin: auto;
    margin-top: 5%;

    &.hidden {
        position: absolute;
        top: 0px;
        z-index: -1;
    }
}
</style>


