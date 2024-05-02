<template>
    <div>
      <input v-model="newComment" placeholder="Write a comment..." />
      <button @click="submitComment">Post Comment</button>
    </div>
  </template>
  
  <script>
  import { db } from '@/firebase';
  import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
  
  export default {
    props: ['postId'],
    data() {
      return {
        newComment: '',
      };
    },
    methods: {
      async submitComment() {
        if (!this.newComment.trim()) return;
        const commentsRef = collection(db, "posts", this.postId, "comments");
        await addDoc(commentsRef, {
          text: this.newComment,
          createdAt: serverTimestamp(),
          // Add more user details as needed
        });
        this.newComment = '';
      },
    },
  };
  </script>
  