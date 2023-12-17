<template>
    <div v-if="recipe" class="d-flex flex-column mb-4">
        <BackButton />
        <h2 class="primary--text">
            {{ recipe.title }}
            <v-btn icon color="secondary" title="Скопировать название рецепта" @click="copyToClipBoard(recipe.title)">
                <v-icon>mdi-content-copy</v-icon>
            </v-btn>
        </h2>
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
            </v-col>
            <v-col sm="6" md="8">
                <v-row>
                    <v-col v-if="!isMobile" md="6" lg="3">
                        <v-switch
                            v-model="isShowLinksSber"
                            label="Показать ссылки на Сбермаркет"
                            :disabled="isShowLinksVprok || isShowLinksMetro || isShowLinksLenta"
                        >
                        </v-switch>
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
                    <v-col v-if="!isMobile" md="6" lg="3">
                        <v-switch
                            v-model="isShowLinksVprok"
                            label="Показать ссылки на Впрок"
                            :disabled="isShowLinksSber || isShowLinksMetro || isShowLinksLenta"
                        ></v-switch>
                    </v-col>
                    <v-col v-if="!isMobile" md="6" lg="3">
                        <v-switch
                            v-model="isShowLinksMetro"
                            label="Показать ссылки на Метро"
                            :disabled="isShowLinksSber || isShowLinksVprok || isShowLinksLenta"
                        ></v-switch>
                    </v-col>
                    <v-col v-if="!isMobile" md="6" lg="3">
                        <v-switch
                            v-model="isShowLinksLenta"
                            label="Показать ссылки на Ленту"
                            :disabled="isShowLinksSber || isShowLinksVprok || isShowLinksMetro"
                        ></v-switch>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="6">
                <v-row>
                    <v-col>
                        <h3 class="secondary--text">Ингредиенты</h3>
                    </v-col>
                    <v-col v-if="isMobile" class="d-flex justify-end" md="6" lg="3">
                        <v-btn small fab outlined color="accent" @click="wakeLock">
                            <v-icon> mdi-sleep-off </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <p>{{ declinationNumberOfServings }}</p>
                <p v-if="recipe.note" class="secondary--text">
                    {{ recipe.note }}
                </p>
                <p v-if="recipe.time" class="secondary--text">Время приготовления: {{ recipe.time }} минут</p>
                <div v-if="!isShowLinksVprok && !isShowLinksMetro && !isShowLinksLenta">
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
                <div v-if="!isShowLinksSber && isShowLinksVprok && !isShowLinksLenta">
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
                <div v-if="isShowLinksMetro && !isShowLinksSber && !isShowLinksVprok && !isShowLinksLenta">
                    <ul v-for="(value, name, idx) in recipe.ingredients" :key="idx">
                        <li>
                            <span v-if="!isShowLinksMetro">{{ name }}</span>
                            <span v-if="name.includes('||') && isShowLinksMetro">
                                <span v-for="(item, index) in name.split('||')" :key="index">
                                    <BaseLink :link="linkToProductInMetro(item)" :label="item" />
                                </span>
                            </span>
                            <BaseLink
                                v-if="!name.includes('||') && isShowLinksMetro"
                                :link="linkToProductInMetro(name)"
                                :label="name"
                            />
                            – {{ value }}
                        </li>
                    </ul>
                </div>
                <div v-if="isShowLinksLenta && !isShowLinksMetro && !isShowLinksSber && !isShowLinksVprok">
                    <ul v-for="(value, name, idx) in recipe.ingredients" :key="idx">
                        <li>
                            <span v-if="!isShowLinksLenta">{{ name }}</span>
                            <span v-if="name.includes('||') && isShowLinksLenta">
                                <span v-for="(item, index) in name.split('||')" :key="index">
                                    <BaseLink :link="linkToProductInMetro(item)" :label="item" />
                                </span>
                            </span>
                            <BaseLink
                                v-if="!name.includes('||') && isShowLinksLenta"
                                :link="linkToProductInLenta(name)"
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
            <v-col cols="12" sm="6" class="my-2">
                <h3 class="secondary--text">Приготовление</h3>
                <ul>
                    <li v-for="(item, index) in recipe.steps" :key="item.key">{{ index }}. {{ item }}</li>
                </ul>
            </v-col>
        </v-row>
        <v-snackbar v-model="isShowSnackbar">
            {{ text }}
            <template v-slot:action="{ attrs }">
                <v-btn color="accent" text v-bind="attrs" @click="isShowSnackbar = false"> OK </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import shopList from '/src/assets/shops.js';
import BaseLink from '@/components/ui-components/BaseLink';
import BackButton from '@/components/ui-components/BackButton';
import IconStaple from '@/components/Recipe/Icons/IconStaple';
import IconFeature from '@/components/Recipe/Icons/IconFeature';
import IconSeason from '@/components/Recipe/Icons/IconSeason';

export default {
    name: 'RecipeDetails',
    components: { BackButton, BaseLink, IconStaple, IconFeature, IconSeason },
    data() {
        return {
            title: 'Default Title',
            isShowLinksSber: false,
            isShowLinksVprok: false,
            isShowLinksMetro: false,
            isShowLinksLenta: false,
            isDiscounted: false,
            isShowSnackbar: false,
            text: 'WakeLock активирован',
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
        isMobile() {
            return screen.width <= 760 ? true : false;
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
        linkToProductInMetro(ingredient) {
            const url = 'https://online.metro-cc.ru/search?q=' + `${ingredient.trim()}`;
            return url;
        },
        linkToProductInLenta(ingredient) {
            const url = 'https://moscow.online.lenta.com/search/' + `${ingredient.trim()}`;
            return url;
        },
        copyToClipBoard(textToCopy) {
            navigator.clipboard.writeText(textToCopy);
        },
        wakeLock() {
            const requestWakeLock = async () => {
                try {
                    const wakeLock = await navigator.wakeLock.request('screen');
                    console.log(wakeLock);
                } catch (err) {
                    console.log(err);
                }
            };
            requestWakeLock();
            this.isShowSnackbar = true;
        },
    },
};
</script>

<style lang="scss"></style>
