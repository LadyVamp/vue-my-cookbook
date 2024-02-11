<template>
    <router-link :class="getRecipeBackground(item.nature)" :to="`/recipe/${item.id}`">
        {{ item.title }}
    </router-link>
</template>

<script>
export default {
    name: 'RecipeLink',
    props: {
        item: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            bgNatures: [
                {
                    key: 'all',
                    bg: 'accent lighten-2',
                },
                {
                    key: 'vegetable',
                    bg: 'light-green darken-1',
                },
                {
                    key: 'bird',
                    bg: 'pink lighten-5',
                },
                {
                    key: 'meat',
                    bg: 'red lighten-2',
                },
                {
                    key: 'fish',
                    bg: 'blue lighten-2',
                },
                {
                    key: 'dairy',
                    bg: 'amber lighten-2',
                },
                {
                    key: 'dessert',
                    bg: 'lime darken-1',
                },
            ],
        };
    },
    methods: {
        getRecipeBackground(nature) {
            if (nature) {
                return this.bgNatures.find((item) => item.key === nature).bg;
            }
        },
    },
};
</script>

<style scoped>
a {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    padding: 2px 5px;
}
</style>
