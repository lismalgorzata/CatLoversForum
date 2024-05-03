<template>
  <PostsListProfileView  v-if="userDetails" :uid="userDetails.uid"></PostsListProfileView >
  <NewPostButton></NewPostButton>
</template>

<script>
import PostsListProfileView from '@/components/PostsListProfile'
import NewPostButton from '@/components/NewPostButton'
import { mapActions } from 'vuex'
import { actionTypes } from '@/store/modules/firebase'

export default {
  name: 'AppUserPosts',
  components: { PostsListProfileView, NewPostButton },
  data () {
    return {
      userDetails: null
    }
  },
  methods: {
    ...mapActions({
      getUserDetails: actionTypes.getUserDetails
    }),
    fetchUserDetails () {
      this.getUserDetails().then(userDetails => {
        this.userDetails = userDetails
      }).catch(error => {
        console.error(error)
      })
    }
  },
  mounted () {
    this.fetchUserDetails()
  },
  created () {
    this.fetchUserDetails()
  }
}
</script>
