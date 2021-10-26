<template>
    <div class="recipe">
        <div v-if="recipe" class="d-flex flex-column">
            <h2 class="primary--text">{{ recipe.title }}</h2>
            <v-img
                v-if="recipe.imageLink"
                :src="recipe.imageLink"
                height="300px"
                width="300px"
            >
            </v-img>
            <p>
                Ингредиенты: <br />
                {{ recipe.ingredients }}
            </p>
            <p>
                Шаги: <br />
                {{ recipe.steps }}
            </p>
            <p>
                <a :href="recipe.originalLink" target="_blank"
                    >Оригинальный рецепт</a
                >
            </p>
            <IconLabel :label="recipe.label" />
            <IconFeature :feature="recipe.feature" />
        </div>
    </div>
</template>

<script>
import IconLabel from "@/components/IconLabel";
import IconFeature from "@/components/IconFeature";
import { mapActions } from "vuex";

export default {
    name: "RecipeDetails",
    computed: {
        recipe() {
            return this.$store.getters.getCurrentRecipe;
        },
    },
    created() {
        this.fetchData();
    },
    methods: {
        ...mapActions(["fetchRecipes"]),
        fetchData() {
            this.fetchRecipes(this.$route.params.id);
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