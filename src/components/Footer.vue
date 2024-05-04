<template>
  <nav class="navbar navbar-expand-lg bg-success sticky-bottom" v-if="isLoggedIn">
    <div class="container-fluid justify-content-between">
      <!-- Left elements -->
      <div class="d-flex">
        <router-link :to="{ name: 'dashboard' }" class="nav-link" :class="{'active': isLoggedIn, 'disabled': !isLoggedIn}" style="margin-left: 15px;">
          <i class="bi bi-house-heart-fill display-5"></i>
        </router-link>
      </div>

      <!-- Left elements -->

      <!-- Center elements -->
      <div class="d-flex align-items-center" style="margin-left: 15px;">
        <router-link :to="{ name: 'addPost' }" class="nav-link" :class="{'active': isLoggedIn, 'disabled': !isLoggedIn}">
          <i class="bi bi-plus-circle-fill display-5"></i>
        </router-link>
      </div>
      <!-- Center elements -->

      <!-- Right elements -->
      <ul class="navbar-nav flex-row">
        <li class="nav-item me-3 me-lg-1">
          <router-link :to="{ name: 'profile' }" style="margin-right: 15px;">
            <i class="bi bi-person-circle display-5"></i>
          </router-link>
        </li>
      </ul>
      <!-- Right elements -->
    </div>
  </nav>
  <!-- Navbar -->
</template>

<script>
import { getAuth } from 'firebase/auth'

export default {
  name: 'AppFooter',
  components: {},
  data () {
    return {
      isLoggedIn: '',
      auth: ''
    }
  },
  mounted () {
    this.auth = getAuth
    this.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  },
  methods: {
    handleSignOut () {
      this.auth()
          .signOut(this.auth)
          .then(() => {
            this.$router.push({ name: 'home' })
          })
    }
  }
}
</script>
