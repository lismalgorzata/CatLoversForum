import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Dashboard from '@/views/Dashboard'
import Profile from '@/views/Profile'
import CommentSection from '@/views/CommentSection' // Import the CommentSection component
import { getAuth } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/comments/:postId', // Dynamic path for comments
    name: 'comments',
    component: CommentSection,
    props: true,
    meta: {
      requiresAuth: true // Assuming you want this route to also be protected
    }
  }
]

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = getAuth().onAuthStateChanged((user) => {
      removeListener()
      resolve(user)
    }, reject)
  })
}

// eslint-disable-next-line new-cap
const router = new createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      alert('You dont have permission to access this page. Please login first.')
      next('/')
    }
  } else {
    next()
  }
})

export default router
