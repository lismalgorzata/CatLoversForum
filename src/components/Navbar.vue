<template>
  <nav class="navbar navbar-expand-lg bg-primary sticky-top">
    <div class="container-fluid justify-content-between">
      <!-- Left elements -->
      <div class="d-flex">
        <router-link :to="{ name: 'dashboard' }" class="nav-link" :class="{'active': isLoggedIn, 'disabled': !isLoggedIn}">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" style="margin-left: 10px" class="bi bi-house-heart-fill" viewBox="0 0 16 16">
            <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z"/>
            <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018"/>
          </svg>
        </router-link>
      </div>
        <!-- Left elements -->

      <!-- Center elements -->
      <ul class="navbar-nav flex-row d-none d-md-flex">
        <li class="nav-item me-3 me-lg-1 active">
          <div class="navbar-brand mx-auto fw-bold">
            <router-link :to="{ name: 'home' }" class="nav-link" style="margin-left: 100px">Cat Lovers Forum</router-link>
          </div>
        </li>
      </ul>
      <!-- Center elements -->

      <!-- Right elements -->
      <ul class="navbar-nav flex-row">
        <li class="nav-item me-3 me-lg-1">
          <router-link :to="{ name: 'login' }" class="btn btn-outline-dark me-2" v-if="!isLoggedIn">Login</router-link>
          <router-link :to="{ name: 'register' }" class="btn btn-outline-dark me-2" v-if="!isLoggedIn">Register</router-link>
          <router-link :to="{ name: 'profile' }" v-if="isLoggedIn" style="margin-right: 15px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" class="bi bi-person-circle" viewBox="0 0 16 16" style="transition: fill 0.3s;">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
          </router-link>
          <button class="btn btn-outline-dark me-2" v-if="isLoggedIn" @click="handleSignOut">Sign Out</button>
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
