import Vue from 'vue';
import VueRouter from 'vue-router';
import RecipeDetails from '@/components/Recipe/RecipeDetails.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomeView.vue'),
    },
    {
        path: '/cheatsheets',
        name: 'CheatSheets',
        component: () => import('@/views/CheatSheetsView.vue'),
    },
    {
        path: '/blacklist',
        name: 'BlackListView',
        component: () => import('@/views/BlackListView.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/AboutView.vue'),
    },
    {
        path: '/dev',
        name: 'Dev',
        component: () => import('@/views/DevView.vue'),
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/SettingsView.vue'),
    },
    {
        path: '/recipe/:id',
        name: 'RecipeDetails',
        component: RecipeDetails,
    },
    {
        path: '*',
        redirect: '/',
    },
];

const router = new VueRouter({
    routes,
});

export default router;
