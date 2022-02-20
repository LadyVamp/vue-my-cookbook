<template>
    <div v-if="recipe" class="d-flex flex-column mb-4">
        <BackButton />
        <h2 class="primary--text">{{ recipe.title }}</h2>
        <v-row>
            <v-col cols="12" sm="6" md="4">
                <v-img
                    :src="
                        recipe.imageLink
                            ? recipe.imageLink
                            : 'https://sun9-30.userapi.com/impg/Z6fkeDwvqVVJMW8lviOyW1XyryvE90wVDnSDqw/XJRUwyS8L2s.jpg?size=380x300&quality=96&sign=93e6cf0b8c57ca7ad2c2608c01b4377a'
                    "
                    height="250px"
                >
                </v-img>
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
            <v-col sm="6" md="8" class="hidden-sm-and-down">
                <v-row>
                    <v-col cols="4">
                        <v-switch
                            v-model="isShowLinks"
                            label="Показать ссылки на продукты в Сбермаркете"
                        ></v-switch>
                        <div v-if="isShowLinks">
                            <v-select
                                v-if="isShowLinks"
                                label="Магазин"
                                v-model="selectedShop"
                                :items="shopOptions"
                                item-value="value"
                                item-text="text"
                                return-object
                            >
                            </v-select>
                            <v-select
                                label="Сортировка"
                                v-model="selectedSort"
                                :items="sortOptions"
                                item-value="value"
                                item-text="text"
                                return-object
                            >
                            </v-select>
                            <v-switch v-model="isDiscounted" label="Со скидкой"></v-switch>
                        </div>
                    </v-col>
                    <v-col cols="8">
                        <v-switch v-model="isShowPrintVersion" label="Версия для печати"></v-switch>
                        <RecipePrintVersion v-if="isShowPrintVersion" :recipe="recipe" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" class="my-4">
                <h3 class="secondary--text">Ингредиенты</h3>
                <p>{{ declinationNumberOfServings }}</p>
                <p v-if="recipe.note" class="secondary--text">
                    {{ recipe.note }}
                </p>
                <ul v-for="(value, name) in recipe.ingredients" :key="name">
                    <li>
                        <span v-if="!isShowLinks">{{ name }}</span>
                        <a v-else :href="linkToProductInShop(name)" target="_blank">{{ name }} </a>
                        – {{ value }}
                    </li>
                </ul>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" class="my-4">
                <h3 class="secondary--text">Приготовление</h3>
                <ul>
                    <li v-for="(item, index) in recipe.steps" :key="item.key">
                        {{ index }}. {{ item }}
                    </li>
                </ul>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import IconStaple from '@/components/Recipe/Icons/IconStaple';
import IconFeature from '@/components/Recipe/Icons/IconFeature';
import BackButton from '@/components/Buttons/BackButton';
import { mapActions } from 'vuex';
import RecipePrintVersion from '@/components/Recipe/RecipePrintVersion';

export default {
    name: 'RecipeDetails',
    components: { IconStaple, IconFeature, BackButton, RecipePrintVersion },
    data() {
        return {
            title: 'Default Title',
            isShowLinks: false,
            isShowPrintVersion: false,
            isDiscounted: false,
            shopOptions: [
                { value: 'auchan', text: 'Ашан' },
                { value: 'globus', text: 'Глобус' },
                { value: 'lenta', text: 'Лента' },
                { value: 'okey', text: 'Окей' },
                { value: 'vkusvill', text: 'Вкусвилл' },
            ],
            selectedShop: { value: 'auchan', text: 'Ашан' },
            sortOptions: [
                { value: 'popularity', text: 'По популярности' },
                { value: 'price_asc', text: 'Сначала дешевые' },
                { value: 'price_desc', text: 'Сначала дорогие' },
                { value: 'unit_price_asc', text: 'Выгоднее по весу' },
            ],
            selectedSort: { value: 'unit_price_asc', text: 'Выгоднее по весу' },
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
                return servings <= 4 ? servings + ' порции' : servings + ' порций';
            } else {
                return 'Неожиданное количество порций!';
            }
        },
    },
    mounted() {
        this.fetchData();
    },
    updated() {
        this.title = this.recipe.title;
    },
    methods: {
        ...mapActions(['fetchRecipes']),
        fetchData() {
            this.fetchRecipes(this.$route.params.id);
        },
        linkToProductInShop(ingredient) {
            const discounted = this.isDiscounted ? '&discounted=true' : '';
            const url =
                'https://sbermarket.ru/' +
                `${this.selectedShop.value}` +
                '/search?keywords=' +
                `${ingredient}` +
                `&sort=` +
                `${this.selectedSort.value}` +
                discounted;
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

<style lang="scss"></style>
