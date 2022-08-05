import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import StudentView from '../views/StudentView.vue'
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView
  },
  {
    path: '/event-caor',
    name: 'EventCaor',
    component: HomeView
  },
  {
    path: '/student-info',
    name: 'StudentInfo',
    component: StudentView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
