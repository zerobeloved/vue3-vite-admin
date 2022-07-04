import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        component: () => import('@/components/HelloWorld.vue')

    },
    {
        path: '/home',
        component: () => import('../components/TestComponent.vue')

    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router