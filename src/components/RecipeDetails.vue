<template>
    <div class="recipe">
        <div v-if="loading" class="loading">Загрузка...</div>
        <div v-if="error" class="error">
            {{ error }}
        </div>
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
import axios from "axios";

export default {
    name: "RecipeDetails",
    data() {
        return {
            loading: false,
            recipe: null,
            error: null,
        };
    },
    created() {
        // загружаем данные, когда представление создано
        // и данные реактивно отслеживаются
        this.fetchData();
    },
    watch: {
        // при изменениях маршрута запрашиваем данные снова
        $route: "fetchData",
    },
    methods: {
        fetchData() {
            this.error = this.recipe = null;
            this.loading = true;
            // замените `getPost` используемым методом получения данных / доступа к API
            this.getRecipe(this.$route.params.id, (err, recipe) => {
                this.loading = false;
                if (err) {
                    this.error = err.toString();
                } else {
                    this.recipe = recipe;
                }
            });
        },
        getRecipe(id) {
            axios
                .get(
                    "https://gist.githubusercontent.com/LadyVamp/628c9e7aa0d9d26971bf9d512cef6bbe/raw/7d1e3a140e09a179c41df5103ceff39904088fb4/recipes-10-19.json"
                )
                .then((response) => {
                    this.recipe = response.data.recipes.find(
                        (item) => item.id === id
                    );
                    this.loading = false;
                })
                .catch((error) => {
                    console.error(error.message);
                });
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