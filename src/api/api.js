import axios from 'axios';

const recipes = import.meta.env.BASE_URL + 'recipes.json';

export async function getAllRecipes() {
    try {
        const response = await axios.get(recipes);
        return response;
    } catch (e) {
        console.error(e);
    }
}
