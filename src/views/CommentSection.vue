<template>
    <div>
      <h1>Comments</h1>
      <div v-if="post">
        <!-- Display the post -->
        <Post :post="post" />
        <!-- Comment form -->
        <form @submit.prevent="addComment">
          <textarea v-model="newComment" placeholder="Add a comment..."></textarea>
          <button type="submit">Post Comment</button>
        </form>
      </div>
      <div v-else>
        <p>Loading post...</p>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from 'vuex';
  import Post from '@/components/Post.vue'; // Assuming Post.vue is in the components folder
  
  export default {
    components: {
      Post
    },
    data() {
      return {
        newComment: ''
      };
    },
    computed: {
      ...mapState({
        posts: (state) => state.firebase.posts
      }),
      post() {
        // Ensures post exists and matches the ID from the route
        return this.posts.find(post => post.id === this.$route.params.postId);
      }
    },
    methods: {
      ...mapActions({
        addCommentAction: 'addComment' // Renaming action to avoid naming conflicts
      }),
      addComment() {
        if (this.newComment.trim()) {
          this.addCommentAction({
            postId: this.$route.params.postId,
            comment: this.newComment
          });
          this.newComment = '';
        }
      }
    }
  }
  </script>
  