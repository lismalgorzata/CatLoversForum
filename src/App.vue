<template>
  <div class="bg-light">
    <app-navbar></app-navbar>
    <router-view style="min-height: 100vh"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from '@/components/Navbar.vue'
import AppFooter from '@/components/Footer'
export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style></style>
