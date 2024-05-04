<template>
  <nav class="navbar navbar-expand-lg bg-primary sticky-top">
    <div class="container-fluid justify-content-between">
      <!-- Left elements -->
      <ul class="navbar-nav flex-row">
        <li class="nav-item me-3 me-lg-1 active">
          <div class="navbar-brand mx-auto fw-bold">
            <router-link :to="{ name: 'home' }" class="nav-link">Cat Lovers Forum</router-link>
          </div>
        </li>
      </ul>
        <!-- Left elements -->

      <!-- Center elements -->

      <!-- Center elements -->

      <!-- Right elements -->
      <ul class="navbar-nav flex-row">
        <li class="nav-item me-3 me-lg-1">
          <router-link :to="{ name: 'login' }" class="btn btn-outline-dark me-2" v-if="!isLoggedIn">Login</router-link>
          <router-link :to="{ name: 'register' }" class="btn btn-outline-dark me-2" v-if="!isLoggedIn">Register</router-link>
          <button class="btn btn-outline-dark me-2" v-if="isLoggedIn" @click="handleSignOut"><i class="bi bi-box-arrow-right"></i></button>
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
  name: 'AppNavar',
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
