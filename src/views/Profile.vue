<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 mt-4">
        <div class="badge bg-success text-wrap fs-5 mb-4">Your Profile</div>
        <app-user-data></app-user-data>
      </div>
      <div class="col-md-8 mt-4">
        <div class="badge bg-success text-wrap fs-5 mb-4">Your posts</div>
        <app-user-posts></app-user-posts>
      </div>
    </div>
  </div>
</template>

<script>
import AppUserData from '@/components/UserData'
import AppUserPosts from '@/components/UserPosts'

export default {
  name: 'AppProfileView',
  components: { AppUserPosts, AppUserData }
}
</script>
