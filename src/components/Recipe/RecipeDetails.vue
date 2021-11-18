<template>
    <div v-if="recipe" class="d-flex flex-column mb-4">
        <BackButton />
        <h2 class="primary--text">{{ recipe.title }}</h2>
        <v-row>
            <v-col cols="12" sm="6">
                <v-img
                    :src="
                        recipe.imageLink
                            ? recipe.imageLink
                            : 'https://cdn.vuetifyjs.com/images/cards/cooking.png'
                    "
                    class="white--text align-end"
                    height="300px"
                >
                </v-img>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <IconStaple :staple="recipe.staple" />
                <IconFeature :feature="recipe.feature" />
                <v-btn
                    v-if="recipe.feature.includes('combo')"
                    :to="{
                        name: 'RecipeDetails',
                        params: { id: recipe.comboId },
                    }"
                    color="primary"
                >
                    Открыть комбо-рецепт
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" class="my-4">
                <h3 class="secondary--text">Ингредиенты</h3>
                <p>{{ declinationNumberOfServings }}</p>
                <p v-if="recipe.note" class="secondary--text">
                    {{ recipe.note }}
                </p>
                <v-row>
                    <v-col cols="8">
                        <v-switch
                            v-model="isShowLinks"
                            label="Показать ссылки на продукты в Сбермаркете"
                        ></v-switch>
                    </v-col>
                    <v-col>
                        <div v-if="isShowLinks">
                            <v-select
                                v-if="isShowLinks"
                                label="Магазин"
                                v-model="selected"
                                :items="options"
                                item-value="value"
                                item-text="text"
                                return-object
                            >
                            </v-select>
                        </div>
                    </v-col>
                </v-row>
                <div v-if="isShowLinks">
                    <div
                        v-for="(value, name) in recipe.ingredients"
                        :key="name"
                    >
                        <a :href="linkToProductInStore(name)" target="_blank">{{
                            name
                        }}</a>
                        – {{ value }}
                    </div>
                </div>
                <div v-if="!isShowLinks">
                    <div
                        v-for="(value, name) in recipe.ingredients"
                        :key="name"
                    >
                        {{ name }} – {{ value }}
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" class="my-4">
                <h3 class="secondary--text">Шаги</h3>
                <ol>
                    <li v-for="item in recipe.steps" :key="item.key">
                        {{ item }}
                    </li>
                </ol>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import IconStaple from "@/components/Recipe/Icons/IconStaple";
import IconFeature from "@/components/Recipe/Icons/IconFeature";
import BackButton from "@/components/Buttons/BackButton";
import { mapActions } from "vuex";

export default {
    name: "RecipeDetails",
    components: { IconStaple, IconFeature, BackButton },
    data() {
        return {
            title: "Default Title",
            isShowLinks: false,
            options: [
                { value: "auchan", text: "Ашан" },
                { value: "lenta", text: "Лента" },
                { value: "globus", text: "Глобус" },
                { value: "okey", text: "Окей" },
                { value: "vkusvill", text: "Вкусвилл" },
            ],
            selected: { value: "auchan", text: "Ашан" },
        };
    },
    metaInfo() {
        return {
            title: this.title,
        };
    },
    computed: {
        recipe() {
            return this.$store.getters.getCurrentRecipe;
        },
        declinationNumberOfServings() {
            const servings = this.recipe.servings;
            if (servings <= 6) {
                return servings <= 4
                    ? servings + " порции"
                    : servings + " порций";
            } else {
                return "Неожиданное количество порций!";
            }
        },
    },
    created() {
        this.fetchData();
    },
    updated() {
        this.title = this.recipe.title;
    },
    methods: {
        ...mapActions(["fetchRecipes"]),
        fetchData() {
            this.fetchRecipes(this.$route.params.id);
        },
        linkToProductInStore(ingredient) {
            const url =
                "https://sbermarket.ru/" +
                `${this.selected.value}` +
                "/search?keywords=" +
                `${ingredient}`;
            return url;
        },
    },
    watch: {
        $route() {
            this.fetchData();
        },
    },
};
</script>


<style lang='scss'>
</style>