const axios = require('axios');

const recipes =
    'https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/78a28ff699ba121e001963b4a2f129a755a7acf1/recipes-2023-08-14.json';

export async function getAllRecipes() {
    try {
        const response = await axios.get(recipes);
        return response;
    } catch (e) {
        console.error(e);
    }
}
