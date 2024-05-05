<template>
  <button
      type="button"
      class="btn btn-success"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
  >
    <i class="bi bi-plus-circle-fill display-5"></i>
  </button>

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
import { actionTypes } from "@/store/modules/firebase";
import { ref } from "vue";
import meowSound from '@/assets/cat-meow.wav';
import {mapState} from "vuex";

export default {
  name: "AddPost",
  computed: {
    ...mapState({
      isLoading: (state) => state.firebase.isLoading
    })
  },
  data () {
    return {
      postTitle: ref(''),
      postContent: '',
      postVisibleForOthers: 'true',
      audioContext: new (window.AudioContext || window.webkitAudioContext)(),
    };
  },
  methods: {
    async playSound() {
      try {
        const response = await fetch(meowSound);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
        const source = this.audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(this.audioContext.destination);
        source.start();
      } catch (e) {
        console.error("Error playing sound:", e);
      }
    },
    submit() {
      if (this.postTitle.length > 0 && this.postContent.length > 0) {
        this.$store
            .dispatch(actionTypes.addPost, {
                  title: this.postTitle,
                  content: this.postContent,
                  visibleForOthers: this.postVisibleForOthers === 'true'
                }
            )
            .then(async () => {
              this.playSound();
              await new Promise((resolve) => setTimeout(resolve, 500))
              this.$router.go()
            })
      }
    },
  },
  components: { }
}
</script>
