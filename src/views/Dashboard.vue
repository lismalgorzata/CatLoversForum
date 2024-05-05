<template>
  <div class="p-5 d-flex flex-column">
    <h2 class="fw-bold font">Posts</h2>
    <div class="d-flex flex-column align-items-center">
      <PostsList :uid="''"></PostsList>
    </div>
  </div>
  <div class="container justify-content-center addPost">
    Add your post right now:
    <AddPost></AddPost>
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue'
import AddPost from "@/components/AddPost";
export default {
  name: 'AppDashboardView',
  components: { PostsList, AddPost }
}
</script>
<style>
.addPost {
  width: 10%;
  height: 10%;
}
</style>