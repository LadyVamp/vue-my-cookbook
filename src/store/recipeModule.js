import { getAllRecipes } from '../api/api';

export default {
    state: {
        recipes: [],
        currentRecipe: null,
        recipesCount: 0,
        isLoading: false,
        isShowLinksSber: localStorage.getItem('isShowLinksSber') || false,
        selectedShop: JSON.parse(localStorage.getItem('selectedShop')) || { value: 'auchan', text: 'Ашан' },
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
        setIsShowLinksSber(state, payload) {
            state.isShowLinksSber = payload;
            localStorage.setItem('isShowLinksSber', state.isShowLinksSber);
        },
        setSelectedShop(state, payload) {
            state.selectedShop = payload;
            localStorage.setItem('selectedShop', JSON.stringify(state.selectedShop));
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
            getAllRecipes()
                .then((response) => {
                    // console.log('recipes', response.data.recipes);
                    const recipes = response.data.recipes.reverse().filter((item) => item.title !== 'template_title');
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
