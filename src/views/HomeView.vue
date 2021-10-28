<template>
    <RecipesList />
</template>

<script>
export default {
    components: {
        RecipesList: () => import("@/components/RecipesList.vue"),
    },
};
</script>
