import Vue from 'vue';
import Vuex from 'vuex';
import recipeModule from '@/store/recipeModule';

Vue.use(Vuex);

export const store = new Vuex.Store({
	modules: {
		recipeModule
	}
});
