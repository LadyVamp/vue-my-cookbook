<template>
    <v-container fluid>
        <v-row>
            <v-col class="d-flex justify-end">
                <div class="search_select">
                    <v-select
                        v-model="selected"
                        label="Поиск"
                        :items="options"
                        item-value="value"
                        item-text="text"
                        return-object
                    >
                    </v-select>
                </div>
                <div class="search_input">
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        :label="'Поиск по ' + getRecipesCount() + ' рецептам'"
                        single-line
                        @input="onSearchInput()"
                    ></v-text-field>
                </div>
            </v-col>
        </v-row>
        <FilterByStaple @filterByStaple="onFilterByStaple" />
        <FilterByFeature @filterByFeature="onFilterByFeature" />
        <FilterBySeason @filterBySeason="onFilterBySeason" />
        <div class="d-flex justify-space-between">
            <v-select
                v-model="selectedServingsNumber"
                label="Порций"
                :items="optionsServingsNumber"
                item-value="value"
                item-text="text"
                return-object
                class="servings_select"
                @change="onServingsNumberChange()"
            >
            </v-select>
            <div class="my-4">
                {{ filteredList.length }}
            </div>
        </div>
        <v-row v-if="getLoading() === false">
            <v-col v-for="item in filteredList" :key="item.id" cols="12" sm="6" md="4" xl="3">
                <v-card width="360px" height="360px">
                    <router-link
                        :to="{
                            name: 'RecipeDetails',
                            params: { id: item.id },
                        }"
                    >
                        <v-img
                            :src="
                                item.imageLink
                                    ? item.imageLink
                                    : 'https://sun9-30.userapi.com/impg/Z6fkeDwvqVVJMW8lviOyW1XyryvE90wVDnSDqw/XJRUwyS8L2s.jpg?size=380x300&quality=96&sign=93e6cf0b8c57ca7ad2c2608c01b4377a'
                            "
                            height="200px"
                        >
                        </v-img>
                        <v-card-title>{{ item.title }}</v-card-title>
                    </router-link>
                    <v-card-text>
                        <IconStaple :staple="item.staple" />
                        <IconFeature :feature="item.feature" />
                        <IconSeason :season="item.season" />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <div v-else>
            <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>
    </v-container>
</template>

<script>
import IconStaple from '@/components/Recipe/Icons/IconStaple';
import IconFeature from '@/components/Recipe/Icons/IconFeature';
import IconSeason from '@/components/Recipe/Icons/IconSeason';
import { mapActions, mapGetters } from 'vuex';
import FilterByStaple from '@/components/Recipe/Filters/FilterByStaple';
import FilterByFeature from '@/components/Recipe/Filters/FilterByFeature';
import FilterBySeason from '@/components/Recipe/Filters/FilterBySeason';

export default {
    name: 'RecipesList',
    components: { IconStaple, IconFeature, IconSeason, FilterByStaple, FilterByFeature, FilterBySeason },
    data() {
        return {
            filteredList: [],
            search: '',
            options: [
                { value: 'title', text: 'По названию' },
                { value: 'ingredients', text: 'По ингредиентам' },
            ],
            selected: { value: 'title', text: 'По названию' },
            optionsServingsNumber: [
                { value: null, text: 'Все' },
                { value: 2, text: '2' },
                { value: 4, text: '4' },
                { value: 6, text: '6' },
            ],
            selectedServingsNumber: { value: null, text: 'Все' },
        };
    },
    mounted() {
        if (this.filteredList.length === 0) {
            this.fetchRecipes();
        }
    },
    updated() {
        if (this.filteredList.length === 0 && this.search === '') {
            this.showAllRecipes();
        }
    },
    methods: {
        ...mapActions(['fetchRecipes']),
        ...mapGetters(['getAllRecipes', 'getRecipesCount', 'getLoading']),

        showAllRecipes() {
            this.filteredList = this.getAllRecipes();
        },
        onFilterByStaple(selectedStaple) {
            if (selectedStaple === 'all') {
                this.showAllRecipes();
            } else {
                this.filteredList = this.getAllRecipes().filter((recipe) => recipe.staple === selectedStaple);
            }
        },
        onFilterByFeature(selectedFeature) {
            if (selectedFeature === 'all') {
                this.showAllRecipes();
            } else {
                this.filteredList = this.getAllRecipes().filter((recipe) => recipe.feature === selectedFeature);
            }
        },
        onFilterBySeason(selectedSeason) {
            if (selectedSeason === 'all') {
                this.showAllRecipes();
            } else {
                this.filteredList = this.getAllRecipes().filter((recipe) => recipe.season === selectedSeason);
            }
        },
        onSearchInput() {
            const searchInput = this.search.toLowerCase();
            if (searchInput !== '' && this.selected.value === 'title') {
                this.filteredList = this.searchByTitle(searchInput);
            }
            if (searchInput !== '' && this.selected.value === 'ingredients') {
                this.filteredList = this.searchByIngredients(searchInput);
            }
        },
        searchByTitle(searchInput) {
            return this.getAllRecipes().filter((recipe) => recipe.title.toLowerCase().includes(searchInput));
        },
        searchByIngredients(searchInput) {
            const set = new Set();
            this.getAllRecipes().forEach((recipe) => {
                if (recipe.ingredients) {
                    Object.keys(recipe.ingredients).forEach((item) => {
                        if (item.toLowerCase().includes(searchInput)) {
                            set.add(recipe);
                        }
                    });
                }
            });
            return set;
        },
        onServingsNumberChange() {
            this.filteredList = this.getAllRecipes().filter(
                (recipe) => recipe.servings === this.selectedServingsNumber.value,
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.v-card__title {
    line-height: 1.1rem;
    word-break: normal;
}
.search_select {
    display: block;
    margin-right: 5px;
    width: 200px;
}
.search_input {
    width: 250px;
}
.servings_select {
    max-width: 100px;
}
</style>
