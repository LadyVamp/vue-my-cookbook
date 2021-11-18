<template>
    <RecipesList />
</template>

<script>
export default {
    components: {
        RecipesList: () => import("@/components/Recipe/RecipesList.vue"),
    },
};
</script>
