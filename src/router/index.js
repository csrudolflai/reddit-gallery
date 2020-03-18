import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:subreddit?',
    name: 'home',
    component: Home
  },
  {
    path: '/list/:subreddit?',
    name: 'list',
    component: List
  },
]

const router = new VueRouter({
  routes
})

export default router
