<template>
    <div>
      <comment-form :postId="postId"></comment-form>
      <div v-for="comment in comments" :key="comment.id">
        <p>{{ comment.text }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { db } from '@/firebase';
  import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
  import CommentForm from './CommentForm.vue';
  
  export default {
    components: {
      CommentForm,
    },
    props: ['postId'],
    data() {
      return {
        comments: [],
      };
    },
    mounted() {
      const commentsRef = collection(db, "posts", this.postId, "comments");
      const q = query(commentsRef, orderBy("createdAt", "desc"));
  
      onSnapshot(q, (snapshot) => {
        this.comments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      });
    },
  };
  </script>
  