import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lessons from '../views/Lessons.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/lessons',
            component: Lessons
        }
    ]
})

export default router