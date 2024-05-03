<template>
  <button type="button" class="btn btn-link" @click="deletePost">
    <h4><i class="bi bi-x text-danger"></i></h4>
  </button>
</template>

<script>
import { db } from '@/main.js'
import { doc, deleteDoc } from 'firebase/firestore'
export default {
  name: 'DeleteButton',
  props: {
    postId: {
      type: String,
      required: true
    }
  },
  methods: {
    deletePost () {
      return new Promise((resolve) => {
        deleteDoc(doc(db, 'posts', this.postId)).then(() => {
          this.$router.go()
          resolve()
        })
      })
    }
  }
}
</script>
