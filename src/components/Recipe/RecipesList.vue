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
                        v-model.trim="search"
                        append-icon="mdi-magnify"
                        :label="'Поиск по ' + getRecipesCount() + ' рецептам'"
                        single-line
                        @input="onSearchInput()"
                    ></v-text-field>
                </div>
            </v-col>
        </v-row>
        <FilterByNature @filterByNature="onFilterByNature" />
        <FilterByFeature @filterByFeature="onFilterByFeature" />
        <FilterBySeason @filterBySeason="onFilterBySeason" />
        <div class="d-flex justify-space-between">
            <div class="d-flex justify-start">
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
            </div>
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
                            :src="'https://ladyvamp.github.io/vue-my-cookbook/recipe-images/' + item.id + '.jpg'"
                            height="200px"
                        >
                        </v-img>
                        <v-card-title>{{ item.title }}</v-card-title>
                    </router-link>
                    <v-card-text>
                        <IconNature :nature="item.nature" />
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
import IconNature from '@/components/Recipe/Icons/IconNature.vue';
import IconFeature from '@/components/Recipe/Icons/IconFeature.vue';
import IconSeason from '@/components/Recipe/Icons/IconSeason.vue';
import { mapActions, mapGetters } from 'vuex';
import FilterByNature from '@/components/Recipe/Filters/FilterByNature.vue';
import FilterByFeature from '@/components/Recipe/Filters/FilterByFeature.vue';
import FilterBySeason from '@/components/Recipe/Filters/FilterBySeason.vue';

export default {
    name: 'RecipesList',
    components: { IconNature, IconFeature, IconSeason, FilterByNature, FilterByFeature, FilterBySeason },
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
        onFilterByNature(selectedNature) {
            if (selectedNature === 'all') {
                this.showAllRecipes();
            } else {
                this.filteredList = this.getAllRecipes().filter((recipe) => recipe.nature === selectedNature);
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
