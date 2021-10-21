<template>
    <div>
        <div v-if="item" class="d-flex flex-column">
            <h2>{{ item.title }}</h2>
            <v-img
                v-if="item.imageLink"
                :src="item.imageLink"
                height="300px"
                width="300px"
            >
            </v-img>
            <p>
                Ингредиенты: <br />
                {{ item.ingredients }}
            </p>
            <p>
                Шаги: <br />
                {{ item.steps }}
            </p>
            <p>
                <a :href="item.originalLink" target="_blank"
                    >Оригинальный рецепт</a
                >
            </p>
            <IconLabel :label="item.label" />
            <IconFeature :feature="item.feature" />
        </div>
    </div>
</template>

<script>
import IconLabel from "@/components/IconLabel";
import IconFeature from "@/components/IconFeature";

export default {
    name: "RecipeDetails",
    mounted() {
        this.$store.dispatch("GET_RECIPE");
    },
    computed: {
        item() {
            const item = this.$store.getters.RECIPES.find(
                (item) => item.id === this.$route.params.id
            );
            console.log('item', item);
            return item;
        },
    },
    components: {
        IconLabel,
        IconFeature,
    },
};
</script>


<style lang='scss'>
</style>