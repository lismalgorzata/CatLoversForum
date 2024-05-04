<template>
  <div class="modal-dialog">
    <div v-bind:class="{'modal-content': true, [postColor]: true}">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          {{ postData.title }}
        </h1>
        <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
        ></button>
      </div>
      <div class="modal-body position-relative">
        <div>{{ postData.content }}</div>
        <div class="d-flex flex-row">
          <small
              v-for="(tag, index) in postData.tags"
              :key="index"
              class="fw-bold text-white me-2 mt-2 badge bg-success border"
          >
            {{ tag }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostModal',
  props: {
    postData: {
      type: Object,
      required: true
    },
    postId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      postColor: this.postData.color
    }
  }
}
</script>