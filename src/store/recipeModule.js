import axios from 'axios';

export default {
    state: {
        recipes: [],
        currentRecipe: null,
        recipesCount: 0,
        isLoading: false,
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setCurrentRecipe(state, payload) {
            state.currentRecipe = payload;
        },
        setRecipesCount(state, payload) {
            state.recipesCount = payload;
        },
        setLoading(state, payload) {
            state.isLoading = payload;
        },
    },
    getters: {
        getAllRecipes(state) {
            return state.recipes;
        },
        getCurrentRecipe(state) {
            return state.currentRecipe;
        },
        getRecipesCount(state) {
            return state.recipesCount;
        },
        getLoading(state) {
            return state.isLoading;
        },
    },
    actions: {
        fetchRecipes(context, recipeId) {
            context.commit('setLoading', true);
            axios
                .get(
                    'https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/64735e8be3cf9d556a0948c184888b1ea1a3e6c8/recipes-03-21.json',
                )
                .then((response) => {
                    // console.log('fetchRecipes', response.data.recipes);
                    const recipes = response.data.recipes
                        .reverse()
                        .filter((item) => item.title !== 'template_title');
                    context.commit('setRecipes', recipes);
                    context.commit('setRecipesCount', recipes.length);
                    context.commit('setLoading', false);
                    if (recipeId) {
                        context.commit(
                            'setCurrentRecipe',
                            response.data.recipes.find((item) => item.id === recipeId),
                        );
                    }
                })
                .catch((error) => {
                    console.error(error.message);
                });
        },
    },
};
