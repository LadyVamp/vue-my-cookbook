import axios from 'axios';

const recipes =
    'https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/57f8497c8ade88433572f6c29868f78530847ec0/recipes-2024-01-07.json';

export async function getAllRecipes() {
    try {
        const response = await axios.get(recipes);
        return response;
    } catch (e) {
        console.error(e);
    }
}
