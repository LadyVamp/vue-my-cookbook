<template>
    <div class="home">
        <!-- <RecipesList :items="items" /> -->
        <RecipesList/>
    </div>
</template>

<script>
import recipesData from '@/assets/recipes.json';

export default {
    data() {
        return {
            items: recipesData.recipes,
        };
    },
    components: {
        RecipesList: () => import('@/components/RecipesList.vue'),
    },
};
</script>
