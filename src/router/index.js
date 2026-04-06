import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Lessons from '../pages/Lessons.vue'
import Phonetics from '../pages/Phonetics.vue'
import About from '../pages/About.vue'

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
            path: '/phonetics',
            name: 'phonetics',
            component: Phonetics,
            meta: { title: 'Phonetics' },
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: { title: 'About' },
        }
    ]
})

export default router