<template>
  <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
  >
    Add post
  </button>

  <div
      class="modal fade modal-lg"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
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
              <div
                  class="d-flex flex-row position-relative"
              >
                <input
                    type="text"
                    class="form-control"
                    id="titleInput"
                    maxlength="60"
                    aria-describedby="textHelp"
                    disabled
                    required
                    @click="test"
                />
                <div
                    class="position-absolute top-50 end-0 translate-middle-y d-flex flex-row"
                >
                    <i class="bi bi-x-square"></i>
                </div>
              </div>
              <div id="textHelp" class="form-text">
                Type title of your new post
              </div>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Content</label>
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
                  class="btn btn-primary p-1 m-1 text-white"
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

export default {
  name: "AddPost",
  data() {
    return {
      postTitle: ref(""),
      postContent: "",
      isSchool: false,
      isWork: false,
      isPersonal: false,
      checkedTags: ref([]),
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
              tags: this.checkedTags,
            })
            .then(async () => {
              this.playSound();
              await new Promise((resolve) => setTimeout(resolve, 2000));
              this.$router.go();
            });
      }
    },
    test() {
      console.log("test");
    },
  },
};
</script>
