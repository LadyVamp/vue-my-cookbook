import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
    },
    {
        path: '/cheatsheets',
        name: 'CheatSheets',
        component: () => import('../views/CheatSheetsView.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
    },
    // {
    //     path: '/recipe/:id',
    //     name: 'RecipeDetails',
    //     component: RecipeDetails,
    // },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
