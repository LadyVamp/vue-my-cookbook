import axios from 'axios';

const recipes =
    'https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/2a36f0eaeab8fd84ffeeee11b494cd6ca2bbbaf6/recipes-2024-01-03.json';

export async function getAllRecipes() {
    try {
        const response = await axios.get(recipes);
        return response;
    } catch (e) {
        console.error(e);
    }
}
