<template>
  <section class="vh-100 scrollable-section" style="background-color: white;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
          <div class="card" style="border-radius: 1rem;">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" style="border-radius: 1rem 0 0 1rem;">
                  <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                      <img src="../assets/login-carousel/1.jpeg" class="d-block w-100" alt="cat1">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="../assets/login-carousel/2.jpeg" class="d-block w-100" alt="cat2">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="../assets/login-carousel/3.jpeg" class="d-block w-100" alt="cat3">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="../assets/login-carousel/4.jpeg" class="d-block w-100" alt="cat4">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="../assets/login-carousel/5.jpeg" class="d-block w-100" alt="cat5">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="../assets/login-carousel/6.jpeg" class="d-block w-100" alt="cat6">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="../assets/login-carousel/7.jpeg" class="d-block w-100" alt="cat7">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="../assets/login-carousel/8.jpeg" class="d-block w-100" alt="cat8">
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                      <img src="../assets/login-carousel/9.jpeg" class="d-block w-100" alt="cat9">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-7 d-flex align-items-center">
                <div class="card-body p-4 p-lg-5 text-black">

                  <form>

                    <div class="d-flex align-items-center mb-3 pb-1">
                      <img src="../assets/logo.png" alt="Logo" style="width: 99%; height: 99%; margin-right: 10px;">
                    </div>

                    <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>
                    <div v-if="error" class="alert alert-danger small-alert">{{ errorToString(error) }}</div>

                    <div data-mdb-input-init class="form-outline mb-4">
                      <input type="email" placeholder="jamessmith@example.com" id="form2Example17" class="form-control form-control-lg" v-model="email"/>
                      <label class="form-label" for="form2Example17">Email address</label>
                    </div>

                    <div data-mdb-input-init class="form-outline mb-4">
                      <input type="password" placeholder="•••••••••••••••" id="form2Example27" class="form-control form-control-lg" v-model="password"/>
                      <label class="form-label" for="form2Example27">Password</label>
                    </div>

                    <div class="pt-1 mb-4">
                      <button
                          class="btn btn-dark btn-lg btn-block"
                          type="button"
                          @click="login"
                          style="margin-right: 20px;">Login</button>
                      <button
                          type = "button"
                          class="btn btn-lg btn-outline-dark my-2"
                          @click="signInWithGoogle">Sign in with Google</button>
                    </div>

                    <p class="mb-3 pb-lg-2">Don't have an account? <router-link :to="{ name: 'register' }">Register here</router-link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
export default {
  name: 'AppLoginView',
  methods: {
    login () {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
          .then((data) => {
            console.log(data)
            this.$router.push({ name: 'dashboard' })
          })
          .catch((error) => {
            this.error = error
            console.log(error.code)
          })
    },

    signInWithGoogle () {
      const provider = new GoogleAuthProvider()
      signInWithPopup(getAuth(), provider)
          .then((result) => {
            console.log(result)
            this.$router.push({ name: 'dashboard' })
          })
          .catch((error) => {
            alert(error.code)
          })
    },

    errorToString (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          return 'Invalid email'
        case 'auth/user-not-found':
          return 'User not found'
        case 'auth/missing-password':
          return 'Missing password'
        case 'auth/invalid-login-credentials':
          return 'Invalid login credentials'
        default:
          return 'Unknown error'
      }
    }
  },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  }
}
</script>

<style>
.carousel-item img{
  width: 400px;
  height: 100vh;
  object-fit: cover;
  border-radius: 1rem 0 0 1rem;
}
</style>