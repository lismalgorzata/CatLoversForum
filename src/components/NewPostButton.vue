<template>
  <!-- Modal -->
  <div
      class="modal fade modal-lg"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog">
      <div v-bind:class="{'modal-content': true, [postColor]: true}">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New post</h1>
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent>
            <div class="mb-3">
              <label for="titleInput" class="form-label">Title</label>
              <input
                  type="text"
                  class="form-control"
                  id="titleInput"
                  maxlength="60"
                  aria-describedby="textHelp"
                  v-model="postTitle"
                  required
                  v-if="enhancedTitle.length == 0"
              />
              <div
                  class="d-flex flex-row position-relative"
                  v-if="enhancedTitle.length > 0"
              >
                <input
                    type="text"
                    class="form-control"
                    id="titleInput"
                    maxlength="60"
                    aria-describedby="textHelp"
                    v-model="enhancedTitle"
                    disabled
                    required
                    @click="test"
                />
                <div
                    class="position-absolute top-50 end-0 translate-middle-y d-flex flex-row"
                >
                  <button
                      class="btn btn-link text-info p-0"
                      @click="updateTitle"
                  >
                    <i class="bi bi-check-square-fill"></i>
                  </button>
                  <button
                      class="btn btn-link text-secondary"
                      @click="discardTitle"
                  >
                    <i class="bi bi-x-square"></i>
                  </button>
                </div>
              </div>
              <div id="textHelp" class="form-text">
                Type title of your new post
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Post content</label>
              <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  aria-describedby="textAreaHelpblock"
                  maxlength="255"
                  v-model="postContent"
                  required
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
            <div class="form-group">
              <label for="exampleFormSelect">Set color post </label>
              <select class="form-select" id="selectColor" v-model="postColor">
                <option value="text-bg-white">White</option>
                <option value="text-bg-primary">Light Brown</option>
                <option value="text-bg-secondary">Dark Brown</option>
                <option value="text-bg-warning">Light Sea</option>
              </select>
            </div>
            <div class="pt-3 pb-3">
              <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkbox1"
                    value="School"
                    v-model="checkedTags"
                />
                <label class="form-check-label" for="inlineCheckbox1"
                >School</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkbox2"
                    value="Work"
                    v-model="checkedTags"
                />
                <label class="form-check-label" for="inlineCheckbox2"
                >Work</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkbox3"
                    value="Personal"
                    v-model="checkedTags"
                />
                <label class="form-check-label" for="inlineCheckbox3"
                >Personal</label
                >
              </div>
            </div>
            <div>
              <button
                  class="btn btn-success p-1 m-1 text-white"
                  @click="submit"
                  :disabled="isLoading"
              >
                Submit
              </button>
              <EnhanceTitleButton
                  :postTitle="postTitle"
                  :postContent="postContent"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { actionTypes } from '@/store/modules/firebase'
import { ref } from 'vue'
import EnhanceTitleButton from './EnhanceTitleButton.vue'
import { mapState } from 'vuex'
import { mutationTypes } from '@/store/modules/chatgpt'

export default {
  name: 'NewPostButton',
  computed: {
    ...mapState({
      enhancedTitle: (state) => state.chatgpt.enhancedTitle,
      isLoading: (state) => state.firebase.isLoading
    })
  },
  data () {
    return {
      postTitle: ref(''),
      postContent: '',
      checkedTags: ref([]),
      postColor: 'text-bg-white',
      isLoading: false,
      postVisibleForOthers: 'true'
    }
  },
  methods: {
    submit () {
      if (this.postTitle.length > 0 && this.postContent.length > 0) {
        this.$store
            .dispatch(actionTypes.addPost, {
                  title: this.postTitle,
                  content: this.postContent,
                  tags: this.checkedTags,
                  color: this.postColor,
                  visibleForOthers: this.postVisibleForOthers === 'true'
                }
            )
            .then(async () => {
              await new Promise((resolve) => setTimeout(resolve, 500))
              this.$router.go()
            })
      }
    },
    updateTitle () {
      this.postTitle = this.enhancedTitle
      this.$store.commit(mutationTypes.setEnhancedTitle, '')
    },
    discardTitle () {
      this.postTitle = ''
      this.$store.commit(mutationTypes.setEnhancedTitle, '')
    }
  },
  components: { EnhanceTitleButton }
}
</script>