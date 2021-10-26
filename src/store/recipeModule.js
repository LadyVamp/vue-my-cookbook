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
				.get('https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/7d1e3a140e09a179c41df5103ceff39904088fb4/recipes-10-19.json')
				.then(response => {
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