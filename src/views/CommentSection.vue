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
      <!-- Display comments -->
      <div v-for="comment in comments" :key="comment.id">
        <p>{{ comment.content }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading post...</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Post from '@/components/Post.vue'; 
import { actionTypes } from '@/store/modules/firebase'

export default {
  components: {
    Post
  },
  props: ['postId'], 
  data() {
    return {
      newComment: '',
      comments: [] 
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
  created() {
    this.fetchComments(this.$route.params.postId); // Fetch comments when component is created
  },
  methods: {
    ...mapActions({
      addCommentToFirestore: actionTypes.addComment, // Use the constant from actionTypes
      fetchComments: actionTypes.fetchComments 
    }),
    addComment() {
      if (this.newComment.trim()) {
        this.addCommentToFirestore({
          postId: this.$route.params.postId,
          comment: this.newComment
        }).then(() => {
          this.newComment = ''; 
          this.fetchComments(this.$route.params.postId); 
          alert('Comment added successfully!'); 
        }).catch(error => {
          console.error('Failed to add comment:', error);
          alert('Failed to add comment. Please try again.'); 
        });
      }
    }
  }
}
</script>
