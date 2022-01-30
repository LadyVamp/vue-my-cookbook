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
            <table class="my-2">
                <thead>
                    <th>День недели</th>
                    <th class="meal">Обед/ужин</th>
                    <th>Готовим вечером</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Пн</td>
                        <td><RecipeLink :item="weekMenu[0].lunch" /></td>
                    </tr>
                    <tr>
                        <td>{{ nextDay(1) }}</td>
                        <td><RecipeLink :item="weekMenu[0].dinner" /></td>
                    </tr>
                    <tr>
                        <td>Вт</td>
                        <td><RecipeLink :item="weekMenu[1].lunch" /></td>
                    </tr>
                    <tr>
                        <td>{{ nextDay(2) }}</td>
                        <td><RecipeLink :item="weekMenu[1].dinner" /></td>
                    </tr>
                    <tr>
                        <td>Ср</td>
                        <td><RecipeLink :item="weekMenu[2].lunch" /></td>
                        <td><RecipeLink :item="weekMenu[2].cook1" /></td>
                    </tr>
                    <tr>
                        <td>{{ nextDay(3) }}</td>
                        <td><RecipeLink :item="weekMenu[2].dinner" /></td>
                        <td><RecipeLink :item="weekMenu[2].cook2" /></td>
                    </tr>
                    <tr>
                        <td>Чт</td>
                        <td><RecipeLink :item="weekMenu[3].lunch" /></td>
                    </tr>
                    <tr>
                        <td>{{ nextDay(4) }}</td>
                        <td><RecipeLink :item="weekMenu[3].dinner" /></td>
                    </tr>
                    <tr>
                        <td>Пт</td>
                        <td><RecipeLink :item="weekMenu[4].lunch" /></td>
                    </tr>
                    <tr>
                        <td>{{ nextDay(5) }}</td>
                        <td><RecipeLink :item="weekMenu[4].dinner" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseButton from '@/components/Buttons/BaseButton';
import RecipeLink from '@/components/Recipe/RecipeLink';

export default {
    components: {
        BaseButton,
        RecipeLink,
    },
    data() {
        return {
            recipesForGenerator: [],
            headers: [
                { text: 'День недели', value: 'dayOfWeek' },
                { text: 'Обед/ужин', value: 'meals' },
                { text: 'Готовим вечером', value: 'cook' },
            ],
            weekMenu: [
                {
                    dayOfWeek: 'Пн',
                    lunch: {},
                    dinner: {},
                },
                {
                    dayOfWeek: 'Вт',
                    lunch: {},
                    dinner: {},
                },
                {
                    dayOfWeek: 'Ср',
                    lunch: {},
                    dinner: {},
                    cook1: {},
                    cook2: {},
                },
                {
                    dayOfWeek: 'Чт',
                    lunch: {},
                    dinner: {},
                },
                {
                    dayOfWeek: 'Пт',
                    lunch: {},
                    dinner: {},
                },
            ],
        };
    },
    mounted() {
        if (this.recipesForGenerator.length === 0) {
            this.fetchRecipes();
        }
    },
    updated() {
        if (this.recipesForGenerator.length === 0) {
            this.getRecipesForGenerator();
        }
    },
    methods: {
        ...mapActions(['fetchRecipes']),
        ...mapGetters(['getAllRecipes', 'getLoading']),

        /**
         * Не пропускать в генератор рецепты с перечисленными id
         */
        getRecipesForGenerator() {
            const notLunchIds = ['Ris-pripusknoi', 'Shokoladnaya-kolbasa', 'Pashtet', 'Satsebeli'];
            this.recipesForGenerator = this.getAllRecipes().filter(
                (item) => !notLunchIds.includes(item.id),
            );
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
            let filtered = this.recipesForGenerator.filter((item) => item.servings === 6);
            let randomDish = filtered[Math.floor(Math.random() * filtered.length)];
            this.weekMenu[0].lunch = this.weekMenu[1].lunch = this.weekMenu[2].lunch = randomDish;
            return randomDish;
        },
        /**
         * Не быстрый, 4 порции, ужин пн-вт
         */
        notFast() {
            let filtered = this.recipesForGenerator
                .filter((item) => item.feature !== 'fast')
                .filter((item) => item.servings === 4);
            let randomDish = filtered[Math.floor(Math.random() * filtered.length)];
            this.weekMenu[0].dinner = this.weekMenu[1].dinner = randomDish;
            return randomDish;
        },
        /**
         * Быстрый, 4 порции, мясо или овощи, обед чт-пт (готовить в среду)
         */
        fast4ServingsLunch() {
            let filtered = this.recipesForGenerator
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
            let filtered = this.recipesForGenerator
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
            let filtered = this.recipesForGenerator
                .filter((item) => item.feature === 'fast')
                .filter((item) => item.servings === 2);
            let randomDish = filtered[Math.floor(Math.random() * filtered.length)];
            this.weekMenu[4].dinner = randomDish;
            return randomDish;
        },
        nextDay(num) {
            const today = new Date();
            today.setDate(today.getDate() + ((num + (7 - today.getDay())) % 7));
            let formatted = today.toLocaleDateString('ru-RU', { month: 'numeric', day: 'numeric' });
            return formatted;
        },
    },
};
</script>

<style scoped>
a {
    padding: 2px 5px;
    color: black;
}
.meal {
    width: 350px;
}
</style>
