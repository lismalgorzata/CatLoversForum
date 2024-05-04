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
        <div>
          <p>{{ comment.data.text }}</p> <!-- Access the 'text' field from 'data' -->
          <small>Posted by: {{ comment.data.uid }} at {{ new Date(comment.data.created.seconds * 1000).toLocaleString() }}</small>
          <!-- Format the 'created' timestamp into a readable date -->
        </div>
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
import { actionTypes } from '@/store/modules/firebase';

export default {
  components: {
    Post
  },
  props: ['postId'],
  computed: {
    ...mapState({
      posts: (state) => state.firebase.posts,
      comments: (state) => state.firebase.comments // Ensuring the comments are mapped from Vuex state
    }),
    post() {
      // Ensures post exists and matches the ID from the route
      return this.posts?.find(post => post.id === this.$route.params.postId);
    }
  },
  created() {
    if (!this.posts) {
      this.fetchData();  // Assuming this action is defined and does what is intended
    }
    this.fetchComments(this.$route.params.postId);
  },
  methods: {
    ...mapActions({
      addCommentToFirestore: actionTypes.addComment,
      fetchComments: actionTypes.fetchComments,
      fetchData: actionTypes.fetchPosts
    }),
    addComment() {
      if (this.newComment.trim()) {
        this.addCommentToFirestore({
          postId: this.$route.params.postId,
          comment: this.newComment
        }).then(() => {
          this.newComment = '';
          this.fetchComments(this.$route.params.postId); // Refresh comments list
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
