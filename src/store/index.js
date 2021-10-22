import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		recipes: [],
	},

	getters: {
		getRecipeList: state => {
			return state.recipes;
		},
	},

	mutations: {
		setRecipeList: (state, payload) => {
			state.recipes = payload;
		},
	},

	actions: {
		getRecipeList: (context, payload) => {
			axios
				.get('https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/7d1e3a140e09a179c41df5103ceff39904088fb4/recipes-10-19.json')
				.then(response => {
					context.commit('setRecipeList', response.data.recipes);
				}).catch(error => {
					console.error(error.message);
				});
		},
	},

});
