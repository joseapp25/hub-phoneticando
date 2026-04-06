import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Lessons from '../pages/Lessons.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: { title: 'Home' },
        },
        {
            path: '/lessons',
            name: 'lessons',
            component: Lessons,
            meta: { title: 'Lessons' },
        },
        {
            path: '/about',
            name: 'about',
            component: Lessons,
            meta: { title: 'About' },
        }
    ]
})

export default router