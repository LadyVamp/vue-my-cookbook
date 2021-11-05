import axios from 'axios';

export default {
	state: {
		recipes: [],
		currentRecipe: null
	},
	mutations: {
		setRecipes(state, payload) {
			state.recipes = payload
		},
		setCurrentRecipe(state, payload) {
			state.currentRecipe = payload
		},
	},
	getters: {
		getAllRecipes(state) {
			return state.recipes
		},
		getCurrentRecipe(state) {
			return state.currentRecipe
		}
	},
	actions: {
		fetchRecipes(context, recipeId) {
			axios
				.get('https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/2744259a4ca75bd4d5cd0c67ee6eb0eb7d0a48c1/recipes-10-19.json')
				.then(response => {
					// console.log('fetchRecipes', response.data.recipes);
					context.commit('setRecipes', response.data.recipes);
					if (recipeId) {
						context.commit('setCurrentRecipe', response.data.recipes.find(
							item => item.id === recipeId
						));
					}
				}).catch(error => {
					console.error(error.message);
				});
		}
	}
}