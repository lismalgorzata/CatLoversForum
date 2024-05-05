<template>
  <div class="container mt-5">
    <h1>Comments</h1>
    <div v-if="post" class="mt-3">
      <!-- Display the post -->
      <Post :post="post" />
      <!-- Comment form -->
      <form @submit.prevent="addComment" class="d-flex mt-4">
        <textarea v-model="newComment" placeholder="Add a comment..." class="form-control me-3" rows="1" style="resize: none;"></textarea>
        <button type="submit" class="btn btn-primary">Post Comment</button>
      </form>
      <!-- Display comments -->
      <div v-for="comment in comments" :key="comment.id" class="mt-4">
        <div class="card">
          <div class="card-body">
            <p class="card-text">{{ comment.data.text }}</p> 
            <small v-if="comment.data.created"> 
              Posted by: {{ comment.data.uid }} at {{ new Date(comment.data.created.seconds * 1000).toLocaleString() }}
            </small>
            <small v-else> 
              Posted by: {{ comment.data.uid }}
            </small>
          </div>
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
      comments: (state) => state.firebase.comments 
    }),
    post() {
      return this.posts?.find(post => post.id === this.$route.params.postId);
    }
  },
  created() {
    if (!this.posts) {
      this.fetchData();  
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
          this.fetchComments(this.$route.params.postId); 
        }).catch(error => {
          console.error('Failed to add comment:', error);
          alert('Failed to add comment. Please try again.');
        });
      }
    }
  }
}
</script>
