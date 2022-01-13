<template>
    <MenuGenerator />
</template>

<script>
export default {
    components: {
        MenuGenerator: () => import("@/components/Recipe/MenuGenerator.vue"),
    },
};
</script>
