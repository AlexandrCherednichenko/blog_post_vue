import {
    createRouter,
    createWebHistory
} from 'vue-router'


const routes = [

    {
        path: '/',
        component: () => import('@/pages/MainPage/MainPage.vue'),
    },
    {
        path: '/posts',
        component: () => import('@/pages/PostPage/PostPage.vue')
    },
    {
        path: '/posts/:id',
        component: () => import('@/pages/PostIdPage/PostIdPage.vue')
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;