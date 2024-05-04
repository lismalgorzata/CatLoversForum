<template>
  <div
      v-for="(post) in posts"
      :key="post.id"
      class=""
      style="width: 100%; max-width: 50rem"
  >
    <Post :post="post"></Post>
  </div>
</template>

<script>
import { actionTypes } from '@/store/modules/firebase'
import { mapState } from 'vuex'
import Post from '@/components/Post.vue'

export default {
  name: 'AppPostsListProfileView',
  props: {
    uid: {
      type: String,
      required: false
    },
    onlyMyPosts: {
      type: Boolean,
      required: false
    }
  },
  components: {
    Post
  },
  computed: {
    ...mapState({
      posts: (state) => state.firebase.posts
    })
  },
  created() {
    this.$store.dispatch(actionTypes.getPostsByUserId, {
      uid: this.uid
    })
  }

}
</script>