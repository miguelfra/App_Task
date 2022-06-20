import Vue from 'vue'
import VueRouter from 'vue-router'
import Task from '../views/Task.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'task',
    component: Task
  },
  {
    path: '/newTask',
    name: 'newTask',
    component: () => import('../views/NewTask.vue')
  },
  {
    path: '/editTask/:id',
    name: 'editTask',
    component: () => import('../views/EditTask.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
