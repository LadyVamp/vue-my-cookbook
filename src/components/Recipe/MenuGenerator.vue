<template>
    <v-container fluid>
        <h2 class="secondary--text">Generator</h2>
        <v-row v-if="getLoading() === false">
            <v-col>
                <BaseButton
                    :label="'generate'"
                    :icon="'mdi-auto-fix'"
                    :color="'secondary'"
                    @click.native="generate"
                />
            </v-col>
        </v-row>
        <div v-else>
            <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>
        <div v-if="weekMenu">
            <v-data-table :headers="headers" :items="weekMenu" :hide-default-footer="true">
                <template v-slot:[`item.meals`]="{ item }">
                    <div v-if="item.lunch">
                        <router-link
                            :class="getRecipeBackground(item.lunch.staple)"
                            v-if="item.lunch.id"
                            :to="{
                                name: 'RecipeDetails',
                                params: { id: item.lunch.id },
                            }"
                        >
                            {{ item.lunch.title }}
                        </router-link>
                    </div>
                    <div v-if="item.dinner">
                        <router-link
                            :class="getRecipeBackground(item.dinner.staple)"
                            v-if="item.dinner.id"
                            :to="{
                                name: 'RecipeDetails',
                                params: { id: item.dinner.id },
                            }"
                        >
                            {{ item.dinner.title }}
                        </router-link>
                    </div>
                </template>
                <template v-slot:[`item.cook`]="{ item }">
                    <div v-if="item.cook1">
                        <router-link
                            :class="getRecipeBackground(item.cook1.staple)"
                            v-if="item.cook1.id"
                            :to="{
                                name: 'RecipeDetails',
                                params: { id: item.cook1.id },
                            }"
                        >
                            {{ item.cook1.title }}
                        </router-link>
                    </div>
                    <div v-if="item.cook2">
                        <router-link
                            :class="getRecipeBackground(item.cook2.staple)"
                            v-if="item.cook2.id"
                            :to="{
                                name: 'RecipeDetails',
                                params: { id: item.cook2.id },
                            }"
                        >
                            {{ item.cook2.title }}
                        </router-link>
                    </div>
                </template>
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
import BaseButton from '@/components/Buttons/BaseButton';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        BaseButton,
    },
    data() {
        return {
            allRecipes: [],
            headers: [
                { text: 'День недели', value: 'dayOfWeek' },
                { text: 'Обед/ужин', value: 'meals' },
                { text: 'Готовим вечером', value: 'cook' },
            ],
            weekMenu: [
                {
                    dayOfWeek: 'Mon',
                    lunch: 'sixServings',
                    dinner: 'notFast',
                },
                {
                    dayOfWeek: 'Tue',
                    lunch: 'sixServings',
                    dinner: 'notFast',
                },
                {
                    dayOfWeek: 'Wed',
                    lunch: 'sixServings',
                    dinner: 'fast4ServingsDinner',
                    cook1: 'fast4ServingsLunch',
                    cook2: 'fast4ServingsDinner',
                },
                {
                    dayOfWeek: 'Thu',
                    lunch: 'fast4ServingsLunch',
                    dinner: 'fast4ServingsDinner',
                },
                {
                    dayOfWeek: 'Fri',
                    lunch: 'fast4ServingsLunch',
                    dinner: 'Пельмени',
                },
                {
                    dayOfWeek: 'Sat',
                },
                {
                    dayOfWeek: 'Sun',
                },
            ],
            bgStaples: [
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
    mounted() {
        if (this.allRecipes.length === 0) {
            this.fetchRecipes();
        }
    },
    updated() {
        if (this.allRecipes.length === 0) {
            this.showAllRecipes();
        }
    },
    methods: {
        ...mapActions(['fetchRecipes']),
        ...mapGetters(['getAllRecipes', 'getLoading']),

        showAllRecipes() {
            this.allRecipes = this.getAllRecipes();
        },
        generate() {
            this.sixServings();
            this.notFast();
            this.fast4ServingsLunch();
            this.fast4ServingsDinner();
            this.fast2Servings();
        },
        /**
         * 6 порций, обед пн-вт-ср
         */
        sixServings() {
            let filtered = this.allRecipes.filter((item) => item.servings === 6);
            let randomDish = filtered[Math.floor(Math.random() * filtered.length)];
            this.weekMenu[0].lunch = this.weekMenu[1].lunch = this.weekMenu[2].lunch = randomDish;
            return randomDish;
        },
        /**
         * Не быстрый рецепт, ужин пн-вт
         */
        notFast() {
            let filtered = this.allRecipes.filter((item) => item.feature !== 'fast');
            let randomDish = filtered[Math.floor(Math.random() * filtered.length)];
            this.weekMenu[0].dinner = this.weekMenu[1].dinner = randomDish;
            return randomDish;
        },
        /**
         * Быстрый, 4 порции, мясо или овощи, обед чт-пт (готовить в среду)
         */
        fast4ServingsLunch() {
            let filtered = this.allRecipes
                .filter((item) => item.feature === 'fast')
                .filter((item) => item.servings === 4)
                .filter((item) => item.staple === 'meat' || item.staple === 'vegetable');
            let randomDish = filtered[Math.floor(Math.random() * filtered.length)];
            this.weekMenu[2].cook1 = this.weekMenu[3].lunch = this.weekMenu[4].lunch = randomDish;
            return randomDish;
        },
        /**
         * Быстрый, 4 порции, курица или рыба, ужин ср-чт (готовить в среду)
         */
        fast4ServingsDinner() {
            let filtered = this.allRecipes
                .filter((item) => item.feature === 'fast')
                .filter((item) => item.servings === 4)
                .filter((item) => item.staple === 'bird' || item.staple === 'fish');
            let randomDish = filtered[Math.floor(Math.random() * filtered.length)];
            this.weekMenu[2].cook2 = this.weekMenu[2].dinner = this.weekMenu[3].dinner = randomDish;
            return randomDish;
        },
        /**
         * Быстрый, 2 порции, ужин пт
         */
        fast2Servings() {
            let filtered = this.allRecipes
                .filter((item) => item.feature === 'fast')
                .filter((item) => item.servings === 2);
            let randomDish = filtered[Math.floor(Math.random() * filtered.length)];
            this.weekMenu[4].dinner = randomDish;
            return randomDish;
        },
        getRecipeBackground(staple) {
            return this.bgStaples.find((item) => item.key === staple).bg;
        },
    },
};
</script>

<style scoped>
a {
    padding: 2px 5px;
    color: black;
}
</style>
