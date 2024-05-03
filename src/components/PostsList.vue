<template>
  <div
      v-for="post in posts"
      :key="post.id"
      class=""
      style="width: 100%; max-width: 50rem"
  >
    <Post v-if="post.data.data.visibleForOthers == true" :post="post"></Post>
  </div>
</template>

<script>
import { actionTypes } from '@/store/modules/firebase'
import { mapState } from 'vuex'
import Post from '@/components/Post.vue'

export default {
  name: 'AppPostsView',
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
  mounted () {
    this.$store.dispatch(actionTypes.getPostsByUserId, {
      uid: this.uid
    })
  }
}
</script>
