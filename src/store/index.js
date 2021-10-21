import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		recipes: null,
	},

	getters: {
		RECIPES: state => {
			return state.recipes;
		},
	},

	mutations: {
		SET_RECIPE: (state, payload) => {
			state.recipes = payload;
		},
	},

	actions: {
		GET_RECIPE: (context, payload) => {
			axios
				.get('https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/c3dbf4138413035d67779251b0547997f870fd74/recipes-10-19.json')
				.then(response => {
					context.commit('SET_RECIPE', response.data.recipes);
				}).catch(error => {
					console.error(error.message);
				});
		},
	},

});
