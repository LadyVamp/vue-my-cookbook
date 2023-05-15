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
                <IconSeason :season="recipe.season" />
                <v-icon v-if="recipe.isDiet" color="blue-grey darken-2" title="Диетическое"> mdi-dumbbell </v-icon>
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
                            v-model="isShowLinksSber"
                            label="Показать ссылки на продукты в Сбермаркете"
                            :disabled="isShowLinksVprok"
                        ></v-switch>
                        <div v-if="isShowLinksSber && !isShowLinksVprok">
                            <v-select
                                v-if="isShowLinksSber"
                                v-model="selectedShop"
                                label="Магазин"
                                :items="shops"
                                item-value="value"
                                item-text="text"
                                return-object
                            >
                            </v-select>
                            <v-select
                                v-model="selectedSort"
                                label="Сортировка"
                                :items="sortOptions"
                                item-value="value"
                                item-text="text"
                                return-object
                            >
                            </v-select>
                            <v-switch v-model="isDiscounted" label="Со скидкой"></v-switch>
                        </div>
                    </v-col>
                    <v-col cols="4">
                        <v-switch
                            v-model="isShowLinksVprok"
                            label="Показать ссылки на продукты в Впрок"
                            :disabled="isShowLinksSber"
                        ></v-switch>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" class="my-4">
                <v-row>
                    <v-col>
                        <h3 class="secondary--text">Ингредиенты</h3>
                    </v-col>
                    <v-col>
                        <v-btn
                            icon
                            color="secondary"
                            title="Скопировать список ингредиентов без специй"
                            @click="copyIngredients"
                        >
                            <v-icon>mdi-content-copy</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <p>{{ declinationNumberOfServings }}</p>
                <p v-if="recipe.note" class="secondary--text">
                    {{ recipe.note }}
                </p>
                <div v-if="!isShowLinksVprok">
                    <ul v-for="(value, name, idx) in recipe.ingredients" :key="idx">
                        <li>
                            <span v-if="!isShowLinksSber">{{ name }}</span>
                            <span v-if="name.includes('||') && isShowLinksSber">
                                <span v-for="(item, index) in name.split('||')" :key="index">
                                    <BaseLink :link="linkToProductInSber(item)" :label="item" />
                                </span>
                            </span>
                            <a
                                v-if="!name.includes('||') && isShowLinksSber"
                                :href="linkToProductInSber(name)"
                                target="_blank"
                                >{{ name }}
                            </a>
                            – {{ value }}
                        </li>
                    </ul>
                </div>
                <div v-if="!isShowLinksSber && isShowLinksVprok">
                    <ul v-for="(value, name, idx) in recipe.ingredients" :key="idx">
                        <li>
                            <span v-if="!isShowLinksVprok">{{ name }}</span>
                            <span v-if="name.includes('||') && isShowLinksVprok">
                                <span v-for="(item, index) in name.split('||')" :key="index">
                                    <BaseLink :link="linkToProductInVprok(item)" :label="item" />
                                </span>
                            </span>
                            <BaseLink
                                v-if="!name.includes('||') && isShowLinksVprok"
                                :link="linkToProductInVprok(name)"
                                :label="name"
                            />
                            – {{ value }}
                        </li>
                    </ul>
                </div>
                <div v-if="recipe.extra">
                    <h3 class="secondary--text mt-4">Дополнительно</h3>
                    <ul v-for="(value, name, idx) in recipe.extra" :key="idx">
                        <li>
                            <span v-if="!isShowLinksSber">{{ name }}</span>
                            <span v-if="name.includes('||') && isShowLinksSber">
                                <span v-if="name.includes('||') && isShowLinksSber">
                                    <span v-for="(item, index) in name.split('||')" :key="index">
                                        <BaseLink :link="linkToProductInSber(item)" :label="item" />
                                    </span>
                                </span>
                            </span>
                            <BaseLink
                                v-if="!name.includes('||') && isShowLinksSber"
                                :link="linkToProductInSber(name)"
                                :label="name"
                            />
                            – {{ value }}
                        </li>
                    </ul>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6" class="my-4">
                <h3 class="secondary--text">Приготовление</h3>
                <ul>
                    <li v-for="(item, index) in recipe.steps" :key="item.key">{{ index }}. {{ item }}</li>
                </ul>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import IconStaple from '@/components/Recipe/Icons/IconStaple';
import IconFeature from '@/components/Recipe/Icons/IconFeature';
import IconSeason from '@/components/Recipe/Icons/IconSeason';
import BackButton from '@/components/Buttons/BackButton';
import BaseLink from '@/components/Buttons/BaseLink';
import { mapActions } from 'vuex';
import shopList from '/src/assets/shops.js';

export default {
    name: 'RecipeDetails',
    components: { IconStaple, IconFeature, IconSeason, BackButton, BaseLink },
    data() {
        return {
            title: 'Default Title',
            isShowLinksSber: false,
            isShowLinksVprok: false,
            isDiscounted: false,
            selectedShop: { value: 'auchan', text: 'Ашан' },
            shops: [],
            selectedSort: { value: 'unit_price_asc', text: 'Выгоднее по весу' },
            sortOptions: [
                { value: 'popularity', text: 'По популярности' },
                { value: 'price_asc', text: 'Сначала дешевые' },
                { value: 'price_desc', text: 'Сначала дорогие' },
                { value: 'unit_price_asc', text: 'Выгоднее по весу' },
            ],
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
    watch: {
        $route() {
            this.fetchData();
        },
    },
    mounted() {
        this.loadShops();
        this.fetchData();
        this.isShowLinksSber = this.$store.state.recipeModule.isShowLinksSber;
        this.selectedShop = this.$store.state.recipeModule.selectedShop;
    },
    updated() {
        this.title = this.recipe.title;
    },
    methods: {
        ...mapActions(['fetchRecipes']),
        fetchData() {
            this.fetchRecipes(this.$route.params.id);
        },
        loadShops() {
            this.shops = shopList;
        },
        linkToProductInSber(ingredient) {
            const discounted = this.isDiscounted ? '&discounted=true' : '';
            const url =
                'https://sbermarket.ru/' +
                `${this.selectedShop.value}` +
                '/search?keywords=' +
                `${ingredient.trim()}` +
                `&sort=` +
                `${this.selectedSort.value}` +
                discounted;
            return url;
        },
        linkToProductInVprok(ingredient) {
            const url = 'https://www.vprok.ru/catalog/search?text=' + `${ingredient.trim()}`;
            return url;
        },
        copyIngredients() {
            const spices = [
                'Перец черный молотый',
                'Хмели-сунели',
                'Мускатный орех',
                'Паприка копченая',
                'Кориандр молотый',
                'Лавровый лист',
                'Перец душистый',
                'Смесь перцев',
                'Приправа Vegeta',
                'Приправа для мяса',
                'Паприка сладкая',
                'Приправа карри',
            ];
            const exceptSpices = Object.entries(this.recipe.ingredients).filter(([key]) => !spices.includes(key));
            const ingredientsExceptSpices = exceptSpices.map(([k, v]) => `${k} - ${v}`);
            this.copyToClipBoard(ingredientsExceptSpices.join(', '));
        },
        copyToClipBoard(textToCopy) {
            navigator.clipboard.writeText(textToCopy);
        },
    },
};
</script>

<style lang="scss"></style>
