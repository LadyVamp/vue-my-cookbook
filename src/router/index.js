import Vue from 'vue';
import VueRouter from 'vue-router';
import RecipeDetails from '@/components/Recipe/RecipeDetails';
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
	{
		path: '/dev',
		name: 'Dev',
		component: () => import('../views/DevView.vue'),
	},
	{
		path: '/generator',
		name: 'Generator',
		component: () => import('../views/GeneratorView.vue'),
	},
	{
		path: '/recipe/:id',
		name: 'RecipeDetails',
		component: RecipeDetails,
	},
	{
		path: '*',
		redirect: '/'
	},
];

const router = new VueRouter({
	base: process.env.BASE_URL,
	routes,
});

export default router;
