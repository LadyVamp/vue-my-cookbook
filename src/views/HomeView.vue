<template>
    <div class="home">
        <RecipesList />
    </div>
</template>

<script>
export default {
    components: {
        RecipesList: () => import("@/components/RecipesList.vue"),
    },
};
</script>
