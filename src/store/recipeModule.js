import axios from 'axios';

export default {
	state: {
		recipes: [],
		currentRecipe: null,
		recipesCount: 0,
		isLoading: false
	},
	mutations: {
		setRecipes(state, payload) {
			state.recipes = payload
		},
		setCurrentRecipe(state, payload) {
			state.currentRecipe = payload
		},
		setRecipesCount(state, payload) {
			state.recipesCount = payload
		},
		setLoading(state, payload) {
			state.isLoading = payload
		}
	},
	getters: {
		getAllRecipes(state) {
			return state.recipes
		},
		getCurrentRecipe(state) {
			return state.currentRecipe
		},
		getRecipesCount(state) {
			return state.recipesCount
		},
		getLoading(state) {
			return state.isLoading
		}
	},
	actions: {
		fetchRecipes(context, recipeId) {
			context.commit('setLoading', true);
			axios
				.get('https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/76b754358d57b26f3a5f8e87f6a336ae0d1a33f2/recipes-12-4.json')
				.then(response => {
					// console.log('fetchRecipes', response.data.recipes);
					const recipes = response.data.recipes.reverse().filter(item => item.title !== 'template_title');
					context.commit('setRecipes', recipes);
					context.commit('setRecipesCount', recipes.length);
					context.commit('setLoading', false);
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