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
    <div class="position-absolute end-0">
      <DeleteButton v-if="isPostOwner" :postId="postId"></DeleteButton>
    </div>
    <div class="d-flex flex-row justify-content-between align-items-center my-3">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-auto align-items-lg-start">
            <button class="btn"
                    :class="{'btn-outline-primary': !userHasLiked, 'btn-primary text-dark': userHasLiked}"
                    @click="toggleLike">
              <i class="bi bi-suit-heart mx-1"></i>
            </button>
          </div>
          <div class="col-auto">
            <h6 class="mb-0">{{ postLikes }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAuth } from 'firebase/auth'
import DeleteButton from './DeleteButton.vue'
import EditPostButton from './EditPostButton.vue'
import PostModal from './PostModal.vue'
import {actionTypes} from "@/store/modules/firebase.js";

export default {
  name: 'AppPostsView',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      auth: '',
      currentUserId: '',
      postId: this.post.id,
      postColor: this.post.data.data.color,
      postLikes: this.post.data.likes,
      userHasLiked: false
    }
  },
  components: {DeleteButton, EditPostButton, PostModal},
  mounted() {
    this.auth = getAuth
    this.auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentUserId = user.uid,
            this.checkUserLike()
      }
    })
  },

  computed: {
    isPostOwner() {
      return this.post.data.uid === this.currentUserId
    }
  },
  methods: {
    toggleLike() {
      if (!this.userHasLiked) {
        this.$store.dispatch(actionTypes.incrementLikes, {
          postId: this.post.id,
          userId: this.currentUserId
        }).then(() => {
          this.userHasLiked = true;
          this.postLikes += 1;
          console.log("Like added successfully.");
        }).catch(error => {
          console.error("Error incrementing likes:", error);
        });
      } else {
        this.$store.dispatch(actionTypes.decrementLikes, {
          postId: this.post.id,
          userId: this.currentUserId
        }).then(() => {
          this.userHasLiked = false;
          this.postLikes -= 1;
          console.log("Like removed successfully.");
        }).catch(error => {
          console.error("Error decrementing likes:", error);
        });
      }
    },
    checkUserLike() {
      this.$store.dispatch(actionTypes.checkUserLike, {
        postId: this.post.id,
        userId: this.currentUserId
      }).then(hasLiked => {
        this.userHasLiked = hasLiked;
      });
    }
  },
}
</script>
