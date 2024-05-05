<template>
  <!-- Button trigger modal -->
  <button
      class="btn btn-link text-info"
      data-bs-toggle="modal"
      :data-bs-target="'#id_edit' + postId"
  >
    <i class="bi bi-pencil"></i>
  </button>

  <!-- Modal -->
  <div
      class="modal fade modal-lg"
      :id="'id_edit' + postId"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog">
      <div v-bind:class="{'modal-content': true, [postColor]: true}">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Edit post</h1>
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent>
            <div>
              <div class="mb-3">
                <label for="titleInput" class="form-label">Title</label>
                <input
                    type="text"
                    class="form-control"
                    id="titleInput"
                    maxlength="60"
                    aria-describedby="textHelp"
                    v-model="postTitle"
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Post content</label>
                <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    aria-describedby="textAreaHelpblock"
                    maxlength="255"
                    required
                    v-model="postContent"
                ></textarea>
              </div>
              <small id="textAreaHelpblock" class="form-text text-muted">
                {{ postContent.length }}/255
              </small>
              <div>
                Visibility
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="true" v-model="postVisibleForOthers" checked>
                <label class="form-check-label" for="flexRadioDefault2">
                  Public
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="false" v-model="postVisibleForOthers">
                <label class="form-check-label" for="flexRadioDefault1">
                  Private
                </label>
              </div>
            </div>
            <div>
              <button
                  class="btn btn-success p-1 m-1 text-white"
                  @click="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doc, updateDoc, getDoc } from 'firebase/firestore'
import { db } from '@/main.js'

export default {
  name: 'EditPost',
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
      postTitle: this.postData.title,
      postContent: this.postData.content,
      postVisibleForOthers: 'true'
    }
  },
  methods: {
    async submit () {
      const docRef = doc(db, 'posts', this.postId)
      const docSnapshot = await getDoc(docRef)
      const currentData = docSnapshot.data()

      // Merge existing data with updated data
      const updatedData = {
        ...currentData,
        data: {
          title: this.postTitle,
          content: this.postContent,
          visibleForOthers: this.postVisibleForOthers === 'true'
        }
      }
      updateDoc(docRef, updatedData)

      await new Promise((resolve) => setTimeout(resolve, 500))
      this.$router.go()
    }
  }
}
</script>
