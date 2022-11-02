const axios = require('axios');

const recipes =
    'https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/f8952a75f067873b75d0c42bae0649cfa61d802e/recipes-2022-11-2.json';

export async function getAllRecipes() {
    try {
        const response = await axios.get(recipes);
        return response;
    } catch (e) {
        console.error(e);
    }
}
