<template>
    <div v-if="recipe" class="d-flex flex-column">
        <h2 class="primary--text">{{ recipe.title }}</h2>
        <div>
            <v-img
                v-if="recipe.imageLink"
                :src="recipe.imageLink"
                height="300px"
            >
            </v-img>
            <v-img
                v-else
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                class="white--text align-end"
                height="300px"
            >
            </v-img>
        </div>
        <div>
            <a :href="recipe.originalLink" target="_blank"
                >Оригинальный рецепт</a
            >
            <IconStaple :staple="recipe.staple" />
            <IconFeature :feature="recipe.feature" />
            <router-link
                v-if="recipe.feature.includes('combo')"
                :to="{
                    name: 'RecipeDetails',
                    params: { id: recipe.comboId },
                }"
				title="Открыть комбо-рецепт"
                >Комбо-рецепт
            </router-link>
        </div>
        <div class="my-4">
            <h3 class="secondary--text">Ингредиенты</h3>
            <div v-for="(value, name) in recipe.ingredients" :key="name">
                {{ name }} – {{ value }}
            </div>
        </div>
        <div class="my-4">
            <h3 class="secondary--text">Шаги</h3>
            <ol>
                <li v-for="item in recipe.steps" :key="item.key">
                    {{ item }}
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import IconStaple from "@/components/IconStaple";
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
    watch: {
        $route() {
            this.fetchData();
        },
    },
    components: {
        IconStaple,
        IconFeature,
    },
};
</script>


<style lang='scss'>
</style>