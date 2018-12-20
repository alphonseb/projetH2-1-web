<template>
    <div class="PostitPage">
            <h2 class="pageTitle">Post-it</h2>
            <div class="container">
                <postit v-for="(comment, i) in comments" :key="i" :name="comment.author.name" :profilePicture="comment.author.profilePicture.src" :content="comment.content" :date="comment.date" />
            </div>
            <div class="postComment">
                <textarea type="text" v-model="content" placeholder="Une anecdote à raconter ?"></textarea>
                <input type="submit" value="Envoyer" @click.prevent="postComment">
            </div>
    </div>
</template>

<script>
import POST_COMMENT from '@/graphql/postComment.graphql'
import Postit from '@/components/Postit'

export default {
    name: 'AllPostit',
    props: ['comments'],
    data () {
        return {
            content: ''
        }
    },
    components: {
        Postit
    },
    methods: {
        async postComment () {
            if (this.content === '')
                return

            const variables = {
                bookId: this.$parent.book.id,
                content: this.content
            }

            const { data: { addComment } } = await this.$apollo.mutate({
                mutation: POST_COMMENT,
                variables
            })

            this.content = ''

            this.$parent.book.comments.push(addComment)
        }
    }
}
</script>

<style lang="scss" scoped>
.PostitPage{
    width : 100%;
    height: 100%;
    padding: 4% 0 28% 0;
    margin : 0;
    font-family: Roboto;
    box-sizing: border-box;
    background: white;

    h2.pageTitle{
    font-family: roboto;
    font-size: 1em;
    margin-left: 4%;
    }

    .container {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .postComment {
        width: 100%;
        height: 40px;
        display: flex;
        position: absolute;
        bottom: 0;

        textarea {
            width: 80%;
            resize: none;
        }

        input {
            width: 20%;
        }
    }
}
</style>
