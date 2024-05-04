<template>
  <div v-bind:class="{'card': true, 'border-white': true, 'mb-3': true, 'shadow': true, 'rounded': true, [postColor]: true }" style="min-height: 10rem">
    <div class="card-body position-relative">
      <div
          class="modal fade"
          :id="'id' + postId"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
      >
        <PostModal :postData="post.data.data" :postId="postId" />
      </div>

      <div class="d-flex align-items-end">
        <h5
            class="card-title"
            style="cursor: pointer"
            data-bs-toggle="modal"
            :data-bs-target="'#id' + postId"
        >
          {{ post.data.data.title }}
        </h5>
        <EditPostButton
            v-if="isPostOwner"
            :postData="post.data.data"
            :postId="postId"
        ></EditPostButton>
      </div>
      <p class="card-text">{{ post.data.data.content }}</p>
    </div>
    <div class="d-flex flex-row p-2">
      <small
          v-for="(tag, index) in post.data.data.tags"
          :key="index"
          class="p-1 fw-bold text-white me-2 mt-2 badge bg-success border"
      >
        {{ tag }}
      </small>
    </div>
    <div class="card-footer text-left">
      <button v-if="post.data.data.visibleForOthers === true" class="btn btn-outline-primary" @click="viewComments(postId)">Comments</button>
    </div>
    <div class="position-absolute end-0">
      <DeleteButton v-if="isPostOwner" :postId="postId"></DeleteButton>
    </div>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth'
import DeleteButton from './DeleteButton.vue'
import EditPostButton from './EditPostButton.vue'
import PostModal from './PostModal.vue'

export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      auth: getAuth(), // Store the initialized authentication object directly
      currentUserId: '',
      postId: this.post.id,
      postColor: this.post.data.data.color
    }
  },
  components: { DeleteButton, EditPostButton, PostModal },
  mounted() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.currentUserId = user.uid;
      }
    });
  },
  computed: {
    isPostOwner() {
      return this.post.data.uid === this.currentUserId;
    }
  },
  methods: {
    viewComments(postId) {
      this.$router.push({ name: 'comments', params: { postId } });
    }
  }
}
</script>
