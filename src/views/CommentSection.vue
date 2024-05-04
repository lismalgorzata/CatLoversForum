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
import Post from '@/components/Post.vue'; // Correct import assuming Post.vue is in the components folders
import { actionTypes } from '@/store/modules/firebase'

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
      posts: (state) => state.firebase.posts // Ensure this matches the Vuex store structure
    }),
    post() {
      // Ensures post exists and matches the ID from the route
      return this.posts.find(post => post.id === this.$route.params.postId);
    }
  },
  methods: {
    ...mapActions({
      addCommentToFirestore: actionTypes.addComment // Use the constant from actionTypes
    }),
    addComment() {
      if (this.newComment.trim()) {
        this.addCommentToFirestore({
          postId: this.$route.params.postId,
          comment: this.newComment
        }).then(() => {
          this.newComment = ''; // Clear the comment input field on successful addition
          alert('Comment added successfully!'); // Optional: Display success message
        }).catch(error => {
          console.error('Failed to add comment:', error);
          alert('Failed to add comment. Please try again.'); // Display error message to user
        });
      }
    }
  }
}
</script>
