import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = new createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
