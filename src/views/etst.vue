<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
      <!-- <img v-if="me.profilePicture" :src="me.profilePicture.src"/> -->
    <test/>
    <form enctype="multipart/form-data">
      <input type="file" name="file" accept="image/*" required ref="input">
      <input type="submit" @click="sendFile">
    </form>
  </div>
</template>

<script>
import UPLOAD_FILE from '@/graphql/upload.graphql'
import GET_ME from '@/graphql/user.graphql'
import Test from '@/components/search.vue'

export default {
  name: 'home',
  data () {
    return {
      var: '',
      users: []
    }
  },
  components: {
    Test
  },
  apollo: {
    // me: GET_ME
  },
  methods: {
    async sendFile (_e) {
      _e.preventDefault()
      const res = await this.$apollo.mutate({
        mutation: UPLOAD_FILE,
        variables: {
          file: this.$refs.input.files[0]
        }
      })

      console.log(res)
    }
  }
}
</script>
