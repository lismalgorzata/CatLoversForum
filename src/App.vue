<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    AppNavbar,
  },
};
</script>

<style></style>