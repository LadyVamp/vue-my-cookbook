import axios from 'axios';

export default {
	state: {
		recipes: [],
		currentRecipe: null,
		recipesCount: 0
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
	},
	actions: {
		fetchRecipes(context, recipeId) {
			axios
				.get('https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/fd078594e53f9e25dc08bc17a0d490c5b3cc45b3/recipes-11-06.json')
				.then(response => {
					// console.log('fetchRecipes', response.data.recipes);
					const recipes = response.data.recipes.filter(item => item.title !== 'template_title');
					context.commit('setRecipes', recipes);
					context.commit('setRecipesCount', recipes.length);
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