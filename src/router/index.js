import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomePage";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Dashboard from "@/views/Dashboard";
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
];

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = getAuth().onAuthStateChanged((user) => {
      removeListener();
      resolve(user);
    }, reject);
  });
};

const router = new createRouter({
  routes,
  history: createWebHistory(),
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have permissions to access this page. Please login.");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
