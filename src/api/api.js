const axios = require('axios');

const recipes =
    'https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/2fc3857f447f138730f1875920f01f553176ffd7/recipes-2023-02-26.json';

export async function getAllRecipes() {
    try {
        const response = await axios.get(recipes);
        return response;
    } catch (e) {
        console.error(e);
    }
}
