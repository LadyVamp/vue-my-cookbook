<template>
    <v-container fluid>
        <h2 class="secondary--text">Список рецептов</h2>
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
import { mapActions, mapGetters } from 'vuex';
import FilterByStaple from '@/components/Recipe/Filters/FilterByStaple';
import FilterByFeature from '@/components/Recipe/Filters/FilterByFeature';

export default {
    name: 'RecipesList',
    components: { IconStaple, IconFeature, FilterByStaple, FilterByFeature },
    data() {
        return {
            search: '',
            options: [
                { value: 'title', text: 'По названию' },
                { value: 'ingredients', text: 'По ингредиентам' },
            ],
            selected: { value: 'title', text: 'По названию' },
            filteredList: [],
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
                this.filteredList = this.getAllRecipes().filter(
                    (recipe) => recipe.staple === selectedStaple,
                );
            }
        },
        onFilterByFeature(selectedFeature) {
            if (selectedFeature === 'all') {
                this.showAllRecipes();
            } else {
                this.filteredList = this.getAllRecipes().filter(
                    (recipe) => recipe.feature === selectedFeature,
                );
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
            return this.getAllRecipes().filter((recipe) =>
                recipe.title.toLowerCase().includes(searchInput),
            );
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
    },
};
</script>

<style lang="scss" scoped>
.v-card__title {
    line-height: 1.25rem;
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
</style>
